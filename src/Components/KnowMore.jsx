import '../scss/KnowMore.scss'
import { NavLink } from 'react-router-dom'

function KnowMore() {
  return (
    <div className='knowContent'>
        <h2>WANT TO KNOW MORE? WE ARE HAPPY TO HELP</h2>
        <button>
            <NavLink to={"/contact"} className="knowBtn">
                Contact Us
            </NavLink> <i className="bi bi-arrow-right"></i>
        </button>
    </div>
  )
}

export default KnowMore
