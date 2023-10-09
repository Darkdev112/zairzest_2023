import './card.scss';

const Card = ({data,index}) => {
  return (
    <>
      <div className="card-container" key={index}>
        <div className="imgsec">
            <img src={data.img} alt="" />
        </div>
        <div className="nameenroll">
            <div className="ename">{data.name}</div>
            <button className="enroll" disabled={data.isEnrolled} >{data.isEnrolled?"Enrolled":"Enroll Now"}</button>
        </div>
        <div className="dtp">
            <div className="edate">
                <div className="etitle">Date & Time</div>
                <div className="dtime">{data.date} - {data.time}</div>
            </div>
            <div className="even">
                <div className="eventi">Venue</div>
                <div className="ven">{data.venue}</div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Card
