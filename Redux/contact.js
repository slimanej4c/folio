import React ,{useState} from 'react'
import { connect } from 'react-redux'
import Layout from '../hocs/Layout'
import { motion, AnimatePresence } from "framer-motion"

import {faLocationDot ,faPhone ,faMobilePhone ,faEnvelope ,faBank ,faMoneyBill

} from "@fortawesome/free-solid-svg-icons";
import {
    faFacebook ,faTwitter,faLinkedin
    
  } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export const contact = (props) => {

    const contact_array = [
        {
          fr: {
            contact: "Contactez-moi sur le site : ",
          },
          eng: {
            contact: "Contact me on the website: ",
          },
        },
      ];
      

    
    const [name, setname] = useState("")
    const defaultProps = {
      center: {
        lat: 10.99835602,
        lng: 77.01502627
      },
      zoom: 11 
    };
  
    const handleSubmit=()=>{
      console.log('clicked')
  
    }
  
    const formVariants = {
      hidden: {opacity: 0  ,height:'100%',width:'100%'},
      visible: { opacity: 1,height:'100%',width:'100%' , transition: { duration: 2  , type: "spring",} },
    };

  
    return (
      <Layout>
     
       <div className='contact-page'  >
        <motion.div className='contact-all'  variants={formVariants}
                 viewport={{ once: true }}
                 initial='hidden'
                 whileInView='visible' style={{height:"100%",width:"100%"}}>
             
                     
                 
                      <div className='contact-info-text'>
                      <ul>
                  
                    <li> <FontAwesomeIcon icon={faLocationDot}  className="contact-icon"/> ALGERIA</li>
                    <li> <FontAwesomeIcon icon={faPhone}  className="contact-icon"/> +213 664 59 55 64</li>
                    <li> <FontAwesomeIcon icon={faEnvelope}  className="contact-icon"/> ragnr1492@gmail.com</li>
         
                    <a href="https://www.facebook.com/votreprofilfacebook" target="_blank" rel="noopener noreferrer"> 
                     <li> <FontAwesomeIcon icon={ faFacebook }  className="contact-icon"/>
                     Lhaouas Boli Bourekhis
                      </li>
                     </a>

                    
                  </ul>
  
                      </div>

                      <div className='site_freelance'>
                     
                      <a href=" https://comeup.com/fr/@prodz34" target="_blank" rel="noopener noreferrer"> 
                      <p>{contact_array[0][props.langue].contact} https://comeup.com </p>
                     </a>
                      
                      </div>
  
                 
        </motion.div>
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
  
  export default connect(mapStateToProps, mapDispatchToProps)( contact )
  
  
  
  