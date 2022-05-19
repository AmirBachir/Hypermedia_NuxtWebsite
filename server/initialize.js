export default async (models) => {
  const pointsOfInterest = [
    {
      name: "Cattedrale di Santa Maria Assunta",
      intro: "Easily identifiable thanks to its sleek bell tower, it was built back in the 6th and 7th centuries and rebuilt in the 15th century. It contains one of the most charming and best preserved painting cycles in Camonica Valley, with frescoes made by Giovanni Pietro da Cemmo and his school from 1491 to 1493. The façade is in Late Baroque style (1776).",
      details: "The original church here was probably built in Romanesque style. During the rule of the Visconti in the 14th century, a larger church was constructed in the Lombard Gothic style. In the 16th century it was rebuilt, and at this time semi-circular arches replaced the earlier pointed arches. In the same century the orientation of the church was reversed, making the façade front onto the piazza. At the end of the 19th century a further reconstruction reverted the church structure to that of the 16th century. In 1969–70, the bell tower was demolished because of its instability.",      
      cover_img: 'Duomo_vecchio_e_duomo_nuovo_notturna_Brescia.png',
      img: "cattedrale_di_santa_maria_assunta.png",
      img_caption: "La cupola della Cattedrale di Santa Maria Assunta",
    },
    {
      name: "Cattedrale di Santa Maria Assunta",
      intro: "Easily identifiable thanks to its sleek bell tower, it was built back in the 6th and 7th centuries and rebuilt in the 15th century. It contains one of the most charming and best preserved painting cycles in Camonica Valley, with frescoes made by Giovanni Pietro da Cemmo and his school from 1491 to 1493. The façade is in Late Baroque style (1776).",
      details: "The original church here was probably built in Romanesque style. During the rule of the Visconti in the 14th century, a larger church was constructed in the Lombard Gothic style. In the 16th century it was rebuilt, and at this time semi-circular arches replaced the earlier pointed arches. In the same century the orientation of the church was reversed, making the façade front onto the piazza. At the end of the 19th century a further reconstruction reverted the church structure to that of the 16th century. In 1969–70, the bell tower was demolished because of its instability.",      
      cover_img: 'brescia_ser.jpg',
      img: "cattedrale_di_santa_maria_assunta.png",
      img_caption: "La cupola della Cattedrale di Santa Maria Assunta",
    },
    {
      name: "Cattedrale di Santa Maria Assunta",
      intro: "Easily identifiable thanks to its sleek bell tower, it was built back in the 6th and 7th centuries and rebuilt in the 15th century. It contains one of the most charming and best preserved painting cycles in Camonica Valley, with frescoes made by Giovanni Pietro da Cemmo and his school from 1491 to 1493. The façade is in Late Baroque style (1776).",
      details: "The original church here was probably built in Romanesque style. During the rule of the Visconti in the 14th century, a larger church was constructed in the Lombard Gothic style. In the 16th century it was rebuilt, and at this time semi-circular arches replaced the earlier pointed arches. In the same century the orientation of the church was reversed, making the façade front onto the piazza. At the end of the 19th century a further reconstruction reverted the church structure to that of the 16th century. In 1969–70, the bell tower was demolished because of its instability.",      
      cover_img: 'intro_brescia.png',
      img: "cattedrale_di_santa_maria_assunta.png",
      img_caption: "La cupola della Cattedrale di Santa Maria Assunta",
    },
    {
      name: "Piazza della Loggia",
      intro: "Easily identifiable thanks to its sleek bell tower, it was built back in the 6th and 7th centuries and rebuilt in the 15th century. It contains one of the most charming and best preserved painting cycles in Camonica Valley, with frescoes made by Giovanni Pietro da Cemmo and his school from 1491 to 1493. The façade is in Late Baroque style (1776).",
      details: "The original church here was probably built in Romanesque style. During the rule of the Visconti in the 14th century, a larger church was constructed in the Lombard Gothic style. In the 16th century it was rebuilt, and at this time semi-circular arches replaced the earlier pointed arches. In the same century the orientation of the church was reversed, making the façade front onto the piazza. At the end of the 19th century a further reconstruction reverted the church structure to that of the 16th century. In 1969–70, the bell tower was demolished because of its instability.",      
      cover_img: "Duomo_vecchio_e_duomo_nuovo_notturna_Brescia.png",
      img: "cattedrale_di_santa_maria_assunta.png",
      img_caption: "img caption",
    },
    {
      name: "Piazza della Loggia",
      intro: "Easily identifiable thanks to its sleek bell tower, it was built back in the 6th and 7th centuries and rebuilt in the 15th century. It contains one of the most charming and best preserved painting cycles in Camonica Valley, with frescoes made by Giovanni Pietro da Cemmo and his school from 1491 to 1493. The façade is in Late Baroque style (1776).",
      details: "The original church here was probably built in Romanesque style. During the rule of the Visconti in the 14th century, a larger church was constructed in the Lombard Gothic style. In the 16th century it was rebuilt, and at this time semi-circular arches replaced the earlier pointed arches. In the same century the orientation of the church was reversed, making the façade front onto the piazza. At the end of the 19th century a further reconstruction reverted the church structure to that of the 16th century. In 1969–70, the bell tower was demolished because of its instability.",      
      cover_img: "Duomo_vecchio_e_duomo_nuovo_notturna_Brescia.png",
      img: "cattedrale_di_santa_maria_assunta.png",
      img_caption: "img caption",
    },
    {
      name: "Piazza della Loggia",
      intro: "Easily identifiable thanks to its sleek bell tower, it was built back in the 6th and 7th centuries and rebuilt in the 15th century. It contains one of the most charming and best preserved painting cycles in Camonica Valley, with frescoes made by Giovanni Pietro da Cemmo and his school from 1491 to 1493. The façade is in Late Baroque style (1776).",
      details: "The original church here was probably built in Romanesque style. During the rule of the Visconti in the 14th century, a larger church was constructed in the Lombard Gothic style. In the 16th century it was rebuilt, and at this time semi-circular arches replaced the earlier pointed arches. In the same century the orientation of the church was reversed, making the façade front onto the piazza. At the end of the 19th century a further reconstruction reverted the church structure to that of the 16th century. In 1969–70, the bell tower was demolished because of its instability.",      
      cover_img: "Duomo_vecchio_e_duomo_nuovo_notturna_Brescia.png",
      img: "cattedrale_di_santa_maria_assunta.png",
      img_caption: "img caption",
    },
    {
      name: "Parco dell'Acqua",
      intro: "Easily identifiable thanks to its sleek bell tower, it was built back in the 6th and 7th centuries and rebuilt in the 15th century. It contains one of the most charming and best preserved painting cycles in Camonica Valley, with frescoes made by Giovanni Pietro da Cemmo and his school from 1491 to 1493. The façade is in Late Baroque style (1776).",
      details: "The original church here was probably built in Romanesque style. During the rule of the Visconti in the 14th century, a larger church was constructed in the Lombard Gothic style. In the 16th century it was rebuilt, and at this time semi-circular arches replaced the earlier pointed arches. In the same century the orientation of the church was reversed, making the façade front onto the piazza. At the end of the 19th century a further reconstruction reverted the church structure to that of the 16th century. In 1969–70, the bell tower was demolished because of its instability.",
      cover_img: "Duomo_vecchio_e_duomo_nuovo_notturna_Brescia.png",
      img: "cattedrale_di_santa_maria_assunta.png",
      img_caption: "img caption",
    },
    {
      name: "Parco dell'Acqua",
      intro: "Easily identifiable thanks to its sleek bell tower, it was built back in the 6th and 7th centuries and rebuilt in the 15th century. It contains one of the most charming and best preserved painting cycles in Camonica Valley, with frescoes made by Giovanni Pietro da Cemmo and his school from 1491 to 1493. The façade is in Late Baroque style (1776).",
      details: "The original church here was probably built in Romanesque style. During the rule of the Visconti in the 14th century, a larger church was constructed in the Lombard Gothic style. In the 16th century it was rebuilt, and at this time semi-circular arches replaced the earlier pointed arches. In the same century the orientation of the church was reversed, making the façade front onto the piazza. At the end of the 19th century a further reconstruction reverted the church structure to that of the 16th century. In 1969–70, the bell tower was demolished because of its instability.",
      cover_img: "Duomo_vecchio_e_duomo_nuovo_notturna_Brescia.png",
      img: "cattedrale_di_santa_maria_assunta.png",
      img_caption: "img caption",
    },
    {
      name: "Parco dell'Acqua",
      intro: "Easily identifiable thanks to its sleek bell tower, it was built back in the 6th and 7th centuries and rebuilt in the 15th century. It contains one of the most charming and best preserved painting cycles in Camonica Valley, with frescoes made by Giovanni Pietro da Cemmo and his school from 1491 to 1493. The façade is in Late Baroque style (1776).",
      details: "The original church here was probably built in Romanesque style. During the rule of the Visconti in the 14th century, a larger church was constructed in the Lombard Gothic style. In the 16th century it was rebuilt, and at this time semi-circular arches replaced the earlier pointed arches. In the same century the orientation of the church was reversed, making the façade front onto the piazza. At the end of the 19th century a further reconstruction reverted the church structure to that of the 16th century. In 1969–70, the bell tower was demolished because of its instability.",
      cover_img: "Duomo_vecchio_e_duomo_nuovo_notturna_Brescia.png",
      img: "cattedrale_di_santa_maria_assunta.png",
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
      pointOfInterestId: 2
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
    {
      date: '2022-07-06',
      cover_img: 'brescia_poi.jpg',
      time: '12:30:00',
      poi: 'Town hall',
      title: 'Brescia is reggae',
      type: 'Music and entertainment',
      description: 'Bob Marley will always live on in this cultural town.',
      season: 'summer',
      pointOfInterestId: 2
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
      pointOfInterestId: 2
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
      pointOfInterestId: 2
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
      pointOfInterestId: 2
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
      pointOfInterestId: 2
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
      pointOfInterestId: 2
    },

  ]

  const itineraries = [
    {
      name: 'Brescia Romana',
      short_description: 'Discover over 800 years of history preserved up until the contemporary era.',
      thumbnail: "Brescia Romana.png",
      cover_img: 'brescia_poi.jpg',
      duration: 90
    },
    {
      name: 'Naturalistic tour',
      short_description: 'Brescia il full of monkeys and other weird animals.',
      thumbnail: "Brescia Romana.png",
      cover_img: 'brescia_poi.jpg',
      duration: 90
    }
  ]

  const itinerarypoi = [
    {
      pointOfInterestId: 1,
      itineraryId: 1
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

  const serviceTypes = [
    {
      name: 'pharmacies',
    },
    {
      name: 'banks',
    },
    {
      name: 'restaurants',
    }
  ]

  const services = [
    {
      name: 'Farmacia Bravi',
      address: 'Via S. Zeno, 95',
      practicalInfo: 'They are good',
    },
    {
      name: 'Farmacie Comunali Di Brescia Spa',
      address: 'Via Achille Grandi, 18',
      practicalInfo: 'Townhall pharmacies',
    },
    {
      name: 'Castle Pharmacy',
      address: 'Via Galileo Galilei, 85/A',
      practicalInfo: 'It is in a castle!',
    },
    {
      name: 'Farmacia Austoni',
      address: 'Via Cremona, 37',
      practicalInfo: 'Owned by a distinguished gentleman',
    },
  ]

  await models.PointOfInterest.bulkCreate(pointsOfInterest)
  await models.Event.bulkCreate(events)
  await models.Itinerary.bulkCreate(itineraries)
  await models.Image.bulkCreate(images)
  await models.ItineraryPoi.bulkCreate(itinerarypoi)
  await models.ServiceType.bulkCreate(serviceTypes)
  await models.Service.bulkCreate(services)
}
