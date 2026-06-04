type MovimentacaoProps = {
  data: Date;
  descricao: string;
  categoria: string;
  valor: number;
  tipo: string;
};

function Movimentacao(props: MovimentacaoProps) {
  const compara = props.tipo == "receita";
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 border-b border-[#CBD5E1] p-4 items-center hover:bg-[#CAE9FF] transition-colors rounded-md cursor-pointer hover:shadow-sm">
      <p className="text-[#374151] font-light">
        {props.data.toLocaleDateString("pt-BR")}
      </p>
      <p className="font-bold">{props.descricao}</p>
      <p className="font-bold">{props.categoria}</p>
      <p className={`font-bold ${compara ? "text-green-600" : "text-red-600"}`}>
        {props.valor.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}
      </p>
    </div>
  );
}

export default Movimentacao;
