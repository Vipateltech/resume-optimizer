# optimize_api.py
from fastapi import FastAPI, Request
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
import os
import openai
from dotenv import load_dotenv

load_dotenv()
openai.api_key = os.getenv("OPENAI_API_KEY")

client = openai.OpenAI()

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class OptimizeRequest(BaseModel):
    jobDescription: str
    resumeText: str

@app.post("/api/optimize")
async def optimize_resume(req: OptimizeRequest):
    job_description = req.jobDescription
    resume_text = req.resumeText

    prompt = f"""
    You are a resume optimization agent. Your task is to rewrite a resume to achieve a 90%+ ATS match
    against a given job description. Ensure:
    - Matching keywords
    - Clean format (no tables/columns)
    - Quantified results
    - Clear alignment with responsibilities and tools

    JOB DESCRIPTION:
    {job_description}

    RESUME TEXT:
    {resume_text}

    Return the full optimized resume as plain text.
    """

    response = client.chat.completions.create(
        model="gpt-3.5-turbo",
        messages=[
            {"role": "system", "content": "You optimize resumes for ATS systems."},
            {"role": "user", "content": prompt}
        ],
        temperature=0.3
    )
    return {"optimized": response.choices[0].message.content.strip()}
