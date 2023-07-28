import styles from '../styles/components/footer.module.css'

const Footer = ({content}) => {
    return (
        <footer className={styles.footerContainer}>
            <p className={styles.footerContent}>{content}</p>
            <img width="48" height="48" src="https://img.icons8.com/color/48/instagram-new--v1.png" alt="instagram-new--v1"/>
        </footer>
    )
}
export default Footer