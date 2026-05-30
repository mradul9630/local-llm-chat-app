# Local LLM Chat Application

A local AI chatbot built using FastAPI, Ollama, and open-source Large Language Models (LLMs). The application enables real-time conversations with a locally hosted LLM through a simple web interface, ensuring privacy and eliminating dependency on external AI APIs.

## Features

* Local AI chatbot powered by Llama 3 via Ollama
* FastAPI backend for API handling
* Interactive web interface using HTML, CSS, and JavaScript
* Real-time AI-generated responses
* Fully local inference with no API costs

## Tech Stack

**Backend**

* Python
* FastAPI
* Uvicorn

**AI/ML**

* Ollama
* Llama 3
* Open-Source LLMs

**Frontend**

* HTML
* CSS
* JavaScript

**Tools**

* Git
* GitHub
* VS Code
* Docker (planned)

## Project Structure

```text
Local-LLM-Chat/
├── app.py
├── Dockerfile
├── requirements.txt
├── templates/
│   └── index.html
├── static/
│   ├── style.css
│   └── script.js
└── vectorstore/
```

## Installation

```bash
git clone https://github.com/mradul9630/local-llm-chat-app.git
cd local-llm-chat-app

python -m venv venv
venv\Scripts\activate

pip install -r requirements.txt
```

Install and run Ollama:

```bash
ollama pull llama3
```

Start the application:

```bash
uvicorn app:app --reload
```

Open:

```text
http://127.0.0.1:8000
```

## Future Enhancements

* Retrieval-Augmented Generation (RAG)
* PDF-based Question Answering
* ChromaDB Integration
* LangChain Workflows
* Docker Deployment
* AI Agent Integration

## Author

**Mradul Upadhyay**

GitHub: https://github.com/mradul9630

LinkedIn: https://linkedin.com/in/mradul-upadhyay-90146329a
