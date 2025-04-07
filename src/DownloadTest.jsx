import { useState } from 'react';
import './App.css';

function DownloadTest() {
  const [downloadSpeed, setDownloadSpeed] = useState(null);
  const [isTesting, setIsTesting] = useState(false);

  const performDownloadTest = async () => {
    setIsTesting(true);
    setDownloadSpeed(null);

    try {
      // Get file size from backend
      const sizeResponse = await fetch('http://192.168.1.6:3000/download-file-size');
      const sizeData = await sizeResponse.json();
      const fileSizeInBits = sizeData.fileSize * 8;

      const startTime = Date.now();

      await fetch('http://192.168.1.6:3000/download-file')
        .then(res => res.body)
        .then(stream => {
          const reader = stream.getReader();
          const pump = () => reader.read().then(({ done }) => {
            if (done) return;
            return pump();
          });
          return pump();
        });

      const endTime = Date.now();
      const durationInSeconds = (endTime - startTime) / 1000;
      const speedMbps = (fileSizeInBits / (durationInSeconds * 1e6)).toFixed(2);
      setDownloadSpeed(speedMbps);
    } catch (error) {
      console.error('Download test failed:', error);
    }

    setIsTesting(false);
  };

  return (
    <div className="test-container">
      <h2>Download Speed Test</h2>
      <button 
        onClick={performDownloadTest} 
        disabled={isTesting} 
        className="test-button"
      >
        {isTesting ? 'Testing...' : 'Start Download Test'}
      </button>

      {isTesting && (
        <div className="progress-container">
          <div className="progress-bar" style={{ width: `${progress}%` }}></div>
        </div>
      )}
      
      {downloadSpeed !== null && (
        <div className="result">
          <h2>Download Speed</h2>
          <p>{downloadSpeed} Mbps</p>
        </div>
      )}
    </div>
  );
}

export default DownloadTest;
