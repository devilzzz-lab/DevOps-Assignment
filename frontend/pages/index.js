import { useEffect, useState } from 'react';
import Head from 'next/head';
import axios from 'axios';

export default function Home() {
  const [status, setStatus] = useState('Checking backend...');
  const [message, setMessage] = useState('Loading...');
  const [apiBase, setApiBase] = useState('N/A');

  useEffect(() => {
    // 🔑 Single source of truth (works for Local | AWS | Azure)
    const API_BASE = process.env.NEXT_PUBLIC_API_BASE;

    setApiBase(API_BASE || 'NOT SET');

    const checkBackend = async () => {
      if (!API_BASE) {
        setStatus('❌ API base not configured');
        setMessage('NEXT_PUBLIC_API_BASE is missing');
        return;
      }

      try {
        // Health check
        const health = await axios.get(`${API_BASE}/api/health`);

        if (health.data?.status === 'healthy') {
          setStatus('✅ Backend connected');

          // Sample message API
          const res = await axios.get(`${API_BASE}/api/message`);
          setMessage(res.data?.message || 'No message from backend');
        } else {
          setStatus('⚠️ Backend unhealthy');
          setMessage('Health check failed');
        }
      } catch (err) {
        setStatus('❌ Backend connection failed');
        setMessage('Backend API not responding');
        console.error('Backend error:', err.message);
      }
    };

    checkBackend();
  }, []);

  return (
    <div className="container">
      <Head>
        <title>DevOps Assignment</title>
        <meta name="description" content="Multi-Environment DevOps App" />
      </Head>

      <main>
        <h1>DevOps Assignment</h1>

        <p>
          <strong>Status:</strong>{' '}
          <span className={status.includes('✅') ? 'success' : 'error'}>
            {status}
          </span>
        </p>

        <div className="box">
          <h3>Backend Message</h3>
          <p>{message}</p>
        </div>

        <p className="info">
          API Base: <code>{apiBase}</code>
        </p>

        <p className="note">
          Environment selected via <code>NEXT_PUBLIC_API_BASE</code>
        </p>
      </main>

      <style jsx>{`
        .container {
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        main {
          text-align: center;
          max-width: 600px;
        }
        .box {
          margin: 20px 0;
          padding: 16px;
          border: 1px solid #e5e7eb;
          border-radius: 8px;
          background: #f9fafb;
        }
        .success {
          color: #16a34a;
          font-weight: bold;
        }
        .error {
          color: #dc2626;
          font-weight: bold;
        }
        .info {
          margin-top: 12px;
          font-size: 0.9rem;
          color: #374151;
        }
        .note {
          font-size: 0.8rem;
          color: #6b7280;
        }
        code {
          background: #e5e7eb;
          padding: 2px 6px;
          border-radius: 4px;
        }
      `}</style>
    </div>
  );
}
