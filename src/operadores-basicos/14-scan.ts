import { from, interval, scan } from 'rxjs';
import { distinctUntilChanged, map, takeWhile } from 'rxjs/operators';
import './style.css';

type Usuario ={
  id?: string
  autenticado?: boolean,
  token?: string | null
  idade?: number
}

/**
 * Útil para encapsular e gerenciar estado. Aplica um acumulador (ou "função redutora") a cada 
 * valor da fonte após um estado inicial ser estabelecido - seja por meio de um valor inicial 
 * (segundo argumento) ou a partir do primeiro valor da fonte.
 */

const interval$ = interval(500).pipe(
  scan((acc, cur) => acc + cur, 2),
  takeWhile(num => num < 15), //Emite valor enquanto a condição for verdadeira
)
interval$.subscribe({
  next: (v) => console.log('acumulado:', v),
  complete: () => console.log("Completou!")
})

const user: Usuario[] = [
  {
    id: 'br',
    autenticado:false,
    token: null,
  },
  {
    id: 'br',
    autenticado:true,
    token: 'ABC',
  },
  {
    id: 'br',
    autenticado:true,
    token: "ABC123",
  },
]
const state$ = from(user).pipe(
  scan<Usuario>((acc: Usuario, cur) => ({...acc, ...cur}))
)

const id$ = state$.pipe(
  map(state => state.id),
  distinctUntilChanged()
)

id$.subscribe(console.log)