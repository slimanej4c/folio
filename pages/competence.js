import React, { useState, useEffect } from "react";
import Layout from '../hocs/Layout';
import { motion } from "framer-motion";
import { connect } from 'react-redux';
import { useInView } from 'react-intersection-observer';

function Competence(props) {

  const contenu = [
    {
      fr: [{ id: 1, title: "Les compétences que je maîtrise" }],
      eng: [{ id: 1, title: "Skills I possess" }],
    },
  ];

  const competences = [
    {
      fr: [ /* ---- tes données FR inchangées ---- */ ],
      eng: [ /* ---- tes données ENG inchangées ---- */ ],
    },
  ];

  /*** ANIMATIONS ***/
  const titleVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 0.9,
      transition: { staggerChildren: 0.05 },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: t => t * t },
    },
  };

  /*** LOGIQUE D'AFFICHAGE SANS DOUBLONS ***/
  const [displayedItems, setDisplayedItems] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // ➤ Chaque index ne s’exécute qu'une seule fois, pas de setInterval
    if (currentIndex < competences[0][props.langue].length) {
      setDisplayedItems(prev => [
        ...prev,
        competences[0][props.langue][currentIndex]
      ]);

      // ➤ Passe à l'item suivant
      setCurrentIndex(prev => prev + 1);
    }

  }, [currentIndex, props.langue]);

  /*** COMPOSANT COMPETENCE ITEM ***/
  function CompetenceItem({ item }) {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
    const progess_color = "#eaa34c";

    return (
      <motion.div
        className="competence"
        ref={ref}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <motion.div
          className="title"
          style={{
            background: `conic-gradient(
              transparent 0%,
              transparent ${item.percentage}%,
              ${progess_color} ${item.percentage}%,
              ${progess_color} 100%
            )`
          }}
          initial={{
            background: `conic-gradient(
              transparent 0%,
              transparent 100%,
              ${progess_color} 100%,
              ${progess_color} 0%
            )`
          }}
          animate={
            inView
              ? {
                  background: `conic-gradient(
                    transparent 0%,
                    transparent ${item.percentage}%,
                    ${progess_color} ${item.percentage}%,
                    ${progess_color} 100%
                  )`,
                }
              : {}
          }
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="sous-title">
            <h1>{item.name}</h1>
          </div>
        </motion.div>

        <motion.div
          className="description"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <p>{item.description}</p>
        </motion.div>
      </motion.div>
    );
  }

  /*** RENDU FINAL ***/
  return (
    <Layout>
      <div className="competence-page">

        <div className="big-title">
          <motion.h1
            variants={titleVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {contenu[0][props.langue][0].title
              .split("")
              .map((letter, i) => (
                <motion.span key={i} variants={letterVariants}>
                  {letter}
                </motion.span>
              ))}
          </motion.h1>
        </div>

        <div className="all-competence">
          {displayedItems.map((item) => (
            <CompetenceItem key={item.id} item={item} />
          ))}
        </div>

      </div>
    </Layout>
  );
}

/*** REDUX ***/
const mapStateToProps = (state) => ({
  langue: state.change_langue_reducer.langue,
});

export default connect(mapStateToProps)(Competence);
