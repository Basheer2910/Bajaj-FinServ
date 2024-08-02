import React, { useState } from 'react';
import axios from 'axios';
import JsonInput from './JsonInput';
import Dropdown from './Dropdown';

function App() {
  const [jsonData, setJsonData] = useState('');
  const [response, setResponse] = useState(null);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleJsonSubmit = async (data) => {
    try {
      const res = await axios.post('https://testbfhl-backend.vercel.app/bfhl', { data: data.data });
      setResponse(res.data);
    } catch (error) {
      console.error('Error submitting JSON:', error);
    }
  };

  const handleOptionChange = (selected) => {
    setSelectedOptions(selected);
  };

  const renderResponse = () => {
    if (!response) return null;

    const { alphabets, numbers, highest_alphabet } = response;

    return (
      <div>
        {selectedOptions.includes('Alphabets') && (
          <div className="flex gap-2">
            <h3 className="font-semibold">Alphabets : </h3>
            <p>{alphabets.join(', ')}</p>
          </div>
        )}
        {selectedOptions.includes('Numbers') && (
          <div className="flex gap-2">
            <h3 className="font-semibold">Numbers</h3>
            <p>{numbers.join(', ')}</p>
          </div>
        )}
        {selectedOptions.includes('Highest Alphabet') && (
          <div className="flex gap-2">
            <h3 className="font-semibold">Highest Alphabet</h3>
            <p>{highest_alphabet.join(', ')}</p>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="App flex flex-col justify-center items-center w-full mt-6">
      <JsonInput onSubmit={handleJsonSubmit} />
      {response && <Dropdown onChange={handleOptionChange} />}
      {renderResponse()}
    </div>
  );
}

export default App;
