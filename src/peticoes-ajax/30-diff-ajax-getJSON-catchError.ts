import { catchError, of } from 'rxjs';
import { AjaxError, ajax } from 'rxjs/ajax';
import './style.css';

const url = 'https://httpbin5.org/delay/1'
// const url = 'https://api.github.com/users?per_page=5'

const manipularErro = (resp: AjaxError) => {
  console.error('error: ', resp.message)
  return of({
    ok: false,
    uruarios: []
  })
}

// const obs$ = ajax.getJSON(url, {
//   'Content-Type': 'application/json',
//   'token': 'ABC123'
// }).pipe(catchError(manipularErro))

// const obs$2 = ajax(url).pipe(catchError(manipularErro))

const obsTratadoComCatchError$ = ajax.getJSON(url, {
  'Content-Type': 'application/json',
  'token': 'ABC123'
})


obsTratadoComCatchError$.pipe(
  catchError(manipularErro)//^Quando tratamos o erro por esse operador e retornamos um novo observable, esse obs retornado sera receido pelo subscriber.
)
.subscribe({
  next: (v) => console.log('next:', v),
  error: (err) => console.error('error subscribe:', err),
  complete: () => console.log('Completou!')
})

// obs$2.subscribe(data => {
//   console.log('ajax:', data)
// })