import { interval, take } from 'rxjs';
import './style.css';

// take => Limita a quantidade de emissões que um observable pode ter e o completa

interval(500).pipe(
  take(3)
).subscribe({
  next: v => console.log(v),
  complete: () => console.log("Completado")
})