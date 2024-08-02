import React, { useState } from 'react';
import axios from 'axios';
import JsonInput from './JsonInput';
import Dropdown from './Dropdown';
import './index.css'; // Import the CSS file

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
          <div className="response-section">
            <h3 className="response-title">Alphabets : </h3>
            <p className="response-data">{alphabets.join(', ')}</p>
          </div>
        )}
        {selectedOptions.includes('Numbers') && (
          <div className="response-section">
            <h3 className="response-title">Numbers :</h3>
            <p className="response-data">{numbers.join(', ')}</p>
          </div>
        )}
        {selectedOptions.includes('Highest Alphabet') && (
          <div className="response-section">
            <h3 className="response-title">Highest Alphabet :</h3>
            <p className="response-data">{highest_alphabet.join(', ')}</p>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="app-container">
      <JsonInput onSubmit={handleJsonSubmit} />
      {response && <Dropdown onChange={handleOptionChange} />}
      {renderResponse()}
    </div>
  );
}

export default App;
