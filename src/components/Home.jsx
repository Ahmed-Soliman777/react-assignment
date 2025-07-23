import "../css/Home.css"
import Avatar from "../assets/avataaars.svg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar } from "@fortawesome/free-solid-svg-icons"
export default function Home() {
  return (
    <div className="vh-100 d-flex text-white align-items-center justify-content-center flex-column" style={{ background: "#8d802d" }}>
      <div className="w-25">
        <img src={Avatar} alt="svg avatar" className="w-100" />
      </div>
      <h1 className="text-center text-uppercase fw-bold mt-5">start framework</h1>
      <div className="text-center position-relative star-icon w-100">
        <FontAwesomeIcon icon={faStar} />
      </div>
      <p className="text-center text-capitalize">Graphic Artist - Web Designer - Illustrator</p>
    </div>
  )
}
