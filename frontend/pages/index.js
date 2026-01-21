import { useEffect, useState } from 'react';
import Head from 'next/head';
import axios from 'axios';

export default function Home() {
  const [status, setStatus] = useState('Checking backend...');
  const [message, setMessage] = useState('Loading...');
  const [apiBase, setApiBase] = useState('');

  useEffect(() => {
    const API_BASE = process.env.NEXT_PUBLIC_API_URL;

    setApiBase(API_BASE || 'NOT SET');

    if (!API_BASE) {
      setStatus('❌ API base not configured');
      setMessage('NEXT_PUBLIC_API_URL is missing');
      return;
    }

    const checkBackend = async () => {
      try {
        const health = await axios.get(`${API_BASE}/api/health`);
        if (health.data?.status === 'healthy') {
          setStatus('✅ Backend connected');
          const res = await axios.get(`${API_BASE}/api/message`);
          setMessage(res.data?.message);
        } else {
          setStatus('⚠️ Backend unhealthy');
          setMessage('Health check failed');
        }
      } catch {
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
        <h1>Multi Cloud Deployment</h1>
        
        <p>
          <strong>Status:</strong>{' '}
          <span className={status.includes('✅') ? 'success' : status.includes('⚠️') ? 'warning' : 'error'}>
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
          background: #f3f4f6;
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
          margin: 0 0 2rem 0; 
          line-height: 1.15; 
          font-size: 3rem; 
          color: #1f2937;
          font-weight: 700;
        }
        
        .message-box { 
          margin: 2rem 0; 
          padding: 1.5rem 2rem; 
          border: 1px solid #e5e7eb; 
          border-radius: 12px; 
          width: 100%; 
          max-width: 600px; 
          background: #ffffff; 
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        }
        
        .message-box h2 {
          margin: 0 0 1rem 0;
          color: #374151;
          font-size: 1.25rem;
        }
        
        .message-box p {
          margin: 0 0 1rem 0;
          color: #4b5563;
          font-size: 1.1rem;
        }
        
        .success { 
          color: #10b981; 
          font-weight: bold; 
        }
        
        .warning {
          color: #f59e0b;
          font-weight: bold;
        }
        
        .error { 
          color: #ef4444; 
          font-weight: bold; 
        }
        
        .info { 
          margin-top: 2rem; 
          font-size: 0.95rem; 
          color: #6b7280; 
        }
        
        code { 
          background: #f3f4f6; 
          padding: 0.3rem 0.6rem; 
          border-radius: 6px; 
          font-family: 'SF Mono', Monaco, monospace;
          color: #1f2937;
        }
        
        @media (max-width: 768px) {
          h1 {
            font-size: 2.2rem;
          }
          main {
            padding: 3rem 1rem;
          }
        }
      `}</style>
    </div>
  );
}
