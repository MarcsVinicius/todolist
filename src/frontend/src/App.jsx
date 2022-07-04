import React, { useEffect } from 'react';
import fetchAll from './services/fetchAll';
import Tasks from './components/Tasks';

function App() {
  useEffect(() => {
    const getApi = async () => {
      const getAPI = await fetchAll();
      return getAPI;
    };
  });
  return (
    <main>
      <Tasks />
    </main>
  );
}

export default App;
