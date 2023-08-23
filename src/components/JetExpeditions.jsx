import React from 'react'
import "../css/JetExpeditions.css"
import ExpeditionCrousal from './ExpeditionCrousal'
export default function JetExpeditions() {
  return (
    <div className='jet-expeditions-section'>
      <h2>Aman Jet Expeditions</h2>
      <span className="about-us-section-underline"></span>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id quaerat, hic eveniet harum voluptatum cum enim sed voluptatem! Facere iusto fugiat ex nesciunt vero accusantium harum! Voluptatem facere exercitationem laboriosam?</p>
      <ExpeditionCrousal/>
    </div>
  )
}
