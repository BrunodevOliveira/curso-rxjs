import { fromEvent } from 'rxjs';
import { map } from 'rxjs/operators';
import './style.css';

const body = document.querySelector('body')
const texto = document.createElement('div')
texto.innerHTML = `
Mussum Ipsum, cacilds vidis litro abertis.  Copo furadis é disculpa de bebadis, arcu quam euismod magna. Nulla id gravida magna, ut semper sapien. Pellentesque nec nulla ligula. Donec gravida turpis a vulputate ultricies. Vehicula non. Ut sed ex eros. Vivamus sit amet nibh non tellus tristique interdum.
  <br /> <br />
Si num tem leite então bota uma pinga aí cumpadi! Diuretics paradis num copo é motivis de denguis. Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose. Eu nunca mais boto a boca num copo de cachaça, agora eu só uso canudis!
  <br /> <br />
Praesent vel viverra nisi. Mauris aliquet nunc non turpis scelerisque, eget. A ordem dos tratores não altera o pão duris. Copo furadis é disculpa de bebadis, arcu quam euismod magna. Leite de capivaris, leite de mula manquis sem cabeça.
  <br /> <br />
In elementis mé pra quem é amistosis quis leo. Vehicula non. Ut sed ex eros. Vivamus sit amet nibh non tellus tristique interdum. Si u mundo tá muito paradis? Toma um mé que o mundo vai girarzis! Casamentiss faiz malandris se pirulitá.
  <br /> <br />
In elementis mé pra quem é amistosis quis leo. Delegadis gente finis, bibendum egestas augue arcu ut est. Quem num gosta di mim que vai caçá sua turmis! Eu nunca mais boto a boca num copo de cachaça, agora eu só uso canudis!
  <br /> <br />
Quem num gosta di mé, boa gentis num é. Nulla id gravida magna, ut semper sapien. Quem manda na minha terra sou euzis! Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose.
  <br /> <br />
Quem manda na minha terra sou euzis! Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis. Manduma pindureta quium dia nois paga. Interagi no mé, cursus quis, vehicula ac nisi.
  <br /> <br />
Admodum accumsan disputationi eu sit. Vide electram sadipscing et per. Viva Forevis aptent taciti sociosqu ad litora torquent. Quem manda na minha terra sou euzis! Delegadis gente finis, bibendum egestas augue arcu ut est.
  <br /> <br />
Cevadis im ampola pa arma uma pindureta. Suco de cevadiss deixa as pessoas mais interessantis. Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose. Detraxit consequat et quo num tendi nada.
  <br /> <br />
Sapien in monti palavris qui num significa nadis i pareci latim. Praesent vel viverra nisi. Mauris aliquet nunc non turpis scelerisque, eget. Paisis, filhis, espiritis santis. Não sou faixa preta cumpadi, sou preto inteiris, inteiris.
  <br /> <br />
Copo furadis é disculpa de bebadis, arcu quam euismod magna. Interagi no mé, cursus quis, vehicula ac nisi. Paisis, filhis, espiritis santis. Si num tem leite então bota uma pinga aí cumpadi!
  <br /> <br />
Quem num gosta di mé, boa gentis num é. Diuretics paradis num copo é motivis de denguis. Viva Forevis aptent taciti sociosqu ad litora torquent. Praesent malesuada urna nisi, quis volutpat erat hendrerit non. Nam vulputate dapibus.
`
body?.append(texto)

const progressBar = document.createElement('div')
progressBar.setAttribute('class', 'progress-bar')

body?.append(progressBar)

// Calcular scroll
const calcularPorcentagemScroll = (event: any) => {
  const  { scrollTop, scrollHeight, clientHeight } = event.target.documentElement
  return (
    scrollTop / (scrollHeight - clientHeight) * 100
  )
}

// Streams
const scroll$ = fromEvent(document, 'scroll')
const progress$ = scroll$.pipe(
  map(calcularPorcentagemScroll),
  // tap(console.log)
)

progress$.subscribe(porcentagem => {
  progressBar.style.width = `${porcentagem}%`
})