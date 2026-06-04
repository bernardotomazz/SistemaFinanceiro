type CategoriaProps = {
  nome: string;
  percentual: number;
  valor: number;
};

function Categoria(props: CategoriaProps) {
  function getColor(percentual) {
    const brilho = 25 + percentual * 0.45;
    return `hsl(203, 70%, ${brilho}%)`;
  }
  return (
    <div className="mx-2 mt-2 hover:bg-[#d6eeffff] p-2 cursor-pointer rounded-lg">
      <div className="flex justify-between font-bold mb-2">
        <p>{props.nome}</p>
        <p>
          {props.valor.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </p>
      </div>

      <div className="w-full h-2 bg-[#E2E8F0] rounded-full">
        <div
          className="h-2 rounded-full"
          style={{
            width: `${props.percentual}%`,
            backgroundColor: getColor(props.percentual),
          }}
        />
      </div>
    </div>
  );
}

export default Categoria;
