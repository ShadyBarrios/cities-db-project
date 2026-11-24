# CS 236 Project – Phase 3

## Requirements
Python 3.12 <=
Java 11 <=
Docker
PostgreSQL

## Python Virtual Environment
If you forgot how to use venv just follow these steps

To create:
```bash
python -m venv venv
```

To activate:
```bash
source venv/bin/activate
```

Stay in venv while using pip and running python

## Python Dependencies

Install dependencies using
```bash
pip install -r requirements.txt
```

## Folder structure

```
project/
├── .gitignore
├── schema.sql
├── README.md
├── load_db.py (to create PostgreSQL)
├── .env
├── venv/ (optional?)
├── requirements.txt
└── data/
    ├── nyc-clean.csv
    ├── la-clean-csv
    ├── unified.csv
    └── parquets/
        ├── nyc-clean.parquet
        ├── la-clean.parquet
        └── unified.parquet
```
