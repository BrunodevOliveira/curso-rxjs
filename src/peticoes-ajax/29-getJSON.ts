import { ajax } from 'rxjs/ajax';
import './style.css';

// ! Emite apenas a conteúdo Json da API
// const url = 'https://httpbin.org/delay/1'
const url = 'https://api.github.com/users?per_page=5'

const obs$ = ajax.getJSON(url, {
  'Content-Type': 'application/json',
  'token': 'ABC123'
})

obs$.subscribe(data => {
  console.log('dados:', data)
})