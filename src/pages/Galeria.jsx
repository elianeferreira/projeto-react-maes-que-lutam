
import Header from '../components/Header'
import montagem from "../assets/Designgaleira.mp4"
import styles from '../styles/pages/galeria.module.css'


const Galeria = () => {
    return (
        
    <div className={styles.galeriaContainer}>
       <video width="800" height="700" controls>
         <source src={montagem} type="video/mp4"/>
       </video>
       
    </div>   
        
               
               
          
        
    
                
     





    )
}

export default Galeria