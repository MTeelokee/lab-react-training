import '../css/idCard.css'

export default function IdCard({
  lastName,
  firstName,
  gender,
  height,
  birth,
  picture,
}) {
    return (
    <>
      <div className="containerIdcard">
        <div className="marg">
          <img src={picture} alt="profilePicture" />
        </div>
        <div className="marg">
          <div className>
              <b>First Name: </b>
              {firstName}
          </div>
          <div>
              <b>Last name: </b>
              {lastName}
          </div>
          <div>
              <b>Gender: </b>
              {gender}
          </div>
         <div>
              <b>Height: </b>
              {height}
         </div>
          <div>
              <b>Birth: </b>
              {birth.toDateString('en-CA')}
          </div>
        </div>
      </div>
    </>
  );
}
