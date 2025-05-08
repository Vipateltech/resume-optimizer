import React, { useState } from 'react';

export default function App() {
  const [jobDescription, setJobDescription] = useState('');
  const [resumeText, setResumeText] = useState('');
  const [optimizedResume, setOptimizedResume] = useState('');
  const [loading, setLoading] = useState(false);

  const handleOptimize = async () => {
    setLoading(true);
    const response = await fetch('http://localhost:8000/api/optimize', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ jobDescription, resumeText }),
    });
    const data = await response.json();
    setOptimizedResume(data.optimized);
    setLoading(false);
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Resume Optimizer (90%+ ATS Match)</h1>
      <textarea
        rows={8}
        placeholder="Paste Job Description"
        value={jobDescription}
        onChange={(e) => setJobDescription(e.target.value)}
        style={{ width: '100%', marginBottom: 10 }}
      />
      <textarea
        rows={8}
        placeholder="Paste Resume"
        value={resumeText}
        onChange={(e) => setResumeText(e.target.value)}
        style={{ width: '100%', marginBottom: 10 }}
      />
      <button onClick={handleOptimize} disabled={loading}>
        {loading ? 'Optimizing...' : 'Optimize Resume'}
      </button>
      <textarea
        rows={10}
        value={optimizedResume}
        readOnly
        placeholder="Optimized Resume will appear here"
        style={{ width: '100%', marginTop: 20 }}
      />
    </div>
  );
}
