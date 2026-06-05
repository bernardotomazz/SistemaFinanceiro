import DashboardCard from "../components/DashboardCard";
import { Link } from "react-router-dom";
import Movimentacao from "../components/Movimentacao";
import Categoria from "../components/Categoria";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import Despesa from "../components/Despesa";
import { useEffect, useState } from "react";

type Financa = {
  id: number;
  descricao: string;
  valor: number;
  categoria: string;
  tipo: string;
  data: string;
};

type Resumo = {
  receita: number;
  despesa: number;
  saldo: number;
  quantidade_receita: number;
  quantidade_despesa: number;
};

function Dashboard() {
  const [movimentacoes, setMovimentacoes] = useState<Financa[]>([]);
  const [resumo, setResumo] = useState<Resumo>({
    receita: 0,
    despesa: 0,
    saldo: 0,
    quantidade_receita: 0,
    quantidade_despesa: 0,
  });
  //const [categorias, setCategorias] = useState<Financa[]>([]);
  //const [despesas, setDespesas] = useState<Financa[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function carregarDashboard() {
      try {
        const [movimentacoes, resumo /*, categorias, despesas*/] =
          await Promise.all([
            fetch("http://localhost:8000/dashboard/ultimas-movimentacoes"),
            fetch("http://localhost:8000/dashboard"),
            //fetch("http://localhost:8000/dashboard/gastos-categoria"),
            //fetch("http://localhost:8000/dashboard/maiores-despesas"),
          ]);
        if (!movimentacoes.ok || !resumo.ok) {
          throw new Error("Erro ao carregar dashboard");
        }
        setMovimentacoes(await movimentacoes.json());
        setResumo(await resumo.json());
        //setCategorias(await categorias.json());
        //setDespesas(await despesas.json());
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    carregarDashboard();
  }, []);

  return (
    <div className="flex flex-col  mt-8 gap-8">
      <div className="mx-16 xl:mx-25 flex justify-between">
        <h1 className="font-bold text-4xl">Dashboard</h1>
        <button className="bg-[#CAE9FF] font-semibold p-2 text-[#1B4965] rounded-lg cursor-pointer hover:bg-[#9ed1f5ff] transition-colors duration-200">
          Adicionar Finança
        </button>
      </div>
      <div className="grid grid-cols-1 mx-16 xl:mx-25 lg:grid-cols-3 gap-4">
        <Link to={"/financas"} className="cursor-pointer hover:shadow-sm">
          <DashboardCard
            tipo={"SALDO TOTAL"}
            valor={24.9}
            porcentagem={+2.4}
            color="#1F4E6D"
          />
        </Link>

        <Link
          to={"/financas?tipo=receita"}
          className="cursor-pointer hover:shadow-sm"
        >
          <DashboardCard
            tipo={"RECEITAS TOTAL"}
            valor={40.0}
            porcentagem={+1.8}
          />
        </Link>
        <Link
          to={"/financas?tipo=despesa"}
          className="cursor-pointer hover:shadow-sm"
        >
          <DashboardCard
            tipo={"DESPESAS TOTAL"}
            valor={12.0}
            porcentagem={-1.8}
          />
        </Link>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 mx-16 xl:mx-25 gap-4">
        <div className="bg-[#F8FAFC] shadow-sm border border-[#E2E8F0] p-4 flex flex-col justify-start rounded-xl gap-2 lg:col-span-2">
          <p className="text-sm font-semibold text-[#374151]">
            ÚLTIMAS MOVIMENTAÇÕES
          </p>
          {loading ? (
            <div className="flex justify-center items-center py-16">
              <div className="w-8 h-8 border-4 border-[#CAE9FF] border-t-[#1B4965] rounded-full animate-spin"></div>
            </div>
          ) : movimentacoes.length === 0 ? (
            <p>Nenhuma movimentação encontrada.</p>
          ) : (
            movimentacoes.map((movimentacao) => (
              <Movimentacao
                key={movimentacao.id}
                data={new Date(movimentacao.data)}
                descricao={movimentacao.descricao}
                categoria={movimentacao.categoria}
                valor={movimentacao.valor}
                tipo={movimentacao.tipo}
              />
            ))
          )}
        </div>
        <div className="bg-[#F8FAFC] shadow-sm border border-[#E2E8F0] col-span-1 p-4 flex flex-col justify-start rounded-xl gap-2">
          <p className="text-sm font-semibold text-[#374151] ml-2">
            SALDO DO MÊS
          </p>
          {loading ? (
            <div className="flex justify-center items-center py-16">
              <div className="w-8 h-8 border-4 border-[#CAE9FF] border-t-[#1B4965] rounded-full animate-spin"></div>
            </div>
          ) : (
            <>
              <p className="text-xl font-bold ml-2">MAIO/26</p>
              <div className="flex justify-between items-center ml-2 mt-2">
                <p>Receitas:</p>

                <p>
                  {resumo.receita.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </p>
              </div>
              <div className="flex justify-between items-center ml-2 mt-2">
                <p>Despesas:</p>

                <p>
                  {resumo.despesa.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </p>
              </div>
              <div className="mt-4 border-b border-[#CBD5E1] border-dashed"></div>
              <div className="flex justify-between items-center ml-2 mt-2">
                <p>Resultado:</p>
                <p className="text-green-600 text-2xl font-bold">
                  {resumo.saldo.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </p>
              </div>
            </>
          )}
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-6 mx-16 xl:mx-25 gap-4">
        <div className="bg-[#F8FAFC] shadow-sm border border-[#E2E8F0] p-4 flex flex-col  rounded-xl gap-2 lg:col-span-3">
          <p className="text-sm font-semibold text-[#374151] ml-2">
            GASTOS POR CATEGORIA
          </p>
          <div className="">
            <Categoria nome="Alimentação" valor={50.0} percentual={80} />
            <Categoria nome="Teste" valor={28.0} percentual={20} />
          </div>
        </div>
        <div className="bg-[#F8FAFC] shadow-sm border border-[#E2E8F0] p-4 flex flex-col justify-start rounded-xl gap-2 lg:col-span-3">
          <p className="text-sm font-semibold text-[#374151] ml-2">
            MAIORES DESPESAS
          </p>
          <div className="mt-2"></div>
          <Despesa descricao="Notebook" categoria="TECNOLOGIA" valor={800.25} />
          <Despesa descricao="Notebook" categoria="TECNOLOGIA" valor={800.25} />
          <Despesa descricao="Notebook" categoria="TECNOLOGIA" valor={800.25} />
        </div>
      </div>
      <div className="mt-10 w-full bg-[#CAE9FF] flex flex-col gap-2 items-center justify-center p-8">
        <p>Sistema Financeiro Pessoal produzido por Bernardo Tomaz</p>
        <div className="flex gap-6 text-xl">
          <a
            href="https://www.linkedin.com/in/bernardo-tomaz-santos/"
            className=""
          >
            <FaLinkedinIn />
          </a>
          <a href="https://github.com/bernardotomazz">
            <FaGithub />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
