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
          name: "React Native",
          description: "React Native est un framework JavaScript permettant de développer des applications mobiles pour iOS et Android. Il utilise le même code source pour créer des applications multiplateformes. Par exemple, je peux utiliser React Native JS pour développer une application de livraison de nourriture avec une expérience utilisateur native sur les deux plateformes.",
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
        {
          id: 6,
          percentage: 25,
          name: "JavaScript",
          description: "JavaScript est un langage de programmation utilisé pour créer des applications web interactives. Il peut être utilisé pour ajouter des fonctionnalités dynamiques et des interactions aux sites web. Par exemple, je peux utiliser JavaScript pour valider les formulaires et créer des animations sur une page web.",
        },
        {
          id: 7,
          percentage: 10,
          name: "HTML/CSS",
          description: "HTML (HyperText Markup Language) et CSS (Cascading Style Sheets) sont les langages de base utilisés pour la création et la mise en forme des pages web. HTML est utilisé pour structurer le contenu, tandis que CSS est utilisé pour le style et la mise en page. Par exemple, je peux utiliser HTML/CSS pour créer un site web avec un design attrayant et une mise en page réactive.",
        },
        {
          id: 8,
          percentage: 15,
          name: "Django",
          description: "Django est un framework de développement web en Python qui permet de créer des applications web robustes et évolutives. Il suit le principe du modèle MVC (Modèle-Vue-Contrôleur) et fournit des fonctionnalités intégrées pour la gestion des utilisateurs, la gestion des bases de données, l'administration du site, etc. Par exemple, je peux utiliser Django pour développer un site web avec une architecture backend solide.",
        },
        {
          id: 9,
          percentage: 50,
          name: "Node.js",
          description: "Node.js est une plateforme de développement JavaScript côté serveur. Elle permet d'exécuter du code JavaScript en dehors d'un navigateur web et facilite la création d'applications réseau évolutives. Par exemple, je peux utiliser Node.js pour créer des API RESTful et des applications web en temps réel.",
        },
        {
          id: 10,
          percentage: 50,
          name: "Express.js",
          description: "Express.js est un framework web minimaliste pour Node.js. Il facilite la création d'applications web et d'API avec des routes, des gestionnaires de requêtes et de nombreuses fonctionnalités supplémentaires. Par exemple, je peux utiliser Express.js pour construire rapidement des services web avec Node.js.",
        },
        {
          id: 11,
          percentage: 10,
          name: "Firebase",
          description: "Firebase est une plateforme de développement d'applications mobiles et web proposée par Google. Elle fournit une infrastructure cloud pour stocker et synchroniser les données, gérer l'authentification des utilisateurs, envoyer des notifications push, etc. Par exemple, je peux utiliser Firebase pour créer une application web avec une base de données en temps réel et une authentification utilisateur.",
        },
        {
          id: 12,
          percentage: 40,
          name: "TensorFlow",
          description: "TensorFlow est une bibliothèque open-source d'apprentissage automatique développée par Google. Elle permet de construire et de former des modèles d'apprentissage automatique pour diverses tâches, telles que la classification, la reconnaissance d'images et la prédiction. Par exemple, je peux utiliser TensorFlow pour développer un modèle de détection d'objets.",
        },
        {
          id: 13,
          percentage: 5,
          name: "Selenium",
          description: "Selenium est un framework de test automatisé pour les applications web. Il permet d'automatiser les interactions avec les navigateurs web, ce qui facilite les tests fonctionnels et de régression. Par exemple, je peux utiliser Selenium pour automatiser les tests d'une application web pour différents scénarios.",
        },
        {
          id: 14,
          percentage: 40,
          name: "Scikit-learn",
          description: "Scikit-learn est une bibliothèque d'apprentissage automatique en Python qui offre des outils pour l'exploration de données, la préparation des données, la modélisation et l'évaluation des modèles. Elle inclut une grande variété d'algorithmes d'apprentissage supervisé et non supervisé. Par exemple, je peux utiliser Scikit-learn pour entraîner des modèles de classification ou de régression.",
        },
        {
          id: 15,
          percentage: 30,
          name: "NLP",
          description: "Le traitement du langage naturel (NLP) est un domaine de l'intelligence artificielle qui se concentre sur l'interaction entre les ordinateurs et le langage humain. Il comprend des tâches telles que la traduction automatique, la reconnaissance vocale, l'analyse de sentiment, etc. Par exemple, je peux utiliser des bibliothèques Python comme NLTK et SpaCy pour effectuer des tâches de NLP.",
        },
        {
          id: 16,
          percentage: 10,
          name: "Pandas",
          description: "Pandas est une bibliothèque Python très utilisée pour la manipulation et l'analyse de données. Elle offre des structures de données et des fonctions permettant de manipuler et d'analyser facilement des tableaux de données. Par exemple, je peux utiliser Pandas pour effectuer des opérations de filtrage, de tri et de regroupement sur un ensemble de données.",
        },
        {
          id: 17,
          percentage: 15,
          name: "VBA",
          description: "VBA est un langage de programmation utilisé pour automatiser des tâches dans les applications Microsoft Office, telles que Excel, Word et PowerPoint. Il permet d'écrire des macros et d'ajouter des fonctionnalités personnalisées aux applications Office. Par exemple, je peux utiliser VBA pour créer des rapports automatisés dans Excel.",
        },
        {
          id: 18,
          percentage: 30,
          name: "Android Studio",
          description: "Android Studio est l'environnement de développement officiel pour la création d'applications Android. Il fournit des outils avancés pour la conception d'interfaces utilisateur, la programmation, le débogage et le déploiement d'applications Android. Par exemple, je peux utiliser Android Studio pour créer une application Android avec une interface utilisateur attrayante et des fonctionnalités avancées.",
        },
        {
          id: 19,
          percentage: 5,
          name: "Tkinter",
          description: "Tkinter est une bibliothèque Python pour la création d'interfaces graphiques. Elle permet de créer des fenêtres, des boutons, des champs de saisie et d'autres éléments d'interface utilisateur. Par exemple, je peux utiliser Tkinter pour développer une application de bureau avec une interface utilisateur conviviale.",
        },
        {
          id: 20,
          percentage: 50,
          name: "VPS",
          description: "VPS est un serveur virtuel privé qui permet d'héberger des sites web et des applications dans un environnement isolé. Il offre une plus grande flexibilité et une meilleure sécurité par rapport à l'hébergement partagé. Par exemple, je peux configurer et gérer un VPS pour héberger mes propres sites web ou applications.",
        }
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
          name: "React Native",
          description: "React Native  is a JavaScript framework for developing mobile applications for iOS and Android. It uses the same codebase to create cross-platform applications. For example, I can use React Native JS to develop a food delivery application with a native user experience on both platforms.",
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
        {
          id: 6,
          percentage: 25,
          name: "JavaScript",
          description: "JavaScript is a programming language used to create interactive web applications. It can be used to add dynamic features and interactions to websites. For example, I can use JavaScript to validate forms and create animations on a web page.",
        },
        {
          id: 7,
          percentage: 10,
          name: "HTML/CSS",
          description: "HTML (HyperText Markup Language) and CSS (Cascading Style Sheets) are the foundational languages used for creating and styling web pages. HTML is used for structuring the content, while CSS is used for styling and layout. For example, I can use HTML/CSS to create a website with appealing design and responsive layout.",
        },
        {
          id: 8,
          percentage: 15,
          name: "Django",
          description: "Django is a Python web framework used for building robust and scalable web applications. It follows the MVC (Model-View-Controller) architectural pattern and provides built-in features for user management, database management, site administration, etc. For example, I can use Django to develop a website with a strong backend architecture.",
        },
        {
          id: 9,
          percentage: 50,
          name: "Node.js",
          description: "Node.js is a JavaScript runtime environment used for server-side programming. It allows executing JavaScript code outside of a web browser and facilitates the creation of scalable network applications. For example, I can use Node.js to create RESTful APIs and real-time web applications.",
        },
        {
          id: 10,
          percentage: 50,
          name: "Express.js",
          description: "Express.js is a minimalist web framework for Node.js. It makes it easy to build web applications and APIs with routes, request handlers, and many additional features. For example, I can use Express.js to quickly build web services with Node.js.",
        },
        {
          id: 11,
          percentage: 10,
          name: "Firebase",
          description: "Firebase is a mobile and web application development platform provided by Google. It provides a cloud infrastructure for storing and syncing data, managing user authentication, sending push notifications, etc. For example, I can use Firebase to create a web application with real-time database and user authentication.",
        },
        {
          id: 12,
          percentage: 40,
          name: "TensorFlow",
          description: "TensorFlow is an open-source machine learning library developed by Google. It allows building and training machine learning models for various tasks such as classification, image recognition, and prediction. For example, I can use TensorFlow to develop an object detection model.",
        },
        {
          id: 13,
          percentage: 5,
          name: "Selenium",
          description: "Selenium is an automated testing framework for web applications. It allows automating interactions with web browsers, making it easy to perform functional and regression testing. For example, I can use Selenium to automate tests for a web application for different scenarios.",
        },
        {
          id: 14,
          percentage: 40,
          name: "Scikit-learn",
          description: "Scikit-learn is a Python machine learning library that provides tools for data exploration, data preprocessing, modeling, and model evaluation. It includes a wide range of supervised and unsupervised learning algorithms. For example, I can use Scikit-learn to train classification or regression models.",
        },
        {
          id: 15,
          percentage: 30,
          name: "NLP",
          description: "Natural Language Processing (NLP) is a field of artificial intelligence that focuses on the interaction between computers and human language. It encompasses tasks such as machine translation, speech recognition, sentiment analysis, etc. For example, I can use Python libraries like NLTK and SpaCy to perform NLP tasks.",
        },
        {
          id: 16,
          percentage: 10,
          name: "Pandas",
          description: "Pandas is a widely-used Python library for data manipulation and analysis. It provides data structures and functions for easily manipulating and analyzing tabular data. For example, I can use Pandas to perform filtering, sorting, and grouping operations on a dataset.",
        },
        {
          id: 17,
          percentage: 15,
          name: "VBA",
          description: "VBA is a programming language used to automate tasks in Microsoft Office applications such as Excel, Word, and PowerPoint. It allows writing macros and adding custom functionality to Office applications. For example, I can use VBA to create automated reports in Excel.",
        },
        {
          id: 18,
          percentage: 30,
          name: "Android Studio",
          description: "Android Studio is the official development environment for creating Android applications. It provides advanced tools for UI design, programming, debugging, and deploying Android applications. For example, I can use Android Studio to create an Android app with a visually appealing UI and advanced features.",
        },
        {
          id: 19,
          percentage: 5,
          name: "Tkinter",
          description: "Tkinter is a Python library for creating graphical user interfaces. It allows creating windows, buttons, input fields, and other UI elements. For example, I can use Tkinter to develop a desktop application with a user-friendly UI.",
        },
        {
          id: 20,
          percentage: 50,
          name: "VPS (Virtual Private Server)",
          description: "VPS is a virtual private server that allows hosting websites and applications in an isolated environment. It offers greater flexibility and better security compared to shared hosting. For example, I can configure and manage a VPS to host my own websites or applications.",
        }
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






