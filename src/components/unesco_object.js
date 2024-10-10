import React from 'react';
import bombDomeImage from '../images/bomb-dome.jpg'
import todaijiImage from '../images/Todai-ji.jpg'
import shirakawagoImage from '../images/shirakawago.jpg'

  const UnescoObject = [
    {
      name: 'Todai-ji',
      prefecture: 'Nara',
      latitude: '3',
      longitude: '3',
      img: todaijiImage,
      dateAdded: 'September 11th 2001',
      shortDescription: 'Todai-ji is a temple located in Nara. Get fucked.'
    },
    {
      name: 'Shirakawa-go',
      prefecture: 'Gifu',
      latitude: '3',
      longitude: '3',
      img: shirakawagoImage,
      dateAdded: 'September 11th 2001',
      shortDescription: 'Shirakawa-go is incredibly beautiful. Fuck Joel'
    },
    {
      name: 'Atomic Bomb Dome',
      prefecture: 'Hiroshima',
      latitude: 3,
      longitude: 3,
      img: bombDomeImage,
      dateAdded: 'September 11th 2001',
      shortDescription: 'The bomb dome is what happens when you become friends with Joel'
    }
  ]

export default UnescoObject
