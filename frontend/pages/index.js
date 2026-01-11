import { useState, useEffect } from 'react';
import Head from 'next/head';
import axios from 'axios';

export default function Home() {
  const [message, setMessage] = useState('Loading...');
  const [status, setStatus] = useState('');
  const [apiBase, setApiBase] = useState('N/A'); // ✅ SSR-safe default

  useEffect(() => {
    // ✅ Client-only: Set dynamic API base
    setApiBase(window.location.origin);
    
    const fetchData = async () => {
      try {
        const API_BASE = window.location.origin;
        const healthCheck = await axios.get(`${API_BASE}/api/health`);
        
        if (healthCheck.data.status === 'healthy') {
          setStatus('✅ Backend connected!');
          const response = await axios.get(`${API_BASE}/api/message`);
          setMessage(response.data.message);
        }
      } catch (error) {
        setStatus('❌ Backend connection failed');
        setMessage('Backend API not responding');
        console.error('API Error:', error.response?.data || error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      <Head>
        <title>DevOps Assignment</title>
        <meta name="description" content="Full-stack DevOps Assignment" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>DevOps Assignment</h1>
        <div className="status">
          <p>Status: <span className={status.includes('connected') ? 'success' : 'error'}>{status}</span></p>
        </div>
        <div className="message-box">
          <h2>Backend Message:</h2>
          <p>{message}</p>
        </div>
        <div className="info">
          <p>API Base: <code>{apiBase}</code></p> {/* ✅ No hydration error! */}
        </div>
      </main>

      <style jsx>{`
        .container { min-height: 100vh; padding: 0 0.5rem; display: flex; flex-direction: column; justify-content: center; align-items: center; }
        main { padding: 5rem 0; flex: 1; display: flex; flex-direction: column; justify-content: center; align-items: center; max-width: 800px; margin: 0 auto; text-align: center; }
        h1 { margin: 0; line-height: 1.15; font-size: 3rem; margin-bottom: 2rem; }
        .message-box { margin: 2rem 0; padding: 1.5rem; border: 1px solid #eaeaea; border-radius: 10px; width: 100%; max-width: 600px; background: #f8f9fa; }
        .success { color: #10b981; font-weight: bold; }
        .error { color: #ef4444; font-weight: bold; }
        .info { margin-top: 2rem; font-size: 0.9rem; color: #666; }
        code { background: #e5e7eb; padding: 0.2rem 0.4rem; border-radius: 4px; font-family: monospace; }
      `}</style>
    </div>
  );
}
