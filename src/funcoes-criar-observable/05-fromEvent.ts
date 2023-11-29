import { Observer, fromEvent } from "rxjs";

const observer: Observer<any> = {
  next: v => console.log('next:', v),
  error: e => console.error("Error", e),
  complete: () => console.log("Completado")
}

// ! Permite criar um Observable a partir de um evento do Document da página
const src1$ = fromEvent<PointerEvent>(document, 'click');
const src2$ = fromEvent<KeyboardEvent>(document, 'keyup');

src1$.subscribe(({ x, y }) => {
  console.log(x, y)
})
src2$.subscribe(event => {
  console.log(event.key)
})