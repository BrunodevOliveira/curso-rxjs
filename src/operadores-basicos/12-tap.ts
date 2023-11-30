import { range, tap } from 'rxjs';
import { map } from 'rxjs/operators';
import './style.css';

//  ! Tap => Responsável por disparar efeitos colaterais/secundários
// ^Diferentes dos demais operadores, não alterar o fluxo de informação

const numeros$ = range(1,5).pipe(
  tap((v) => console.log('valor original:', v)),
  map(num => num * 2),
  tap({  //! Isso é um PartialObserver
    next: (v) => console.log('Depois do Map:', v),
    complete: () => console.log('Completou o Pipe') //^ Executa apenas quando o Observable é completado
  })
)

// numeros$.subscribe(val => console.log('subs', val))