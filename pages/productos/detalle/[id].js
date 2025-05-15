import { useRouter } from 'next/router';
import Link from 'next/link';

function PaginaDetalleProducto({ producto }) {
  const router = useRouter();
  const { id } = router.query;

  if (router.isFallback) return <p>Cargando detalle del producto...</p>;
  if (!producto) {
    return (
      <div>
        <p>Producto con ID '{id}' no encontrado.</p>
        <Link href="/productos">Volver al listado</Link>
      </div>
    );
  }

  return (
    <div>
      <h1>{producto.nombre}</h1>
      <p>ID: {id}</p>
      <p>Precio: ${producto.precio}</p>
      <p>Descripción: {producto.descripcion}</p>
      <Link href="/productos">Volver al listado</Link>
    </div>
  );
}

export async function getStaticPaths() {
  const paths = [{ params: { id: '1' } }, { params: { id: '2' } }, { params: { id: '3' } }];
  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  const productosSimulados = {
    '1': { id: 1, nombre: 'Laptop Ultrabook', precio: 1200, descripcion: 'Potente y ligera.' },
    '2': { id: 2, nombre: 'Teclado Inalámbrico', precio: 75, descripcion: 'Cómodo y silencioso.' },
    '3': { id: 3, nombre: 'Monitor 4K', precio: 450, descripcion: 'Imágenes nítidas y vibrantes.' },
  };
  const producto = productosSimulados[params.id] || null;
  if (!producto) return { notFound: true };
  return { props: { producto }, revalidate: 60 };
}

export default PaginaDetalleProducto;
