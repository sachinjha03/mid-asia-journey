import React from 'react'
import "../css/TestimonialSection.css"
import Card from './Card'
import card1 from "../images/america.jfif"
import card2 from "../images/china.jfif"
import card3 from "../images/japan.jfif"
import card4 from "../images/india.jfif"
import card5 from "../images/kailash.jfif"
import card6 from "../images/nepal.jfif"
export default function TestimonailSection() {
  return (
    <div className='testimonial-section'>
        <h2>What Others Says</h2>
        <span className="about-us-section-underline"></span>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum, maiores!</p>
        <div className="scrollable-section">
            <Card frontImage={card1} backText="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum, maiores!"/>
            <Card frontImage={card2} backText="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum, maiores!"/>
            <Card frontImage={card3} backText="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum, maiores!"/>
            <Card frontImage={card4} backText="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum, maiores!"/>
            <Card frontImage={card5} backText="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum, maiores!"/>
            <Card frontImage={card6} backText="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum, maiores!"/>
        </div>
    </div>
  )
}
