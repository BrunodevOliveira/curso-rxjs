import { Observable, Observer } from "rxjs";

const intervalo$ = new Observable<number>(subs => {
  let count = 0
  const interval = setInterval(() => {
    count++
    // if(count > 4)subs.complete()
    subs.next(count)
  }, 2000)

  //! Executado quando chamamos o método 'unsubscribe()'
  return () => {
    clearInterval(interval)
    console.log('Desinscrito do Observable')
  }
})

const observerCount: Observer<number> = {
  next: num => console.log('Valor Emitido:', num),
  error: err => console.error('Erro emitido:', err),
  complete: () => console.log("Completado!")
}


const unsubscriptionCount  = intervalo$.subscribe(observerCount)
const unsubscriptionCount2 = intervalo$.subscribe(observerCount)
const unsubscriptionCount3 = intervalo$.subscribe(observerCount)

// Forma de desinscrever de vários observables
unsubscriptionCount.add(unsubscriptionCount2)
unsubscriptionCount2.add(unsubscriptionCount3)

setTimeout(() => {
  unsubscriptionCount.unsubscribe()
}, 10000)