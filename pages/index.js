import Link from 'next/link';

export default function HomePage() {
  return (
    <div>
      <h1>Bienvenido a la App Modular Entrañable</h1>
      <ul>
        <li><Link href="/productos">Ir al Módulo de Productos</Link></li>
        <li><Link href="/usuarios">Ir al Módulo de Usuarios</Link></li>
      </ul>
    </div>
  );
}
