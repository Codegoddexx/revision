/* eslint-disable react/prop-types */
const Button = (props) => {
  const {setter, theImageIndex} = props
  return (
    <button onClick={() => {
      setter(Math.floor(Math.random() * 4))
      theImageIndex(Math.floor(Math.random() * 6))}
  }>Appear</button>
  )
}

export default Button

