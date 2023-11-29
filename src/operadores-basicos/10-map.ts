import { Observer, from, fromEvent, map } from "rxjs";

const observer: Observer<any> = {
  next: v => console.log('next:', v),
  error: e => console.error("Error", e),
  complete: () => console.log("Completado")
}

const obs$ = from([1,2,3,4,5])
obs$
  .pipe(map(num => num * 2))
  .subscribe(observer)

const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup')
const keyupCode$ = keyup$.pipe(map(key => key.code))

keyupCode$ .subscribe(observer)