import '../css/greetings.css';

export default function Greetings({ lang, children }) {
  const greetLang = { de: 'Hallo', en: 'Hello', es: 'Hola', fr: 'Bonjour' };

  return (
    <div className="containerGreetings">{`${greetLang[lang]} ${children}`}</div>
  );
}
