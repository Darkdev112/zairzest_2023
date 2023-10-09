import './cardsection.scss';
import Card from '../card/Card'

const CardSection = ({name, data}) => {
  return (
    <>
      <div className="event-container">
        <div className="mname">{name}</div>
        <br /><br />
        <div className="card-contain">
            {data?.map((data,index)=>(
              <Card data={data} index={index} />
            ))}
        </div>
      </div>
    </>
  )
}

export default CardSection
