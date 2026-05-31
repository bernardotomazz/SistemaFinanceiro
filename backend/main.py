from fastapi import FastAPI
from routes.financa_router import router
from database.connection import Base, engine
from database.models import Financa


app = FastAPI()
app.include_router(router)

Base.metadata.create_all(bind=engine)
