import '../css/rating.css'
export default function Rating({ children }) {
  let currentStarValue = Math.round(Number(children[0]));
  const fullStar = '★';
  const emptyStar = '☆';
  let remainingStartCount = 5 - currentStarValue;
  let finalResult =
    fullStar.repeat(currentStarValue) + emptyStar.repeat(remainingStartCount);
  return (
    <>
      <div className='ratings'>{finalResult}</div>
    </>
  );
}
