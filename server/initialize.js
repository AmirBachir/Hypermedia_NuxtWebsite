import {DataTypes} from "sequelize";

export default async (models) => {
  const pointsOfInterest = [
    {
      name: "Cattedrale di Santa Maria Assunta",
      description: "Details about cat 1",
      img: "https://fs.i3lab.group/hypermedia/cats/siberian.jpg",
      cover_img: 'Duomo_vecchio_e_duomo_nuovo_notturna_Brescia',
      img_caption: "img caption",
    },
    {
      name: "Cat 2",
      description: "Details about cat 2",
      img: "https://fs.i3lab.group/hypermedia/cats/birman.jpg",
      cover_img: "https://fs.i3lab.group/hypermedia/cats/siberian.jpg",
      img_caption: "img caption",
    },
    {
      name: "Cat 3",
      description: "Details about cat 3",
      img: "https://fs.i3lab.group/hypermedia/cats/bombay.jpg",
      cover_img: "https://fs.i3lab.group/hypermedia/cats/siberian.jpg",
      img_caption: "img caption",
    },
    {
      name: "Cat 4",
      description: "Details about cat 4",
      img: "https://fs.i3lab.group/hypermedia/cats/calico.jpg",
      cover_img: "https://fs.i3lab.group/hypermedia/cats/siberian.jpg",
      img_caption: "img caption",
    },
    {
      name: "Cat 5",
      description: "Details about cat 5",
      img: "https://fs.i3lab.group/hypermedia/cats/maine-coon.jpg",
      cover_img: "https://fs.i3lab.group/hypermedia/cats/siberian.jpg",
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
    },
    {
      date: '2022-07-06',
      cover_img: 'brescia_poi.jpg',
      time: '12:30:00',
      poi: 'Town hall',
      title: 'Brescia is reggae',
      type: 'Music and entertainment',
      description: 'Bob Marley will always live on in this cultural town',
      season: 'summer',
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
    },
    {
      date: '2022-07-06',
      cover_img: 'brescia_iti.jpg',
      time: '12:30:00',
      poi: 'Town hall',
      title: 'Brescia is reggae',
      type: 'Music and entertainment',
      description: 'Bob Marley will always live on in this cultural town',
      season: 'summer',
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
    },
    {
      date: '2022-07-06',
      cover_img: 'brescia_poi.jpg',
      time: '12:30:00',
      poi: 'Town hall',
      title: 'Brescia is reggae',
      type: 'Music and entertainment',
      description: 'Bob Marley will always live on in this cultural town',
      season: 'summer',
    },
  ]

  await models.PointOfInterest.bulkCreate(pointsOfInterest)
  await models.Event.bulkCreate(events)
}
