import React, { useState } from 'react';

function JsonInput({ onSubmit }) {
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      console.log(inputValue);
      const parsedData = JSON.parse(inputValue);
      if (!parsedData.data || !Array.isArray(parsedData.data)) {
        throw new Error('Invalid JSON structure');
      }
      setError(null);
      onSubmit(parsedData);
    } catch (err) {
      console.log(err);
      setError('Invalid JSON format', err);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <textarea value={inputValue} onChange={handleChange} rows="5" cols="50" />
        <br />
        <button type="submit">Submit</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}

export default JsonInput;
