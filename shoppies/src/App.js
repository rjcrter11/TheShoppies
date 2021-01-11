import React, { useState } from 'react';


import Header from './components/Header/Header';
import HomeScreen from './screens/HomeScreen/HomeScreen';

import { NominationsContext } from './contexts/NominationsContext';
import { useLocalStorage } from './hooks/useLocalStorage';
import Nominations from './components/Nominations/Nominations';


function App() {

  // HOOKS
  const [nominations, setNominations] = useLocalStorage("nominations", []);
  const [open, setOpen] = useState(false)

  // NOMINATIONS
  const handleNominate = movie => {
    setNominations([...nominations, movie])
  }
  const handleRemoveNomination = id => {
    setNominations(nominations.filter(nom => nom.imdbID !== id))
  }

  const handleOpen = () => {
    setOpen(!open)
  }

  return (
    <div>
      <NominationsContext.Provider value={{ nominations, handleNominate, handleRemoveNomination }}>
        <Header handleOpen={handleOpen} />

        {open ? (
          <div
            style={{ width: '75%', margin: '2% auto' }}>
            <Nominations open={open} /></div>
        ) : (
            <HomeScreen />
          )}

      </NominationsContext.Provider>
    </div>
  );
};

export default App;
