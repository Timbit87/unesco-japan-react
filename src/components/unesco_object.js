import bombDomeImage from '../images/bomb-dome.jpg'
import todaijiImage from '../images/Todai-ji.jpg'
import shirakawagoImage from '../images/shirakawago.jpg'
import amamiOshima from '../images/amamioshima.jpg'
import nikko from '../images/Nikko.jpg'
import itsukushima from '../images/Itsukushima-Shrine.jpg'
import shiretoko from '../images/Shiretoko.jpg'
import yakushima from '../images/Yakushima.jpg'
import himejiCastle from '../images/Himeji-Castle.jpg'
import shirakamiSanchi from '../images/Shirakami-sanchi.jpg'
import horyuji from "../images/horyu-ji.jpg"
import byodoin from '../images/byodoin.jpg'
import fuji from '../images/fuji.jpg'
import ginzan from '../images/ginzan.jpg'
import gunkanjima from '../images/gunkanjima.jpg'
import hiraizumi from '../images/hiraizumi.jpg'
import jomon from '../images/jomon.jpg'
import leCorbusier from '../images/le-corbusier.jpg'
import munakata from '../images/munakata.jpg'
import nachiWaterfall from '../images/nachi-waterfall.jpg'
import nagasakiGod from '../images/nagasaki-god.jpg'
import ogasawara from '../images/ogasawara.jpg'
import okinawa from '../images/Okinawa.jpg'
import tombs from '../images/tombs.jpg'
import tomiokaSilk from '../images/tomioka-silk.jpg'

  const UnescoObject = [
    {
      name: 'Historic Monuments of Ancient Nara',
      prefecture: 'Nara',
      latitude: 34.685,
      longitude: 135.85,
      coordinates: [
        { title: "Todai-Ji", longitude: 34.689167, latitude: 135.839722 },
        { title: "Kofuku-Ji", longitude: 34.68325, latitude: 135.83117 },
        { title: "Kasuga-Taisha", longitude: 34.681389, latitude: 135.848333 },
        { title: "Gango-Ji", longitude: 34.677803, latitude: 135.831356 },
        { title: "Yakushi-Ji", longitude: 34.668356, latitude: 135.784311 },
        { title: "Toshodai-Ji", longitude: 34.675586, latitude: 135.784833 },
        { title: "Heijo Palace", longitude: 34.691111, latitude: 135.795556 },
        { title: "Kasugayama Primeval Forest", longitude: 34.68220, latitude: 135.85833 },
      ],
      img: todaijiImage,
      dateAdded: '1998',
      shortDescription: 'Todai-ji is a temple located in Nara. Get fucked.'
    },
    {
      name: 'Shirakawa-go and Gokayama',
      prefecture: 'Gifu and Toyama',
      latitude: 35.1615,
      longitude: 136.5354,
      coordinates: [
        { title: 'Suganuma Gassho Village', longitude: 36.40423, latitude: 136.88645 },
        { title: 'Shirakawa-Go', longitude: 36.25797, latitude: 136.90626 },
        { title: 'Ainokura Gassho Village', longitude: 36.42603, latitude: 136.93548 }
      ],
      img: shirakawagoImage,
      dateAdded: '1995',
      shortDescription: 'Shirakawa-go is incredibly beautiful. Fuck Joel.'
    },
    {
      name: 'Atomic Bomb Dome',
      prefecture: 'Hiroshima',
      latitude: 34.395556,
      longitude: 132.453611,
      img: bombDomeImage,
      dateAdded: '1996',
      shortDescription: 'The bomb dome is what happens when you become friends with Joel'
    },
    {
      name: "Itsukushima Jinja",
      prefecture: "Hiroshima",
      latitude: 34.295833,
      longitude: 132.319722,
      img: itsukushima,
      dateAdded: '1996',
      shortDescription: 'Itsukushima Jinja is amazing. Unlike Joel.'
    },
    {
      name: 'Himeji Castle',
      prefecture: 'Hyogo',
      latitude: 34.839444,
      longitude: 134.693889,
      img: himejiCastle,
      dateAdded: '1993',
      shortDescription: 'Himeji Castle is the most amazing castle still standing.'
    },
    {
      name: 'Yakushima Island',
      prefecture: 'Kagoshima',
      latitude: 30.343889,
      longitude: 130.523889,
      img: yakushima,
      dateAdded: '1993',
      shortDescription: "Yakushima, not to be confused with Yakuzashima, is an island."
    },
    {
      name: 'Shirakami-Sanchi',
      prefecture: 'Aomori & Akita',
      latitude: 40.47,
      longitude: 140.13,
      img: shirakamiSanchi,
      dateAdded: '1993',
      shortDescription: 'Some mountains yo.'
    },
    {
      name: 'Shrines and Temples of Nikko',
      prefecture: 'Tochigi',
      latitude: 36.7565,
      longitude: 139.5994,
      coordinates: [
        { title: "Futarasan Shrine", latitude: 36.75846, longitude: 139.5964 },
        { title: "Nikko Toshogu", latitude: 36.75814, longitude: 139.5987 },
        { title: "Rinno-Ji", latitude: 36.75449, longitude: 139.6007 }
      ],
      img: nikko,
      dateAdded: '1999',
      shortDescription: '103 Temples and structures in a natural setting'
    },
    {
      name: 'Shiretoko National Park',
      prefecture: 'Hokkaido',
      latitude: 44.1,
      longitude: 145.183333,
      img: shiretoko,
      dateAdded: '2005',
      shortDescription: 'Natural nature park in Hokkaido'
    },
    {
      name: 'Buddhist Monuments in the Horyu-ji Area',
      prefecture: 'Nara',
      latitude: 34.616667,
      longitude: 135.733333,
      coordinates: [
        { title: "Horuji Kondo", latitude: 34.61475, longitude: 135.7342 },
        { title: "Hoki-Ji", latitude: 34.62295, longitude: 135.7462 }
      ],
      img: horyuji,
      dateAdded: '1993',
      shortDescription: 'A bunch of angry gods dude',
    },
    {
      name: 'Historic Monuments of Ancient Kyoto (Kyoto, Uji, and Otsu Cities)',
      prefecture: 'Kyoto and Shiga',
      latitude: 23,
      longitude: 23,
      coordinates: [
        { title: "Kamowakeikazuchi Shrine", latitude: 35.060278, longitude: 135.752778 },
        { title: "Shimogamo Shrine", latitude: 35.038889, longitude: 135.7725 },
        { title: 'To-Ji', latitude: 34.980556, longitude: 135.747778 },
        { title: 'Kiyomizu-dera', latitude: 34.995, longitude: 135.785 },
        { title: 'Enryaku-Ji', latitude: 35.07045, longitude: 135.840925 },
        { title: 'Daigo-Ji', latitude: 34.950992, longitude: 135.819586 },
        { title: 'Ninna-Ji', latitude: 35.031008, longitude: 135.713772 },
        { title: 'Byodo-In', latitude: 34.889292, longitude: 135.807692 },
        { title: 'Ujigami Shrine', latitude: 34.891944, longitude: 135.811389 },
        { title: 'Kozan-Ji', latitude: 35.060108, longitude: 135.678569 },
        { title: 'Saiho-Ji', latitude: 34.991961, longitude: 135.683314 },
        { title: 'Kinkaku-Ji', latitude: 35.039403, longitude: 135.729364 },
        { title: 'Ryoan-Ji', latitude: 35.034494, longitude: 135.718253 },
        { title: 'Nishi Hongan-Ji', latitude: 34.992047, longitude: 135.751614 },
        { title: 'Nijo Castle', latitude: 35.014156, longitude: 135.7475 },
        { title: 'Tenryu-Ji', lattiude: 35.015964, longitude: 135.673772 },
        { title: 'Ginkaku-Ji', latitude: 35.026875, longitude: 135.79825 }
      ],
      img: byodoin,
      dateAdded: '1994',
      shortDescription: 'The Kinkaku-jis and shit',
    },
    {
      name: 'Gusuku Sites and Related Properties of the Kingdom of Ryukyu',
      prefecture: 'Okinawa',
      latitude: 26.208611,
      longitude: 127.682778,
      coordinates: [

      ],
      img: okinawa,
      dateAdded: '2000',
      shortDescription: 'Okinawan stuff',
    },
    {
      name: 'Sacred Sites and Pilgrimage Routes in the Kii Mountain Range',
      prefecture: 'Mie, Nara, and Wakayama',
      latitude: 9,
      longitude: 9,
      img: nachiWaterfall,
      dateAdded: '2004',
      shortDescription: 'Lots of Buddhist stuff here folks',
    },
    {
      name: 'Iwami Ginzan Silver Mine and its Cultural Landscape',
      prefecture: 'Shimane',
      latitude: 35.107222,
      longitude: 132.4375,
      img: ginzan,
      dateAdded: '2007',
      shortDescription: 'No silver left sadly',
    },
    {
      name: 'Ogasawara Islands',
      prefecture: 'Tokyo',
      latitude: 23,
      longitude: 23,
      img: ogasawara,
      dateAdded: '2011',
      shortDescription: "I don't know why this was added."
    },
    {
      name: 'Hiraizumi - Temples, Gardens, and Archaeological Sites Representing the Buddhist Pure Land',
      prefecture: 'Iwate',
      latitude: 39.001111,
      longitude: 141.107778,
      img: hiraizumi,
      dateAdded: '2011',
      shortDescription: 'Literally no idea',
    },
    {
      name: 'Fujisan, Sacred Place and Source of Artistic Inspiration',
      prefecture: 'Yamanashi and Shizuoka',
      latitude: 35.360833,
      longitude: 138.7275,
      img: fuji,
      dateAdded: '2013',
      shortDescription: "A nice looking triangle, that's for sure",
    },
    {
      name: 'Tomioka Silk Mill and Related Sites',
      prefecture: 'Gunma',
      latitude: 36.255278,
      longitude: 138.887778,
      img: tomiokaSilk,
      dateAdded: '2014',
      shortDescription: 'A little worm told me how to make a gun. It fires worms'
    },
    {
      name: "Sites of Japan's Meiji Industrial Revolution",
      prefecture: 'Fukuoka, Saga, Nagasaki, Kumamoto, Kagoshima, Yamaguchi, Iwate, and Shizuoka',
      latitude: 23,
      longitude: 23,
      img: gunkanjima,
      dateAdded: '2015',
      shortDescription: 'ROCK AND STONE',
    },
    {
      name: 'The Architectural Work of Le Corbusier',
      prefecture: 'Tokyo',
      latitude: 35.715278,
      longitude: 139.775833,
      img: leCorbusier,
      dateAdded: '2016',
      shortDescription: 'A frog?'
    },
    {
      name: 'Sacred Island of Okinoshima and Associated Sites in the Munakata Region',
      prefecture: 'Fukuoka',
      latitude: 34.245,
      longitude: 130.105556,
      img: munakata,
      dateAdded: '2017',
      shortDescription: "Can you swim to these? I don't know."
    },
    {
      name: "Hidden Christian Sites in the Nagasaki Region",
      prefecture: 'Nagasaki and Kumamoto',
      latitude: 44,
      longitude: 44,
      img: nagasakiGod,
      dateAdded: '2018',
      shortDescription: "HARK! THERE IS A GOD IN THESE HILLS!"
    },
    {
      name: "Mozu-Furuichi Kofun Group: Mounded Tombs of Ancient Japan",
      prefecture: 'Osaka',
      latitude: 23.3,
      longitude: 23.3,
      img: tombs,
      dateAdded: '2019',
      shortDescription: "I love a big mound"
    },
    {
      name: "Amami-Oshima Island, Tokunoshima Island, Northern part of Okinawa Island, and Iriomote Island",
      prefecture: 'Kagoshima and Okianwa',
      latitude: 16.6,
      longitude: 16.6,
      img: amamiOshima,
      dateAdded: '2019',
      shortDescription: 'More Islands. MORE MORE MORE!'
    },
    {
      name: "Jomon Prehistoric Sites in Northern Japan",
      prefecture: 'Hokkaido, Aomori, Iwate, and Akita',
      latitude: 28.9,
      longitude: 28.9,
      img: jomon,
      dateAdded: '2021',
      shortDescription: 'CAN YOU SMELL WHAT THE ROCK IS COOKING YOU JOMONBRI'
    },
    {
      name: "Sado Island Gold Mines",
      prefecture: "Niigata",
      latitude: 38.041619,
      longitude: 138.255881,
      img: ginzan,
      dateAdded: '2024',
      shortDescription: "I LIKE GOLD"
    }
  ]

export default UnescoObject
