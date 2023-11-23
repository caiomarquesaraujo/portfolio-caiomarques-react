import styles from './Presentation.module.css'
import ButtonA from '../elements/ButtonA'
import { useState, useEffect } from 'react'


function Presentation() {
    const [text, setText] = useState('')
    const toRotate = ['Caio Marques!   ', 'Engenheiro Eletricista!   ', 'Desenvolvedor em Evolução!   ']
    const [loop, setLoop] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false);
    const period = 100
    const [delta, setDelta] = useState(100)

    useEffect(() => {
        let ticker = setInterval(() => {
            toType()
        }, delta)
        return () => { clearInterval(ticker) }

    }, [text])

    const toType = () => {
        let i = loop % toRotate.length;
        let fullText = toRotate[i]
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)

        setText(updatedText);

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setDelta(period);
            setLoop(loop + 1);
        }
    }


    return (
        <div id='Presentation' className={styles.presentation}>
            <h4><strong>Bem-vindo ao meu Portfólio</strong> </h4>
            <h1>Olá, eu sou o {text}</h1>
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