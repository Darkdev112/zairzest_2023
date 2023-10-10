import React, { useEffect, useState } from 'react'
import CardSection from '../../component/cardsec/CardSection'
import Navbar from '../../component/Navbar/Navbar';
import Footer from '../../component/Footer/Footer';
import axios from 'axios';


const Event = () => {
    const [data, setData] = useState();
    const [userEvents, setUserEvents] = useState()
    
    const fetchData = async () => {
        const authToken = sessionStorage.getItem('Auth Token')
        try {
            const response = await Promise.all([
                axios.get('http://localhost:5000/getall/event',{
                    headers : {
                        'Content-Type' : 'application/json',
                        'Authorization' : `Bearer ${authToken}`
                    }
                }),
                axios.get('http://localhost:5000/get/user',{
                    headers : {
                        'Content-Type' : 'application/json',
                        'Authorization' : `Bearer ${authToken}`
                    }
                })
            ])
            const res = response?.map((result, index) => {
                return result.data.events
            })
            setData(res[0])
            setUserEvents(res[1])
        } catch (error) {
            console.log(error);
        }}

    useEffect(() => {
      fetchData()
    }, [])
    
    return (
        <>
            <Navbar />
            <CardSection name="Tech Events" data={data} userEvents={userEvents} />
            <Footer />
        </>
    )}

export default Event