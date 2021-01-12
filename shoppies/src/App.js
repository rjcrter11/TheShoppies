import React, { useState } from 'react';

import Header from './components/Header/Header';
import HomeScreen from './screens/HomeScreen/HomeScreen';
import Nominations from './components/Nominations/Nominations';

import { NominationsContext } from './contexts/NominationsContext';
import { useLocalStorage } from './hooks/useLocalStorage';


function App() {

  // HOOKS
  const [nominations, setNominations] = useLocalStorage("nominations", []);
  const [open, setOpen] = useState(false);
  const [copyToClip, setCopyToClip] = useState(null);
  const [showCopy, setShowCopy] = useState(false);

  // NOMINATIONS
  const handleNominate = movie => {
    setNominations([...nominations, movie])
  };
  const handleRemoveNomination = id => {
    setNominations(nominations.filter(nom => nom.imdbID !== id))
  };

  const handleOpen = () => {
    setOpen(!open)
  };

  // CLIPBOARD
  const copyToClipBoard = (id) => {
    const copyText = `https://www.imdb.com/title/${id}`;
    navigator.clipboard.writeText(copyText);
    setCopyToClip(copyText)
    setShowCopy(true)
  };

  const closeClipboard = () => {
    setShowCopy(false);
    setCopyToClip(null);
  };

  // setTimeout(() => {
  //   setShowCopy(false);
  //   setCopyToClip(null);
  // }, 8000)

  return (
    <div>
      <NominationsContext.Provider
        value={{
          nominations,
          handleNominate,
          handleRemoveNomination,
          copyToClipBoard,
          showCopy,
          copyToClip
        }}>

        <Header
          handleOpen={handleOpen}
          closeClipboard={closeClipboard}
          showCopy={showCopy}
        />

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
