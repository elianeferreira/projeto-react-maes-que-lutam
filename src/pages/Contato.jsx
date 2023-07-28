import { useState } from "react";
import styles from '../styles/pages/contato.module.css'

const Contato = () => {
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [mensagem, setMensagem] = useState('')

    function handleInputNome(e){
        setNome(e.target.value)
    }
    function handleInputEmail(e){
        setEmail(e.target.value)
    }
    function handleInputMensagem(e){
        setMensagem(e.target.value)
    }
    return (
    <>
    <h1 className={styles.tilte}>Venha treinar com a gente👊!</h1>
    <div>
        <p>Rua Virginia Cardoso,n 87 - Sede do Inter </p>
          
           <p>Aulas segunda e quarta-feria - as 18h </p>
        
          
    </div>
        
     <div className={styles.formContainer}>
        <form className={styles.form} onSubmit={()=>{}}>
           <input 
           className={styles.formInput}
            type="text" 
            placeholder="Digite seu nome"
            onChange={handleInputNome}
            value={nome}/>
           <input 
           className={styles.formInput}type="email" 
           placeholder="Digite seu email"
           onChange={handleInputEmail}
           value={email}/>
           <textarea 
           className={styles.formInput} 
           placeholder="Digite sua mensagem"
           onChange={handleInputMensagem}
           value={mensagem}/>
           <button
           className={styles.formButton} 
           type="submit">Enviar mensagem</button>
        </form>
     </div>
     

</>
)

}

export default Contato