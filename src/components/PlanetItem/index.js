// Write your code here
import './index.css'

const PlanetItem = props => {
  const {details} = props
  const {name, imageUrl, description} = details
  return (
    <>
      <img src={imageUrl} alt={`planet ${name}`} className="planet" />
      <h1 className="name">{name}</h1>
      <p className="text">{description}</p>
    </>
  )
}
export default PlanetItem
