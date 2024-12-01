import {  useState } from "react";
import "./App.css";


function App() {
  const [inputValue, setInputValue] = useState("")
  const [moneyOne, setMoneyOne] = useState("Real")
  const [moneyTwo, setMoneyTwo] = useState("Dolar")
  const [messageResult,setMessage]=useState("")

  function convert() {
      if(moneyOne ==="Dolar" && moneyTwo==="Real"){
        const result = (inputValue * 5.97).toFixed(2)
        const FormatValue = Number(result).toLocaleString("pt-br",{style:"currency",currency:"BRL"})
        setMessage(`Resultado de ${inputValue}US$ em  Real : ${FormatValue} reais.`)

      }else if (moneyOne=="Real" && moneyTwo=="Dolar"){
        const resultDol = (inputValue / 5.8).toFixed(2)
        const FormatValueTwo = Number(resultDol).toLocaleString("en",{style:"currency",currency:"USD"})
        setMessage(`Resultado de ${inputValue }R$ em Dólar : ${FormatValueTwo} dolares.`)
      }else{
        setMessage("Moedas são iguais...Verifique e tente novamente !")
      }
  }

  return (

    <div className="container">
      <h1>Conversor de moedas </h1>
      <input type="number" id="inputValue" onChange={(e) => setInputValue(e.target.value)} placeholder="Digite um valor" />

      <select onChange={(e) => setMoneyOne(e.target.value)}>
        <option value="Real">Real</option>
        <option value="Dolar">Dolar</option>
      </select>
      <p>⬇️⬆️</p>
      <select onChange={(e) => setMoneyTwo(e.target.value)}>
        <option value="Dolar">Dolar</option>
        <option value="Real">Real</option>

      </select>
      <button onClick={convert}>Converter</button>
     <h3 > {messageResult}</h3>
    </div>

  );
}

export default App;
