import { fromEvent, map, sampleTime } from 'rxjs';
import './style.css';

//! Emite o valor emitido mais recentemente da fonte Observável em intervalos de tempo periódicos.
/**
 * `sampleTime`-> emite o valor mais recente em intervalos de tempo fixos.
 * `debounceTime`-> emite apenas o último valor emitido dentro de um intervalo de tempo, reiniciando o temporizador a cada novo valor.
 * `throttleTime`-> emite o primeiro valor e, em seguida, ignora os valores subsequentes por um determinado período de tempo.
*/

const click$ = fromEvent<PointerEvent >(document, 'click')

click$.pipe(
  sampleTime(2000),
  map(({ x, y }) => ({ x, y  })),
)
.subscribe(console.log)