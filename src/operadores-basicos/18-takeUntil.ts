import { fromEvent, interval, takeUntil } from 'rxjs';
import './style.css';


// ! Emite os valores do Observable até que o Observable recebido como argumento emita seu primeiro valor
const button = document.createElement('button')
button.innerHTML = "para timer"

document.querySelector('body')?.append(button)

const counter$ = interval(500);
const clickBtn$ = fromEvent(button, 'click')

counter$.pipe(
  takeUntil(clickBtn$) //!Quando click emitir um valor, counter$ será completado
)
// .subscribe({
//   next: v => console.log('next:', v),
//   complete: () => console.log("Timer completado!")
// })

const timer$ = interval(3000)
const interval$ = interval(500).pipe(
  takeUntil(timer$),
)

const subscribe = interval$.subscribe({
  next: v => console.log('intrvalo:', v),
  complete: () => console.log("intervalo Completado!")
})

setTimeout(() => {
  subscribe.unsubscribe()
  console.log('unsubscribe')
}, 4000)