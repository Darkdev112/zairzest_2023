import React from 'react'
import CardSection from '../../component/cardsec/CardSection'

const Event = () => {
    const name = "Tech Events";
    const data = [
        {
            img:"xvbbv",
            name: "Robo Soccer",
            isEnrolled: 0,
            date: "27 Apr",
            time: "9:00AM",
            venue: "SAC Area"
        },
        {
            img:"xvbbv",
            name: "Robo Soccer",
            isEnrolled: 1,
            date: "27 Apr",
            time: "9:00AM",
            venue: "SAC Area"
        },
        {
            img:"xvbbv",
            name: "Robo Soccer",
            isEnrolled: 1,
            date: "27 Apr",
            time: "9:00AM",
            venue: "SAC Area"
        },
        {
            img:"xvbbv",
            name: "Robo Soccer",
            isEnrolled: 1,
            date: "27 Apr",
            time: "9:00AM",
            venue: "SAC Area"
        },
        {
            img:"xvbbv",
            name: "Robo Soccer",
            isEnrolled: 1,
            date: "27 Apr",
            time: "9:00AM",
            venue: "SAC Area"
        },
        {
            img:"xvbbv",
            name: "Robo Soccer",
            isEnrolled: 1,
            date: "27 Apr",
            time: "9:00AM",
            venue: "SAC Area"
        },
        {
            img:"xvbbv",
            name: "Robo Soccer",
            isEnrolled: 0,
            date: "27 Apr",
            time: "9:00AM",
            venue: "SAC Area"
        },
        {
            img:"xvbbv",
            name: "Robo Soccer",
            isEnrolled: 1,
            date: "27 Apr",
            time: "9:00AM",
            venue: "SAC Area"
        },
        {
            img:"xvbbv",
            name: "Robo Soccer",
            isEnrolled: 0,
            date: "27 Apr",
            time: "9:00AM",
            venue: "SAC Area"
        },
        {
            img:"xvbbv",
            name: "Robo Soccer",
            isEnrolled: 0   ,
            date: "27 Apr",
            time: "9:00AM",
            venue: "SAC Area"
        }
    ]
  return (
    <>
      <div className="event">
      <CardSection name={name} data={data} />
      </div>
    </>
  )
}

export default Event
