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
        <div className='wave-text animate__animated animate__fadeIn'>
          <p>
            <span>G</span>
            <span>A</span>
            <span>L</span>
            <span>L</span>
            <span>E</span>
            <span>T</span>
            <span>A</span>
            <span></span>
            <span>D</span>
            <span>E</span>
            <span></span>
            <span>L</span>
            <span>A</span>
            </p>
            <p>
            <span>F</span>
            <span>O</span>
            <span>R</span>
            <span>T</span>
            <span>U</span>
            <span>N</span>
            <span>A</span>
            </p>
        </div>
        <Button
            setQuoteRandom={setQuoteRandom}
            setPhotoRandom={setPhotoRandom}
          />
        <div className='app_card'>
          <Phrase quoteRandom={quoteRandom} />
        </div>
        

      </div>
    </>
  )
}

export default App
