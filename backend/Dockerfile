FROM python:3.10

# Set the working directory
WORKDIR /app

# Copy the requirements file
COPY requirements.txt .

# Install dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Copy the rest of the backend code
COPY . .

EXPOSE 8000
# Command to run the backend server
CMD ["uvicorn", "database_server:app", "--host", "0.0.0.0", "--port", "8000"]
