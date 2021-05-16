import React from 'react'
import CardItem from './CardItem'
import './Cards.css';
function Cards() {
    return (
        <div className='cards'>
            <h1>Check out these Epic Services</h1>
            <div class='cards__container'>
                <div className='cards__wrapper'>
                    <ul class='cards__items'>
                        <CardItem
                        src='./images/cdm-1.jpg'
                        text='Explore the power of social media on your disposal'
                        label='Digital Markiting'
                        Path='/services'
                        />

                        <CardItem
                        src='./images/cdm-1.jpg'
                        text='Explore the power of social media on your disposal'
                        label='Digital Markiting'
                        Path='/services'
                        />
                    </ul>
                    <ul class='cards__items'>
                        <CardItem
                        src='./images/cdm-1.jpg'
                        text='Explore the power of social media on your disposal'
                        label='Digital Markiting'
                        Path='/services'
                        />

                        <CardItem
                        src='./images/cdm-1.jpg'
                        text='Explore the power of social media on your disposal'
                        label='Digital Markiting'
                        Path='/services'
                        />
                         <CardItem
                        src='./images/cdm-1.jpg'
                        text='Explore the power of social media on your disposal'
                        label='Digital Markiting'
                        Path='/services'
                        />
                    </ul>

                </div>
            </div>
        </div>
    )
}

export default Cards
