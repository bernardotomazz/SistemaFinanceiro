import DashboardCard from "../components/DashboardCard";
import { Link } from "react-router-dom";

function Dashboard() {
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
          <div className="grid grid-cols-1 md:grid-cols-4 border-b border-[#CBD5E1] mt-2 p-4 items-center hover:bg-[#F1F5F9] transition-colors rounded-md cursor-pointer">
            <p className="text-[#374151] font-light">30/05</p>
            <p className="font-bold">Salário</p>
            <p className="font-bold">Trabalho</p>
            <p className="text-green-600 font-bold">R$ 5000,00</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 border-b border-[#CBD5E1] mt-2 p-4 items-center hover:bg-[#F1F5F9] transition-colors rounded-md cursor-pointer">
            <p className="text-[#374151] font-light">29/05</p>
            <p className="font-bold">Salário</p>
            <p className="font-bold">Trabalho</p>
            <p className="text-red-600 font-bold">R$ 280,00</p>
          </div>
        </div>
        <div className="bg-[#F8FAFC] shadow-sm border border-[#E2E8F0] col-span-1 p-4 flex flex-col justify-start rounded-xl gap-2">
          <p className="text-sm font-semibold text-[#374151] ml-2 mt-2">
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
    </div>
  );
}

export default Dashboard;
