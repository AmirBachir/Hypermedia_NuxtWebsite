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
      thumbnail: 'cdsmat.jpg',
      address: 'Piazza del Duomo 1',
      first_day: '',
      last_day: '',
      opening_hour: '',
      closing_hour: '',
    },
    {
      name: "Roman Archeological Park",
      intro: "The Roman Brescia Archaeological Park offers one of the most significant and best-preserved routes in Italy. Recognised by UNESCO as a World Heritage Site in 2011, together with the San Salvatore – Santa Giulia monastic complex, the area has undergone an archaeological and architectural recovery enhancing this extraordinary area and making it fully accessible.",
      details: "The republican sanctuary (first century BCE), the Capitolium (73 CE) with the remains of the imperial age and the nineteenth-century museum additions, the Winged Victory, with part of the bronze collection and, lastly, the Roman theatre (first – third century CE).",
      cover_img: 'Roman_Architectural_Park.png',
      img: "i_RAP.png",
      img_caption: "Interior of the park",
      thumbnail: 'rapt.jpg',
      address: 'Via dei Musei 23',
      first_day: '',
      last_day: '',
      opening_hour: '',
      closing_hour: '',
    },
    {
      name: "Brescia Castle",
      intro: "The imposing castle has undergone many renovations which are still visible to this day. Built in the Middle Ages and surviving the Napoleonic era and the Unification of Italy, the castle has been central to the city’s history up until the start of the 20th century, when it was purchased by the municipality and opened to the public.",
      details: "Inside, a dense maze of alleys and hidden rooms, together with the oldest and finest vineyard instituted inside a city, make it a fascinating place to explore. The castle also houses the Arm Museum Luigi Marzoli and the Museum of the Risorgimento dedicated to the Unification of Italy.",
      cover_img: 'Brescia_Castle.png',
      img: "i_BC.png",
      img_caption: "Outside of the Castle",
      thumbnail: 'bct.jpg',
      address: 'Monte del Castello',
      first_day: '',
      last_day: '',
      opening_hour: '',
      closing_hour: '',
    },
    {
      name: "Santa Giulia Museum",
      intro: "Santa Giulia Museum is one of the main tourist and cultural attractions of Brescia. Also known as “City Museum”, its important historic displays and fascinating location make it a unique site. It’s an exceptional example of former monastery turned into a museum. It hosts incredible collections from Prehistory to the present day and temporary exhibitions of international relevance.",
      details: "Together with the Capitolium archaeological area and the San Salvatore monastery complex, Santa Giulia Museum is a UNESCO World Heritage Site.",
      cover_img: 'Santa_Giulia_Museum.png',
      img: "i_SGM.png",
      img_caption: "Inside the Museum",
      thumbnail: 'sgmt.jpg',
      address: 'Via dei Musei 81',
      first_day: '',
      last_day: '',
      opening_hour: '',
      closing_hour: '',
    },
    {
      name: "Church of San Francesco D'Assisi",
      intro: "Construction ended in 1265, but the church was not frescoed until the early 14th century.",
      details: "By 1400 the church was enriched with 5 altars, two of which were made by Moretto and Romanino, in the midst of which remnants of medieval frescoes depicting the Last Judgment and the Pieta were found.Later work on the embellishment of the presbytery was completed, and by 1500, at the height of the Renaissance, the chapel of the Immaculate Conception was built in the left aisle.",
      cover_img: 'Chiesa_San_Francesco.png',
      img: "i_CSFA.png",
      img_caption: "Facade of the church",
      thumbnail: 'cosfdat.jpg',
      address: 'Via del Palestro 10',
      first_day: '',
      last_day: '',
      opening_hour: '',
      closing_hour: '',
    },
    {
      name: "Domus Arciana",
      intro: "The remains of the Domus Ariciana represent the oldest example currently visible inside the Arician archeological site. This important habitation in the area of ​​the 1st century B.C., has also been modified by the structure of the wall around the area of ​​the successive century. At the end of the dry II d.C. At the beginning of the third century A.D.",
      // details:"",
      cover_img: 'Domus_Arciana.png',
      img: "i_DA.png",
      img_caption: "Inside the Domus Ariciana",
      thumbnail: 'dat.jpg',
      address: 'Via dei Romani 4',
      first_day: '',
      last_day: '',
      opening_hour: '',
      closing_hour: '',
    },
    {
      name: "Querini Library",
      intro: "The Biblioteca Queriniana was established in 1747 from Vescovo di Brescia, il card. Angelo Maria Querini, il quale, has established the public use destination of the library library and will equip the library from the source of revenue, provided also to the construction of the palazzo that anchors oggi and is the headquarters. It was opened to the public in 1750 and, for some successive decades, it also served as a museum and as the seat of the city's scholarly academy.",
      // details:"",
      cover_img: 'Querini_Library.png',
      img: "i_QL.png",
      img_caption: "Details of furniture inside the library",
      thumbnail: 'qlt.jpg',
      address: 'Via Bresciana 5',
      first_day: '',
      last_day: '',
      opening_hour: '',
      closing_hour: '',
    },
    {
      name: "Old Duomo",
      intro: 'The Duomo Vecchio or Old Cathedral (also called "La Rotonda" because of its round layout) is a Roman Catholic church in Brescia, Italy; the rustic circular Romanesque co-cathedral stands next to the Duomo Nuovo (New Cathedral) of Brescia. It is officially known as the Winter Co-Cathedral of Santa Maria Assunta, while the adjacent main cathedral is known as the Summer Cathedral. It is one of the most important examples of Romanesque round church in Italy.',
      details: "While some claims for an earlier construction exist, the earliest documents state that construction of the cathedral started about 1100 on the site of a prior church with a basilica layout. It has a circular shape that became rare after the Council of Trent, and is one of the most prominent round churches of the period still remaining.",
      cover_img: 'Old_duomo.png',
      img: "i_OD.png",
      img_caption: "Exterior of the old cathedral",
      thumbnail: 'odt.jpg',
      address: 'Piazza del Duomo 1',
      first_day: '',
      last_day: '',
      opening_hour: '',
      closing_hour: '',
    }, {
      name: "Palazzo Broletto",
      intro: "The Broletto or Broletto Palace of Brescia has for centuries housed the civic government offices of this city found in the region of Lombardy, Italy. The term Broletto refers to a buildings equivalent to the town hall or town assembly.",
      details: 'The long stone facade on the south fronts Via Cardinale Querini, and aligns parallel the left of the Cathedral, corresponds to the ancient "Palatium Novum Maius" built in 1223 - 1227. The Tower of the Poncarali in unfinished stone is attached to the facade. Originally 30 meters tall, it was lowered to about 19 metres by Ezzelino III da Romano. The nearly 54 meter Tower of Pègol is still intact, with a small belfry hidden by the Ghibelline crenellations added at the beginning of the 19th century. The clock on the inner wall of the first courtyard came from the nearby former cathedral of San Pietro de Dom, demolished in the 16th century. The balcony overlooking Piazza Paolo VI, called the Loggia delle Grida, can be seen near the tower. It was destroyed by the French forces in 1797 and rebuilt in the 20th century.',
      cover_img: 'Palazzo_Broletto.png',
      img: "i_PB.png",
      img_caption: "Facade of Palazzo Broletto",
      thumbnail: 'pbt.jpg',
      address: 'Via Accademia 93',
      first_day: '',
      last_day: '',
      opening_hour: '',
      closing_hour: '',
    },
    {
      name: "Piazza della Loggia",
      intro: 'Piazza della Loggia, or simply Piazza Loggia, is one of the main squares of Brescia and the symbol of the Brescian Rinascimento.',
      details: 'Built from the Quattrocento, it presents a shape in the rectangular complex, delimited along its perimeter by a series of historic buildings that shed light on the 50-year-old Palazzo della Loggia, seat of the Brescia Communal Association, which was once the new Pietà hill. . On the eastern side of the piazza, invece, sorgono i portici and the tower with the 15th-century astronomical horology.',
      cover_img: "Piazza_della_Loggia.png",
      img: "i_PDL.png",
      img_caption: "Facade of the astronomical clock",
      thumbnail: 'pdlt.jpg',
      // address: '',
      first_day: '',
      last_day: '',
      opening_hour: '',
      closing_hour: '',
    },
    {
      name: "Carmine Old District",
      intro: 'This old district sees an alternation of low-income housing, young artisans shops, noble residences, and particularly valuable churches such as S. Maria del Carmine, S. Giovanni, Basilica delle Grazie, and SS. Faustino e Giovita, all containing significant works of art. Animated nightlife.',
      // details:'',
      cover_img: 'Carmine_old_District.png',
      img: "i_COD.png",
      img_caption: "A view of the old market district",
      thumbnail: 'codt.jpg',
      // address: '',
      first_day: '',
      last_day: '',
      opening_hour: '',
      closing_hour: '',
    }, {
      name: "Piazza Paolo VI",
      intro: 'Get to know the Piazza delle Due Cattedrali di Brescia, Piazza Paolo VI is a magnificent example of medieval architecture and represents the heart of the city for the important historical buildings that I saw if affected, a symbol of civil liberty and Brescian religious tradition.',
      // details:'',
      cover_img: 'Piazza_Paolo_VI.png',
      img: "i_PPVI.png",
      img_caption: "Upper view",
      thumbnail: 'ppvit.jpg',
      // address: '',
      first_day: '',
      last_day: '',
      opening_hour: '',
      closing_hour: '',
    },
    {
      name: "Piazza della Vittoria",
      intro: 'Designed by Piacentini, it was opened in 1932 according to the new Fascist urban plan. On the north side stands the imposing Post Office. On the west side, 60-metre high, is one of the first Italian skyscrapers. Torre della Rivoluzione is on the east side. Arengario (speaker’s stage) is decorated with bas-reliefs narrating the history of Brescia.',
      cover_img: 'Piazza_della_vittoria.png',
      img: "i_PDV.png",
      img_caption: "Main view of the piazza",
      thumbnail: 'pdvt.jpg',
      // address: '',
      first_day: '',
      last_day: '',
      opening_hour: '',
      closing_hour: '',
    },
    {
      name: "Via dei Musei",
      intro: 'Via dei Musei,or rather simply Via Musei, is one of the main streets of the historical center of Brescia, noted mainly for the multitude of monuments and cultural institutions that saw if it affected, in a journey of around 800 metri, from the piazza rinascimentale From the Loggia to the millennial monastery of Santa Giulia, through churches, palazzi of the old nobility and testimony of history. ',
      cover_img: 'Via_dei_Musei.png',
      img: "i_VDM.png",
      img_caption: "People walk and marvel in this beautiful street",
      thumbnail: 'vdmt.jpg',
      // address: '',
      first_day: '',
      last_day: '',
      opening_hour: '',
      closing_hour: '',
    },
    {
      name: "Teatro Grande",
      intro: 'A 300-year long history. This is Brescia’s Teatro Grande, located in the heart of the old centre where the first public theatre of the city was opened in 1664.',
      details: 'Listed as one of the most important Italian theatres and recognised as national monument in 1912, Teatro Grande has a rich season, with performances ranging from opera and ballet to concerts, dance, cultural initiatives, and children programmes.',
      cover_img: 'Teatro_Grande.png',
      img: "i_TG.png",
      img_caption: "Entrance of the theatre",
      thumbnail: 'tgt.jpg',
      address: 'Via del Carmine 45',
      first_day: '',
      last_day: '',
      opening_hour: '',
      closing_hour: '',
    },
    {
      name: "Parco dell'Acqua",
      intro: 'One of the most beautiful parks in the city. It hosts different events for all the family, specially during the summer.',
      // details:'',
      cover_img: "Parco_Dell_Acqua.png",
      img: "i_PDA.png",
      img_caption: "Another view of the park",
      thumbnail: 'pdat.jpg',
      address: 'Largo Torrelunga, 7',
      first_day: '',
      last_day: '',
      opening_hour: '',
      closing_hour: '',
    },
    {
      name: "Parco Tarello",
      intro: 'It was inaugurated in 2007 and built following an international competition won by the project of Studio Global in Lisbon. About twelve thousand were placed among trees, shrubs and perennial plants. It is the second largest park in the city (100,000 m2) and one of the most recent. It is located in Bresciadue, the modern area of ​​the city, and is surrounded by the skyscrapers of the business center.',
      details: 'The park is named after Camillo Tarello, an agronomist from Brescia in 1500, who, together with Agostino Gallo (also from Brescia), studied the best insertion of leguminous and forage plants in multi-year cycles, and invented the system of crop rotation in agriculture.',
      cover_img: 'Parco_Tarello.png',
      img: "i_PT.png",
      img_caption: "It is possible to view sky scrapers from the park",
      thumbnail: 'ptt.jpg',
      address: 'Via Cefalonia, 55',
      first_day: '',
      last_day: '',
      opening_hour: '',
      closing_hour: '',
    },
    {
      name: "Lago di Garda",
      intro: 'One of the most beautiful lakes in Italy and one of the main lakes in Italy. It hosts different events for all the family, specially during the summer.',
      cover_img: 'Lago_di_Garda.png',
      img: "i_LDG.png",
      img_caption: "The view of Sirmione Sul Garda",
      thumbnail: 'ldgt.jpg',
      // address: '',
      first_day: '',
      last_day: '',
      opening_hour: '',
      closing_hour: '',
    },
    {
      name: "Hiking Path Bosco Incantato", // caricare immagine non sgranata
      intro: 'One of the jewels of nature near Brescia, you can go on a unique hiking trip to Bosco Incantato. An experience to remember!',
      cover_img: 'hpbic.jpg',
      img: "i_BI.png",
      img_caption: "Some mytical creatures you can find in the hiking path",
      thumbnail: 'hpbit.jpg',
      address: 'Via Monte Guglielmo',
      first_day: '',
      last_day: '',
      opening_hour: '',
      closing_hour: '',
    },
    {
      name: "Millemonti",////
      intro: 'Since 2006 MilleMonti is group of people who loves nature, mountain and travelling that together with medium mountain guides and mountain guides offers a lot of experiences on our territory.',
      details: 'MilleMonti offers experiences to discover nature with green activities such as hiking, snowshoeing, mountain biking, cycling, Nordic walking, food and wine tours and much more. It is possible to choose the ideal excursion for everyone: how many days and according to what you are interested in.',
      cover_img: 'Millemonti.png',
      img: "i_M.png",
      img_caption: "Vineyard view",
      thumbnail: 'mt.jpg',
      address: '',
      first_day: '',
      last_day: '',
      opening_hour: '',
      closing_hour: '',
    },
    {
      name: "Roman Theatre",
      intro: 'The Roman Theatre of Brescia has been a silent, but stable, witness of the last 2,000 years of the history of Brescia: we talk about 2,000 years because it was built during Augustan age (end of I century BD – beginning of I century AD), it underwent a significant renovation in Flavian age, at the time of building of the Temple Capitolium of Brescia, during Severian age (II-III century AD) it was totally restored. It is supposed that the theatre could host until 15,000 spectators: a very significant number for that time.',
      cover_img: 'Roman_Teatro.png',
      img: "i_RT.png",
      img_caption: "Estimation of the full splendor of the site",
      thumbnail: 'rtt.jpg',
      address: 'Via dei Musei 23',
      first_day: '',
      last_day: '',
      opening_hour: '',
      closing_hour: '',
    },
  ]

  const events = [
    {
      title: 'Guided Visit to Duomo',
      date: '2022-05-05',
      cover_img: 'gvtdc.png',
      event_img: 'gvtd.jpg',
      time: ' 09:00',
      fee: 2,
      type: 'Discover and learn',
      description: 'Come discover the marvels of our main Duomo, the Cattedrale di Santa Maria Assunta, one of our official tour guides will explain the history and marvels behind it.',
      intro: 'Discover this beautiful monument with us',
      season: 'summer',
      pointOfInterestId: 1,
      thumbnail: 'gvtdt.jpg'
    },
    {
      title: 'Roman Art Class',
      date: '2022-11-25',
      cover_img: 'racc.jpg',
      event_img: 'rac.jpg',
      time: ' 16:00',
      fee: 10,
      type: 'Discover and learn',
      description: 'Come learn with us about roman architecture and art at the Roman Archeological Park, we will have a local teacher of Art History explain interesting facts and a quick exercise.',
      intro: 'Come draw with us and our roman history',
      season: 'winter',
      pointOfInterestId: 2,
      thumbnail: 'ract.jpg'
    },
    {
      title: 'Visit of Armory',
      cover_img: 'voac.jpg',
      event_img: 'voa.jpg',
      date: '2022-08-03',
      time: ' 16:00',
      fee: 10,
      type: 'Discover and learn',
      description: 'Come learn with us about antique armory and the ways of life of the nobility of Brescia at the Castle of Brescia, we will have a local teacher of Art History explain interesting facts and a quick exercise.',
      intro: 'Learn about traditional armory of medieval ages',
      season: 'summer',
      pointOfInterestId: 3,
      thumbnail: 'voat.jpg'
    },
    {
      title: 'Frescoes sightings',
      date: '2022-07-17',
      cover_img: 'fsc.jpg',
      event_img: 'fs.jpg',
      time: ' 11:00',
      fee: 5,
      type: 'Relax and leisure',
      description: 'Come discover the roman and medieval frescoes at the Santa Giulia Museum, we will have a local teacher of Art History explain interesting facts about these beautiful works of art.',
      intro: 'Marvel yourself with amazing frescoes',
      season: 'summer',
      pointOfInterestId: 4,
      thumbnail: 'fst.png'
    },
    {
      title: 'Understanding Symbolism',
      date: '2022-09-08',
      cover_img: 'usc.jpg',
      event_img: 'us.jpg',
      time: ' 11:00',
      fee: 5,
      type: 'Discover and learn',
      description: 'Come learn with us about antique symbolism in the religious culture at the Church of Francesco D’Assisi we will have a local teacher of Art History explain interesting facts and a quick exercise.',
      intro: 'Discover the mysteries of symbolism in churches',
      season: 'summer',
      pointOfInterestId: 5,
      thumbnail: 'ust.png'
    },
    {
      title: 'Roman History Class',
      date: '2022-05-18',
      cover_img: 'rhcc.jpg',
      event_img: 'rhc.jpg',
      time: ' 12:00',
      fee: 7,
      type: 'Discover and learn',
      description: 'Come learn with us about roman history and war at the Domus Ariciana, we will have a local teacher of  History explain interesting facts and a quick exercise.',
      intro: 'Marvel yourself with amazing history',
      season: 'summer',
      pointOfInterestId: 6,
      thumbnail: 'rhct.png'
    },
    {
      title: 'Lettering Workshop',
      date: '2022-09-20',
      cover_img: 'letteringworkshop.png',
      event_img: 'lw.jpg',
      time: ' 13:00',
      fee: 20,
      type: 'Discover and learn',
      description: 'Come learn with how to do lettering and create your own unique poster, 1800’s style! It will take place at the Querini Library, don’t miss out!',
      intro: 'Learn about caligraphy and lettering like in the medieval ages!',
      season: 'summer',
      pointOfInterestId: 7,
      thumbnail: 'lwt.png'
    },
    {
      title: 'Christmas Choir',
      date: '2022-12-05',
      cover_img: 'ccc.jpg',
      event_img: 'cc.jpg',
      time: ' 18:00',
      fee: 5,
      type: 'Music and entertainment',
      description: 'Come see out local choir group for a special Christmas Moment in a lovely ambience, right by the  Old Duomo, all the earned fees will be donated to a local charity.',
      intro: 'Come see the local choir group Christmas presentation',
      season: 'winter',
      pointOfInterestId: 8,
      thumbnail: 'cct.png'
    },
    {
      title: 'Drawing Workshop',
      date: '2022-11-18',
      cover_img: 'dwc.jpg',
      event_img: 'dw.jpg',
      time: ' 16:00',
      fee: 0,
      type: 'Discover and learn',
      description: 'Come learn architecture drawing techniques copying the beautiful facades of Palazzo Broletto, it’s a great way to learn and make friends!',
      intro: 'Come draw the facade of this beautiful Palazzo by the lake Garda',
      season: 'winter',
      pointOfInterestId: 9,
      thumbnail: 'dwt.png'
    }, {
      title: 'Summer Concert',
      date: '2022-06-23',
      cover_img: 'scc.jpg',
      event_img: 'sc.jpg',
      time: ' 10:00',
      fee: 5,
      type: 'Music and entertainment',
      description: 'We are excited to announce our summer concert hel annually in the heart of Brescia. Held at Piazza della Logia in the city center, the best music waits for you!',
      intro: 'Come draw the facade of this beautiful Palazzo by the lake Garda',
      season: 'summer',
      pointOfInterestId: 10,
      thumbnail: 'sct.png'
    }, {
      title: 'Vintage Shopping',
      date: '2022-07-11',
      cover_img: 'vsc.jpg',
      event_img: 'vs.jpg',
      time: ' 15:00',
      fee: 2,
      type: 'Relax and leisure',
      description: 'Come join us for a Vintage shopping tour at Carmine Old District in the city center, our local guide has some hidden jewels just for you!',
      intro: 'Come discover the vintage stores at the Old District',
      season: 'summer',
      pointOfInterestId: 11,
      thumbnail: 'vst.png'
    }, {
      title: 'Tandem Aperitivo',
      date: '2022-12-07',
      cover_img: 'tandemaperitivo.png',
      event_img: 'ta.jpg',
      time: ' 18:00',
      fee: 15,
      type: 'Food and beverages',
      description: 'A relaxing moment in the heart of Brescia at Piazza Paolo VI, while you meet new people and learn a few words in a different language.',
      intro: 'Come learn a new language while having aperitivo',
      season: 'winter',
      pointOfInterestId: 12,
      thumbnail: 'tat.png'
    }, {
      title: 'Sunday Market',
      date: '2022-07-10',
      cover_img: 'smc.jpg',
      event_img: 'sm.jpg',
      time: ' 09:00',
      fee: 1,
      type: 'Food and beverages',
      description: 'Come discover the italian way of doing groceries! A local Brescian will join you for grocery shopping and explain the main dishes you can prepare with all italian quality goods, at the Piazza della Vittoria.',
      intro: 'Come discover the italian way of doing groceries!',
      season: 'summer',
      pointOfInterestId: 13,
      thumbnail: 'smt.png'
    }, {
      title: 'After "Ape" Party',
      date: '2022-07-23',
      cover_img: 'aapc.jpg',
      event_img: 'aap.jpg',
      time: ' 22:00',
      fee: 10,
      type: 'Fun',
      description: 'For those who still have energy after a full day in Brescia, we will host an after party cocktail moment at Via dei Musei. Don’t Miss out!',
      intro: 'Come relax with us',
      season: 'summer',
      pointOfInterestId: 14,
      thumbnail: 'aapt.png'
    },
    {
      title: 'Classical Night',
      date: '2022-11-28',
      cover_img: 'cnc.jpg',
      event_img: 'cn.jpg',
      time: ' 19:00',
      fee: 20,
      type: 'Music and entertainment',
      description: 'You cannot miss our classical concert night at Teatro Grande. Our local orchestra will be playing the most iconic classical songs of our century.',
      intro: 'Come listen to classical music with the local orchestra',
      season: 'winter',
      pointOfInterestId: 15,
      thumbnail: 'cnt.png'
    },
    {
      title: 'Botanical Class',
      date: '2022-07-28',
      cover_img: 'bcc.jpg',
      event_img: 'bc.jpg',
      time: ' 10:00',
      fee: 5,
      type: 'Discover and learn',
      description: 'Come learn about local plans and botanicals at Parco dell’Acqua. Our local garden guides and teachers will explain everything you need to know.',
      intro: 'Come learn about the types of plants present in our local park',
      season: 'summer',
      pointOfInterestId: 16,
      thumbnail: 'bct.png'
    },
    {
      title: 'Yoga Class',
      date: '2022-06-30',
      cover_img: 'ycc.jpg',
      event_img: 'yc.jpg',
      time: ' 08:00',
      fee: 5,
      type: 'Relax and leisure',
      description: 'Come relax and breathe the nature at Parco Tarello. We will be hosting a yoga class that will refresh your lifestyle. The perfect getaway for summer.',
      intro: 'Come do yoga with us at Parco Tarello',
      season: 'summer',
      pointOfInterestId: 17,
      thumbnail: 'yct.png'
    },
    {
      title: 'Bike by the Lake',
      date: '2022-06-29',
      cover_img: 'bbtlc.jpg',
      event_img: 'bbtl.jpg',
      time: ' 07:00',
      fee: 25,
      type: 'Relax and leisure',
      description: 'Come relax and breathe the nature at Lago di Garda. We will be hosting a biking tour that will refresh your lifestyle. The perfect getaway for summer.',
      intro: 'Come explore the edges of our beautiful Lake Garda!',
      season: 'summer',
      pointOfInterestId: 18,
      thumbnail: 'bbtlt.png'
    },
    {
      title: 'Treasure Hunt',
      date: '2022-06-22',
      cover_img: 'thc.jpg',
      event_img: 'th.jpg',
      time: ' 11:00',
      fee: 15,
      type: 'Fun',
      description: 'Bring your kids have fun looking for treasures and hidden misteries at this particular venue at the Bosco Incantato. There will be prizes for the winners!',
      intro: 'Bring your kids to hunt treasures between faires and gnomes at the forest!',
      season: 'summer',
      pointOfInterestId: 19,
      thumbnail: 'tht.png'
    },
    {
      title: 'Vineyard Visit',
      date: '2022-08-05',
      cover_img: 'vineyard-visit.png',
      event_img: 'vv.jpg',
      time: ' 13:00',
      fee: 15,
      type: 'Relax and leisure',
      description: 'Relax and come taste the best wineries from the region of Millemonti near the city of Brescia, you will remember it for a lifetime!',
      intro: 'Come taste the best wine',
      season: 'summer',
      pointOfInterestId: 20,
      thumbnail: 'vvt.png'
    },
    {
      title: 'Acoustic Concert',
      date: '2022-05-18',
      cover_img: 'acc.jpg',
      event_img: 'ac.jpg',
      time: ' 18:00',
      fee: 5,
      type: 'Music and entertainment',
      description: 'Come listen to an acoustic guitar concert at Roman Theatre and immerse yourself in the eco and mystical experience of the roman ruins.',
      intro: 'Come listen to some soft music, like a roman citizen of Brixia!',
      season: 'summer',
      pointOfInterestId: 21,
      thumbnail: 'act.png'
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
      category: 'History & Culture',
      inout: 'Indoors & Outdoors',
    },
    {
      name: 'Nature Tour',
      short_description: 'Explore nature around our beautiful city.',
      overview: 'Brescia, close to Lago di Garda and in one of the most beautiful regions of Lombardía, offers a wide selection of outdoor activities immersed in nature. Don’t miss out!',
      cover_img: 'nature-tour_coverimg.png',
      thumbnail: "nature-tour_thumbnail.png",
      duration: 360,
      category: 'Nature',
      inout: 'Outdoors',
    },
    {
      name: 'Monuments of Brescia',
      short_description: 'Enjoy the historic monuments and landmarks of Brescia.',
      overview: 'Our top pick recommendations on the must-see monuments that you cannot miss while you visit Brescia!',
      cover_img: "monuments-of-brescia_coverimg.png",
      thumbnail: 'monuments-of-brescia_thumbnail.png',
      duration: 360,
      category: 'History & Culture',
      inout: 'Indoors & Outdoors',
    },
    {
      name: 'Walking Tour City Center',
      short_description: 'Venture yourself into the beauty of contemporary Brescia, a vibrant modern city that preserves it’s magical charm.',
      overview: 'Our top pick recommendations on local food, while enjoying the view from our beautiful historical “piazze”. Enjoy!',
      cover_img: "walking-tour-city-center_coverimg.png",
      thumbnail: 'walking-tour-city-center_thumbnail.png',
      duration: 120,
      category: 'History & Culture',
      inout: 'Outdoors',
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
      serviceTypeId: 1
    },
    {
      name: 'Farmacie Comunali Di Brescia Spa',
      address: 'Via Achille Grandi, 18',
      practicalInfo: 'Townhall pharmacies',
      serviceTypeId: 1
    },
    {
      name: 'Castle Pharmacy',
      address: 'Via Galileo Galilei, 85/A',
      practicalInfo: 'It is in a castle!',
      serviceTypeId: 1
    },
    {
      name: 'Farmacia Austoni',
      address: 'Via Cremona, 37',
      practicalInfo: 'Owned by a distinguished gentleman',
      serviceTypeId: 1
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
