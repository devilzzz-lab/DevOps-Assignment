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
        <h1>Sriram DevOps Assignment</h1>
        
        <div className={`message-box ${status.includes('✅') ? 'success' : status.includes('⚠️') ? 'warning' : 'error'}`}>
          <p><strong>Status:</strong> {status}</p>
          <h3>Backend Message</h3>
          <p>{message}</p>
          <p>
            <strong>API Base:</strong>{' '}
            <code>{apiBase}</code>
          </p>
        </div>
        
      </main>

      <style jsx>{`
        .container { 
          min-height: 100vh; 
          padding: 0 0.5rem; 
          display: flex; 
          flex-direction: column; 
          justify-content: center; 
          align-items: center; 
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
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
          font-size: 3.5rem; 
          background: linear-gradient(45deg, #fff, #f0f0f0);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          font-weight: 700;
          letter-spacing: -0.02em;
        }
        
        .message-box { 
          margin: 2rem 0; 
          padding: 2.5rem 3rem; 
          border: 2px solid transparent;
          border-radius: 20px; 
          width: 100%; 
          max-width: 700px; 
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.1);
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }
        
        .message-box::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, #10b981, #f59e0b, #ef4444);
        }
        
        .message-box.success {
          border-color: #10b981;
          background: linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(16, 185, 129, 0.05));
        }
        
        .message-box.warning {
          border-color: #f59e0b;
          background: linear-gradient(135deg, rgba(245, 158, 11, 0.1), rgba(245, 158, 11, 0.05));
        }
        
        .message-box.error {
          border-color: #ef4444;
          background: linear-gradient(135deg, rgba(239, 68, 68, 0.1), rgba(239, 68, 68, 0.05));
        }
        
        .message-box h3 {
          margin: 1.5rem 0 1rem 0;
          font-size: 1.5rem;
          color: #1f2937;
          font-weight: 600;
        }
        
        .message-box p {
          margin: 0.5rem 0;
          font-size: 1.1rem;
          color: #374151;
          line-height: 1.6;
        }
        
        code { 
          background: rgba(0, 0, 0, 0.1);
          padding: 0.4rem 0.8rem; 
          border-radius: 8px; 
          font-family: 'SF Mono', Monaco, 'Cascadia Code', monospace;
          font-size: 0.95rem;
          color: #1f2937;
          font-weight: 500;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        }
        
        .info { 
          margin-top: 3rem; 
          font-size: 1rem; 
          color: rgba(255, 255, 255, 0.9);
          font-weight: 500;
        }
        
        @media (max-width: 768px) {
          h1 {
            font-size: 2.5rem;
          }
          
          .message-box {
            padding: 2rem;
            margin: 1rem;
          }
        }
      `}</style>
    </div>
  );
}
