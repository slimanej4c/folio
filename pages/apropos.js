
import Layout from '../hocs/Layout'
import { motion } from 'framer-motion';
import { connect } from 'react-redux'
import React, { useState } from "react";
function apropos(props) {
  const contenu = [
    {
      fr: [
        {
          id: 1,
          title: "À propos de moi",
          text: "Je suis un développeur passionné avec une expertise dans les technologies de pointe. Ma spécialité se concentre principalement sur la création de sites web et d'applications en utilisant des frameworks tels que React JS, Next JS et React Native. Je suis également compétent en programmation Python, ce qui me permet de développer des applications desktop personnalisées. Avec une solide expérience dans le développement frontend et backend, je suis en mesure de concevoir des interfaces utilisateur interactives, réactives et esthétiquement attrayantes. J'ai une bonne connaissance des concepts clés tels que la gestion de l'état, les composants réutilisables et la manipulation des données. Mon objectif est de créer des solutions technologiques innovantes qui répondent aux besoins uniques de mes clients. Je suis constamment à l'affût des dernières tendances et technologies émergentes pour offrir des produits de qualité supérieure. Si vous recherchez un développeur expérimenté pour votre prochain projet de site web ou d'application, n'hésitez pas à me contacter. Je suis impatient de mettre mes compétences et mon expertise au service de votre réussite."
        },
      ],
      eng: [
        {
          id: 1,
          title: "About Me       ",
          text: "I am a passionate developer with expertise in cutting-edge technologies. My specialty primarily focuses on creating websites and applications using frameworks such as React JS, Next JS, and React Native. I am also proficient in Python programming, which allows me to develop customized desktop applications. With a strong background in frontend and backend development, I am capable of designing interactive, responsive, and aesthetically appealing user interfaces. I have a good understanding of key concepts such as state management, reusable components, and data manipulation. My goal is to create innovative technological solutions that meet the unique needs of my clients. I am constantly keeping up with the latest trends and emerging technologies to deliver top-quality products. If you are looking for an experienced developer for your next website or application project, feel free to contact me. I look forward to leveraging my skills and expertise to contribute to your success."
        },
      ],
    },
  ];

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
          x:'50%',
          rotate:90 ,
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
    <div className='aprops'>

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

            <motion.div className='image' style={{backgroundImage:`url('/static/images/profile.jpg')`}}  
              initial="initial"
              animate="animate"
              variants={rotateVariants}>


            </motion.div>
         
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

export default connect(mapStateToProps, mapDispatchToProps)( apropos)
