import { EMPTY, catchError, interval, map } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import './style.css';

/**
 *!catchError -> trata ualquer erro emitido por um Observable.
 *! Retorna uma mensagem ou outro Observable que emitira novos valores para o subscrição
 *~ A principal diferença entre o operador  catchErro e o método error fornecido ao se inscrever é que o operador pode emitir um novo observable caso o principal falhe.
*/

const url = 'https://api.github.com/users?per_page=5'

const gerenciarErros = (resposta: Response) => {
  if(!resposta.ok) throw new Error(resposta.statusText)

  return resposta
}

const fetchPromise = fetch(url)

// fetchPromise
//   .then(gerenciarErros)
//   .then(res => res.json())
//   .then(console.log)
//   .catch(err => console.warn('Erro na requisição:', err)) //! Só executa se a promessa lançar um erro

const time$ = interval(500)
ajax(url).pipe(
  map(({response }) => response),
  catchError(err => {
    console.warn('Erro ao executar requisição:', err)
    return EMPTY
  })
)
.subscribe({
  next: resp => console.log(resp),
  error: (err) => {
    console.warn('Entrou no erro após o subscribe:', err)
    return time$ //! não irá retornar esse observable pois está dentro do subscribe
  },
  complete: () => console.log("completou!!")
})