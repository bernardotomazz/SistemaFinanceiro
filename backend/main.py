from fastapi import FastAPI
from routes.financa_router import router
from database.connection import Base, engine
from fastapi.middleware.cors import CORSMiddleware


app = FastAPI()
app.include_router(router)
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
Base.metadata.create_all(bind=engine)
