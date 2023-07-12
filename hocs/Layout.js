

import React, {useState,useEffect} from 'react'
import Link from 'next/link'

import { Set_langue_redux } from '../Redux'

import { connect } from 'react-redux'
import { motion } from "framer-motion";

import { useRouter } from 'next/router';

const Layout =(props) =>{

const[show_nav,setshow_nav]=useState(false)
const [open, setOpen] = useState(false);
const [nav_closed, setnav_closed] = useState("layout-nav");
const [nav_opened, setnav_opened] = useState("layout-nav");

const [per, setper] = useState(false);
const [show_model, setshow_model] = useState(true);
const [clickedd, setClickedd] = useState(false);

const [showNav, setShowNav] = useState(true);
const [getlang, setgetlang] = useState("");
const [isChecked, setisChecked] = useState(props.langue==='fr'? null : true);
const [to_route, settoroute] = useState(true);

const [To_link, setTo_link] = useState("fr");
const routerr = useRouter();

const  lang  = routerr.asPath;
const lastWord = lang.split('=').slice(-1)[0];
const firstWord = lang.split('=').slice(0)[0]+"=";





useEffect(() => {

 
    setShowNav(true)
// Délai de 2 secondes avant d'afficher le composant de navigation
}, []);

useEffect(() => {



// Délai de 2 secondes avant d'afficher le composant de navigation
}, [props.langue]);
useEffect(() => {
  const  lang  = routerr.asPath;
const lastWord = lang.split('=').slice(-1)[0];
const firstWord = lang.split('=').slice(0)[0]+"=";
  if (lastWord === "fr") {
    
 
    if (props.langue!== "fr") {
   
      props.Set_langue_redux("fr")
     
      
    }
  }
  
  if (lastWord === "eng") {
    console.log('lang...egal eng.',props.langue,lang ,"laseword:",lastWord,";",clickedd,"chk",isChecked)
  

    
    if (props.langue!== "eng") {
   
      props.Set_langue_redux("eng")
     
    }
  }
  console.log('lang..........',props.langue,lang ,"laseword:",lastWord , firstWord,clickedd ,"chk",isChecked ,props.langue )
  
     
  }, [clickedd ]);

  async function handleClick() {
    const lang = routerr.asPath;
    const lastWord = lang.split('=').slice(-1)[0];
    const firstWord = lang.split('=').slice(0)[0] 
    const firstword=firstWord.split('?').slice(0)[0]
  
    if (lastWord === "fr") {
      await routerr.push(firstword +"?lang=eng");
     

      
      setClickedd(!clickedd);
    } else {
      await routerr.push(firstword +"?lang=fr");
   
      
      setClickedd(!clickedd);
    }
  }
  


   
    // ...




  
  useEffect(() => {
   
  
  
  }, [per]);
const navbarVariants = {
  hidden: { y: "0%" },
  visible: {
    y: 0,
    transition: {
     
      duration: 0.75,
      type: "spring",
      stiffness: 100,
      mass: 0.5,
      damping: 10,
      staggerChildren: 0.1,
      delayChildren: 0.5,
    },
  },
};

const itemVariants = {
  hidden: { y: "0%", opacity: 1 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
     
      duration: 0.75,
      type: "spring",
      stiffness: 100,
      mass: 0.5,
      damping: 10,
      staggerChildren: 0.1,
      delayChildren: 0.5,
    },
  },
};
const modelVariants = {
  hidden: { x: "-100%", opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
     
      duration: 2,
      type: "spring",
      stiffness: 50,
      mass: 1,
      damping: 10,
      staggerChildren: 0.1,
      delayChildren: 0.5,
    },
  },
};
const logoVariants = {
  rotate: {
    transform: "rotate(360deg)",
    transition: {
      duration: 1,
      repeat: Infinity,
      repeatDelay: 15,
      ease: "linear",
    
    },
  },
};

const clicked_mobile =()=>{
  
  {setOpen(!open)}
  setshow_nav(!show_nav)
  setnav_closed("layout-nav nav_closed")
  setnav_opened("layout-nav nav_opened")
}
const clicked =(to_link)=>{


}
const MenuIcon = () => {
 
 

  return (
    <div className={`menu-icon ${open ? "open" : ""}`} onClick={() =>clicked_mobile()}>
      <div className="bar line1"></div>
      <div className="bar line2"></div>
      <div className="bar line3"></div>
    </div>
  );
};

//essayer avec position fixed ou absolute pour fixer les element de nav bar
                  

const link_array = [
    {
      "fr": [
        { id: 1, title: 'Accueil', to: `/?lang=fr`},
        { id: 2, title: 'À propos', to: `/apropos?lang=fr`},
        { id: 3, title: 'Compétence', to:  `/competence?lang=fr`},
        { id: 4, title: 'Projets', to: `/projets?lang=fr` },
        { id: 4, title: 'Contact', to: `/contact?lang=fr` },
      ],
      "eng": [
        { id: 1, title: 'Home', to: '/?lang=eng' },
        { id: 2, title: 'About', to: '/apropos?lang=eng' },
        { id: 3, title: 'Skills', to: '/competence?lang=eng' },
        { id: 4, title: 'Projects', to:`/projets?lang=fr` },
        { id: 4, title: 'Contact', to: `/contact?lang=fr` },
      ]
    }
  ];

const Nav=()=>{
  const contact_div="item-div contact"
  const other_div="item-div"
  return(
    <nav className={show_nav ? nav_opened :nav_closed}>
    
  
            <motion.ul
                className="nav-ul"
                variants={navbarVariants}
                initial="hidden"
                animate="visible"
              >
                 <input
        className="switch"
        type="checkbox"
        checked={props.langue==="fr" ? false : true}
        onClick={()=>handleClick()}
  
      />
                    { link_array[0][ props.langue].map((item) => (
            <motion.li
              key={item.id}
              variants={itemVariants}
              className={item.to ===lang  ? contact_div : other_div}
            >
              <Link className={item.to ===lang ? "nav-link clicked"  : "nav-link"} 
          
              href={item.to} onClick={() => clicked(item.to)} >
                {item.title}{getlang}
              
         
              </Link>
            </motion.li>
          )) }
              </motion.ul>
      
      </nav>
  )
}

const texts_model = {
  FR: {
    title: 'Ce site utilise des cookies.',
    content: 'Ce site utilise des cookies. En continuant à utiliser ce site, vous consentez à l\'utilisation des cookies.',
    acceptButton: 'Accepter les cookies',
    continueButton: 'Continuer sans cookies'
  },
  ENG: {
    title: 'This site uses cookies.',
    content: 'This site uses cookies. By continuing to use this site, you consent to the use of cookies.',
    acceptButton: 'Accept cookies',
    continueButton: 'Continue without cookies'
  },
  DE: {
    title: 'Diese Website verwendet Cookies.',
    content: 'Diese Website verwendet Cookies. Durch die weitere Nutzung dieser Website stimmen Sie der Verwendung von Cookies zu.',
    acceptButton: 'Cookies akzeptieren',
    continueButton: 'Ohne Cookies fortfahren'
  }
};



    return (
  <>
    
     
     {/*  <PersistGate loading={null} persistor={per ? persistStore(store) :  persistStore(store2)}> */}
   
      
      <div className="layout-all">
       
     {showNav && Nav()}
     
     <motion.div className="nav-logo" animate="rotate" variants={logoVariants}>
     
      </motion.div>
            <div className="layout-nav-mobile">
           
                      {MenuIcon()}
                
          </div>
  
     <div className='layout-header'>
        <div className="layout-container">
          {props.children}
       
        </div>
      
  
      
      </div>
     
    </div>
   {/*  </PersistGate> */}
      
   
  

      </>
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

export default connect(mapStateToProps, mapDispatchToProps)( Layout)





