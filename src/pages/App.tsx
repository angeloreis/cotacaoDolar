import { FormEvent, useState } from 'react'

import styles from './App.module.css'

export function App() {

  const [cotacao, setCotacao] = useState<number>(1)
  const [valorReal, setValorReal] = useState<number>(1)
  const [valorDolar,setValorDolar] = useState<number>(1)

  const handleOnClick = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const valorConvertido = valorDolar * cotacao
    setValorReal(valorConvertido)
  }

  return (
    <div className={styles.formCotacao}>
      <p className={styles.formCotacaoTitle}>Cotação do dia:</p>
      <form onClick={handleOnClick}>
        <label>Informe a cotação:</label>
        <input
         className={styles.formInput}
         type="number"
         value={cotacao}
         onChange={(event: FormEvent<HTMLInputElement>) => setCotacao(parseFloat(event.currentTarget.value))}/>

        <label>Dolar:</label>
        <input
         className={styles.formInput}
         type="number"
         value={valorDolar}
         onChange={(event: FormEvent<HTMLInputElement>) => setValorDolar(parseFloat(event.currentTarget.value))}/>

        <label>Real:</label>
        <input
         className={styles.formInput}
         type="number"
         value={valorReal}
         onChange={(event: FormEvent<HTMLInputElement>) => setValorReal(parseFloat(event.currentTarget.value))}/>
      
        <button className={styles.buttonSubmit}type="submit">Enviar</button>
      </form>

      <p className={styles.formCotacaoTitle}>Valor convertido: {valorReal ?  valorReal.toFixed(2) : cotacao}</p>
    </div>
  )
}