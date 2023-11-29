import { Observer, asyncScheduler } from "rxjs";

const observer: Observer<any> = {
  next: v => console.log('next:', v),
  error: e => console.error("Error", e),
  complete: () => console.log("Completado")
}

/**
 * A Vantagem de criar um setInterval ou setTimout com asyncScheduler é que serão processos assíncronos, ou seja, não irão bloquear a execução do código
 * 
 */

//! asyncScheduler => Cria uma subscrição
// setTimeout(() => {}, 3000)
// setInterval(() => {}, 3000)

const ola = () => console.log("Hello World!")
const ola2 = (nome) => console.log(`Oi, ${nome}`)

//asyncScheduler.schedule(ola, 2000)// Executa a função após 2 segundos, semelhnte ao setTimeout

//Caso a função possua algum parâmetro, envio como terceiro argumento. Se for mais de um, envio eles em um obj
// asyncScheduler.schedule(ola2, 2000, "Bruno")

// ! Criando um setInterval com state
const subs = asyncScheduler.schedule(function(state){
  console.log("state", state);

  // if(state === 5) this.unsubscribe() //! desinscreve 

  this.schedule(state + 1, 1000)  
}, 3000, 0)

// ^Interromper o schedule
// setTimeout(() => {
//   subs.unsubscribe()
// }, 6000)

// asyncScheduler.schedule(() => subs.unsubscribe(), 6000)