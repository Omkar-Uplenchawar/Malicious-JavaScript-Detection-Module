import React, { useState } from 'react';

const MaliciousScriptDetector = () => {
  const [script, setScript] = useState('');
  const [isMalicious, setIsMalicious] = useState(false);

  const detectMaliciousScript = () => {
    const maliciousPatterns = [
      /eval\(/,
      /str\.replace\(["']\\w+["']/,
      /unescape\(/,
    ];

    for (const pattern of maliciousPatterns) {
      if (pattern.test(script)) {
        setIsMalicious(true);
        return;
      }
    }

    setIsMalicious(false);
  };

  return (
    <div>
        <h1>Malicious Script Detector</h1>
      <textarea
        rows="10"
        cols="50"
        value={script}
        onChange={(e) => setScript(e.target.value)}
        placeholder="Enter JavaScript code here"
      />
      <br />
      <button onClick={detectMaliciousScript}>Detect Malicious Script</button>
      {isMalicious ? (
        <p>Potentially malicious JavaScript detected.</p>
      ) : (
        <p>No malicious JavaScript found.</p>
      )}
    </div>
  );
};

export default MaliciousScriptDetector;
