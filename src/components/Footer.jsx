import "../css/Footer.css"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faLinkedinIn, faXTwitter } from "@fortawesome/free-brands-svg-icons"

import { useState } from "react"
import { faGlobe } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"


export default function Footer() {
  const date = new Date().getFullYear()
  const [year, setYear] = useState(date)
  return (
    <div className='text-white'>
      <div className="bg-dark border-bottom border-white py-5">
        <div className="container">
          <div className="row g-4">
            <div className="col-12 col-lg-4">
              <div className="text-center">
                <h3 className="text-uppercase fw-bold fs-3">location</h3>
                <div className="text-capitalize">2215 John Daniel Drive</div>
                <div className="text-capitalize">Clark, MO
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-4">
              <div className="text-center">
                <h3 className="text-uppercase fw-bold fs-3">AROUND THE WEB</h3>
                {/* font awesomw icons */}
                <div className="">
                  <Link to={"https://facebook.com"} className="text-white" target="_blank">
                    <FontAwesomeIcon icon={faFacebook} className="border border-3 border-white rounded-circle p-1 fs-5 mx-1 footerIcon" />
                  </Link>
                  <Link to={"https://x.com"} className="text-white" target="_blank">
                    <FontAwesomeIcon icon={faXTwitter} className="border border-3 border-white rounded-circle p-1 fs-5 mx-1 footerIcon" />
                  </Link>
                  <Link to={"https://linkedin.com"} className="text-white" target="_blank"> 
                    <FontAwesomeIcon icon={faLinkedinIn} className="border border-3 border-white rounded-circle p-1 fs-5 mx-1 footerIcon" />
                  </Link>
                  <Link to={"https://google.com"} className="text-white" target="_blank"> 
                    <FontAwesomeIcon icon={faGlobe} className="border border-3 border-white rounded-circle p-1 fs-5 mx-1 footerIcon" />
                  </Link>
                </div>
                {/* font awesomw icons */}
              </div>
            </div>
            <div className="col-12 col-lg-4">
              <div className="text-center">
                <h3 className="text-uppercase fw-bold fs-3">ABOUT FREELANCER</h3>
                <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-dark text-center py-3">
        {`Copyright © Your Website ${year}`}
      </div>
    </div>
  )
}
