import { fromEvent, interval, sample } from 'rxjs';
import './style.css';

// ! Emite o valor emitido mais recentemente do Observável de origem sempre que outro Observável, o notificador, emite.

const interval$ = interval(500)
const click$ = fromEvent(document, 'click')

interval$.pipe(
  sample(click$)
).subscribe(console.log)