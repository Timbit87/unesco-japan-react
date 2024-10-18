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
      img: todaijiImage,
      dateAdded: '1998',
      shortDescription: 'Todai-ji is a temple located in Nara. Get fucked.'
    },
    {
      name: 'Shirakawa-go and Gokayama',
      prefecture: 'Gifu and Toyama',
      latitude: 35.1615,
      longitude: 136.5354,
      altLat: 136.568,
      altLong: 36.2532,
      img: shirakawagoImage,
      dateAdded: '1995',
      shortDescription: 'Shirakawa-go is incredibly beautiful. Fuck Joel.'
    },
    {
      name: 'Atomic Bomb Dome',
      prefecture: 'Hiroshima',
      latitude: 34.2344,
      longitude: 132.2713,
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
      latitude: 12,
      longitude: 12,
      img: himejiCastle,
      dateAdded: '1993',
      shortDescription: 'Himeji Castle is the most amazing castle still standing.'
    },
    {
      name: 'Yakushima Island',
      prefecture: 'Kagoshima',
      latitude: 12,
      longitude: 12,
      img: yakushima,
      dateAdded: '1993',
      shortDescription: "Yakushima, not to be confused with Yakuzashima, is an island."
    },
    {
      name: 'Shirakami-Sanchi',
      prefecture: 'Aomori & Akita',
      latitude: 14,
      longitude: 14,
      img: shirakamiSanchi,
      dateAdded: '1993',
      shortDescription: 'Some mountains yo.'
    },
    {
      name: 'Shrines and Temples of Nikko',
      prefecture: 'Tochigi',
      latitude: 28,
      longitude: 28,
      img: nikko,
      dateAdded: '1999',
      shortDescription: '103 Temples and structures in a natural setting'
    },
    {
      name: 'Shiretoko National Park',
      prefecture: 'Hokkaido',
      latitude: 60,
      longitude: 60,
      img: shiretoko,
      dateAdded: '2005',
      shortDescription: 'Natural nature park in Hokkaido'
    },
    {
      name: 'Buddhist Monuments in the Horyu-ji Area',
      prefecture: 'Nara',
      latitude: 55,
      longitude: 55,
      img: horyuji,
      dateAdded: '1993',
      shortDescription: 'A bunch of angry gods dude',
    },
    {
      name: 'Historic Monuments of Ancient Kyoto (Kyoto, Uji, and Otsu Cities)',
      prefecture: 'Kyoto and Shiga',
      latitude: 23,
      longitude: 23,
      img: byodoin,
      dateAdded: '1994',
      shortDescription: 'The Kinkaku-jis and shit',
    },
    {
      name: 'Gusuku Sites and Related Properties of the Kingdom of Ryukyu',
      prefecture: 'Okinawa',
      latitude: 17,
      longitude: 17,
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
      latitude: 1,
      longitude: 1,
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
      latitude: 27,
      longitude: 27,
      img: hiraizumi,
      dateAdded: '2011',
      shortDescription: 'Literally no idea',
    },
    {
      name: 'Fujisan, Sacred Place and Source of Artistic Inspiration',
      prefecture: 'Yamanashi and Shizuoka',
      latitude: 50,
      longitude: 50,
      img: 'placeholder',
      dateAdded: '2013',
      shortDescription: "A nice looking triangle, that's for sure",
    },
    {
      name: 'Tomioka Silk Mill and Related Sites',
      prefecture: 'Gunma',
      latitude: 60,
      longitude: 60,
      img: fuji,
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
      latitude: 33,
      longitude: 33,
      img: leCorbusier,
      dateAdded: '2016',
      shortDescription: 'A frog?'
    },
    {
      name: 'Sacred Island of Okinoshima and Associated Sites in the Munakata Region',
      prefecture: 'Fukuoka',
      latitude: 36,
      longitude: 36,
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
      latitude: 66.6,
      longitude: 66.6,
      img: ginzan,
      dateAdded: '2024',
      shortDescription: "I LIKE GOLD"
    }
  ]

export default UnescoObject
