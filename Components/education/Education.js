import React from 'react'
import './Education.css';
import education from '../../imagesANdAll/education.jpg'

const Education = () => {
   return (
     <section id='education'>
      <span className='educationTitle'>Education</span>
    
   <div className='educationBars'>
   <div className='educationBar'>
    <img src={education} alt='UIDEsign' className='educationImg'/>
      <div className='educationText'>
         <h2>2021-2025</h2>
        <p>Bechelor of Technology <br/>
        Computer Science Engineering <br/>
        Bipin Tripathi Kumaon Institute of technology  Dwarahat<br/>  Amlora ,Uttrakhand</p>
          </div>
   </div>
   </div>
  
    <div className='educationBars'>
   <div className='educationBar'>
    <img src={education} alt='WebDesign' className='educationImg'/>
      <div className='educationText'>
        <h2>2020-21</h2>
        <p>Intermediate <br/>
          Rajeev Gandhi Navodaya Vidhyalaya Chaunalia <br/> Amlora ,Uttarakhand</p>
      </div>
   </div>
   </div>
   
  
    <div className='educationBars'>
   <div className='educationBar'>
    <img src={education} alt='AppDesign' className='educationImg'/>
      <div className='educationText'>
        <h2>2018-19</h2>
        <p>High School <br/>
          Rajeev Gandhi Navodaya Vidhyalaya Chaunalia <br/> Amlora,Uttarakhand</p>
      </div>
   </div>
   </div>
    
     </section>
   )
}

export default Education
