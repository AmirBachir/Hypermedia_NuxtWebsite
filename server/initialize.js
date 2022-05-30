export default async (models) => {
  // most of them are fake/repeated
  const pointsOfInterest = [
    {
      name: "Cattedrale di Santa Maria Assunta",
      intro: "Easily identifiable thanks to its sleek bell tower, it was built back in the 6th and 7th centuries and rebuilt in the 15th century. It contains one of the most charming and best preserved painting cycles in Camonica Valley, with frescoes made by Giovanni Pietro da Cemmo and his school from 1491 to 1493. The façade is in Late Baroque style (1776).",
      details: "The original church here was probably built in Romanesque style. During the rule of the Visconti in the 14th century, a larger church was constructed in the Lombard Gothic style. In the 16th century it was rebuilt, and at this time semi-circular arches replaced the earlier pointed arches. In the same century the orientation of the church was reversed, making the façade front onto the piazza. At the end of the 19th century a further reconstruction reverted the church structure to that of the 16th century. In 1969–70, the bell tower was demolished because of its instability.",
      cover_img: 'Duomo_vecchio_e_duomo_nuovo_notturna_Brescia.png',
      img: "cattedrale_di_santa_maria_assunta.png",
      img_caption: "Interior of the Church",
    },
    {
      name: "Roman Architectural Park",
      intro: "The Roman Brescia Archaeological Park offers one of the most significant and best-preserved routes in Italy. Recognised by UNESCO as a World Heritage Site in 2011, together with the San Salvatore – Santa Giulia monastic complex, the area has undergone an archaeological and architectural recovery enhancing this extraordinary area and making it fully accessible.",
      details:"The republican sanctuary (first century BCE), the Capitolium (73 CE) with the remains of the imperial age and the nineteenth-century museum additions, the Winged Victory, with part of the bronze collection and, lastly, the Roman theatre (first – third century CE).",
      cover_img: 'Roman_Architectural_Park.png',
      img: "i_RAP.png",
      img_caption: "Interior of the park",
    },
    {
      name: "Brescia Castle",
      intro:"The imposing castle has undergone many renovations which are still visible to this day. Built in the Middle Ages and surviving the Napoleonic era and the Unification of Italy, the castle has been central to the city’s history up until the start of the 20th century, when it was purchased by the municipality and opened to the public.",
      details:"Inside, a dense maze of alleys and hidden rooms, together with the oldest and finest vineyard instituted inside a city, make it a fascinating place to explore. The castle also houses the Arm Museum Luigi Marzoli and the Museum of the Risorgimento dedicated to the Unification of Italy.",
      cover_img: 'Brescia_Castle.png',
      img: "i_BC.png",
      img_caption: "Outside of the Castle",
    },
    {
      name: "Santa Giulia Museum",
      intro:"Santa Giulia Museum is one of the main tourist and cultural attractions of Brescia. Also known as “City Museum”, its important historic displays and fascinating location make it a unique site. It’s an exceptional example of former monastery turned into a museum. It hosts incredible collections from Prehistory to the present day and temporary exhibitions of international relevance.",
      details:"Together with the Capitolium archaeological area and the San Salvatore monastery complex, Santa Giulia Museum is a UNESCO World Heritage Site.",
      cover_img: 'Santa_Giulia_Museum.png',
      img: "i_SGM.png",
      img_caption: "Inside the Museum",
    },
    {
      name: "Church of San Francesco D'Assisi",
      intro:"",
      details:"",
      cover_img: 'Chiesa_San_Francesco.png',
      img: "i_CSFA.png",
      img_caption: "Facade of the church.",
    },
    {
      name: "Domus Arciana",
      intro:"",
      details:"",
      cover_img: 'Domus_Arciana.png',
      img: "i_DA.png",
      img_caption: "Inside the Domus Ariciana",
    },
    {
      name: "Querini Library",
      intro:"The Biblioteca Queriniana was established in 1747 from Vescovo di Brescia, il card. Angelo Maria Querini, il quale, has established the public use destination of the library library and will equip the library from the source of revenue, provided also to the construction of the palazzo that anchors oggi and is the headquarters. It was opened to the public in 1750 and, for some successive decades, it also served as a museum and as the seat of the city's scholarly academy.",
      //details:"",
      cover_img: 'Querini_Library.png',
      img: "i_QL.png",
      img_caption: "Details of furniture inside the library",
    },
    {
      name: "Old Duomo",
      intro:'The Duomo Vecchio or Old Cathedral (also called "La Rotonda" because of its round layout) is a Roman Catholic church in Brescia, Italy; the rustic circular Romanesque co-cathedral stands next to the Duomo Nuovo (New Cathedral) of Brescia. It is officially known as the Winter Co-Cathedral of Santa Maria Assunta, while the adjacent main cathedral is known as the Summer Cathedral. It is one of the most important examples of Romanesque round church in Italy.',
      details:"While some claims for an earlier construction exist, the earliest documents state that construction of the cathedral started about 1100 on the site of a prior church with a basilica layout. It has a circular shape that became rare after the Council of Trent, and is one of the most prominent round churches of the period still remaining.",
      cover_img: 'Old_duomo.png',
      img: "i_OD.png",
      img_caption: "Exterior of the old cathedral",
    },{
      name: "Palazzo Broletto",
      intro:"The Broletto or Broletto Palace of Brescia has for centuries housed the civic government offices of this city found in the region of Lombardy, Italy. The term Broletto refers to a buildings equivalent to the town hall or town assembly.",
      details:'The long stone facade on the south fronts Via Cardinale Querini, and aligns parallel the left of the Cathedral, corresponds to the ancient "Palatium Novum Maius" built in 1223 - 1227. The Tower of the Poncarali in unfinished stone is attached to the facade. Originally 30 meters tall, it was lowered to about 19 metres by Ezzelino III da Romano. The nearly 54 meter Tower of Pègol is still intact, with a small belfry hidden by the Ghibelline crenellations added at the beginning of the 19th century. The clock on the inner wall of the first courtyard came from the nearby former cathedral of San Pietro de Dom, demolished in the 16th century. The balcony overlooking Piazza Paolo VI, called the Loggia delle Grida, can be seen near the tower. It was destroyed by the French forces in 1797 and rebuilt in the 20th century.',
      cover_img: 'Palazzo_Broletto.png',
      img: "i_PB.png",
      img_caption: "Facade of Palazzo Broletto",
    },
    {
      name: "Piazza della Loggia",
      intro:'Piazza della Loggia, or simply Piazza Loggia, is one of the main squares of Brescia and the symbol of the Brescian Rinascimento.',
      details:'Built from the Quattrocento, it presents a shape in the rectangular complex, delimited along its perimeter by a series of historic buildings that shed light on the 50-year-old Palazzo della Loggia, seat of the Brescia Communal Association, which was once the new Pietà hill. . On the eastern side of the piazza, invece, sorgono i portici and the tower with the 15th-century astronomical horology.',
      cover_img: "Piazza_della_Loggia.png",
      img: "i_PDL.png",
      img_caption: "Facade of the astronomical clock",
    },
    {
      name: "Carmine Old District",
      intro:'',
      details:'',
      cover_img: 'Carmine_old_District.png',
      img: "i_COD.png",
      img_caption: "",
    },{
      name: "Piazza Paolo VI",
      intro:'Get to know the Piazza delle Due Cattedrali di Brescia, Piazza Paolo VI is a magnificent example of medieval architecture and represents the heart of the city for the important historical buildings that I saw if affected, a symbol of civil liberty and Brescian religious tradition.',
      details:'', //da tradurre
      cover_img: 'Piazza_Paolo_VI.png',
      img: "i_PPVI.png",
      img_caption: "Upper view",
    },
    {
      name: "Piazza della Vittoria",
      intro:'Designed by Piacentini, it was opened in 1932 according to the new Fascist urban plan. On the north side stands the imposing Post Office. On the west side, 60-metre high, is one of the first Italian skyscrapers. Torre della Rivoluzione is on the east side. Arengario (speaker’s stage) is decorated with bas-reliefs narrating the history of Brescia.',
      cover_img: 'Piazza_della_vittoria.png',
      img: "i_PDV.png",
      img_caption: "Main view of the piazza",
    },
    {
      name: "Via dei Musei",
      intro:'Via dei Musei,or rather simply Via Musei, is one of the main streets of the historical center of Brescia, noted mainly for the multitude of monuments and cultural institutions that saw if it affected, in a journey of around 800 metri, from the piazza rinascimentale From the Loggia to the millennial monastery of Santa Giulia, through churches, palazzi of the old nobility and testimony of history. ',
      cover_img: 'Via_dei_Musei.png',
      img: "i_VDM.png",
      img_caption: "People walk and marvel in this beautiful street",
    },
    {
      name: "Teatro Grande",
      intro:'A 300-year long history. This is Brescia’s Teatro Grande, located in the heart of the old centre where the first public theatre of the city was opened in 1664.',
      details:'Listed as one of the most important Italian theatres and recognised as national monument in 1912, Teatro Grande has a rich season, with performances ranging from opera and ballet to concerts, dance, cultural initiatives, and children programmes.',
      cover_img: 'Teatro_Grande.png',
      img: "i_TG.png",
      img_caption: "Entrance of the theatre",
    },
    {
      name: "Parco dell'Acqua",
      intro:'One of the most beautiful parks in the city. Brescia hosts different events for all the family, specially during the summer.',
      details:'',
      cover_img: "Parco_Dell_Acqua.png",
      img: "i_PDA.png",
      img_caption: "Another view of the park",
    },
    {
      name: "Parco Tarello",
      intro:'One of the most beautiful parks in the city. Brescia hosts different events for all the family, specially during the summer.',
      details:'',
      cover_img: 'Parco_Tarello.png',
      img: "i_PT.png",
      img_caption: "It is possible to view sky scrapers from the park",
    },
    {
      name: "Lago di Garda",
      intro:'One of the most beautiful lakes in Italy and one of the main lakes in Italy. It hosts different events for all the family, specially during the summer.',
      cover_img: 'Lago_di_Garda.png',
      img: "i_LDG.png",
      img_caption: "The view of Sirmione Sul Garda",
    },
    {
      name: "Hiking Path Bosco Incantato", // caricare immagine non sgranata
      intro:'One of the jewels of nature near Brescia, you can go on a unique hiking trip to Bosco Incantato. An experience to remember!',
      cover_img: 'Lago_di_Garda.png',
      img: "i_BI.png",
      img_caption: "Some mytical creatures you can find in the hiking path",
    },
    {
      name: "Millemonti",
      intro:'',
      details:'',
      cover_img: 'Millemonti.png',
      img: "i_M.png",
      img_caption: "Vineyard view", 
    },
    {
      name: "Roman Theatre",
      intro:'The Roman Theatre of Brescia has been a silent, but stable, witness of the last 2,000 years of the history of Brescia: we talk about 2,000 years because it was built during Augustan age (end of I century BD – beginning of I century AD), it underwent a significant renovation in Flavian age, at the time of building of the Temple Capitolium of Brescia, during Severian age (II-III century AD) it was totally restored. It is supposed that the theatre could host until 15,000 spectators: a very significant number for that time.',
      cover_img: 'Roman_Teatro.png',
      img: "i_RT.png",
      img_caption: "Estimation of the full splendor of the site",
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
