export default async (models) => {
  const pointsOfInterest = [
    {
      name: "Cattedrale di Santa Maria Assunta",
      description: "Easily identifiable thanks to its sleek bell tower, it was built back in the 6th and 7th centuries and rebuilt in the 15th century. It contains one of the most charming and best preserved painting cycles in Camonica Valley, with frescoes made by Giovanni Pietro da Cemmo and his school from 1491 to 1493. The façade is in Late Baroque style (1776).",
      cover_img: 'Duomo_vecchio_e_duomo_nuovo_notturna_Brescia.png',
      img: "cattedrale_di_santa_maria_assunta.png",
      img_caption: "La cupola della Cattedrale di Santa Maria Assunta",
    },
    {
      name: "Cattedrale di Santa Maria Assunta",
      description: "Easily identifiable thanks to its sleek bell tower, it was built back in the 6th and 7th centuries and rebuilt in the 15th century. It contains one of the most charming and best preserved painting cycles in Camonica Valley, with frescoes made by Giovanni Pietro da Cemmo and his school from 1491 to 1493. The façade is in Late Baroque style (1776).",
      cover_img: 'brescia_ser.jpg',
      img: "cattedrale_di_santa_maria_assunta.png",
      img_caption: "La cupola della Cattedrale di Santa Maria Assunta",
    },
    {
      name: "Cattedrale di Santa Maria Assunta",
      description: "Easily identifiable thanks to its sleek bell tower, it was built back in the 6th and 7th centuries and rebuilt in the 15th century. It contains one of the most charming and best preserved painting cycles in Camonica Valley, with frescoes made by Giovanni Pietro da Cemmo and his school from 1491 to 1493. The façade is in Late Baroque style (1776).",
      cover_img: 'intro_brescia.png',
      img: "cattedrale_di_santa_maria_assunta.png",
      img_caption: "La cupola della Cattedrale di Santa Maria Assunta",
    },
    {
      name: "Piazza della Loggia",
      description: "Details about Piazza della Loggia",
      cover_img: "Duomo_vecchio_e_duomo_nuovo_notturna_Brescia.png",
      img: "https://fs.i3lab.group/hypermedia/cats/birman.jpg",
      img_caption: "img caption",
    },
    {
      name: "Piazza della Loggia",
      description: "Details about Piazza della Loggia",
      cover_img: "Duomo_vecchio_e_duomo_nuovo_notturna_Brescia.png",
      img: "https://fs.i3lab.group/hypermedia/cats/birman.jpg",
      img_caption: "img caption",
    },
    {
      name: "Piazza della Loggia",
      description: "Details about Piazza della Loggia",
      cover_img: "Duomo_vecchio_e_duomo_nuovo_notturna_Brescia.png",
      img: "https://fs.i3lab.group/hypermedia/cats/birman.jpg",
      img_caption: "img caption",
    },
    {
      name: "Parco dell'Acqua",
      description: "Details about Parco dell'Acqua",
      cover_img: "Duomo_vecchio_e_duomo_nuovo_notturna_Brescia.png",
      img: "https://fs.i3lab.group/hypermedia/cats/bombay.jpg",
      img_caption: "img caption",
    },
    {
      name: "Parco dell'Acqua",
      description: "Details about Parco dell'Acqua",
      cover_img: "Duomo_vecchio_e_duomo_nuovo_notturna_Brescia.png",
      img: "https://fs.i3lab.group/hypermedia/cats/bombay.jpg",
      img_caption: "img caption",
    },
    {
      name: "Parco dell'Acqua",
      description: "Details about Parco dell'Acqua",
      cover_img: "Duomo_vecchio_e_duomo_nuovo_notturna_Brescia.png",
      img: "https://fs.i3lab.group/hypermedia/cats/bombay.jpg",
      img_caption: "img caption",
    },
  ]

  const events = [
    {
      date: '2022-12-05',
      cover_img: 'homepage-img.jpeg',
      time: ' 09:00:00',
      poi: 'Duomo',
      title: 'Giga party',
      type: 'Music and entertainment',
      description: 'The big party is going to be lit, come and enjoy neomelodical singers from Naples fill your ears with pleasurable sounds!',
      season: 'winter',
      pointOfInterestId: 1
    },
    {
      date: '2022-07-06',
      cover_img: 'brescia_poi.jpg',
      time: '12:30:00',
      poi: 'Town hall',
      title: 'Brescia is reggae',
      type: 'Music and entertainment',
      description: 'Bob Marley will always live on in this cultural town.',
      season: 'summer',
      pointOfInterestId: 1
    },
    {
      date: '2022-12-05',
      cover_img: 'brescia_ser.jpg',
      time: ' 09:00:00',
      poi: 'Duomo',
      title: 'Giga party',
      type: 'Music and entertainment',
      description: 'The big party is going to be lit, come and enjoy neomelodical singers from Naples fill your ears with pleasurable sounds!',
      season: 'winter',
      pointOfInterestId: 1
    },
    {
      date: '2022-07-06',
      cover_img: 'brescia_iti.jpg',
      time: '12:30:00',
      poi: 'Town hall',
      title: 'Brescia is reggae',
      type: 'Music and entertainment',
      description: 'Bob Marley will always live on in this cultural town.',
      season: 'summer',
      pointOfInterestId: 1
    },
    {
      date: '2022-12-05',
      cover_img: 'brescia_eve.jpg',
      time: ' 09:00:00',
      poi: 'Duomo',
      title: 'Giga party',
      type: 'Music and entertainment',
      description: 'The big party is going to be lit, come and enjoy neomelodical singers from Naples fill your ears with pleasurable sounds!',
      season: 'winter',
      pointOfInterestId: 1
    },
    {
      date: '2022-07-06',
      cover_img: 'brescia_poi.jpg',
      time: '12:30:00',
      poi: 'Town hall',
      title: 'Brescia is reggae',
      type: 'Music and entertainment',
      description: 'Bob Marley will always live on in this cultural town.',
      season: 'summer',
      pointOfInterestId: 1
    },
  ]

  const itineraries = [
    {
      name: 'Brescia Romana',
      description: 'Discover over 800 years of history preserved up until the contemporary era.',
      cover_img: 'brescia_poi.jpg',
      duration: 90
    },
    {
      name: 'Naturalistic tour',
      description: 'Brescia il full of monkeys and other weird animals.',
      cover_img: 'brescia_poi.jpg',
      duration: 90
    }
  ]

  const images = [
    {
      path: '~/assets/intro_brescia.png',
      pointOfInterestId: 1,
      eventId: 1
    },
    {
      path: '~/assets/brescia_poi.jpg',
      eventId: 1
    }
  ]

  await models.PointOfInterest.bulkCreate(pointsOfInterest)
  await models.Event.bulkCreate(events)
  await models.Itinerary.bulkCreate(itineraries)
  await models.Image.bulkCreate(images)
}
