import Link from 'next/link';
import PerfilUsuarioMini from '../../components/usuarios/PerfilUsuarioMini';

function PaginaListadoUsuarios({ usuarios }) {
  return (
    <div>
      <h1>Listado de Usuarios</h1>
      {usuarios.map(usuario => (
        <PerfilUsuarioMini key={usuario.id} {...usuario} />
      ))}
      <br />
      <Link href="/">Volver al Inicio</Link>
    </div>
  );
}

export async function getServerSideProps() {
  const usuarios = [
    { id: 'u001', username: 'usuarioEjemplo', nombre: 'Usuario Ejemplo', email: 'ejemplo@test.com' },
    { id: 'u002', username: 'anaCoder', nombre: 'Ana Coder', email: 'ana@test.com' },
  ];
  return { props: { usuarios } };
}

export default PaginaListadoUsuarios;
