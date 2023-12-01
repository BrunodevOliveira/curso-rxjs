import { fromEvent, interval } from 'rxjs';
import { map, takeWhile } from 'rxjs/operators';
import './style.css';

// ! Emite valores até que a condição fornecida seja falsa. Caso a expressão retorne false, o Observable é completado.
//^ Parametro "true"(inclusive flag) => emite o valor que fez o takeWhile retornar false
//! A diferença para o operador Filter(), é que caso a expressao retorne false, o observable é COMPLETADO, já o filter apenas não emite o valor e contiua inscrito

const interval$ = interval(1000)
const cincoSeg$ = interval$.pipe(takeWhile(seg => seg < 5, true))
cincoSeg$.subscribe({
  next: v => console.log('next:', v),
  complete: () => console.log("Completado!")
})

const click$ = fromEvent<PointerEvent>(document, 'click')

click$.pipe(
  map(({ x, y }) => ({x, y})),
  takeWhile(({ y }) => y <= 300, true)
).subscribe({
  next: v => console.log('clicou:', v),
  complete: () => console.log("Click Completado!")
})