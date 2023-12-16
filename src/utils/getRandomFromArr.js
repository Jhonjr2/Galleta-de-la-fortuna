const getRandomFromArr = arr => {
   const indexRamdon = Math.floor(Math.random() * arr.length)
   return  arr[indexRamdon]
}

export default getRandomFromArr