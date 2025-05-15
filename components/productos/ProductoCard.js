export default function ProductoCard({ nombre, precio }) {
  return (
    <div style={{ border: '1px solid #ddd', margin: 10, padding: 15, borderRadius: 5 }}>
      <h2>{nombre}</h2>
      <p>Precio: ${precio}</p>
    </div>
  );
}
