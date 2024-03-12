import Slider from 'react-slick'
import PlanetItem from '../PlanetItem'
import './index.css'

const PlanetsSlider = props => {
  const {planetsList} = props
  const settings = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <div className="bg-container">
      <h1 className="heading">Planets</h1>
      <div data-testid="planets">
        <Slider {...settings} className="custom-slider">
          {planetsList.map(each => (
            <PlanetItem details={each} key={each.id} />
          ))}
        </Slider>
      </div>
    </div>
  )
}
export default PlanetsSlider
