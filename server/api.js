const express = require('express')
const app = express()
const {Sequelize, DataTypes} = require("sequelize")
const initialize = require('./initialize').default
app.use(express.json())

const database = new Sequelize("postgres://postgres:postgres@localhost:5432/hyp")


// Function that will initialize the connection to the database
async function initializeDatabaseConnection() {
  await database.authenticate()
  const PointOfInterest = database.define("pointOfInterest", {
    name: DataTypes.STRING,
    intro: DataTypes.TEXT,
    details: DataTypes.TEXT,
    cover_img: DataTypes.STRING,
    img: DataTypes.STRING,
    img_caption: DataTypes.STRING,
  })
  const Event = database.define("event", {
    date: DataTypes.DATEONLY,
    cover_img: DataTypes.STRING,
    time: DataTypes.TIME,
    poi: DataTypes.STRING,
    title: DataTypes.STRING,
    type: DataTypes.STRING,
    description: DataTypes.STRING,
    season: DataTypes.STRING,
  })
  const Itinerary = database.define("itinerary", {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    cover_img: DataTypes.STRING,
    duration: DataTypes.INTEGER
  })
  const Image = database.define("image", {
    path: DataTypes.STRING,
  })

  PointOfInterest.hasMany(Event)
  Event.belongsTo(PointOfInterest)
  Itinerary.belongsToMany(PointOfInterest, {through: 'ItineraryPoi'})
  PointOfInterest.belongsToMany(Itinerary, {through: 'ItineraryPoi'})
  Event.hasMany(Image)
  Image.belongsTo(Event)
  PointOfInterest.hasMany(Image)
  Image.belongsTo(PointOfInterest)

  await database.sync({force: true})
  return {
    PointOfInterest,
    Event,
    Itinerary,
    Image
  }
}

// With this line, our server will know how to parse any incoming request
// that contains some JSON in the body

const pageContentObject = {
  index: {
    title: "Homepage",
    image: "https://fs.i3lab.group/hypermedia/images/index.jpeg",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et tincidunt elit, in finibus elit. Aliquam nec posuere sem, at faucibus erat. Suspendisse iaculis lorem id odio placerat bibendum. Suspendisse potenti. Sed quis efficitur erat. Pellentesque non velit ipsum. Maecenas finibus felis a magna auctor finibus. Mauris tincidunt nibh sit amet ante consectetur, non cursus elit feugiat.
        Integer vitae elit at nunc lacinia egestas. Etiam nec sagittis lorem. Phasellus consectetur mauris eget neque posuere, vitae sagittis massa congue. Etiam vitae eleifend odio, sit amet tempus ex. Ut semper feugiat erat, id consequat elit volutpat sed. Curabitur vel arcu at risus vehicula blandit in ut nunc. In nec pellentesque tellus. Maecenas vitae purus lacinia, tristique elit vitae, interdum est. Ut feugiat nulla et vestibulum efficitur. Suspendisse potenti. Duis ex dolor, vestibulum a leo eu, dapibus elementum ipsum. Curabitur euismod rhoncus nulla ac interdum. Mauris vulputate viverra scelerisque. Mauris ullamcorper tempus eros.`
  },
  about: {
    title: "About",
    image: "https://fs.i3lab.group/hypermedia/images/about.jpeg",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et tincidunt elit, in finibus elit. Aliquam nec posuere sem, at faucibus erat. Suspendisse iaculis lorem id odio placerat bibendum. Suspendisse potenti. Sed quis efficitur erat. Pellentesque non velit ipsum. Maecenas finibus felis a magna auctor finibus. Mauris tincidunt nibh sit amet ante consectetur, non cursus elit feugiat.
        Integer vitae elit at nunc lacinia egestas. Etiam nec sagittis lorem. Phasellus consectetur mauris eget neque posuere, vitae sagittis massa congue. Etiam vitae eleifend odio, sit amet tempus ex. Ut semper feugiat erat, id consequat elit volutpat sed. Curabitur vel arcu at risus vehicula blandit in ut nunc. In nec pellentesque tellus. Maecenas vitae purus lacinia, tristique elit vitae, interdum est. Ut feugiat nulla et vestibulum efficitur. Suspendisse potenti. Duis ex dolor, vestibulum a leo eu, dapibus elementum ipsum. Curabitur euismod rhoncus nulla ac interdum. Mauris vulputate viverra scelerisque. Mauris ullamcorper tempus eros.`
  },
}


async function runMainApi() {
  const models = await initializeDatabaseConnection()
  await initialize(models)

  app.get('/page-info/:topic', (req, res) => {
    const {topic} = req.params
    const result = pageContentObject[topic]
    return res.json(result)
  })

  app.get('/points-of-interest/:id', async (req, res) => {
    const id = +req.params.id
    const result = await models.PointOfInterest.findOne({
      where: {id},
      include: [
        models.Event,
        models.Itinerary
      ]
    })
    return res.json(result)
  })

  // HTTP GET api that returns all the cats in our fake database
  app.get("/points-of-interest", async (req, res) => {
    const result = await models.PointOfInterest.findAll()
    const filtered = []
    for (const element of result) {
      filtered.push({
        name: element.name,
        img: element.img,
        id: element.id,
      })
    }
    return res.json(filtered)
  })

  // HTTP POST api that will push (and therefore create) a new element in
  // our fake database
  app.post("/cats", (req, res) => {
    const {body} = req
    catList.push(body)
    return res.sendStatus(200)
  })

  app.get('/events', async (req, res) => {
    const result = await models.Event.findAll({
      include: models.PointOfInterest
    });

    return res.json(result)
  })

  // Returns only the data about a specific event
  app.get('/event/:id', async (req, res) => {
    const id = req.params.id
    const result = await models.Event.findOne({
      where: {
        id
      },
      include:
        [
          models.PointOfInterest,
          models.Image
        ]
    });
    
    return res.json(result)
  })
}

runMainApi()


export default app
