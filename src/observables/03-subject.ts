import { Observable, Observer, Subject } from "rxjs";

const observer: Observer<any> = {
  next: v => console.log('next:', v),
  error: e => console.error("Error", e),
  complete: () => console.log("Completado")
}

const intervalo$ =  new Observable<number>(subscriber => {
  const intervalId = setInterval(() => {
    const randomNumb = Math.floor(Math.random() * 10)
    subscriber.next(randomNumb)
  }, 3000)

  return () => {
    clearInterval(intervalId)
    console.log('Unsubscribe')
  }
})

/*
  1- Todos os inscritos receberam os mesmo dados emitidos
  2- Também é um observer, ou seja, também teremos acesso as funções de um observer: next, error, complete
*/


const subject$ = new Subject()

const subscription = intervalo$.subscribe(subject$)

// ^ Valores exibidos no console são diferentes para cada inscrição
// const sub1$ = intervalo$.subscribe(random => console.log('sub1', random))
// const sub2$ = intervalo$.subscribe(random => console.log('sub2', random))

// ! Os valores exibidos no console são os mesmo para as duas inscrções
const sub1$ = subject$.subscribe(observer)
const sub2$ = subject$.subscribe(observer)

setTimeout(() => {
  // ! Quando os dados são produzidos pelo observable em sí mesmo, é considerado um "Could Observable". 
  // ! Mas quando os dados são produzidos fora do observable, é chamado de "Hot Observable"
  subject$.next(10)

  subject$.complete()

  subscription.unsubscribe()
}, 3500)