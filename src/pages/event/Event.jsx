import React from 'react'
import CardSection from '../../component/cardsec/CardSection'
import Navbar from '../../component/Navbar/Navbar';
import Footer from '../../component/Footer/Footer';

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
      <Navbar />
      <CardSection name={name} data={data} />
      <Footer />
      
    </>
  )
}

export default Event
