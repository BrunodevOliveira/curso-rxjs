import { interval, reduce, take, tap } from 'rxjs';
import './style.css';

// ! Reduce => Aplica uma função de acumulador sobre a fonte Observável e retorna o resultado acumulado quando a fonte é concluída, dado um valor inicial opcional.
// ^Só emite um valor quando o observável for Concluído!!

const numbers = [1,2,3,4,5]

const totalReducer = (acumulador: number, valorAtual: number) => {
  return acumulador + valorAtual
}


const total = numbers.reduce(totalReducer, 0)
console.log("Total do array:", total);

interval(1000).pipe(
  take(4),
  tap(console.log),
  reduce(totalReducer, 6)
)
.subscribe({
  next: (val) => console.log("next", val),
  complete: () => console.log("Complete")
})
