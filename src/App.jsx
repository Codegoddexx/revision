import { useState } from 'react'
import './App.css'
import Brown from './Components/File'
import Button from './Components/Button'
import I from "./assets/IMG-20220610-WA0148-removebg-preview.png"
import l from "./assets/IMG-20220618-WA0068-removebg-preview.png"
import o from "./assets/IMG-20230516-WA0036-removebg-preview.png"
import picV from "./assets/IMG-20230702-WA0023-removebg-preview.png"
import e from "./assets/Screenshot__34_-removebg-preview.png"
import picM from "./assets/IMG-20230216-WA0059.jpg"


function App() {
const [vIndex, setVIndex] = useState(0)
const [imageIndex, setImageIndex] = useState(0)
// const vIndex = 3

const v = [ 
  {imgText: "She is always here."},
  {imgText: "Look at me!"},
  {imgText: "Yes my baby, Mummy is here..."},
  {imgText: "ta daa!"}
]

const w = [
  {img: I}, {img: l}, {img: o}, {img: picV}, {img: e}, {img: picM}
]

console.log(w[imageIndex].img)
return ( 
  <>
    <div className="app">
      <div className="main-container">
        <div className="imageDiv">
          <img src={w[imageIndex].img} alt="" />
        </div>
        <div className="textDiv">
          <h1> { v[vIndex].imgText } </h1>
              <Brown
              who={"Mummy"}
              place={"me"}
              />
            {/* </div> */}
      
            <Button
            setter={setVIndex}
            theImageIndex={setImageIndex}
            />
        </div>
      </div>
    </div>
          </>
         )
}

export default App










// import { useState } from 'react'

// import './App.css'

// function App() {
//   const [anIndex, setIndex] = useState(0)
//   const allWords = [
//     {word: "Prepre"},
//     {word: "Melv"},
//     {word: "Jaymharah"},
//     {word: "Maamaa"}
//   ]

//   function nextWord() {
//     setIndex((prev) => prev + 1)
//   }

//   function preWord() {
//     setIndex((prev) => prev - 1)
//   }

//   return (
//     <>
//      <div className='App'>
//       {anIndex > 0 ? <button onClick={preWord}>Prev</button> : null}

//       <p>{allWords[anIndex].word}</p>

//     {anIndex < allWords.length - 1 ? <button onClick={nextWord}>Next</button> : null}
//       </div> 
//     </>
//   )
// }

// export default App
