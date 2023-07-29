import styles from '../styles/components/footer.module.css'
import { Link } from 'react-router-dom'
const Footer = ({content}) => {
    return (
        <footer className={styles.footerContainer}>
            <p className={styles.footerContent}>{content}</p>
            <Link to="https://www.instagram.com/" ><img width="48" height="48" src="https://img.icons8.com/color/48/instagram-new--v1.png" alt="instagram-new--v1"/>
            </Link>
            
        </footer>
    )
}
export default Footer