import React, { useState } from 'react';

import { CSSTransition } from 'react-transition-group';

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

  setTimeout(() => {
    setShowCopy(false);
    setCopyToClip(null);
  }, 10000)

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
        <CSSTransition
          in={!open}
          mountOnEnter
          unmountOnExit
          classNames='home'
          appear={true}
          timeout={1000}
        >
          <HomeScreen />
        </CSSTransition>
        <CSSTransition
          in={open}
          mountOnEnter
          unmountOnExit
          classNames='trophy'
          appear={true}
          timeout={2000}
        >
          <div className='nominations-app'>
            <h2>Your Nominations ({nominations.length} of 5)</h2>
            <Nominations open={open} />
          </div>
        </CSSTransition>
      </NominationsContext.Provider>
    </div>
  );
};

export default App;
