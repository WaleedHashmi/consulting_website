import os

from database.models import Base
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker


def get_database_url():
    db_user = os.getenv("POSTGRES_USER", "postgres")
    db_pass = os.getenv("POSTGRES_PASSWORD", "postgres")
    db_host = os.getenv("POSTGRES_HOST", "postgres")
    db_port = os.getenv("POSTGRES_PORT", "5432")
    db_name = os.getenv("POSTGRES_DB", "blogs_database")
    return f"postgresql://{db_user}:{db_pass}@{db_host}:{db_port}/{db_name}"


def setup_database(url):
    """
    Creates database engine, initializes tables if they don't exist,
    and returns a sessionmaker.
    """
    engine = create_engine(url)
    Base.metadata.create_all(engine)
    return sessionmaker(bind=engine)


def get_session(url):
    """
    Get a new session from the session factory.
    """
    session = setup_database(url)
    return session()
