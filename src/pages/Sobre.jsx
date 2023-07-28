import Header from "../components/Header"
import styles from '../styles/pages/sobre.module.css'
import grupo from '../assets/fotosprojeto.png'


const Sobre = () => {
    return (
        <>
        
        <div >
        <h3>Projeto</h3>
        <p className={styles.conteinerText}>O Projeto Mães que Lutam foi idealizado por Ellen Cristina, casada e mãe de dois filhos, no ano de 2020.
Graduada na faixa vermelha ponta azul, passou a dar aulas voltada ao público feminino focada nas técnicas de Muay Thai.
No ano de 2022 recebeu um convite para ministrar aulas em Projeto Social no bairro onde mora - Moinho Velho em São Paulo. 
O Mães que Lutam busca através do esporte contribuir com os benefícios para saúde física e mental de mulheres que não tem condições financeiras para frequentar uma academia.  
.</p>
         <Header         
        image={grupo}
        
        />

        </div>
       
        
       
        </>
        
    )
}

export default Sobre