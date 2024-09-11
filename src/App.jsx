import axios from 'axios';
import React from 'react';

const App = () => {
  const API_URL = 'http://localhost:4000';

  // isLoading, isError

  const getPosts = async () => {
    const response = await axios.get`${API_URL}/posts`;
    return response;
  };
  return <div>App</div>;
};

export default App;
