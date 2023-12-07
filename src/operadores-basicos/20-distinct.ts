import { distinct, from, of } from 'rxjs';
import './style.css';
// ~ A diferença para o distinctUntilChanged => Emite apenas quando o valor atual for diferente do anterior 

// ! Retorna um Observable que emite todos os itens emitidos pelo Observable de origem que são distintos por comparação dos itens anteriores
const numero$ = of(1,1,1,3,3,2,2,4,4,5,3,1)

numero$.pipe(
  distinct()
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
  distinct(personagem => personagem.nome)
)
.subscribe(console.log)