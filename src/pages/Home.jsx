import Header from "../components/Header"
import home from '../assets/maes2 .jpg'
import styles from '../styles/pages/home.module.css'
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>
        
        <Header title="" image={home} />
    <div className={styles.homeContainer}>         
        <div>
            <Link to="https://www.significados.com.br/muay-thai/" target="_blank">
            <img width="50" height="50" src="https://img.icons8.com/ios/50/boxing.png" alt="boxing"/> 
          <h2>Muay thai</h2>
            </Link>
            <p></p>
          </div>  
          <div>
            <Link to="https://medicoresponde.com.br/muay-thai-beneficios-para-o-corpo-de-quem-faz/">
          <img width="64" height="64" src="https://img.icons8.com/external-others-phat-plus/64/external-active-gym-outline-others-phat-plus-14.png" alt="external-active-gym-outline-others-phat-plus-14"/>
          <h2>Saúde</h2>
          </Link>
          <p></p>
          </div>
          <div>
          <Link to="https://www.instagram.com/maes.que.lutam/">
          <img width="64" height="64" src="https://img.icons8.com/windows/64/email.png" alt="email"/>
          <h2>Contato</h2>
          <p></p>
          </Link>
          </div>
    </div>
      </> 
        
        
    )
}

export default Home