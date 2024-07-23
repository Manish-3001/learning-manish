import React, { useState } from 'react';
import axios from 'axios';

const GenderReveal = () => {
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [probability, setProbability] = useState('');
  const [error, setError] = useState('');

  const handleSubmit(event) {
    event.preventDefault();
    try {
      const response = axios.get(`https://api.genderize.io/?name=${name}`);
      setGender(response.data.gender);
      setProbability(response.data.probability);
      setError('');
    } catch (err) {
      setError('Error fetching data. Please try again.');
    }
  };

  return (
    <div>
      <h1>Gender App</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Enter a name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <button type="submit">Submit</button>
      </form>
      
    </div>
  );
};

export default GenderReveal;
