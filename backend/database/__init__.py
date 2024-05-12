"""Setup postgres engine."""
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

DB_USER = "postgres"
DB_PASSWORD = ""
DB_HOST = "localhost"
DB_PORT = "5432"
DB_NAME = "blog_database"

DATABASE_URI = (
    f"postgresql://{DB_USER}:{DB_PASSWORD}@{DB_HOST}:{DB_PORT}/{DB_NAME}"  # noqa
)

engine = create_engine(DATABASE_URI)

Session = sessionmaker(bind=engine)
