import { asyncScheduler, observeOn, range } from "rxjs";

/**
 * !Emite uma sequencia de números a partir de um range passado como parâmetro
 * ^1º argumento é o valor a ser emitido (é opcional, caso n seja definido será considerado o valor '0')
 * ^2º argumento é a quantidade de emissões 
 * ! asyncScheduler => Transforma uma função síncrona em Assíncrona
 */


// const src$ = of(1,2,3,4,5)

 const src$ = range(1,5).pipe(observeOn(asyncScheduler)) 

 console.log("Início");
 src$.subscribe(console.log)
 console.log("Fim");