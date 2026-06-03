import DashboardCard from "../components/DashboardCard";
import { Link } from "react-router-dom";
import Movimentacao from "../components/Movimentacao";

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
    <div className="flex flex-col mx-10 lg:mx-20 mt-8 gap-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <Link to={"/financas"} className="cursor-pointer hover:shadow-sm">
          <DashboardCard tipo={"SALDO TOTAL"} valor={24.9} porcentagem={+2.4} />
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
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
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
      <div className="grid grid-cols-1 lg:grid-cols-6 gap-4">
        <div className="bg-[#F8FAFC] shadow-sm border border-[#E2E8F0] p-4 flex flex-col justify-start rounded-xl gap-2 lg:col-span-3">
          <p className="text-sm font-semibold text-[#374151] ml-2">
            GASTOS POR CATEGORIA
          </p>
          <div className="flex justify-between mx-2 mt-2 font-bold">
            <p>Alimentação</p>
            <p>R$ 500,00</p>
          </div>
        </div>
        <div className="bg-[#F8FAFC] shadow-sm border border-[#E2E8F0] p-4 flex flex-col justify-start rounded-xl gap-2 lg:col-span-3">
          <p className="text-sm font-semibold text-[#374151] ml-2">
            MAIORES DESPESAS
          </p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
