import { distinctUntilKeyChanged, from } from 'rxjs';
import './style.css';


// ! Emite apenas quando o valor da chave for alterado
interface Personagem {
  nome: string
}

const personagens: Personagem[] = [
  {
    nome: 'Megaman'
  },
  {
    nome: 'X'
  },
  {
    nome: 'Zero '
  },
  {
    nome: 'Dr. Willy'
  },
  {
    nome: 'X'
  },
  {
    nome: 'Megaman'
  },
  {
    nome: 'Zero'
  },
]

from(personagens).pipe(
  distinctUntilKeyChanged('nome')
)
.subscribe(console.log)