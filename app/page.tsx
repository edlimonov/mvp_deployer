export default function Home() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      padding: '20px'
    }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>
        Мой Next.js проект
      </h1>
      <p style={{ fontSize: '1.5rem' }}>
        Это главная страница моего приложения.
      </p>
    </div>
  );
}