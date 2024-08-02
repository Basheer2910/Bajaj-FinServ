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
      <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center">
        <textarea value={inputValue} onChange={handleChange} rows="5" cols="50" className="border-b-slate-700 p-2" placeholder='Enter JSON data...'autoFocus/>
        <br />
        <button type="submit" className="bg-[#24A0ED] px-3 py-2 rounded text-white">Submit</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}

export default JsonInput;
