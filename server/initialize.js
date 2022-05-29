export default async (models) => {
  // most of them are fake/repeated
  const pointsOfInterest = [
    {
      name: "Cathedral of Santa Maria Assunta",
      intro: "Easily identifiable thanks to its sleek bell tower, it was built back in the 6th and 7th centuries and rebuilt in the 15th century. It contains one of the most charming and best preserved painting cycles in Camonica Valley, with frescoes made by Giovanni Pietro da Cemmo and his school from 1491 to 1493. The façade is in Late Baroque style (1776).",
      details: "The original church here was probably built in Romanesque style. During the rule of the Visconti in the 14th century, a larger church was constructed in the Lombard Gothic style. In the 16th century it was rebuilt, and at this time semi-circular arches replaced the earlier pointed arches. In the same century the orientation of the church was reversed, making the façade front onto the piazza. At the end of the 19th century a further reconstruction reverted the church structure to that of the 16th century. In 1969–70, the bell tower was demolished because of its instability.",
      cover_img: 'Duomo_vecchio_e_duomo_nuovo_notturna_Brescia.png',
      img: "cattedrale_di_santa_maria_assunta.png",
      img_caption: "La cupola della Cattedrale di Santa Maria Assunta",
    },
    {
      name: "Roman Architectural Park",
      intro: "Easily identifiable thanks to its sleek bell tower, it was built back in the 6th and 7th centuries and rebuilt in the 15th century. It contains one of the most charming and best preserved painting cycles in Camonica Valley, with frescoes made by Giovanni Pietro da Cemmo and his school from 1491 to 1493. The façade is in Late Baroque style (1776).",
      details: "The original church here was probably built in Romanesque style. During the rule of the Visconti in the 14th century, a larger church was constructed in the Lombard Gothic style. In the 16th century it was rebuilt, and at this time semi-circular arches replaced the earlier pointed arches. In the same century the orientation of the church was reversed, making the façade front onto the piazza. At the end of the 19th century a further reconstruction reverted the church structure to that of the 16th century. In 1969–70, the bell tower was demolished because of its instability.",
      cover_img: 'Roman_Architectural_Park.png',
      img: "cattedrale_di_santa_maria_assunta.png",
      img_caption: "La cupola della Cattedrale di Santa Maria Assunta",
    },
    {
      name: "Castel of Brescia",
      intro: "Easily identifiable thanks to its sleek bell tower, it was built back in the 6th and 7th centuries and rebuilt in the 15th century. It contains one of the most charming and best preserved painting cycles in Camonica Valley, with frescoes made by Giovanni Pietro da Cemmo and his school from 1491 to 1493. The façade is in Late Baroque style (1776).",
      details: "The original church here was probably built in Romanesque style. During the rule of the Visconti in the 14th century, a larger church was constructed in the Lombard Gothic style. In the 16th century it was rebuilt, and at this time semi-circular arches replaced the earlier pointed arches. In the same century the orientation of the church was reversed, making the façade front onto the piazza. At the end of the 19th century a further reconstruction reverted the church structure to that of the 16th century. In 1969–70, the bell tower was demolished because of its instability.",
      cover_img: 'Brescia_Castle.png',
      img: "cattedrale_di_santa_maria_assunta.png",
      img_caption: "La cupola della Cattedrale di Santa Maria Assunta",
    },
    {
      name: "Santa Giulia Museum",
      intro: "Easily identifiable thanks to its sleek bell tower, it was built back in the 6th and 7th centuries and rebuilt in the 15th century. It contains one of the most charming and best preserved painting cycles in Camonica Valley, with frescoes made by Giovanni Pietro da Cemmo and his school from 1491 to 1493. The façade is in Late Baroque style (1776).",
      details: "The original church here was probably built in Romanesque style. During the rule of the Visconti in the 14th century, a larger church was constructed in the Lombard Gothic style. In the 16th century it was rebuilt, and at this time semi-circular arches replaced the earlier pointed arches. In the same century the orientation of the church was reversed, making the façade front onto the piazza. At the end of the 19th century a further reconstruction reverted the church structure to that of the 16th century. In 1969–70, the bell tower was demolished because of its instability.",
      cover_img: 'Santa_Giulia_Museum.png',
      img: "cattedrale_di_santa_maria_assunta.png",
      img_caption: "La cupola della Cattedrale di Santa Maria Assunta",
    },
    {
      name: "Church of San Francesco D'Assisi",
      intro: "Easily identifiable thanks to its sleek bell tower, it was built back in the 6th and 7th centuries and rebuilt in the 15th century. It contains one of the most charming and best preserved painting cycles in Camonica Valley, with frescoes made by Giovanni Pietro da Cemmo and his school from 1491 to 1493. The façade is in Late Baroque style (1776).",
      details: "The original church here was probably built in Romanesque style. During the rule of the Visconti in the 14th century, a larger church was constructed in the Lombard Gothic style. In the 16th century it was rebuilt, and at this time semi-circular arches replaced the earlier pointed arches. In the same century the orientation of the church was reversed, making the façade front onto the piazza. At the end of the 19th century a further reconstruction reverted the church structure to that of the 16th century. In 1969–70, the bell tower was demolished because of its instability.",
      cover_img: 'Chiesa_San_Francesco.png',
      img: "cattedrale_di_santa_maria_assunta.png",
      img_caption: "La cupola della Cattedrale di Santa Maria Assunta",
    },
    {
      name: "Domus Arciana",
      intro: "Easily identifiable thanks to its sleek bell tower, it was built back in the 6th and 7th centuries and rebuilt in the 15th century. It contains one of the most charming and best preserved painting cycles in Camonica Valley, with frescoes made by Giovanni Pietro da Cemmo and his school from 1491 to 1493. The façade is in Late Baroque style (1776).",
      details: "The original church here was probably built in Romanesque style. During the rule of the Visconti in the 14th century, a larger church was constructed in the Lombard Gothic style. In the 16th century it was rebuilt, and at this time semi-circular arches replaced the earlier pointed arches. In the same century the orientation of the church was reversed, making the façade front onto the piazza. At the end of the 19th century a further reconstruction reverted the church structure to that of the 16th century. In 1969–70, the bell tower was demolished because of its instability.",
      cover_img: 'Domus_Arciana.png',
      img: "cattedrale_di_santa_maria_assunta.png",
      img_caption: "La cupola della Cattedrale di Santa Maria Assunta",
    },
    {
      name: "Querini Library",
      intro: "Easily identifiable thanks to its sleek bell tower, it was built back in the 6th and 7th centuries and rebuilt in the 15th century. It contains one of the most charming and best preserved painting cycles in Camonica Valley, with frescoes made by Giovanni Pietro da Cemmo and his school from 1491 to 1493. The façade is in Late Baroque style (1776).",
      details: "The original church here was probably built in Romanesque style. During the rule of the Visconti in the 14th century, a larger church was constructed in the Lombard Gothic style. In the 16th century it was rebuilt, and at this time semi-circular arches replaced the earlier pointed arches. In the same century the orientation of the church was reversed, making the façade front onto the piazza. At the end of the 19th century a further reconstruction reverted the church structure to that of the 16th century. In 1969–70, the bell tower was demolished because of its instability.",
      cover_img: 'Querini_Library.png',
      img: "cattedrale_di_santa_maria_assunta.png",
      img_caption: "La cupola della Cattedrale di Santa Maria Assunta",
    },
    {
      name: "Old Duomo",
      intro: "Easily identifiable thanks to its sleek bell tower, it was built back in the 6th and 7th centuries and rebuilt in the 15th century. It contains one of the most charming and best preserved painting cycles in Camonica Valley, with frescoes made by Giovanni Pietro da Cemmo and his school from 1491 to 1493. The façade is in Late Baroque style (1776).",
      details: "The original church here was probably built in Romanesque style. During the rule of the Visconti in the 14th century, a larger church was constructed in the Lombard Gothic style. In the 16th century it was rebuilt, and at this time semi-circular arches replaced the earlier pointed arches. In the same century the orientation of the church was reversed, making the façade front onto the piazza. At the end of the 19th century a further reconstruction reverted the church structure to that of the 16th century. In 1969–70, the bell tower was demolished because of its instability.",
      cover_img: 'Old_duomo.png',
      img: "cattedrale_di_santa_maria_assunta.png",
      img_caption: "La cupola della Cattedrale di Santa Maria Assunta",
    },{
      name: "Broletto Palace",
      intro: "Easily identifiable thanks to its sleek bell tower, it was built back in the 6th and 7th centuries and rebuilt in the 15th century. It contains one of the most charming and best preserved painting cycles in Camonica Valley, with frescoes made by Giovanni Pietro da Cemmo and his school from 1491 to 1493. The façade is in Late Baroque style (1776).",
      details: "The original church here was probably built in Romanesque style. During the rule of the Visconti in the 14th century, a larger church was constructed in the Lombard Gothic style. In the 16th century it was rebuilt, and at this time semi-circular arches replaced the earlier pointed arches. In the same century the orientation of the church was reversed, making the façade front onto the piazza. At the end of the 19th century a further reconstruction reverted the church structure to that of the 16th century. In 1969–70, the bell tower was demolished because of its instability.",
      cover_img: 'Palazzo_Broletto.png',
      img: "cattedrale_di_santa_maria_assunta.png",
      img_caption: "La cupola della Cattedrale di Santa Maria Assunta",
    },
    {
      name: "Piazza della Loggia",
      intro: "Easily identifiable thanks to its sleek bell tower, it was built back in the 6th and 7th centuries and rebuilt in the 15th century. It contains one of the most charming and best preserved painting cycles in Camonica Valley, with frescoes made by Giovanni Pietro da Cemmo and his school from 1491 to 1493. The façade is in Late Baroque style (1776).",
      details: "The original church here was probably built in Romanesque style. During the rule of the Visconti in the 14th century, a larger church was constructed in the Lombard Gothic style. In the 16th century it was rebuilt, and at this time semi-circular arches replaced the earlier pointed arches. In the same century the orientation of the church was reversed, making the façade front onto the piazza. At the end of the 19th century a further reconstruction reverted the church structure to that of the 16th century. In 1969–70, the bell tower was demolished because of its instability.",
      cover_img: "Piazza_della_Loggia.png",
      img: "cattedrale_di_santa_maria_assunta.png",
      img_caption: "img caption",
    },
    {
      name: "Carmine Old District",
      intro: "Easily identifiable thanks to its sleek bell tower, it was built back in the 6th and 7th centuries and rebuilt in the 15th century. It contains one of the most charming and best preserved painting cycles in Camonica Valley, with frescoes made by Giovanni Pietro da Cemmo and his school from 1491 to 1493. The façade is in Late Baroque style (1776).",
      details: "The original church here was probably built in Romanesque style. During the rule of the Visconti in the 14th century, a larger church was constructed in the Lombard Gothic style. In the 16th century it was rebuilt, and at this time semi-circular arches replaced the earlier pointed arches. In the same century the orientation of the church was reversed, making the façade front onto the piazza. At the end of the 19th century a further reconstruction reverted the church structure to that of the 16th century. In 1969–70, the bell tower was demolished because of its instability.",
      cover_img: 'Carmine_old_District.png',
      img: "cattedrale_di_santa_maria_assunta.png",
      img_caption: "La cupola della Cattedrale di Santa Maria Assunta",
    },{
      name: "Piazza Paolo VI",
      intro: "Easily identifiable thanks to its sleek bell tower, it was built back in the 6th and 7th centuries and rebuilt in the 15th century. It contains one of the most charming and best preserved painting cycles in Camonica Valley, with frescoes made by Giovanni Pietro da Cemmo and his school from 1491 to 1493. The façade is in Late Baroque style (1776).",
      details: "The original church here was probably built in Romanesque style. During the rule of the Visconti in the 14th century, a larger church was constructed in the Lombard Gothic style. In the 16th century it was rebuilt, and at this time semi-circular arches replaced the earlier pointed arches. In the same century the orientation of the church was reversed, making the façade front onto the piazza. At the end of the 19th century a further reconstruction reverted the church structure to that of the 16th century. In 1969–70, the bell tower was demolished because of its instability.",
      cover_img: 'Piazza_Paolo_VI.png',
      img: "cattedrale_di_santa_maria_assunta.png",
      img_caption: "La cupola della Cattedrale di Santa Maria Assunta",
    },
    {
      name: "Piazza della Vittoria",
      intro: "Easily identifiable thanks to its sleek bell tower, it was built back in the 6th and 7th centuries and rebuilt in the 15th century. It contains one of the most charming and best preserved painting cycles in Camonica Valley, with frescoes made by Giovanni Pietro da Cemmo and his school from 1491 to 1493. The façade is in Late Baroque style (1776).",
      details: "The original church here was probably built in Romanesque style. During the rule of the Visconti in the 14th century, a larger church was constructed in the Lombard Gothic style. In the 16th century it was rebuilt, and at this time semi-circular arches replaced the earlier pointed arches. In the same century the orientation of the church was reversed, making the façade front onto the piazza. At the end of the 19th century a further reconstruction reverted the church structure to that of the 16th century. In 1969–70, the bell tower was demolished because of its instability.",
      cover_img: 'Piazza_della_vittoria.png',
      img: "cattedrale_di_santa_maria_assunta.png",
      img_caption: "La cupola della Cattedrale di Santa Maria Assunta",
    },
    {
      name: "Via dei Musei",
      intro: "Easily identifiable thanks to its sleek bell tower, it was built back in the 6th and 7th centuries and rebuilt in the 15th century. It contains one of the most charming and best preserved painting cycles in Camonica Valley, with frescoes made by Giovanni Pietro da Cemmo and his school from 1491 to 1493. The façade is in Late Baroque style (1776).",
      details: "The original church here was probably built in Romanesque style. During the rule of the Visconti in the 14th century, a larger church was constructed in the Lombard Gothic style. In the 16th century it was rebuilt, and at this time semi-circular arches replaced the earlier pointed arches. In the same century the orientation of the church was reversed, making the façade front onto the piazza. At the end of the 19th century a further reconstruction reverted the church structure to that of the 16th century. In 1969–70, the bell tower was demolished because of its instability.",
      cover_img: 'Via_dei_Musei.png',
      img: "cattedrale_di_santa_maria_assunta.png",
      img_caption: "La cupola della Cattedrale di Santa Maria Assunta",
    },
    {
      name: "Teatro Grande",
      intro: "Easily identifiable thanks to its sleek bell tower, it was built back in the 6th and 7th centuries and rebuilt in the 15th century. It contains one of the most charming and best preserved painting cycles in Camonica Valley, with frescoes made by Giovanni Pietro da Cemmo and his school from 1491 to 1493. The façade is in Late Baroque style (1776).",
      details: "The original church here was probably built in Romanesque style. During the rule of the Visconti in the 14th century, a larger church was constructed in the Lombard Gothic style. In the 16th century it was rebuilt, and at this time semi-circular arches replaced the earlier pointed arches. In the same century the orientation of the church was reversed, making the façade front onto the piazza. At the end of the 19th century a further reconstruction reverted the church structure to that of the 16th century. In 1969–70, the bell tower was demolished because of its instability.",
      cover_img: 'Teatro_Grande.png',
      img: "cattedrale_di_santa_maria_assunta.png",
      img_caption: "La cupola della Cattedrale di Santa Maria Assunta",
    },
    {
      name: "Parco dell'Acqua",
      intro: "Easily identifiable thanks to its sleek bell tower, it was built back in the 6th and 7th centuries and rebuilt in the 15th century. It contains one of the most charming and best preserved painting cycles in Camonica Valley, with frescoes made by Giovanni Pietro da Cemmo and his school from 1491 to 1493. The façade is in Late Baroque style (1776).",
      details: "The original church here was probably built in Romanesque style. During the rule of the Visconti in the 14th century, a larger church was constructed in the Lombard Gothic style. In the 16th century it was rebuilt, and at this time semi-circular arches replaced the earlier pointed arches. In the same century the orientation of the church was reversed, making the façade front onto the piazza. At the end of the 19th century a further reconstruction reverted the church structure to that of the 16th century. In 1969–70, the bell tower was demolished because of its instability.",
      cover_img: "Parco_Dell_Acqua.png",
      img: "cattedrale_di_santa_maria_assunta.png",
      img_caption: "img caption",
    },
    {
      name: "Parco Tarello",
      intro: "Easily identifiable thanks to its sleek bell tower, it was built back in the 6th and 7th centuries and rebuilt in the 15th century. It contains one of the most charming and best preserved painting cycles in Camonica Valley, with frescoes made by Giovanni Pietro da Cemmo and his school from 1491 to 1493. The façade is in Late Baroque style (1776).",
      details: "The original church here was probably built in Romanesque style. During the rule of the Visconti in the 14th century, a larger church was constructed in the Lombard Gothic style. In the 16th century it was rebuilt, and at this time semi-circular arches replaced the earlier pointed arches. In the same century the orientation of the church was reversed, making the façade front onto the piazza. At the end of the 19th century a further reconstruction reverted the church structure to that of the 16th century. In 1969–70, the bell tower was demolished because of its instability.",
      cover_img: 'Parco_Tarello.png',
      img: "cattedrale_di_santa_maria_assunta.png",
      img_caption: "La cupola della Cattedrale di Santa Maria Assunta",
    },
    {
      name: "Lago di Garda",
      intro: "Easily identifiable thanks to its sleek bell tower, it was built back in the 6th and 7th centuries and rebuilt in the 15th century. It contains one of the most charming and best preserved painting cycles in Camonica Valley, with frescoes made by Giovanni Pietro da Cemmo and his school from 1491 to 1493. The façade is in Late Baroque style (1776).",
      details: "The original church here was probably built in Romanesque style. During the rule of the Visconti in the 14th century, a larger church was constructed in the Lombard Gothic style. In the 16th century it was rebuilt, and at this time semi-circular arches replaced the earlier pointed arches. In the same century the orientation of the church was reversed, making the façade front onto the piazza. At the end of the 19th century a further reconstruction reverted the church structure to that of the 16th century. In 1969–70, the bell tower was demolished because of its instability.",
      cover_img: 'Lago_di_Garda.png',
      img: "cattedrale_di_santa_maria_assunta.png",
      img_caption: "La cupola della Cattedrale di Santa Maria Assunta",
    },
    {
      name: "Hiking Path Bosco Incantato", // caricare immagine non sgranata
      intro: "Easily identifiable thanks to its sleek bell tower, it was built back in the 6th and 7th centuries and rebuilt in the 15th century. It contains one of the most charming and best preserved painting cycles in Camonica Valley, with frescoes made by Giovanni Pietro da Cemmo and his school from 1491 to 1493. The façade is in Late Baroque style (1776).",
      details: "The original church here was probably built in Romanesque style. During the rule of the Visconti in the 14th century, a larger church was constructed in the Lombard Gothic style. In the 16th century it was rebuilt, and at this time semi-circular arches replaced the earlier pointed arches. In the same century the orientation of the church was reversed, making the façade front onto the piazza. At the end of the 19th century a further reconstruction reverted the church structure to that of the 16th century. In 1969–70, the bell tower was demolished because of its instability.",
      cover_img: 'Lago_di_Garda.png',
      img: "cattedrale_di_santa_maria_assunta.png",
      img_caption: "La cupola della Cattedrale di Santa Maria Assunta",
    },
    {
      name: "Millemonti",
      intro: "Easily identifiable thanks to its sleek bell tower, it was built back in the 6th and 7th centuries and rebuilt in the 15th century. It contains one of the most charming and best preserved painting cycles in Camonica Valley, with frescoes made by Giovanni Pietro da Cemmo and his school from 1491 to 1493. The façade is in Late Baroque style (1776).",
      details: "The original church here was probably built in Romanesque style. During the rule of the Visconti in the 14th century, a larger church was constructed in the Lombard Gothic style. In the 16th century it was rebuilt, and at this time semi-circular arches replaced the earlier pointed arches. In the same century the orientation of the church was reversed, making the façade front onto the piazza. At the end of the 19th century a further reconstruction reverted the church structure to that of the 16th century. In 1969–70, the bell tower was demolished because of its instability.",
      cover_img: 'Millemonti.png',
      img: "cattedrale_di_santa_maria_assunta.png",
      img_caption: "La cupola della Cattedrale di Santa Maria Assunta",
    },
    {
      name: "Roman Theatre",
      intro: "Easily identifiable thanks to its sleek bell tower, it was built back in the 6th and 7th centuries and rebuilt in the 15th century. It contains one of the most charming and best preserved painting cycles in Camonica Valley, with frescoes made by Giovanni Pietro da Cemmo and his school from 1491 to 1493. The façade is in Late Baroque style (1776).",
      details: "The original church here was probably built in Romanesque style. During the rule of the Visconti in the 14th century, a larger church was constructed in the Lombard Gothic style. In the 16th century it was rebuilt, and at this time semi-circular arches replaced the earlier pointed arches. In the same century the orientation of the church was reversed, making the façade front onto the piazza. At the end of the 19th century a further reconstruction reverted the church structure to that of the 16th century. In 1969–70, the bell tower was demolished because of its instability.",
      cover_img: 'Roman_Teatro.png',
      img: "cattedrale_di_santa_maria_assunta.png",
      img_caption: "La cupola della Cattedrale di Santa Maria Assunta",
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
  // They are correct, some images from figma are blured
  const itineraries = [
    {
      name: 'Brescia Romana',
      short_description: 'Discover over 800 years of history preserved up until the contemporary era.',
      overview: 'Brixia was one of the most important Roman cities of the Italic Peninsula, and the Roman heritage of the city is well documented and remains one of the well preserved groups of public and private historical landmarks of Italy. The itinerary is made up of 3 individual modules of about 1 hour each, lasting approximately 3 hours in total. It is possible, of course, to adapt the itinerary to one’s own preferences.',
      cover_img: 'brescia-romana_coverimg.png',
      thumbnail: "brescia-romana_thumbnail.png",
      duration: 90,
      category:'History & Culture',
      inout:'Indoors & Outdoors',
    },
    {
      name: 'Nature Tour',
      short_description: 'Explore nature around our beautiful city.',
      overview: 'Brescia, close to Lago di Garda and in one of the most beautiful regions of Lombardía, offers a wide selection of outdoor activities immersed in nature. Don’t miss out!',
      cover_img: 'nature-tour_coverimg.png',
      thumbnail: "nature-tour_thumbnail.png",
      duration: 360,
      category:'Nature',
      inout:'Outdoors',
    },
    {
      name: 'Monuments of Brescia',
      short_description: 'Enjoy the historic monuments and landmarks of Brescia.',
      overview: 'Our top pick recommendations on the must-see monuments that you cannot miss while you visit Brescia!',
      cover_img: "monuments-of-brescia_coverimg.png",
      thumbnail: 'monuments-of-brescia_thumbnail.png',
      duration: 360,
      category:'History & Culture',
      inout:'Indoors & Outdoors',
    },
    {
      name: 'Walking Tour City Center',
      short_description: 'Venture yourself into the beauty of contemporary Brescia, a vibrant modern city that preserves it’s magical charm.',
      overview: 'Our top pick recommendations on local food, while enjoying the view from our beautiful historical “piazze”. Enjoy!',
      cover_img: "walking-tour-city-center_coverimg.png",
      thumbnail: 'walking-tour-city-center_thumbnail.png',
      duration: 120,
      category:'History & Culture',
      inout:'Outdoors',
    }
  ]
  // Just for testing
  const itinerarypoi = [
     {
       itineraryId: 1,
       pointOfInterestId: 1
    },
  {
    itineraryId: 1,
    pointOfInterestId: 2
   },
     {
       itineraryId: 1,
       pointOfInterestId: 3
     },
     {
       itineraryId: 1,
       pointOfInterestId: 4
     },
     {
       itineraryId: 1,
       pointOfInterestId: 5
     },
     {
       itineraryId: 2,
       pointOfInterestId: 6
     },
     {
       itineraryId: 2,
       pointOfInterestId: 7
     },
     {
       itineraryId: 2,
       pointOfInterestId: 8
     },
     {
       itineraryId: 2,
       pointOfInterestId: 9
     },
     {
       itineraryId: 3,
       pointOfInterestId: 10
     },
    {
       itineraryId: 3,
       pointOfInterestId: 11
     },
     {
       itineraryId: 3,
       pointOfInterestId: 12
     },
     {
       itineraryId: 3,
       pointOfInterestId: 13
     },
     {
       itineraryId: 3,
       pointOfInterestId: 14
    },
     {
       itineraryId: 3,
       pointOfInterestId: 15
     },
     {
       itineraryId: 4,
       pointOfInterestId: 4
     },
     {
       itineraryId: 4,
       pointOfInterestId: 3
     },
    {
       itineraryId: 4,
       pointOfInterestId: 2
     },
      {
        itineraryId: 4,
      pointOfInterestId: 1
     },
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
      cover_img: 'pharmacy.png',
    },
    {
      name: 'banks',
      cover_img: 'bank.png',
    },
    {
      name: 'restaurants',
      cover_img: 'sanitary.png',
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
