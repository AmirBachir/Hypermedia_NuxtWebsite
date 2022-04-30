

export default async (models) => {
    const pointsofinterest = [
        {
            name: "Cat 1",
            description: "Details about cat 1",
            img: "https://fs.i3lab.group/hypermedia/cats/siberian.jpg",
            cover_img: "https://fs.i3lab.group/hypermedia/cats/siberian.jpg",
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
    await models.PointOfInterest.bulkCreate(pointsofinterest)
}