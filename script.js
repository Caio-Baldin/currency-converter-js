// Moedas e cotação
const USD = 4.99
const EUR = 5.80
const GBP = 6.71

// Salvando elementos do DOM
const form = document.querySelector("form")
const input = document.getElementById("amount")
const currency = document.getElementById("currency")
const description = document.getElementById("description")
const footer =  document.querySelector("footer")
const result = document.getElementById("result")
// ----------------

// Verificando se foi digitado somente números.
input.addEventListener("input", ()=>{
  const hasCaracters = /\D+/g
 input.value = input.value.replace(hasCaracters, "")
})

// Identifica moeda selecionada
form.addEventListener("submit", (event)=>{
  event.preventDefault()

  switch(currency.value){
    case "USD":
      convertCurrency(USD, "US$")
      break
    case "EUR":
      convertCurrency(EUR,"€" )
      break
    case "GBP":
      convertCurrency(GBP, "£")
  }
  
  
})

// função para converter a moeda.
function convertCurrency(price, symbol){
 try {

  //Exibe cotação da moeda selecionada
  description.textContent = `${symbol} 1 = ${fomratCurrency(price)}`
   
  let total = input.value * price

 if(isNaN(total)){
   return alert("Digite um número valido")
 }else{
   result.textContent = fomratCurrency(total)
 

  // aplica a classe que exibe o footer 
  footer.classList.add("show-result")
 }

 } catch (error) {
  footer.classList.remove("show-result")
  alert("Não foi possível realizar a conversão. Tente novamente mais tarde.")
 }
}


// função para formartar para Real Brasileiro.

function fomratCurrency(value){
  return Number(value).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  })
}
