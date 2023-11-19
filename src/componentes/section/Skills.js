import styles from './Skills.module.css'
import js from '../../Image/skills/js.svg'
import html from '../../Image/skills/html.svg'
import css from '../../Image/skills/css.svg'
import react from '../../Image/skills/react.svg'
import typescipt from '../../Image/skills/typescript.svg'

function Skills() {
    return (
        <div className={styles.skill} id='Skills'>
            <h1>Habilidades</h1>
            <p>Conheça um pouco das minhas principais
                habilidades e conhecimentos.</p>
            <div>
                <img src={js} />
                <img src={html} />
                <img src={css} />
                <img src={react} />
                <img src={typescipt} />
            </div>
        </div>
    )
}

export default Skills