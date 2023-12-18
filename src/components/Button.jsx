import getRandomFromArr from "../utils/getRandomFromArr"
import phrases from "../utils/phrases.json";
import arrPhoto from "../utils/photo.json";

const Button = ({ setQuoteRandom, setPhotoRandom }) => {

  const handlesChangePhrase = () => {
    setQuoteRandom(getRandomFromArr(phrases))
    setPhotoRandom(getRandomFromArr(arrPhoto))
  }

  return (
    <button className="app_btn" onClick={handlesChangePhrase}>
      Probar mi suerte
      <div>
      <img src="/galleta-de-la-fortuna.png" alt="text-btn" className="Galleta" />
      </div>
    </button>
  )
}

export default Button