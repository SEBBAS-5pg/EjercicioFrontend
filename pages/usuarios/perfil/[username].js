import Link from 'next/link';

function PaginaPerfilUsuario({ usuario }) {
  if (!usuario) {
    return (
      <div>
        <p>Usuario no encontrado.</p>
        <Link href="/usuarios">Volver</Link>
      </div>
    );
  }

  return (
    <div>
      <h1>Perfil de: {usuario.nombre}</h1>
      <p>Username: {usuario.username}</p>
      <p>Email: {usuario.email}</p>
      <p>Rol: {usuario.rol}</p>
      <Link href="/usuarios">Volver al listado</Link>
    </div>
  );
}

export async function getServerSideProps({ params }) {
  const usuariosSimulados = {
    'usuarioEjemplo': { id: 'u001', nombre: 'Usuario Ejemplo', email: 'ejemplo@test.com', rol: 'Miembro', username: 'usuarioEjemplo' },
    'anaCoder': { id: 'u002', nombre: 'Ana Coder', email: 'ana@test.com', rol: 'Admin', username: 'anaCoder' },
  };

  const usuario = usuariosSimulados[params.username] || null;
  return { props: { usuario } };
}

export default PaginaPerfilUsuario;
