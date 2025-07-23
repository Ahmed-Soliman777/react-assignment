
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar } from "@fortawesome/free-solid-svg-icons"
export default function About() {
  return (
    <div className='vh-100 d-flex text-white align-items-center justify-content-center flex-column' style={{ background: "#8d802d" }}>
      <div className="container">
        <div className='d-flex justify-content-center align-items-center'>
          <h1 className="text-uppercase fw-bold text-center">about component</h1>
        </div>
        <div className="text-center position-relative star-icon w-100 mb-3">
          <FontAwesomeIcon icon={faStar} />
        </div>
        <div className="row">
          <p className="text-white col-12 col-lg-6">Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
          <p className="text-white col-12 col-lg-6">Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>

        </div>
      </div>
    </div>
  )
}
