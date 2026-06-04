import DashboardCard from "../components/DashboardCard";
import { Link } from "react-router-dom";
import Movimentacao from "../components/Movimentacao";
import Categoria from "../components/Categoria";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

function Dashboard() {
  const movimentacoes = [
    {
      data: new Date("2026-05-30"),
      descricao: "Salário",
      categoria: "Trabalho",
      valor: 5000,
      tipo: "receita",
    },
    {
      data: new Date("2026-05-29"),
      descricao: "Mercado",
      categoria: "Alimentação",
      valor: 280.5,
      tipo: "despesa",
    },
    {
      data: new Date("2026-05-28"),
      descricao: "Freelance",
      categoria: "Projetos",
      valor: 850,
      tipo: "receita",
    },
    {
      data: new Date("2026-05-27"),
      descricao: "Netflix",
      categoria: "Assinaturas",
      valor: 39.9,
      tipo: "despesa",
    },
    {
      data: new Date("2026-05-26"),
      descricao: "Combustível",
      categoria: "Transporte",
      valor: 150,
      tipo: "despesa",
    },
  ];
  return (
    <div className="flex flex-col  mt-8 gap-8">
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
          {movimentacoes.map((movimentacao, index) => (
            <Movimentacao
              key={index}
              data={movimentacao.data}
              descricao={movimentacao.descricao}
              categoria={movimentacao.categoria}
              valor={movimentacao.valor}
              tipo={movimentacao.tipo}
            />
          ))}
        </div>
        <div className="bg-[#F8FAFC] shadow-sm border border-[#E2E8F0] col-span-1 p-4 flex flex-col justify-start rounded-xl gap-2">
          <p className="text-sm font-semibold text-[#374151] ml-2">
            SALDO DO MÊS
          </p>
          <p className="text-xl font-bold ml-2">MAIO/26</p>
          <div className="flex justify-between items-center ml-2 mt-2">
            <p>Receitas:</p>
            <p>R$ 5.000</p>
          </div>
          <div className="flex justify-between items-center ml-2 mt-2">
            <p>Despesas:</p>
            <p>R$ 2.000</p>
          </div>
          <div className="mt-4 border-b border-[#CBD5E1] border-dashed"></div>
          <div className="flex justify-between items-center ml-2 mt-2">
            <p>Resultado:</p>
            <p className="text-green-600 text-2xl font-bold">R$ 3.000</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-6 mx-16 xl:mx-25 gap-4">
        <div className="bg-[#F8FAFC] shadow-sm border border-[#E2E8F0] p-4 flex flex-col justify-start rounded-xl gap-2 lg:col-span-3">
          <p className="text-sm font-semibold text-[#374151] ml-2">
            GASTOS POR CATEGORIA
          </p>
          <Categoria nome="Alimentação" valor={50.0} percentual={80} />
          <Categoria nome="Teste" valor={28.0} percentual={20} />
        </div>
        <div className="bg-[#F8FAFC] shadow-sm border border-[#E2E8F0] p-4 flex flex-col justify-start rounded-xl gap-2 lg:col-span-3">
          <p className="text-sm font-semibold text-[#374151] ml-2">
            MAIORES DESPESAS
          </p>
          <div className="mt-2"></div>
          <div className="border border-transparent rounded-xl transition-colors duration-100 flex flex-row justify-between hover:border-1 hover:border-[#1f77adff] items-center">
            {" "}
            <div className=" rounded-sm flex flex-col gap-2 p-2">
              <p className="mx-6 text-sm text-[#374151]">PRINCIPAL</p>
              <p className="mx-6 text-xl font-semibold ">Notebook</p>
            </div>
            <p className="font-bold mx-6">R$ 500,00</p>
          </div>
          <div className="border border-transparent rounded-xl transition-colors duration-100 flex flex-row justify-between hover:border-1 hover:border-[#1f77adff] items-center">
            {" "}
            <div className=" rounded-sm flex flex-col gap-2 p-2">
              <p className="mx-6 text-sm text-[#374151]">PRINCIPAL</p>
              <p className="mx-6 text-xl font-semibold ">Notebook</p>
            </div>
            <p className="font-bold mx-6">R$ 500,00</p>
          </div>
          <div className="border border-transparent rounded-xl transition-colors duration-100 flex flex-row justify-between hover:border-1 hover:border-[#1f77adff] items-center">
            {" "}
            <div className=" rounded-sm flex flex-col gap-2 p-2">
              <p className="mx-6 text-sm text-[#374151]">PRINCIPAL</p>
              <p className="mx-6 text-xl font-semibold ">Notebook</p>
            </div>
            <p className="font-bold mx-6">R$ 500,00</p>
          </div>
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
