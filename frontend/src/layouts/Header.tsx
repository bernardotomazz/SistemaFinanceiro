import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="flex justify-between items-center bg-[#CAE9FF] h-16">
      <div>
        <Link to={"/"} className="cursor-pointer">
          <h1 className="text-[#1B4965] mx-2 text-xl font-semibold">
            Sistema Financeiro
          </h1>
        </Link>
      </div>
      <div className="flex flex-row mx-2 gap-2 md:gap-4 text-[#1B4965]">
        <Link to={"/"} className="cursor-pointer">
          <p>Dashboard</p>
        </Link>
        <Link to={"/financas"} className="cursor-pointer">
          <p>Finanças</p>
        </Link>
        <Link to={"/relatorios"} className="cursor-pointer">
          <p>Relatórios</p>
        </Link>
      </div>
    </div>
  );
}

export default Header;
