import styles from './Navbar.module.css'
import { FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa";
import Nav from 'react-bootstrap/Nav'

function Navbar() {
    return (
        <div className={styles.navbar}>
            <ul>
                <li> <Nav.Link href='#Presentation'>Apresentação</Nav.Link></li>
                <li> <Nav.Link href='#Skills'>Habilidades</Nav.Link></li>
                <li><Nav.Link href='#Projects'>Projetos</Nav.Link></li>
            </ul>
            <ul>
                <li> <a href='https://www.instagram.com/marquescaioaraujo/'><FaInstagram size={30} /></a> </li>
                <li> <a href='https://github.com/caiomarquesaraujo'><FaGithub size={30} /></a> </li>
                <li> <a href='https://www.linkedin.com/in/caioaraujo1994/'><FaLinkedinIn size={30} /></a> </li>
            </ul>
        </div>
    )
}

export default Navbar