import React from 'react'
import Layout from '../hocs/Layout'
import { motion, AnimatePresence , useAnimation} from "framer-motion"
import { useInView } from 'react-intersection-observer';
import { connect } from 'react-redux'
function projets(props) {
  const array_designer_project_domaine = [
    {
      fr: [
        {
          id: 1,
          title: "Logos",
          description: "Conception de logos pour les marques et les entreprises.",
          domain: "Design graphique",
        },
        {
          id: 2,
          title: "Infographie",
          description: "Création d'infographies visuellement attrayantes pour présenter des données.",
          domain: "Infographie",
        },
        {
          id: 3,
          title: "Bannières",
          description: "Conception de bannières publicitaires percutantes pour promouvoir des produits ou des événements.",
          domain: "Design graphique",
        },
        {
          id: 4,
          title: "Icons",
          description: "Création d'icônes personnalisées pour les applications et les interfaces utilisateur.",
          domain: "Design graphique",
        },
        {
          id: 5,
          title: "Couverture des livres",
          description: "Conception de couvertures de livres attrayantes et captivantes.",
          domain: "Design graphique",
        },
        {
          id: 6,
          title: "Les Livres KDM",
          description: "Conception et mise en page de livres KDM (Knowledge Development Maps).",
          domain: "Design graphique",
        },
        {
          id: 7,
          title: "Packaging",
          description: "Conception d'emballages attrayants pour les produits.",
          domain: "Design packaging",
        },
        {
          id: 8,
          title: "AI Design",
          description: "Utilisation de l'intelligence artificielle pour créer des designs innovants et personnalisés.",
          domain: "Design graphique",
        },
      ],
      eng: [
        {
          id: 1,
          title: "Logos",
          description: "Logo design for brands and businesses.",
          domain: "Graphic Design",
        },
        {
          id: 2,
          title: "Infographics",
          description: "Creation of visually appealing infographics to present data.",
          domain: "Infographics",
        },
        {
          id: 3,
          title: "Banners",
          description: "Design of impactful advertising banners to promote products or events.",
          domain: "Graphic Design",
        },
        {
          id: 4,
          title: "Icons",
          description: "Creation of custom icons for applications and user interfaces.",
          domain: "Graphic Design",
        },
        {
          id: 5,
          title: "Book Covers",
          description: "Design of attractive and captivating book covers.",
          domain: "Graphic Design",
        },
        {
          id: 6,
          title: "KDM Books",
          description: "Design and layout of KDM (Knowledge Development Maps) books.",
          domain: "Graphic Design",
        },
        {
          id: 7,
          title: "Packaging",
          description: "Design of attractive packaging for products.",
          domain: "Packaging Design",
        },
        {
          id: 8,
          title: "AI Design",
          description: "Utilization of artificial intelligence to create innovative and personalized designs.",
          domain: "Graphic Design",
        },
      ],
    },
  ];
  
  
  const projects = [
    {
      fr: [
        {
          id: 1,
          image: '',
          name: "Site web avec Next.js et Redux",
          description: "Un site web créé avec Next.js et Redux. Next.js est un framework JavaScript utilisé pour développer des applications web côté serveur. Redux est une bibliothèque de gestion d'état qui facilite la gestion des données dans une application React. Par exemple, j'ai utilisé Next.js et Redux pour créer un site web vitrine pour une association.",
        },
        {
          id: 2,
          image: '',
          name: "Application mobile avec React Native, Redux et Firebase",
          description: "Une application mobile développée avec React Native, Redux et Firebase. React Native est un framework JavaScript utilisé pour créer des applications mobiles multiplateformes. Redux est utilisé pour gérer l'état de l'application, et Firebase est une plateforme de développement d'applications qui fournit des services tels que l'authentification, la base de données en temps réel, etc. Par exemple, j'ai développé une application d'apprentissage des langues avec des fonctionnalités de challenge en utilisant ces technologies.",
        },
        {
          id: 3,
          image: '',
          name: "Application de bureau avec Python et Selenium",
          description: "Une application de bureau créée avec Python et Selenium. Python est un langage de programmation polyvalent utilisé pour le développement d'applications de bureau. Selenium est une bibliothèque qui permet l'automatisation des tests web. J'ai utilisé ces technologies pour créer une application de bureau avec une interface graphique permettant d'envoyer des MMS automatiquement et d'analyser les réponses.",
        },
        {
          id: 4,
          image: '',
          name: "Scripts de classification de données avec Python",
          description: "Des scripts de classification de données développés avec Python et des bibliothèques d'intelligence artificielle telles que scikit-learn et TensorFlow. J'ai utilisé ces scripts pour effectuer des tâches de classification sur des ensembles de données, en utilisant des algorithmes d'apprentissage automatique. Par exemple, j'ai développé un script de classification de sentiments basé sur l'analyse des textes.",
        },
        {
          id: 5,
          image: '',
          name: "Récupération de données à partir d'un site web avec Python",
          description: "La récupération de données à partir d'un site web en utilisant Python. J'ai utilisé des bibliothèques telles que BeautifulSoup pour extraire les données d'une page web et les stocker dans un format structuré. Par exemple, j'ai développé un script pour récupérer des informations sur les produits à partir d'un site de commerce électronique.",
        },
        {
          id: 6,
          image: '',
          name: "Application de bureau pour la génération de rapports automatiques avec Python",
          description: "Une application de bureau développée avec Python pour la génération de rapports automatiques à partir de fichiers Excel. J'ai utilisé des bibliothèques telles que pandas et openpyxl pour lire les données à partir de fichiers Excel, les analyser et générer des rapports automatiquement. Par exemple, j'ai développé une application de génération de rapports pour une entreprise.",
        },
      ],
      eng: [
        {
          id: 1,
          image: '',
          name: "Website with Next.js and Redux",
          description: "A website created with Next.js and Redux. Next.js is a JavaScript framework used to develop server-side web applications. Redux is a state management library that facilitates data management in a React application. For example, I used Next.js and Redux to create a showcase website for an association.",
        },
        {
          id: 2,
          image: '',
          name: "Mobile application with React Native, Redux, and Firebase",
          description: "A mobile application developed with React Native, Redux, and Firebase. React Native is a JavaScript framework used to create cross-platform mobile applications. Redux is used to manage the application state, and Firebase is an application development platform that provides services such as authentication, real-time database, etc. For example, I developed a language learning application with challenge features using these technologies.",
        },
        {
          id: 3,
          image: '',
          name: "Desktop application with Python and Selenium",
          description: "A desktop application created with Python and Selenium. Python is a versatile programming language used for desktop application development. Selenium is a library that enables web testing automation. I used these technologies to create a desktop application with a graphical interface for automated MMS sending and response analysis.",
        },
        {
          id: 4,
          image: '',
          name: "Data classification scripts with Python",
          description: "Data classification scripts developed with Python and artificial intelligence libraries such as scikit-learn and TensorFlow. I used these scripts to perform classification tasks on datasets using machine learning algorithms. For example, I developed a sentiment classification script based on text analysis.",
        },
        {
          id: 5,
          image: '',
          name: "Data Scraping from a Website with Python",
          description: "Data scraping from a website using Python. I used libraries such as BeautifulSoup to extract data from a web page and store it in a structured format. For example, I developed a script to retrieve product information from an e-commerce website.",
        },
        {
          id: 6,
          image: '',
          name: "Desktop Application for Automated Report Generation with Python",
          description: "A desktop application developed with Python for automated report generation from Excel files. I used libraries such as pandas and openpyxl to read data from Excel files, analyze it, and generate reports automatically. For example, I developed a report generation application for a company.",
        },
      ],
    },
  ];
  
  
  
  const titleVariants = {
    hidden: {  },
    visible: {
     
   
      transition: {
        staggerChildren: 0.05,
      },
    },
  };
  const letterVariants = {
    hidden: { opacity: 0, y: 500 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        //ease: [0.6, 0.01, -0.05, 0.9], // utiliser un tableau de nombres
        // ou
     
        //delay: (childIndex) => childIndex * 0.05,
        ease: (t) => t * t, // utiliser une fonction
      },
    },
  };
  
  function ProjectItem({ item }) {
    const [ref, inView] = useInView({
      triggerOnce:true,
      threshold: 0.1
    });

   
    return (
   <motion.div className='project' ref={ref}
      key={item.id}
      initial={{ opacity:0 }}
      animate={inView ? { opacity:1  } : {}}
      transition={{ duration:1 , delay: 0.5}}

      >
        <div className='image' style={{backgroundImage:`url('/static/images/coding.jpg')`}} >
          <h1>image</h1>

        </div>
       <div className='information'>
        <motion.div
          className='title'
          key={`competence-item-${item.id}`} 
          ref={ref}
          style={{
         
          }}
          initial={{  }}
          animate={inView ? {  } : {}}
          transition={{ duration: 1 , delay: 0.5 }}
        >
   
            <h1>{item.name} </h1>
        
        </motion.div>
      
        <motion.div className='description'   key={item.id}
      initial={{ opacity:0 }}
      animate={inView ? { opacity:1  } : {}}
      transition={{ duration:1 , delay: 0.5}}>
          <p>{item.description}</p>
        </motion.div>
        </div>
      </motion.div>
   
    );
  }
  const contenu = [
    {
      fr: [
        {
          id: 1,
          title: "Découvrez mes réalisations et projets récents",
        },
      ],
      eng: [
        {
          id: 1,
          title: "Explore My Achievements and Recent Projects  ",
        },
      ],
    },
  ];
  
  return (
    <Layout>
    <div className='project-page'>
      <div className='domaines'>
        {array_designer_project_domaine[0]['fr'].map((item)=>{

          return(
            <div className='domaine'>
              <h1>{item.title}</h1>
            </div>
          )
        })}

      </div>
            <div className='big-title'>
  
        <motion.h1 variants={titleVariants} initial="hidden" whileInView="visible" >
                        {contenu[0][props.langue][0].title.split("").map((letter ,index) => (
                      <motion.span key={1} variants={letterVariants} transition={{ delay: index * 0.05 }} >{letter}</motion.span>
                    ))}
                          
                          
                        
                        </motion.h1>

        </div>
        <div className='all-project'>

        {projects[0][props.langue].map((item) => (
            <ProjectItem key={item.id} item={item} />
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


}

}

export default connect(mapStateToProps, mapDispatchToProps)(projets)



