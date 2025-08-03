import React from 'react'
import './Intro.css';
import bg from '../../imagesANdAll/myimage.png'
import btnImg from '../../imagesANdAll/hireme.png';
 import {Link} from 'react-scroll';

const Intro = () => {
  return (
   <section id='intro'>
 <div className='introContent'>
  <span className='hello'>Hello</span>
  <span className='introText'> I'm  <span className='introName'>Priyanjali</span> <br/> Web Developer</span>
  <p className='introPara'> I'm a skilled web Developer with experince in creating<br/>  visually appealing and user friendly websites</p>
 <Link><button className='btn'><img src={btnImg} alt='hireme' className='btnImg'/>Hire ME </button></Link>

 </div>
 <img src={bg} alt='profile' className='bg'/>
 </section>
  )
}

export default Intro
