import '../css/random.css';
export default function Random({ min, max }) {
  const randomGenerator = (e) => Math.floor(Math.random() * e) + 1;

  return (
    <>
      <div className="containerRandom">
        {`Random value between ${min} and ${max} => ${randomGenerator(max)}`}
      </div>
    </>
  );
}
