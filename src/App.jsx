import { useState } from 'react';
import './App.css'
import Phrase from './components/Phrase';
import getRandomFromArr from './utils/getRandomFromArr';
import phrases from "./utils/phrases.json";
import Button from './components/Button';
import arrPhoto from "./utils/photo.json";

function App() {

  const phrase = getRandomFromArr(phrases)
  const initialPhoto = getRandomFromArr(arrPhoto)

  const [quoteRandom, setQuoteRandom] = useState(phrase)
  const [photoRandom, setPhotoRandom] = useState(initialPhoto)

  const objStyle = {
    backgroundImage: `url(/fondo${photoRandom}.jpg)`
  }

  return (
    <>
      <div style={objStyle} className='App'>
        <h1 className='app_title'>Galleta de la fortuna</h1>
        <div className='app_card'>
          <Phrase quoteRandom={quoteRandom} />
          <Button
            setQuoteRandom={setQuoteRandom}
            setPhotoRandom={setPhotoRandom}
          />
        </div>

      </div>
    </>
  )
}

export default App
