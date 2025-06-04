import { useState, useEffect } from 'react';

export default function Dashboard() {
  const [d, setD] = useState<number | null>(null);

  useEffect(() => {
    // Dynamically import the worker file
    const worker = new Worker(new URL('./dashboard.worker.ts', import.meta.url), { type: 'module' });
    worker.onmessage = (e) => {
      setD(e.data);
      worker.terminate();
    };
    worker.postMessage(null);
    return () => worker.terminate();
  }, []);

  return <div>{d}</div>;
} 