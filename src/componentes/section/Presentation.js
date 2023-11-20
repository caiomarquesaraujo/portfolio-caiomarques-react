import styles from './Presentation.module.css'
import ButtonA from '../elements/ButtonA'
import ButtonB from '../elements/ButtonB'


function Presentation() {
    return (
        <div id='Presentation' className={styles.presentation}>
            <h4><strong>Bem-vindo ao meu Portfólio</strong> </h4>
            <h1>Olá, eu sou o Caio Marques!</h1>
            <p>
                Sou um iniciante no meio de tecnologia e desenvolvimento. <br />
                Busco migrar de carreira e me recolocar no mercado de trabalho <br />
                atuando como desenvolvedor, utilizando todo conhecimento que <br />
                adquiri ao longo de 5 anos de faculdade de engenharia elétrica <br />
                e do meu curso de especialização em desenvolvimento back e front-end.
            </p>
            <ButtonA link='https://github.com/caiomarquesaraujo' text='Conecte-se comigo!' />

        </div>

    )

}

export default Presentation