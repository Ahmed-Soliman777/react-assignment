import { useState } from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus, faStar } from "@fortawesome/free-solid-svg-icons"

import Image1 from "../assets/poert1.png"
import Image2 from "../assets/port2.png"
import Image3 from "../assets/port3.png"

import "../css/Portfolio.css"

export default function Portfolio() {

  const [isOpen, setIsOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageIndex, setImageIndex] = useState(0);

  const pics = [
    { id: 1, src: Image1 },
    { id: 2, src: Image2 },
    { id: 3, src: Image3 },
    { id: 4, src: Image2 },
    { id: 5, src: Image3 },
    { id: 6, src: Image1 }
  ]

  const handleImageClick = (index) => {
    setImageIndex(index);
    setSelectedImage(pics[index].src);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedImage(null);
  };

  let handleNext = () => {
    let nextIndex = imageIndex + 1;
    if (nextIndex >= pics.length) {
      nextIndex = 0;
    }
    setImageIndex(nextIndex);
    setSelectedImage(pics[nextIndex].src);
  }

  let handlePrev = () => {
    let prevIndex = imageIndex - 1;
    if (prevIndex < 0) {
      prevIndex = pics.length - 1;
    }
    setImageIndex(prevIndex);
    setSelectedImage(pics[prevIndex].src);
  }

  return (
    <div className='h-100 d-flex justify-content-center align-items-center py-5' style={{ background: "#8d802d" }}>
      <div className="container mt-5">
        <h1 className="text-center text-uppercase fw-bold text-white">Portfolio</h1>
        <div className="text-center position-relative star-icon w-100 mb-3">
          <FontAwesomeIcon icon={faStar} className="text-white" />
        </div>
        <div className="row g-3">
          {pics.map((pic, index) => {
            return (
              <div key={pic.id} className="col-12 col-lg-4">
                <div className="w-100 position-relative portfolio-demo">
                  <div className="icon position-absolute rounded d-flex justify-content-center align-items-center" onClick={() => handleImageClick(index)}>
                    <FontAwesomeIcon icon={faPlus} className='font-icon fs-5 text-white' />
                  </div>
                  <img src={pic.src} alt="bg Img portfolio" className="w-100 rounded" />
                </div>
              </div>
            )
          })}
        </div>
      </div>
      {
        isOpen && (
          <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-content w-50 h-50" onClick={(e) => e.stopPropagation()}> {/*stopPropagation prevents to inhert parent's behaviors*/}
              <img src={selectedImage} alt="modal image" />
              <button onClick={() => handleNext()}>next</button>
              <button onClick={() => handlePrev()}>previous</button>
            </div>
          </div>
        )
      }
    </div>
  )
}