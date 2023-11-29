import { Observer, from, of } from "rxjs";

const observer: Observer<any> = {
  next: v => console.log('next:', v),
  error: e => console.error("Error", e),
  complete: () => console.log("Completado")
}


// of => gera um observable para cada argumento passado
// from =>  criar um Observable a partir de uma fonte que é iterável como Array(cada item), promise ou observable

const obsOf = of([1,2,3,4])
const obsFrom = from([1,2,3,4])
// obsOf.subscribe(observer) //[1,2,3,4]
// obsFrom.subscribe(observer)//1, 2, 3, 4


//  ! From com Promises
// const fetch$ = from(fetch("https://api.github.com/users/brunodevoliveira"))
//  fetch$.subscribe(observer)
//  fetch$.subscribe(async (resp) => {
//   console.log(resp);
//   const dataResp = await resp.json()

//   console.log(dataResp)
//  })

// ! From com iteradores
const funcGenerator = function*() {
  yield 1; //yeld => Define o valor que retorna de uma generator function
  yield 2;
  yield 3;
  yield 4;
  yield 5;
}

// const iterator = funcGenerator()

// for(let id of iterator) {
//   console.log(id);
// }

// from(iterator).subscribe(observer) //A vantagem de utilizar o from no lugar do loop for é que poderemos utilizar os operadores do RXJS