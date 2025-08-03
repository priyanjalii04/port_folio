import React from 'react'
import './Skills.css';
import UIDEsign from '../../imagesANdAll/ui-design.png'
import WebDesign from '../../imagesANdAll/website-design.png'
import AppDesign from '../../imagesANdAll/app-design.png'


const Skills = () => {
  return (
   <section id='skills'>
    <span className='skillTitle'>What I do</span>
    <span className='skillDesc'>I design and develop responsive, user-friendly websites using HTML, CSS, JavaScript, and React.js. My focus is on creating clean, accessible interfaces and writing well-structured, maintainable code that ensures smooth performance across all devices.
 </span>

  
  
 <div className='skillBars'>
 <div className='skillBar'>
  <img src={UIDEsign} alt='UIDEsign' className='skillBarImg'/>
    <div className='skillBarText'>
      <h2>Frontend Development</h2>
      <p>I build dynamic and interactive user interfaces using HTML, CSS, JavaScript, React.js, and modern frameworks.</p>
    </div>
 </div>
 </div>

  <div className='skillBars'>
 <div className='skillBar'>
  <img src={WebDesign} alt='WebDesign' className='skillBarImg'/>
    <div className='skillBarText'>
      <h2>Responsive Web Design</h2>
      <p>I create mobile-friendly and visually appealing websites that adapt seamlessly to all screen sizes and devices.</p>
    </div>
 </div>
 </div>
 

  <div className='skillBars'>
 <div className='skillBar'>
  <img src={AppDesign} alt='AppDesign' className='skillBarImg'/>
    <div className='skillBarText'>
      <h2>Website Optimization</h2>
      <p>I ensure websites load quickly, follow SEO best practices, and provide a smooth user experience through performance tuning</p>
    </div>
 </div>
 </div>
 
  
   </section>
  )
}

export default Skills
