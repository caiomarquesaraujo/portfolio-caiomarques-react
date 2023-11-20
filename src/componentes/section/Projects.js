import styles from './Projects.module.css'
import ButtonB from '../elements/ButtonB'
import Card from '../elements/Card'
import lpdnc from '../../Image/projects/lpdnc.svg'
import portfolio from '../../Image/projects/portfolio-caio.PNG'
import triloco from '../../Image/projects/tri-loco.PNG'

function Projects() {
    return (
        <div className={styles.project} id='Projects'>
            <h1>Projetos</h1>
            <Card
                img={lpdnc}
                title='LP - DNC'
                tech='HTML, CSS e JS'
                description='Desenvolvimento de uma Landing Page para o lançamento da formação em técnologia.'
                repo='https://github.com/caiomarquesaraujo/projeto-landing-page'
                site='https://desafiolandingpagearquiteturacm.netlify.app/'
            />
            <Card
                img={portfolio}
                title='Portfolio React'
                tech='React'
                description='Desenvolvimento de um portfolio utilizando react.'
                repo='https://github.com/caiomarquesaraujo/projeto-landing-page'
                site='https://desafiolandingpagearquiteturacm.netlify.app/'
            />
            <Card
                img={triloco}
                title='Carrocel (JS)'
                tech='HTML, CSS e JS'
                description='Desenvolvimento de uma pagina para capitação de inscrições, utilizando HTML, CSS e JS.'
                repo='https://github.com/caiomarquesaraujo/projeto-triloco'
                site='https://projeto-triloco.vercel.app/'
            />


            <ButtonB text={'Acesse meu repossitório'} link='https://github.com/caiomarquesaraujo' />
        </div>
    )
}

export default Projects