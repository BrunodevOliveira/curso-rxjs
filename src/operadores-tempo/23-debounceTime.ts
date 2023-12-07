import { debounceTime, fromEvent, map } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';
import './style.css';


/**
 *! atrasar a emissão de notificações de um Observable por um período de tempo especificado, 
 *! descartando notificações anteriores se uma nova notificação for recebida durante esse período
 *^ Popular em cenários como a digitação antecipada, onde a taxa de entrada do usuário deve ser controlada
*/
 

const click$ = fromEvent(document, 'click')

click$.pipe(debounceTime(2000))
.subscribe(console.log)

const input = document.createElement('input')
document.querySelector('body')?.append(input)

const input$ = fromEvent<any>(input, 'keyup')

input$.pipe(
  debounceTime(1000),
  map(({ target}) => target?.value),
  distinctUntilChanged(),
)
.subscribe(console.log)