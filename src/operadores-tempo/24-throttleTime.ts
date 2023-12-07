import { asyncScheduler, distinctUntilChanged, fromEvent, map, throttleTime } from 'rxjs';
import './style.css';


/**
 * ~ A principal diferença para o debounceTime é que ele espera passar o tempo especificado para emitir o valor
 * ~ já o throttleTime emite de imediato e só emite novamente após a passagem do tempo especificado
 *! Emite o primeiro valor e depois ignora as outras emissões por um período de tempo especificado 
 * ^ Popular em cenários como a digitação antecipada, onde a taxa de entrada do usuário deve ser controlada
*/
 

const click$ = fromEvent(document, 'click')

click$.pipe(throttleTime(2000))
// .subscribe(console.log)

const input = document.createElement('input')
document.querySelector('body')?.append(input)

const input$ = fromEvent<any>(input, 'keyup')

input$.pipe(
  throttleTime(1000, asyncScheduler, {
    leading: true,//! Por padrão é true, siginifica que emite o primeiro valor
    trailing: true //! Com essa congiguração será emitido, além do primeiro, o último valor digitado.
  }),
  map(({ target}) => target?.value),
  distinctUntilChanged(),
)
.subscribe(console.log)