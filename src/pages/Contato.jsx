import { useState } from "react";
import styles from '../styles/pages/contato.module.css';
import database from "../service/firebase";
import { ref, push, set } from 'firebase/database';

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

    function handleSubmit(e) {
       e.preventDefault()
       
       const messageListRef = ref(database, 'mensagens')
       const newMessageRef = push(messageListRef)
       set(newMessageRef, {
        nome: nome,
        email: email,
        texto: mensagem,
       })
       
       setNome('')
       setEmail('')
       setMensagem('')
    }

   return (
    <>
    <h1 className={styles.tilte}>Venha treinar com a gente👊!</h1>
    <div>
        <p>Rua Virginia Cardoso,n 87 - Sede do Inter - Moinho Velho - SP</p>
          
           <p>Aulas segunda e quarta-feira - 18h💕 </p>
        
          
    </div>
        
     <div className={styles.formContainer}>
        <form className={styles.form} onSubmit={handleSubmit}>
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