from sqlalchemy import Column, Integer, String, Float, Date
from database.connection import Base

class Financa(Base):
    __tablename__ = "financas"

    id= Column(Integer, primary_key=True)
    descricao = Column(String, nullable=False)
    valor = Column(Float, nullable=False)
    categoria = Column(String, nullable=False)
    tipo = Column(String, nullable=False)
    data = Column(Date, nullable=False)
    

