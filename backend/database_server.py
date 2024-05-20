# main.py
from typing import List

import psycopg2
from fastapi import FastAPI, HTTPException
from psycopg2.extras import RealDictCursor
from pydantic import BaseModel

BLOGS_TABLE = "blog_posts"
# TODO: secrets file
conn = psycopg2.connect(
    dbname="blogs_database", user="postgres", password="", host="localhost"
)

app = FastAPI()


class Blog(BaseModel):
    """Type validation"""

    id: int
    title: str
    description: str
    content: str


@app.get("/blogs/", response_model=List[Blog])
def get_blogs():
    """Fetch all blog posts from the database"""
    with conn.cursor(cursor_factory=RealDictCursor) as cur:
        cur.execute(
            f"SELECT id, title, description, content " f"FROM {BLOGS_TABLE}"
        )  # noqa
        blogs = cur.fetchall()

    return [Blog(**blog) for blog in blogs]


@app.get("/blogs/{blog_id}", response_model=Blog)
def get_blog(blog_id: int):
    """Fetch a single blog post by its ID from the database"""
    with conn.cursor(cursor_factory=RealDictCursor) as cur:
        cur.execute(
            f"SELECT id, title, description, content FROM {BLOGS_TABLE} WHERE id = %s",  # noqa
            (blog_id,),
        )
        blog = cur.fetchone()

    if blog is None:
        raise HTTPException(status_code=404, detail="Blog not found")

    return Blog(**blog)
