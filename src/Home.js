import React from 'react'
import './Home.css'
import Product from './Product'
function Home() {
    return (
        <div className='home'>
            <div className='home__container'>
                <img className='home__image' src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2021/X-site/Multititle/May/M17/non-reg/1500x600_Hero-Tall_JPN._CB668432235_.jpg" alt="" />
                <div className='home__row'>
                    <Product id='01' title='Vandelay Infrared Thermometer - 3 years Sensor Warranty - MADE in INDIA - Non Contact IR Thermometer, Forehead Temperature Gun' price={30} image='https://images-na.ssl-images-amazon.com/images/I/51yhH82KvZL._SL1280_.jpg' rating={4} />
                    <Product  id='02' title='Godrej 190 L 5 Star Inverter Direct-Cool Single Door Refrigerator (RD 1905 PTDI 53 GL BL, Glass Blue' price={40} rating={3} image='https://images-na.ssl-images-amazon.com/images/I/61zfh8%2B%2B5kL._SX679_.jpg' />

                </div>
                <div className='home__row'>
                <Product  id='03' title='Dr Trust Signature Series Finger Tip Pulse Oximeter With Audio Visual Alarm (Midnight Black)- 201' price={40} rating={3} image='https://images-na.ssl-images-amazon.com/images/I/71Q3b861IEL._SL1500_.jpg'/>
                <Product  id='04' title='Mi Smart Band 5 – India’s No. 1 Fitness Band, 1.1-inch AMOLED Color Display, Magnetic Charging, 2 Weeks Battery Life, Personal Activity...' price={100} rating={1} image='https://images-na.ssl-images-amazon.com/images/I/719ZywAmvOL._SL1500_.jpg'/>
                <Product id='05' title='Aurion Skipping-Rope Jump Skipping Rope for Men, Women, Weight Loss, Kids, Girls, Children, Adult - Best in Fitness, Sports, Exercise, Workout' price={140} rating={2} image='https://images-na.ssl-images-amazon.com/images/I/71Cw%2BUpeo0L._SX679_.jpg'/>
                 </div>
                <div className='home__row'>
                    <Product title='product details brief' price={30} image='https://m.media-amazon.com/images/G/31/AMS/IN/970X250-_desktop_banner.jpg' rating={4} />

                </div>
            </div>
        </div>
    )
}

export default Home
