import { from, fromEvent, range } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import './style.css';
type Personagem = {
  tipo: string
  nome: string
}

const evenNumbers$ = range(1, 10).pipe(
  filter(num => num % 2 === 0)
)
// evenNumbers$.subscribe(console.log);

const personagens: Personagem[] = [
  {
    tipo: 'heroi',
    nome: "Batman"
  },
  {
    tipo: 'heroi',
    nome: "Robin"
  },
  {
    tipo: 'vilao',
    nome: "Coringa"
  },
  {
    tipo: 'vilao',
    nome: "Pinguim"
  },
]

const herois$ = from(personagens).pipe(
  filter(({ tipo }) => tipo === 'heroi')
)
// herois$.subscribe(console.log)

const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup').pipe(
  map(event => event.code),
  filter(key => key === "Enter")
)
// keyup$.subscribe(console.log)