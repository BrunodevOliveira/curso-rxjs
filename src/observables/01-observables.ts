import { Observable, Observer } from "rxjs";

const observer: Observer<any> = {
  next: v => console.log('Próximo valor [next]:', v),
  error: e => console.error("Error [obs]", e),
  complete: () => console.log("Completado [obs]")
}

const obs$ = new Observable<string>(subscriber => {
  subscriber.next("Olá")
  subscriber.next("Mundo")

  //Forçar um erro:
  // const a = undefined
  // a.nome = "Bruno"

  subscriber.complete()

  subscriber.next("Subscriber morreu ao completar")
})

obs$.subscribe(observer)