import React from 'react';
import Select from 'react-select';

const options = [
  { value: 'Alphabets', label: 'Alphabets' },
  { value: 'Numbers', label: 'Numbers' },
  { value: 'Highest Alphabet', label: 'Highest Alphabet' },
];

function Dropdown({ onChange }) {
  const handleChange = (selected) => {
    onChange(selected.map(option => option.value));
  };

  return (
    <Select
      isMulti
      name="options"
      options={options}
      className="basic-multi-select mt-6"
      classNamePrefix="select"
      onChange={handleChange}
    />
  );
}

export default Dropdown;
