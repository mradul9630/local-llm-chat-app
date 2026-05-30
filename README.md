# Local LLM Chat Application

A local AI-powered chatbot built using FastAPI, Ollama, and open-source Large Language Models (LLMs). The application allows users to interact with a locally running LLM through a simple web interface, ensuring privacy and offline accessibility without relying on cloud-based AI services.

## Features

* Local AI chatbot powered by Ollama and Llama 3
* FastAPI backend for handling API requests
* Interactive web interface using HTML, CSS, and JavaScript
* Real-time chat responses
* REST API architecture
* Fully local inference with no external API costs
* Git and GitHub version control integration
* Docker-ready project structure for future deployment

## Tech Stack

### Backend

* Python
* FastAPI
* Uvicorn

### AI & Generative AI

* Ollama
* Llama 3
* Open Source LLMs

### Frontend

* HTML
* CSS
* JavaScript

### DevOps & Tools

* Git
* GitHub
* Docker (planned)
* VS Code

## Project Structure

```text
Local-LLM-Chat/
│
├── app.py
├── Dockerfile
├── requirements.txt
├── .gitignore
│
├── templates/
│   └── index.html
│
├── static/
│   ├── style.css
│   └── script.js
│
└── vectorstore/
```

## Installation

### Clone Repository

```bash
git clone https://github.com/mradul9630/local-llm-chat-app.git
cd local-llm-chat-app
```

### Create Virtual Environment

```bash
python -m venv venv
```

### Activate Virtual Environment

Windows:

```bash
venv\Scripts\activate
```

### Install Dependencies

```bash
pip install -r requirements.txt
```

## Install Ollama

Download and install Ollama from:

https://ollama.com

Pull the Llama 3 model:

```bash
ollama pull llama3
```

Verify installation:

```bash
ollama run llama3
```

## Run the Application

Start the FastAPI server:

```bash
uvicorn app:app --reload
```

Open your browser:

```text
http://127.0.0.1:8000
```

## API Endpoint

### POST /chat

Request:

```json
{
  "question": "What is Artificial Intelligence?"
}
```

Response:

```json
{
  "response": "Artificial Intelligence (AI) is..."
}
```

## Future Enhancements

* PDF Question Answering
* Retrieval-Augmented Generation (RAG)
* ChromaDB Integration
* LangChain Pipelines
* Multi-document Search
* Chat History Persistence
* Docker Deployment
* User Authentication
* AI Agent Integration

## Skills Demonstrated

* Python Development
* FastAPI APIs
* Generative AI
* Open Source LLM Integration
* Ollama
* REST APIs
* Frontend Development
* Git & GitHub
* Problem Solving
* Software Engineering

## Author

**Mradul Upadhyay**

GitHub: https://github.com/mradul9630

LinkedIn: https://linkedin.com/in/mradul-upadhyay-90146329a
