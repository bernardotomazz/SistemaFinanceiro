# Sistema Financeiro Pessoal

API REST desenvolvida com FastAPI para gerenciamento de receitas e despesas pessoais.

## Funcionalidades

- Cadastro de receitas e despesas
- Listagem de finanças
- Atualização de registros
- Exclusão de registros
- Filtros por:
  - Tipo
  - Categoria
  - Período de datas

- Dashboard financeiro com:
  - Total de receitas
  - Total de despesas
  - Saldo atual
  - Quantidade de receitas
  - Quantidade de despesas

## Tecnologias Utilizadas

- Python
- FastAPI
- SQLAlchemy
- SQLite
- Pydantic

## Estrutura do Projeto

```text
app/
├── database/
│   ├── connection.py
│   └── models.py
├── routes/
│   └── financa_routes.py
├── schemas/
│   └── financa.py
├── services/
│   └── financa_services.py
└── main.py
```

## Próximas Melhorias

- Autenticação com JWT
- PostgreSQL
- Frontend com React
- Dashboard com gráficos
- Paginação
