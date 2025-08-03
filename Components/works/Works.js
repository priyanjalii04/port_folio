import React from 'react'
import './Works.css'
import portfolio1 from '../../imagesANdAll/portfolio1.png'
import portfolio22 from '../../imagesANdAll/portfolio22.png'
import portfolio3 from '../../imagesANdAll/portfolio3.png'

const Works = () => {
  return (
   <section  id ='works'>
  <h2 className='workTitle'>My Portfolio</h2>
  <span className='worksDesc'>A modern, responsive portfolio website built with React.js to showcase my skills,<br/> projects, and contact information. Designed with clean UI and interactive sections to create a professional web presence.</span>
  <div className='worksImgs'>
    <img src={portfolio1} alt='portfolio1' className='worksImg'/>
     <img src={portfolio22} alt='portfolio22' className='worksImg'/>
      <img src={portfolio3} alt='portfolio3' className='worksImg'/>
       
  </div>
   </section>
  )
}

export default Works
