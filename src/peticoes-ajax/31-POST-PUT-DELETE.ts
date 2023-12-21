import { ajax } from 'rxjs/ajax';
import './style.css';

const url = 'https://httpbin.org/delay/1'
// const url = 'https://api.github.com/users?per_page=5'

/**
 * GET e DELETE => primeiro argumento é a URL, seguido dos HEADERS
 * POST e PUT => primeiro URL, segundo o BODY, e por último os HEADERS
 */

ajax.put(url, {
  body: 1,
  nome: 'Bruno'
}, {
  'token': 'ABC1234'
}).subscribe(console.log)

// ! Dessa forma posso deixa o method dinâmico e não ocorrera erro caso envie o Body para verbos que não possuem
ajax({
  url,
  method: 'POST',
  headers: {
    'token': 'ABC123'
  },
  body: {
    body: 2,
    nome: 'Barbara'
  }
}).subscribe(console.log)