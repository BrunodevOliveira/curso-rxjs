import { auditTime, fromEvent, map, tap } from 'rxjs';
import './style.css';

//! Ignora os valores de origem por milissegundos de duração, depois emite o valor mais recente do Observável de origem e repete esse processo.
//^ Caso o Observable se complete antes que o tempo especificado passe, não será emitido o valor

const click$ = fromEvent<PointerEvent >(document, 'click')

click$.pipe(
  map(({ x, y }) => ({ x, y })),
  tap(val => console.log('tap', val)),
  auditTime(2000)
)
.subscribe(console.log)