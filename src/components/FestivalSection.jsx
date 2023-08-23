import React from 'react'
import "../css/FestivalSection.css"
import festivalSectionVideo from "../videos/festivalSectionVideo.mp4"
export default function FestivalSection() {
  return (
    <div className='festival-section'>
        <h2>Festival</h2>
        <span className="about-us-section-underline"></span>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis similique unde, dolor illum doloribus nisi, voluptatum suscipit quae numquam modi assumenda, praesentium aliquam ducimus iste.</p>
        <video src={festivalSectionVideo} autoPlay loop muted></video>
        <button className="btn-a btn-a-outline">See All Festivals</button>
    </div>
  )
}
