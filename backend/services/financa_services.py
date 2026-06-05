from database.models import Financa
from database.connection import SessionLocal
from schemas.financa import FinancaCreate, FinancaUpdate
from fastapi import HTTPException
from sqlalchemy import func
from datetime import date

def cria_financa(dados: FinancaCreate):

    if dados.tipo:
        dados.tipo = dados.tipo.lower()

    if dados.categoria:
        dados.categoria = dados.categoria.lower()

    if dados.valor <= 0:
        raise HTTPException(
            status_code=400,
            detail="Valor inválido"
        )
    
    if dados.tipo not in ["receita", "despesa"]:
        raise HTTPException(
            status_code=400,
            detail="Tipo inválido"
        )


    financa = Financa(
        descricao=dados.descricao,
        valor=dados.valor,
        categoria=dados.categoria,
        tipo=dados.tipo,
        data=dados.data
    )

    db = SessionLocal()

    try:
        db.add(financa)
        db.commit()
        db.refresh(financa)
        return financa
    
    finally:
        db.close()

def lista_financas(
    tipo: str | None = None,
    categoria: str | None = None,
    data_inicio: date | None = None,
    data_fim: date | None = None
):
    db = SessionLocal()
    
    try:
        query = db.query(Financa)
        if tipo:
            tipo = tipo.lower()
            query = query.filter(Financa.tipo == tipo)

        if categoria:
            categoria = categoria.lower()
            query = query.filter(
                Financa.categoria == categoria
            )
        
        if data_inicio:
            query = query.filter(
                Financa.data >= data_inicio
            )
        if data_fim:
            query = query.filter(
                Financa.data <= data_fim
            )

        if data_inicio and data_fim:
            if data_inicio > data_fim:
                raise HTTPException(
                status_code=400,
                detail="Data inicial maior que data final"
            )

        return query.all()

    
    finally:
        db.close()

def busca_financa(id: int):
    db = SessionLocal()

    try:
        financa = (
            db.query(Financa)
            .filter(Financa.id == id)
            .first()
        )

        if not financa:
            raise HTTPException(
                status_code=404,
                detail="Finança não encontrada"
            )

        return financa

    finally:
        db.close()

def deleta_financa(id: int):
    db = SessionLocal()
    try:
        financa = (
            db.query(Financa)
            .filter(Financa.id == id)
            .first()
        )

        if not financa:
            raise HTTPException(
                status_code=404,
                detail="Finança não encontrada"
            )
        
        db.delete(financa)
        db.commit()

        return {
            "message": "Removido"
        }
    
    finally:
        db.close()

def atualiza_financa(id : int, dados: FinancaUpdate):
    db = SessionLocal()

    try:
        financa = (
            db.query(Financa)
            .filter(Financa.id == id)
            .first()
        )

        if not financa:
            raise HTTPException(status_code=404, detail="Finança não encontrada")

        # atualizações parciais e validações
        if dados.valor is not None:
            if dados.valor <= 0:
                raise HTTPException(status_code=400, detail="Valor inválido")
            financa.valor = dados.valor

        if dados.tipo is not None:
            tipo = dados.tipo.lower()
            if tipo not in ["receita", "despesa"]:
                raise HTTPException(status_code=400, detail="Tipo inválido")
            financa.tipo = tipo

        if dados.categoria is not None:
            financa.categoria = dados.categoria.lower()

        if dados.descricao is not None:
            financa.descricao = dados.descricao

        if dados.data is not None:
            financa.data = dados.data
        
        db.commit()
        db.refresh(financa)
        return financa

    except Exception:
        db.rollback()
        raise

    finally:
        db.close()


def resumo_financas():

    db = SessionLocal()

    try:
        receita = (
            db.query(func.sum(Financa.valor))
            .filter(Financa.tipo == "receita")
            .scalar()
        ) or 0

        despesa = (
            db.query(func.sum(Financa.valor))
            .filter(Financa.tipo == "despesa")
            .scalar()
        ) or 0

        receita_quant = (
            db.query(func.count(Financa.valor))
            .filter(Financa.tipo == "receita")
            .scalar()
        ) or 0

        despesa_quant = (
            db.query(func.count(Financa.valor))
            .filter(Financa.tipo == "despesa")
            .scalar()
        ) or 0

        saldo = receita - despesa
        
        return {
            "receita": receita,
            "despesa": despesa,
            "saldo": saldo,
            "quantidade_receita": receita_quant,
            "quantidade_despesa": despesa_quant
        }
            
        
    
    finally:
        db.close()

def ultimas_movimentacoes():

    db = SessionLocal()

    try:
        lista = (db.query(Financa)
            .order_by(Financa.data.desc(), Financa.id.desc())
            .limit(5)
            .all())
        
        return lista
    
    finally:
        db.close()