import React, { useState } from 'react';
import FileUpload from './FileUpload';
import ResultsDisplay from './ResultsDisplay';
import '../App.css';

const App = () => {
  const [results, setResults] = useState(null);

  return (
    <div className="app">
      <h1>Receipt Scanner</h1>
      <FileUpload setResults={setResults} />
      {results && <ResultsDisplay results={results} />}
    </div>
  );
};

export default App;
