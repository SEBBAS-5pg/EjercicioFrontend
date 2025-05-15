import Link from 'next/link';
import ProductoCard from '../../components/productos/ProductoCard';

function PaginaListadoProductos({ productos }) {
  return (
    <div>
      <h1>Listado de Productos</h1>
      {productos.map(producto => (
        <ProductoCard key={producto.id} nombre={producto.nombre} precio={producto.precio} />
      ))}
      <br />
      <Link href="/">Volver al Inicio</Link>
    </div>
  );
}

export async function getStaticProps() {
  const productos = [
    { id: 1, nombre: 'Laptop Ultrabook', precio: 1200 },
    { id: 2, nombre: 'Teclado Inalámbrico', precio: 75 },
    { id: 3, nombre: 'Monitor 4K', precio: 450 },
  ];
  return { props: { productos } };
}

export default PaginaListadoProductos;
