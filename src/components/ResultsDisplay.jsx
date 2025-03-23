import React from 'react';

const ResultsDisplay = ({ results }) => {
  return (
    <div className="results">
      <h2>Extracted Data</h2>
      <p><strong>Merchant:</strong> {results.merchant}</p>
      <p><strong>Total Amount:</strong> ${results.totalAmount}</p>
      <p><strong>Date:</strong> {results.date}</p>
      <h3>Items:</h3>
      <ul>
        {results.items.map((item, index) => (
          <li key={index}>{item.name} - ${item.price}</li>
        ))}
      </ul>
    </div>
  );
};

export default ResultsDisplay;
