import React,  { useState, useEffect } from "react";
import Layout from '../hocs/Layout'
import { motion, AnimatePresence , useAnimation} from "framer-motion"

import { connect } from 'react-redux'
import { useInView } from 'react-intersection-observer';
function competence(props) {
  const contenu = [
    {
      fr: [
        {
          id: 1,
          title: "Les compétences que je maîtrise",
        },
      ],
      eng: [
        {
          id: 1,
          title: "Skills I possess               ",
        },
      ],
    },
  ];
  
  const competences = [
    {
      fr: [
        {
          id: 1,
          percentage: 10,
          name: "Next JS",
          description: "Next JS est un framework JavaScript utilisé pour créer des applications web rapides et performantes. Il permet de développer des applications côté serveur et côté client en utilisant React et Node.js. Par exemple, je peux utiliser Next JS pour créer une application de commerce électronique avec des fonctionnalités avancées de rendu côté serveur.",
        },
        {
          id: 2,
          percentage: 10,
          name: "React JS",
          description: "React JS est une bibliothèque JavaScript populaire utilisée pour construire des interfaces utilisateur interactives. Avec React JS, je peux créer des composants réutilisables et construire des applications web réactives. Par exemple, je peux utiliser React JS pour développer une application de gestion des tâches avec des fonctionnalités de glisser-déposer.",
        },
        {
          id: 3,
          percentage: 20,
          name: "React Native JS",
          description: "React Native JS est un framework JavaScript permettant de développer des applications mobiles pour iOS et Android. Il utilise le même code source pour créer des applications multiplateformes. Par exemple, je peux utiliser React Native JS pour développer une application de livraison de nourriture avec une expérience utilisateur native sur les deux plateformes.",
        },
        {
          id: 4,
          percentage: 5,
          name: "Python",
          description: "Python est un langage de programmation polyvalent utilisé pour développer des applications web, des applications de bureau, des scripts et bien plus encore. Il est connu pour sa syntaxe claire et concise et sa vaste bibliothèque standard. Par exemple, je peux utiliser Python pour créer un système de recommandation personnalisé pour une plateforme de streaming vidéo.",
        },
        {
          id: 5,
          percentage: 5,
          name: "MySQL",
          description: "MySQL est un système de gestion de base de données relationnelle très populaire. Il permet de stocker et de récupérer des données de manière efficace. Par exemple, je peux utiliser MySQL pour concevoir et gérer la base de données d'une application de gestion des stocks pour une entreprise de commerce électronique.",
        },
      ],
      eng: [
        {
          id: 1,
          percentage: 10,
          name: "Next JS",
          description: "Next JS is a JavaScript framework used to create fast and performant web applications. It allows for server-side and client-side application development using React and Node.js. For example, I can use Next JS to build an e-commerce application with advanced server-side rendering features.",
        },
        {
          id: 2,
          percentage: 10,
          name: "React JS",
          description: "React JS is a popular JavaScript library used to build interactive user interfaces. With React JS, I can create reusable components and build responsive web applications. For example, I can use React JS to develop a task management application with drag-and-drop functionality.",
        },
        {
          id: 3,
          percentage: 20,
          name: "React Native JS",
          description: "React Native JS is a JavaScript framework for developing mobile applications for iOS and Android. It uses the same codebase to create cross-platform applications. For example, I can use React Native JS to develop a food delivery application with a native user experience on both platforms.",
        },
        {
          id: 4,
          percentage: 5,
          name: "Python",
          description: "Python is a versatile programming language used for web development, desktop applications, scripting, and more. It is known for its clear and concise syntax and extensive standard library. For example, I can use Python to create a personalized recommendation system for a video streaming platform.",
        },
        {
          id: 5,
          percentage: 5,
          name: "MySQL",
          description: "MySQL is a highly popular relational database management system. It allows for efficient data storage and retrieval. For example, I can use MySQL to design and manage the database for a stock management application for an e-commerce company.",
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
  const percentage = 30; 
  const [displayedItems, setDisplayedItems] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const progess_color="#eaa34c"
  useEffect(() => {
    const delay = 0; // Délai de 5 secondes

    const intervalId = setInterval(() => {

      if (currentIndex=== competences[0][props.langue].length) {
        clearInterval(intervalId);
      }
      else{
        setDisplayedItems((prevItems) => [...prevItems, competences[0][props.langue][currentIndex]]);
        setCurrentIndex((prevIndex) => prevIndex + 1);

      }
    }, delay);

    return () => {
      clearInterval(intervalId);
    };
  }, [currentIndex]);

  function CompetenceItem({ item }) {
    const [ref, inView] = useInView({
      triggerOnce:true,
      threshold: 0.1
    });

   
    return (
   <motion.div className='competence' ref={ref}
      key={item.id}
      initial={{ opacity:0 }}
      animate={inView ? { opacity:1  } : {}}
      transition={{ duration:1 , delay: 0.5}}
      >
       
        <motion.div
          className='title'
          key={`competence-item-${item.id}`} 
          ref={ref}
          style={{
            background: `conic-gradient(transparent 0%, transparent ${item.percentage}%,  ${progess_color} ${item.percentage}%, ${progess_color} 100%)`
          }}
          initial={{ background: 'conic-gradient(transparent 0%, transparent 100%, #2be22b 100%, #2be22b 0%)' }}
          animate={inView ? { background: `conic-gradient(transparent 0%, transparent ${item.percentage}%, ${progess_color} ${item.percentage}%,  ${progess_color} 100%)` } : {}}
          transition={{ duration: 1 , delay: 0.5 }}
        >
          <div className='sous-title'>
            <h1>{item.name} </h1>
          </div>
        </motion.div>
      
        <motion.div className='description'   key={item.id}
      initial={{ opacity:0 }}
      animate={inView ? { opacity:1  } : {}}
      transition={{ duration:1 , delay: 0.5}}>
          <p>{item.description} {ref}{item.id}</p>
        </motion.div>
      </motion.div>
   
    );
  }
  return (
    <Layout>
    <div className='competence-page'>
          <div className='big-title'>

          <motion.h1 variants={titleVariants} initial="hidden" whileInView="visible"  viewport={{ once: true }} >
                        {contenu[0][props.langue][0].title.split("").map((letter) => (
                      <motion.span key={1} variants={letterVariants}>{letter}</motion.span>
                    ))}
                          
                          
                        
                        </motion.h1>
          </div>
          <div className='all-competence'>
          {displayedItems.map((item) => (
            <CompetenceItem key={item.id} item={item} />
          ))}
                 
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
  Set_langue_redux:(lang)=>dispatch(Set_langue_redux(lang)),

}

}

export default connect(mapStateToProps, mapDispatchToProps)( competence)






