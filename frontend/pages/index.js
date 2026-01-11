import { useEffect, useState } from 'react';
import Head from 'next/head';
import axios from 'axios';

export default function Home() {
  const [status, setStatus] = useState('Checking backend...');
  const [message, setMessage] = useState('Loading...');
  const [apiBase, setApiBase] = useState('');

  useEffect(() => {
    let API_BASE = '';

    if (typeof window !== 'undefined') {
      const host = window.location.hostname;

      // 🟢 LOCAL
      if (host === 'localhost') {
        API_BASE = 'http://localhost:8000';
      }

      // 🟠 AWS (ALB handles /api)
      else if (host.includes('amazonaws.com')) {
        API_BASE = '';
      }

      // 🔵 AZURE (direct backend call)
      else if (host.includes('azurecontainerapps.io')) {
        API_BASE =
          'https://backend-app.salmonpebble-0b8cecd6.eastus.azurecontainerapps.io';
      }
    }

    setApiBase(API_BASE || '/api');

    const checkBackend = async () => {
      try {
        const health = await axios.get(`${API_BASE}/api/health`);

        if (health.data?.status === 'healthy') {
          setStatus('✅ Backend connected');
          const res = await axios.get(`${API_BASE}/api/message`);
          setMessage(res.data?.message || 'No message from backend');
        } else {
          setStatus('⚠️ Backend unhealthy');
          setMessage('Health check failed');
        }
      } catch (err) {
        setStatus('❌ Backend connection failed');
        setMessage('Backend API not responding');
      }
    };

    checkBackend();
  }, []);

  return (
    <div className="container">
      <Head>
        <title>DevOps Assignment</title>
      </Head>

      <main>
        <h1>Sriram DevOps Assignment</h1>

        <p>
          <strong>Status:</strong>{' '}
          <span className={status.includes('✅') ? 'success' : 'error'}>
            {status}
          </span>
        </p>

        <div className="message-box">
          <h2>Backend Message:</h2>
          <p>{message}</p>
        </div>

        <p className="info">
          API Base: <code>{apiBase}</code>
        </p>
      </main>

      <style jsx>{`
        .container { 
          min-height: 100vh; 
          padding: 0 0.5rem; 
          display: flex; 
          flex-direction: column; 
          justify-content: center; 
          align-items: center; 
        }
        main { 
          padding: 5rem 0; 
          flex: 1; 
          display: flex; 
          flex-direction: column; 
          justify-content: center; 
          align-items: center; 
          max-width: 800px; 
          margin: 0 auto; 
          text-align: center; 
        }
        h1 { 
          margin: 0; 
          line-height: 1.15; 
          font-size: 3rem; 
          margin-bottom: 2rem; 
        }
        .message-box { 
          margin: 2rem 0; 
          padding: 1.5rem; 
          border: 1px solid #eaeaea; 
          border-radius: 10px; 
          width: 100%; 
          max-width: 600px; 
          background: #f8f9fa; 
        }
        .success { 
          color: #10b981; 
          font-weight: bold; 
        }
        .error { 
          color: #ef4444; 
          font-weight: bold; 
        }
        .info { 
          margin-top: 2rem; 
          font-size: 0.9rem; 
          color: #666; 
        }
        code { 
          background: #e5e7eb; 
          padding: 0.2rem 0.4rem; 
          border-radius: 4px; 
          font-family: monospace; 
        }
      `}</style>
    </div>
  );
}
