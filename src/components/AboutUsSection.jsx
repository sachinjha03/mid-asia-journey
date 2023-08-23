import React from 'react'
import "../css/AboutUsSection.css"
export default function AboutUsSection() {
  return (
    <div className='about-us-section'>
        <h2>Mid Asia Journey</h2>
        <span className="about-us-section-underline"></span>
        <div className="about-us-section-para-portion">
            <div className="about-us-section-para-portion-left">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores error unde autem nihil voluptatum atque minima, molestias mollitia adipisci neque quaerat cupiditate placeat facere, obcaecati laudantium doloremque rem corrupti repellendus?</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi veniam unde consequatur nam! Cumque sed facilis eum iure consectetur impedit cum perspiciatis numquam voluptatem suscipit!</p>
            </div>
            <div className="about-us-section-para-portion-right">
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem, ex? Cumque reprehenderit, vitae omnis dolores cupiditate neque? Modi, sunt porro?</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum consequatur fuga velit laboriosam, quas quis aliquid! Mollitia, nihil quia facilis debitis laborum rerum, quasi neque ea id eligendi ex odit.</p>
            </div>
        </div>
        <button className="btn-a btn-a-outline">About Us</button>
    </div>
  )
}
