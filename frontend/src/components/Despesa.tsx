type DespesaProps = {
  categoria: string;
  descricao: string;
  valor: number;
};

function Despesa(props: DespesaProps) {
  return (
    <div className="border border-transparent rounded-xl transition-colors duration-100 flex flex-row justify-between hover:border-1 hover:border-[#1f77adff] items-center cursor-pointer">
      {" "}
      <div className=" rounded-sm flex flex-col gap-2 p-2">
        <p className="mx-6 text-xs font-bold text-[#374151]">
          {props.categoria.toUpperCase()}
        </p>
        <p className="mx-6 text-xl font-semibold ">{props.descricao}</p>
      </div>
      <p className="font-bold mx-6">
        {props.valor.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}
      </p>
    </div>
  );
}

export default Despesa;
