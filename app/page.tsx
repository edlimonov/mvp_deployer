import Image from "next/image";

export default function Home() {
  return (
    <div style={{ padding: 50, fontFamily: 'Arial' }}>
      <h1>🚀 Тестовый проект для Deploy.RU</h1>
      <p>Если вы видите эту страницу, значит деплой работает!</p>
      <p>Время: {new Date().toLocaleTimeString()}</p>
      <button 
        onClick={() => alert('Кнопка работает! ✅')}
        style={{ padding: '10px 20px', background: '#0070f3', color: 'white', border: 'none' }}
      >
        Нажми меня
      </button>
    </div>
  );
}