import subprocess

from database import Session, engine
from database.models import Base, BlogPost
from sqlalchemy_utils import database_exists


def create_database(database_name: str):
    """Create postgres database

    TODO: This will be moved to some centralised non-local server
    at some point.
    """
    if not database_exists(engine.url):
        command = f"createdb {database_name}"

        try:
            subprocess.run(command, shell=True, check=True)
            print("Database created successfully.")
        except subprocess.CalledProcessError as e:
            print(f"Error creating database: {e}")
    else:
        print("Database already exists. Skipping creation.")


def create_tables():
    """Create db schema"""
    Base.metadata.create_all(engine)
    print("Tables created successfully.")


def insert_sample_data():
    """Stub blog posts

    TODO: replace with API calls to gemini for blogs
    """
    session = Session()

    # Sample blog data
    sample_posts = [
        {
            "title": "Blog Post 1",
            "description": "Short description of blog post 1",
            "content": "Full content of blog post 1.",
        },
        {
            "title": "Blog Post 2",
            "description": "Short description of blog post 2",
            "content": "Full content of blog post 2.",
        },
    ]

    for post_data in sample_posts:
        post = BlogPost(**post_data)
        session.add(post)

    session.commit()
    print("Sample data inserted successfully.")


if __name__ == "__main__":
    create_database("blogs_database")
    create_tables()
    insert_sample_data()
