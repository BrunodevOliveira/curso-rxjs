import { fromEvent, interval, skip, takeUntil } from 'rxjs';
import './style.css';


// ! Ignora as primeiras X emissões do observable
const button = document.createElement('button')
button.innerHTML = "para timer"

document.querySelector('body')?.append(button)

const counter$ = interval(500);
const clickBtn$ = fromEvent(button, 'click').pipe(
  skip(1)
)

counter$.pipe(
  takeUntil(clickBtn$) 
)
.subscribe({
  next: v => console.log('next:', v),
  complete: () => console.log("Timer completado!")
})

