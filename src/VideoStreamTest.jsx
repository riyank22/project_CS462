import { useState } from 'react';
import './App.css';

function VideoStreamTest() {
  const [bufferTime, setBufferTime] = useState(null);
  const [isTesting, setIsTesting] = useState(false);

  const performStreamTest = async () => {
    setIsTesting(true);
    setBufferTime(null);

    const startTime = Date.now();

    try {
      await fetch('http://localhost:3000/video-stream-test'); // Simulated API endpoint
      const endTime = Date.now();
      const bufferDuration = (endTime - startTime) / 1000;
      setBufferTime(bufferDuration.toFixed(2));
    } catch (error) {
      console.error('Video stream test failed:', error);
    }

    setIsTesting(false);
  };

  return (
    <div className="test-container">
      <h2>Video Stream Test</h2>
      <button 
        onClick={performStreamTest} 
        disabled={isTesting} 
        className="test-button"
      >
        {isTesting ? 'Testing...' : 'Start Video Stream Test'}
      </button>
      
      {bufferTime !== null && (
        <div className="result">
          <h2>Buffer Time</h2>
          <p>{bufferTime} sec</p>
        </div>
      )}
    </div>
  );
}

export default VideoStreamTest;
