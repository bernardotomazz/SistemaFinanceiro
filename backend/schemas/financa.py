from pydantic import BaseModel
from datetime import date
from enum import Enum

class FinancaBase(BaseModel):
    descricao: str          # Nome ou descrição da finança
    valor: float            # Valor (float?)
    categoria: str          # Assinatura, salário ou algo do tipo
    tipo: str               # Receita ou Despesa
    data: date              # Data de criação/atualização

class FinancaCreate(FinancaBase):
    pass

class FinancaUpdate(FinancaBase):
    descricao: str | None = None
    valor: float | None = None
    categoria: str | None = None
    tipo: str | None = None
    data: date | None = None

class FinancaResponse(FinancaBase):
    id: int

    class Config:
        from_attributes = True


