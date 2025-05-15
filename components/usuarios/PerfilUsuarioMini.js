import Link from 'next/link';

export default function PerfilUsuarioMini({ nombre, email, username }) {
  return (
    <div style={{ border: '1px solid #ccc', margin: 10, padding: 10, backgroundColor: '#f9f9f9' }}>
      <h3>{nombre} ({username})</h3>
      <p>Email: {email}</p>
      <Link href={`/usuarios/perfil/${username}`}>Ver perfil completo</Link>
    </div>
  );
}
