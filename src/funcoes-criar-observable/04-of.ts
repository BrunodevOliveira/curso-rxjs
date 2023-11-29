import { Observer, of } from "rxjs";

const observer: Observer<any> = {
  next: v => console.log('next:', v),
  error: e => console.error("Error", e),
  complete: () => console.log("Completado")
}

// const obs$ = of(1,2,3,4,5)
const obs$ = of(1,2,3,4,5)

console.log("Início do Observable");
obs$.subscribe(observer)
console.log("Fim do Observable");