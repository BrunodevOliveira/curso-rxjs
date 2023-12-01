import { first, fromEvent, tap } from 'rxjs';
import './style.css';

// ! Emite o primeiro valor. Caso exista alguma validação, emite o primeiro valor que satisfaça essa validação.

const click$ = fromEvent<PointerEvent>(document, 'click')
const firstClick$ = click$.pipe(first())

click$.pipe(
  tap(() => console.log('tap')),
  first<PointerEvent>(e => e.clientY >= 150) //^Só emite caso o valor seja maior que 150
)
.subscribe({
  next: (v) => console.log('Next:', v),
  complete: () => console.log('Completado!')
})

// firstClick$.subscribe({
//   next: (v) => console.log('Primeiro click:', v),
//   complete: () => console.log('Completado!')
// })