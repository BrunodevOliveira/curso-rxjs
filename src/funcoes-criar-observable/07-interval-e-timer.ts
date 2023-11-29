import { Observer, interval, timer } from "rxjs";

const observer: Observer<any> = {
  next: v => console.log('next:', v),
  error: e => console.error("Error", e),
  complete: () => console.log("Completado")
}

/**
 * Funções que criar Observables em intervalos de tempo
 * !Interval(1000) => emite uma sequencia de números em um  intervalo de tempo passado por parâmetro
 * !Timer(1000) => Emite um valor e em seguida completa 
 * ^Interval e Timer são Observables assíncronos
 */
const agoraMais5 = new Date()
agoraMais5.setSeconds(agoraMais5.getSeconds() + 5)

const interval$ = interval(1000)
// const timer$    = timer(2000)
// const timer$    = timer(2000,1000) //^Cria um interval que inicia em 2 segundos
const timer$    = timer(agoraMais5) //^Emite um valor após 5 segundos


console.log("Início");
// interval$.subscribe(observer)
timer$.subscribe(observer)
console.log("Fim");