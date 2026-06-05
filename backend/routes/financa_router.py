from fastapi import APIRouter
from schemas.financa import FinancaCreate, FinancaResponse, FinancaUpdate
from services.financa_services import lista_financas, busca_financa, cria_financa, deleta_financa, resumo_financas, atualiza_financa, ultimas_movimentacoes
from datetime import date

router = APIRouter()

#ENVIAR
#Envia uma finança nova para o banco de dados
@router.post("/financas", response_model=FinancaResponse)
def create_financa(dados: FinancaCreate):
    return cria_financa(dados)

#RECEBER
#Recebe a lista de finanças
@router.get("/financas", response_model=list[FinancaResponse])
def get_financas(
    tipo: str | None = None,
    categoria: str | None = None,
    data_inicio: date | None = None,
    data_fim: date | None = None
    ):
    return lista_financas(tipo, categoria, data_inicio, data_fim)

@router.get("financas/{id}", response_model=FinancaResponse)
def get_financas(id: int):
    return busca_financa(id)

#Recebe o a soma e o total de receitas e despesas e o saldo.
@router.get("/dashboard")
def get_resumo():
    return resumo_financas()

@router.get("/dashboard/ultimas-movimentacoes", response_model=list[FinancaResponse])
def get_ultimas_movimentacoes():
    return ultimas_movimentacoes()

#DELETAR
#Exclui uma finança pelo id
@router.delete("/financas/{id}")
def delete_financa(id: int):
    return deleta_financa(id)

#ATUALIZAR
#Atualiza os dados de uma finança pelo id
@router.put("/financas/{id}", response_model=FinancaResponse)
def update_financa(id: int, dados: FinancaUpdate):
    return atualiza_financa(id, dados)

