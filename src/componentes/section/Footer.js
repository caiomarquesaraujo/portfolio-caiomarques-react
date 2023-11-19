import styles from './Footer.module.css'
import { FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa";

function Footer() {
    return (
        <div className={styles.footer}>
            <ul>
                <li> <a href='https://www.instagram.com/marquescaioaraujo/'><FaInstagram size={30} /></a> </li>
                <li> <a href='https://github.com/caiomarquesaraujo'><FaGithub size={30} /></a> </li>
                <li> <a href='https://www.linkedin.com/in/caioaraujo1994/'><FaLinkedinIn size={30} /></a> </li>
            </ul>
            <p>caio.mas@uol.com.br</p>
            <p>Caio Marques @ 2023</p>
        </div>
    )
}

export default Footer