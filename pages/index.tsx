import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { Set_langue_redux } from '../Redux'

import { connect } from 'react-redux'
import { motion } from 'framer-motion';
import React, { useState } from "react";
import Layout from '../hocs/Layout'
import { transform } from 'typescript'
const inter = Inter({ subsets: ['latin'] })

 function Home(props) { 
  const [blur, setBlur] = useState(0);
  const getRandomShape = () => {
    // Logique pour générer une forme aléatoire
    // Par exemple, vous pouvez utiliser des calculs aléatoires pour définir les coordonnées de chaque point de la forme
    // ou utiliser des bibliothèques de génération de formes aléatoires comme "random-shape" ou "d3-random"
  };
  const contenu = [
    {
      fr: [
        {
          id: 1,
          title: "Salut, je suis Elh'ouas Bourekhis, spécialisé dans la création de sites web, d'applications mobiles et d'applications desktop.",
          text: "Je suis un freelance spécialisé dans le développement de solutions web et mobiles performantes et réactives. Avec une expertise dans Next.js, React.js, Django, React Native et Python, je suis en mesure de créer des expériences utilisateur exceptionnelles pour mes clients.",
        },
      ],
      eng: [
        {
          id: 1,
          title: "Hi, I'm Slimane Benmayouf, specialized in creating websites, mobile apps, and desktop apps.                                    ",
          text: "I'm a freelancer specialized in developing high-performance and responsive web and mobile solutions. With expertise in Next.js, React.js, Django, React Native, and Python, I'm able to create exceptional user experiences for my clients.",
        },
      ],
    },
  ];
  
  const shapeVariants = {
    initial: { opacity: 0, rotate: 0 },
    animate: { opacity: 1, rotate: 360 },
  };
  function handleMouseMove  (event:any)  {
    const { clientX, clientY } = event;
    const { left, top, width, height } = event.target.getBoundingClientRect();

    const offsetX = clientX - left;
    const offsetY = clientY - top;

    const percentX = offsetX / width;
    const percentY = offsetY / height;

    const maxBlur = 10; // Adjust the maximum blur value

    const newBlur = Math.round(Math.max(percentX, percentY) * maxBlur);
    setBlur(newBlur);
  };

  const handleMouseLeave = () => {
    setBlur(0);
  };
  const titleVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 0.9,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };
  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        //ease: [0.6, 0.01, -0.05, 0.9], // utiliser un tableau de nombres
        // ou
        ease: (t) => t * t, // utiliser une fonction
      },
    },
  };
  const rotateVariants ={
  initial:{
    x:'-50%',
    rotate:-90 ,
  },
    animate:{
      x:"0%",
      rotate: 0 ,
      transition: { duration: 4  , type: "spring",     stiffness: 10,
      mass: 2,
      damping:3,
      staggerChildren: 0.1,
      delayChildren: 5,} 
    }

  }
  return (
  
    <Layout>
    <div className='home'>

           <div  className='home-all'>
             

                    <div  className='home-left'>
                       <div className='text'>
                        <motion.h1 variants={titleVariants} initial="hidden" whileInView="visible" >
                        {contenu[0][props.langue][0].title.split("").map((letter) => (
                      <motion.span key={1} variants={letterVariants}>{letter}</motion.span>
                    ))}
                          
                          
                        
                        </motion.h1>
                          <motion.p   initial={{ opacity:0 }}
      animate={{ opacity:1  } }
      whileInView="visible"
      transition={{ duration:3 , delay: 0.5}}> 
      
      {contenu[0][props.langue][0].text}</motion.p>
                          
                       </div>
                 
                    </div>

                    <div className='home-right'>

                       <motion.div className='image' style={{backgroundImage:`url('/static/images/coding.jpg')`}}  onMouseMove={handleMouseMove}
                         initial="initial"
                         animate="animate"
                         variants={rotateVariants}
      onMouseLeave={handleMouseLeave}>
        

                       </motion.div>
                       <style jsx>{`
       

        .image {
          width:80%;
          height: 80%;
          justify-content: center;
          align-items: center;
      border-radius: 50px;
        background-size: cover;
        background-position: center center;
        background-repeat: no-repeat;
        filter: blur(0px);
          filter: blur(${blur}px) brightness(1.2);
          transition: filter 0.3s ease-out;
        }
      `}</style>

                    </div>
 
      
           </div>
 
    </div>
    </Layout>

  )
}


const mapStateToProps = (state) => ({
 
  langue:state.change_langue_reducer.langue,


})

const mapDispatchToProps = dispatch =>{
return{


}

}

export default connect(mapStateToProps, mapDispatchToProps)( Home)





