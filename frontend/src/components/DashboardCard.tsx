type DashboardCardProps = {
  tipo: string;
  valor: number;
  porcentagem: number;
};

function DashboardCard(props: DashboardCardProps) {
  const positiva = props.porcentagem >= 0;

  return (
    <div className="bg-[#F8FAFC]  shadow-sm border border-[#E2E8F0] p-4 flex flex-col justify-start rounded-xl gap-2 hover:bg-[#F1F5F9] transition-colors duration-100">
      <p className="text-sm font-normal text-[#374151]">{props.tipo}</p>
      <p className="text-4xl font-bold">
        {props.valor.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}
      </p>
      <p
        className={`text-md font-medium ${positiva ? "text-green-600" : "text-red-600"}`}
      >
        {positiva ? "+" : ""}
        {props.porcentagem.toFixed(1)}% esse mês
      </p>
    </div>
  );
}

export default DashboardCard;
