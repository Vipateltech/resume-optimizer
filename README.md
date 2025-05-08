# 🧠 Resume Optimizer (AI-Powered)

This is a full-stack AI-powered Resume Optimizer web app that helps job seekers tailor their resumes to specific job descriptions. It uses **OpenAI's GPT model** to rewrite your resume in a way that scores **90%+ match** in ATS systems like Jobscan and Enhancv.

---

## 🚀 Features

- ✅ Paste a job description and your resume
- ✅ Get a fully rewritten, ATS-optimized version
- ✅ Uses keywords, skills, and metrics from the job
- ✅ Supports GPT-3.5 and GPT-4 (if available)
- ✅ Built with FastAPI + React (Vite)

---

## 🧱 Project Structure

```
resume-optimizer/
├── backend/          # FastAPI API server
│   ├── optimize_api.py
│   ├── requirements.txt
│   └── .env           # Your OpenAI API key goes here
├── frontend/         # React (Vite) frontend
│   ├── App.jsx
│   ├── main.jsx
│   └── index.html
```

---

## 🛠 Installation Guide

### 1. Clone the Repo

```bash
git clone https://github.com/YOUR_USERNAME/resume-optimizer.git
cd resume-optimizer
```

### 2. Set Up Backend

```bash
cd backend
pip install -r requirements.txt
echo "OPENAI_API_KEY=your-key-here" > .env
uvicorn optimize_api:app --reload
```

> 🧠 Visit [http://localhost:8000/docs](http://localhost:8000/docs) to test the API

---

### 3. Set Up Frontend

```bash
cd ../frontend
npm install
npm run dev
```

> 🌐 App available at: [http://localhost:5173](http://localhost:5173)

---

## 💬 API Endpoint

### POST `/api/optimize`

**Request JSON:**
```json
{
  "jobDescription": "Text of the job posting...",
  "resumeText": "Your current resume..."
}
```

**Response:**
```json
{
  "optimized": "Rewritten resume..."
}
```

---

## 📌 Tech Stack

- OpenAI GPT-3.5 / GPT-4 API
- Python + FastAPI
- React + Vite
- Node.js + npm
- .env for secrets

---

## 🧪 Example Use Case

1. Paste a **job description** for a Data Analyst at RBC
2. Paste your resume
3. Click **Optimize**
4. Copy your new ATS-optimized resume

---

## 🛡 Requirements

- Python 3.8+
- Node 16+
- OpenAI API Key (get one at [https://platform.openai.com](https://platform.openai.com))

---

## 📝 License

This project is licensed under the MIT License.

---

## 👨‍💻 Author

Developed by [Vaibhavkumar Patel](https://www.linkedin.com/in/vaibhavkumar-patel-45b60b240/)

