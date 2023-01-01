import '../css/driverCard.css';
export default function DriverCard({ name, rating, img, car }) {
  let currentStarValue = Math.round(Number(rating));
  const fullStar = '★';
  const emptyStar = '☆';
  let remainingStartCount = 5 - currentStarValue;
  let finalResult =
    fullStar.repeat(currentStarValue) + emptyStar.repeat(remainingStartCount);
  return (
    <>
      <div className="containerCard">
        <div>
          {' '}
          <img className="driverImg" src={img} alt="" />
        </div>
        <div className="pannelRight">
          <div>{name}</div>
          <div>{finalResult}</div>
          <div>{`${car.model} - ${car.licensePlate}`}</div>
        </div>
      </div>
    </>
  );
}
