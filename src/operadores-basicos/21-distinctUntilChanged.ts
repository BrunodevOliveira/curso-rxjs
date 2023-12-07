import { from, of } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';
import './style.css';


const numero$ = of(1,1,1,3,3,2,2,4,4,5,3,1)

// ! Emite apenas quando o valor atual for diferente do anterior 
numero$.pipe(
  distinctUntilChanged()
)
.subscribe(console.log)

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

// ! Ao trabalhar com objetos, devemos enviar uma função de callback com o termo que queremos verificar se já foi emitido
from(personagens).pipe(
  distinctUntilChanged((prev, curr) => prev.nome === curr.nome)
)
.subscribe(console.log)