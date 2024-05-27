from database.db_utils import get_database_url, get_session
from database.models import BlogPost


def insert_sample_data():
    """Stub blog posts

    TODO: replace with API calls to gemini for blogs
    """

    db_url = get_database_url()
    session = get_session(db_url)

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
    insert_sample_data()
