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
      coordinates: [
        { title: "Todai-Ji", latitude: 34.689167, longitude: 135.839722, img: todaijiImage },
        { title: "Kofuku-Ji", latitude: 34.68325, longitude: 135.83117 },
        { title: "Kasuga-Taisha", latitude: 34.681389, longitude: 135.848333 },
        { title: "Gango-Ji", latitude: 34.677803, longitude: 135.831356 },
        { title: "Yakushi-Ji", latitude: 34.668356, longitude: 135.784311 },
        { title: "Toshodai-Ji", latitude: 34.675586, longitude: 135.784833 },
        { title: "Heijo Palace", latitude: 34.691111, longitude: 135.795556 },
        { title: "Kasugayama Primeval Forest", latitude: 34.68220, longitude: 135.85833 },
      ],
      cardImg: todaijiImage,
      dateAdded: '1998',
      shortDescription: 'Todai-ji is a temple located in Nara'
    },
    {
      name: 'Shirakawa-go and Gokayama',
      prefecture: 'Gifu and Toyama',
      coordinates: [
        { title: 'Suganuma Gassho Village', latitude: 36.40423, longitude: 136.88645 },
        { title: 'Shirakawa-Go', latitude: 36.25797, longitude: 136.90626 },
        { title: 'Ainokura Gassho Village', latitude: 36.42603, longitude: 136.93548 }
      ],
      cardImg: shirakawagoImage,
      dateAdded: '1995',
      shortDescription: 'Shirakawa-go is incredibly beautiful.'
    },
    {
      name: 'Atomic Bomb Dome',
      prefecture: 'Hiroshima',
      coordinates: [ {title: 'Atomic Bomb Dome', latitude: 34.395556, longitude: 132.453611} ],
      cardImg: bombDomeImage,
      dateAdded: '1996',
      shortDescription: 'The bomb dome is what happens when you become friends with Joel'
    },
    {
      name: "Itsukushima Jinja",
      prefecture: "Hiroshima",
      coordinates: [ {title: 'Itsukushima Jinja', latitude: 34.295833, longitude: 132.319722} ],
      cardImg: itsukushima,
      dateAdded: '1996',
      shortDescription: 'Itsukushima Jinja is amazing. Unlike Joel.'
    },
    {
      name: 'Himeji Castle',
      prefecture: 'Hyogo',
      coordinates: [{ title: 'Himeji Castle', latitude: 34.839444, longitude: 134.693889 }],
      cardImg: himejiCastle,
      dateAdded: '1993',
      shortDescription: 'Himeji Castle is the most amazing castle still standing.'
    },
    {
      name: 'Yakushima Island',
      prefecture: 'Kagoshima',
      coordinates: [{ title: 'Yakushima Island', latitude: 30.343889, longitude: 130.523889 }],
      cardImg: yakushima,
      dateAdded: '1993',
      shortDescription: "Yakushima, not to be confused with Yakuzashima, is an island."
    },
    {
      name: 'Shirakami-Sanchi',
      prefecture: 'Aomori & Akita',
      coordinates: [{ title: 'Shirakami-Sanchi', latitude: 40.47, longitude: 140.13 }],
      cardImg: shirakamiSanchi,
      dateAdded: '1993',
      shortDescription: 'Some mountains yo.'
    },
    {
      name: 'Shrines and Temples of Nikko',
      prefecture: 'Tochigi',
      coordinates: [
        { title: "Futarasan Shrine", latitude: 36.75846, longitude: 139.5964 },
        { title: "Nikko Toshogu", latitude: 36.75814, longitude: 139.5987 },
        { title: "Rinno-Ji", latitude: 36.75449, longitude: 139.6007 }
      ],
      cardImg: nikko,
      dateAdded: '1999',
      shortDescription: '103 Temples and structures in a natural setting'
    },
    {
      name: 'Shiretoko National Park',
      prefecture: 'Hokkaido',
      coordinates: [{ title: 'Shiretoko National Park', latitude: 44.1, longitude: 145.1833333 }],
      cardImg: shiretoko,
      dateAdded: '2005',
      shortDescription: 'Natural nature park in Hokkaido'
    },
    {
      name: 'Buddhist Monuments in the Horyu-ji Area',
      prefecture: 'Nara',
      coordinates: [
        { title: "Horuji Kondo", latitude: 34.61475, longitude: 135.7342 },
        { title: "Hoki-Ji", latitude: 34.62295, longitude: 135.7462 }
      ],
      cardImg: horyuji,
      dateAdded: '1993',
      shortDescription: 'A bunch of angry gods dude',
    },
    {
      name: 'Historic Monuments of Ancient Kyoto (Kyoto, Uji, and Otsu Cities)',
      prefecture: 'Kyoto and Shiga',
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
        { title: 'Tenryu-Ji', latitude: 35.015964, longitude: 135.673772 },
        { title: 'Ginkaku-Ji', latitude: 35.026875, longitude: 135.79825 }
      ],
      cardImg: byodoin,
      dateAdded: '1994',
      shortDescription: 'The Kinkaku-jis.',
    },
    {
      name: 'Gusuku Sites and Related Properties of the Kingdom of Ryukyu',
      prefecture: 'Okinawa',
      coordinates: [
        { title: 'Shuri Castle', latitude: 26.217031, longitude: 127.719475 },
        { title: 'Nakijin Castle', latitude: 26.690833, longitude: 127.930278 },
        { title: 'Zakimi Castle', latitude: 26.408333, longitude: 127.741944 },
        { title: 'Katsuren Castle', latitude: 26.33, longitude: 127.878611 },
        { title: 'Nakagusuku Castle', latitude: 26.283889, longitude: 127.801389 },
        { title: 'Tamaudun', latitude: 26.218333, longitude: 127.714722 },
        { title: 'Sonohyan-utaki', latitude: 26.218075, longitude: 127.717352 },
        { title: 'Shikaina-en', latitude: 26.204444, longitude: 127.715278 },
        { title: 'Sefa-utaki', latitude: 26.173333, longitude: 127.826667 },
      ],
      cardImg: okinawa,
      dateAdded: '2000',
      shortDescription: 'Okinawan stuff',
    },
    {
      name: 'Sacred Sites and Pilgrimage Routes in the Kii Mountain Range',
      prefecture: 'Mie, Nara, and Wakayama',
      coordinates: [
        { title: 'Mount Yoshino', latitude: 34.356667, longitude: 135.870556 },
        { title: 'Yoshino Mikumari Shrine', latitude: 34.353889, longitude: 135.873056 },
        { title: 'Kimpu Shrine', latitude: 34.342778, longitude: 135.881667 },
        { title: 'Kimpusen-ji', latitude: 34.368253, longitude: 135.858167 },
        { title: 'Yoshimizu Shrine', latitude: 34.367639, longitude: 135.861875 },
        { title: 'Ominesan-ji', latitude: 34.253, longitude: 135.9414 },
        { title: 'Kumano Hongu Taisha', latitude: 33.84, longitude: 135.773889 },
        { title: 'Kumano Hayatama Taisha', latitude: 33.731953, longitude: 135.983725 },
        { title: 'Kumano Nachi Taisha', latitude: 33.668611, longitude: 135.890556 },
        { title: 'Seiganto-ji', latitude: 33.6694, longitude: 135.8898 },
        { title: 'Nachi Falls', latitude: 33.672, longitude: 135.891 },
        { title: 'Nachi Primeval Forest', latitude: 33.675274, longitude: 135.886116 },
        { title: 'Fudarakusan-ji', latitude: 33.644725, longitude: 135.934436 },
        { title: 'Niutsuhime Shrine', latitude: 34.262722, longitude: 135.5195 },
        { title: 'Kongobu-ji', latitude: 34.214081, longitude: 135.584092 },
        { title: 'Jison-in', latitude: 34.295192, longitude: 135.550187 },
        { title: 'Niukanshofu Shrine', latitude: 34.294167, longitude: 135.549444 },
        { title: 'Kumano Kodo Trails', latitude: 33.80699674114499, longitude: 135.56300547610854 },
        { title: 'Koyasan Choishi-michi Trails', latitude: 34.23610338110095, longitude: 135.54108762890445 }
      ],
      cardImg: nachiWaterfall,
      dateAdded: '2004',
      shortDescription: 'Lots of Buddhist stuff here folks',
    },
    {
      name: 'Iwami Ginzan Silver Mine and its Cultural Landscape',
      prefecture: 'Shimane',
      coordinates: [
        { title: 'Iwami Ginzan Silver Mine and its Cultural Landscape', latitude: 35.107222, longitude: 132.4375 }
      ],
      cardImg: ginzan,
      dateAdded: '2007',
      shortDescription: 'No silver left sadly',
    },
    {
      name: 'Ogasawara Islands',
      prefecture: 'Tokyo',
      coordinates: [{ title: 'Ogasawara Islands', latitude: 12, longitude: 12 }],
      cardImg: ogasawara,
      dateAdded: '2011',
      shortDescription: "I don't know why this was added."
    },
    {
      name: 'Hiraizumi - Temples, Gardens, and Archaeological Sites Representing the Buddhist Pure Land',
      prefecture: 'Iwate',
      coordinates: [
        { title: 'placer', latitude: 39.001111, longitude: 141.107778 }
      ],
      cardImg: hiraizumi,
      dateAdded: '2011',
      shortDescription: 'Literally no idea',
    },
    {
      name: 'Fujisan, Sacred Place and Source of Artistic Inspiration',
      prefecture: 'Yamanashi and Shizuoka',
      coordinates: [{ title: 'Fujisan, Sacred Place and Source of Artistic Inspiration', latitude: 35.360833, longitude: 138.7275 }],
      cardImg: fuji,
      dateAdded: '2013',
      shortDescription: "A nice looking triangle, that's for sure",
    },
    {
      name: 'Tomioka Silk Mill and Related Sites',
      prefecture: 'Gunma',
      coordinates: [{ title: 'Tomioka Silk Mill', latitude: 36.255278, longitude: 138.887778 }],
      cardImg: tomiokaSilk,
      dateAdded: '2014',
      shortDescription: 'A little worm told me how to make a gun. It fires worms'
    },
    {
      name: "Sites of Japan's Meiji Industrial Revolution",
      prefecture: 'Fukuoka, Saga, Nagasaki, Kumamoto, Kagoshima, Yamaguchi, Iwate, and Shizuoka',
      coordinates: [{ title: 'Poop', latitude: 23, longitude: 23 }],
      cardImg: gunkanjima,
      dateAdded: '2015',
      shortDescription: 'ROCK AND STONE',
    },
    {
      name: 'The Architectural Work of Le Corbusier',
      prefecture: 'Tokyo',
      coordinates: [{ title: 'placer', latitude: 35.715278, longitude: 139.775833 }],
      cardImg: leCorbusier,
      dateAdded: '2016',
      shortDescription: 'A frog?'
    },
    {
      name: 'Sacred Island of Okinoshima and Associated Sites in the Munakata Region',
      prefecture: 'Fukuoka',
      coordinates: [{ title: 'Sacred Islands', latitude: 34.245, longitude: 130.105556 }],
      cardImg: munakata,
      dateAdded: '2017',
      shortDescription: "Can you swim to these? I don't know."
    },
    {
      name: "Hidden Christian Sites in the Nagasaki Region",
      prefecture: 'Nagasaki and Kumamoto',
      coordinates: [{ title: 'Christain Site', latitude: 44, longitude: 44 }],
      cardImg: nagasakiGod,
      dateAdded: '2018',
      shortDescription: "HARK! THERE IS A GOD IN THESE HILLS!"
    },
    {
      name: "Mozu-Furuichi Kofun Group: Mounded Tombs of Ancient Japan",
      prefecture: 'Osaka',
      coordinates: [{ title: 'Mozu-Furuichi', latitude: 23.3, longitude: 23.3 }],
      cardImg: tombs,
      dateAdded: '2019',
      shortDescription: "I love a big mound"
    },
    {
      name: "Amami-Oshima Island, Tokunoshima Island, Northern part of Okinawa Island, and Iriomote Island",
      prefecture: 'Kagoshima and Okianwa',
      coordinates: [{ title: 'Amami-Oshima', latitude: 16.6, longitude: 16.6 }],
      cardImg: amamiOshima,
      dateAdded: '2019',
      shortDescription: 'More Islands. MORE MORE MORE!'
    },
    {
      name: "Jomon Prehistoric Sites in Northern Japan",
      prefecture: 'Hokkaido, Aomori, Iwate, and Akita',
      coordinates: [{ title: 'Jomon', latitude: 28.9, longitude: 28.9 }],
      cardImg: jomon,
      dateAdded: '2021',
      shortDescription: 'CAN YOU SMELL WHAT THE ROCK IS COOKING YOU JOMONBRI'
    },
    {
      name: "Sado Island Gold Mines",
      prefecture: "Niigata",
      coordinates: [{ title: 'Sado Island Gold Mines', latitude: 38.041619, longitude: 138.255881 }],
      cardImg: ginzan,
      dateAdded: '2024',
      shortDescription: "I LIKE GOLD"
    }
  ]

export default UnescoObject
