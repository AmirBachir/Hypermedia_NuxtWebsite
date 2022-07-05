# Hypermedia applications project
Design and implementation of a website for the tourist office of the city of Brescia (IT).
## Team and contributions
### The team
**Monica Arriaga Rivera** | 10752329 | Integrated Product Design  
**Andrea Alesani** | 10615882 | Human Computer Interaction and Design  
**Amir Bachir Kaddis Beshay** | 10659740 | Human Computer Interaction and Design  
**Gabriele Carollo** | 10659997 | Human Computer Interaction and Design  
### Contributions
All the members contributed equally in the initial phase of the project in which the joint work of all the team members was necessary to create the content design in the large and in the small and the abstract pages.
Then, according to each member competences, the work was distributed as follows. 
#### Monica Arriaga Rivera
She was mostly involved in:
* UX/UI design
* Low fidelity witeframes 
* High fidelity wireframes
* Report
#### Andrea Alesani
He was mostly involved in:
* Homepage
* Event kind of topic page
* Events introductory page
* Vue components used across the website (such as RoundImageCard, Cover, etc...)
* CSS for mobile and reactive pages
* Database design
#### Amir Bachir Kaddis Beshay
He was mostly involved in:
* The City of Brescia (about us) single topic page
* Points of Interest introductory page
* Itinerary kind of topic page
* Service type kind of topic page
* Vue components used across the website (TheHeader, getToBrescia, PoICard, TheParagraph, Stop)
* Database design
#### Gabriele Carollo
He was mostly involved in:
* Point of interest kind of topic page
* Itineraries introductory page
* Contact us single topic page
* Database fill
* Vue components used across the website (Footer, Cover, Person)
* Database design
## Project documentation
### Components
A component-based approach has been used in the development of the website to grant modularity and reuse of code. Below are listed all the components used and their related functionalities.
#### ArrowDown
This component represent an arrow button that once pressed makes scroll the page to it.
#### Cover
This component is used as the cover for the kind of topic pages, it contains the cover image, the title and an orientation link.
#### EventCard
This component is a card that represents the preview of the event, it encloses all the relevant information about an event.
#### GetToBrescia
This component includes all the relevant information that are needed to get to Brescia by train, car or bus form Milan and Bergamo Orio Al Serio.
#### IntroPagesCover
This component is used as the cover for the introductory pages, it contains the cover image and the title of the page.
#### Person
This component used in contact us page, is needed to show all the team members and the teaching team and their related info.
#### PoICard
This component is the preview of the point of interest, it includes his name and a photo, by clicking on it brings to the related page of the point of interest.
#### RoundImageCard
This component is used for the preview of itineraries and service types. It includes the title and an icon of the realted content and only in case of the itineraries it displays also a short description.
#### Stop
This component represents the single stop of itineraries, it includes the name and a photo of the point of interest and by clicking on it, it brings to the point of interest page.
#### TheFooter
It contains useful links, the link to the contact us page and to the infopoint of Brescia and logos of the institution related to this project. It is used in the defaut layout.
#### TheHeader
It is navigation bar that contains the links to all the main sections of the website and the logo. It is used in the defaut layout.
#### TheParagraph
This component used in the city of brescia page includes information and images about Brescia and his history.
#### TopicCard
This component is used inside the homepage as preview of the sections: service types, itineraries, points of interest and events. It includes the title an image and a short description of the related content.
### Routing 
Using Nuxt.js it was not necessary to set the routing of pages manually, indeed Nuxt generates the routes configuration based on the files inside the pages folder.
### Server
The server side rendiring approach (SSR) has been chosen because it is reasonable to imagine that many events during the year can be added or removed from the website content, so the necessity to rebuild every time the website is avoided. In this way all the pages are rendered in the server and then sent to the browser when requested. Furthermore SSR grants better SEO optimization.
### Database
The content of the website is contained in a Postgres Database. The queries to handle the requests are executed through Sequelize.

## Relevance to best practices
Nuxt.js allows a smart development of the web application by exploiting the functionalities that it provides. In this way, following the best practices of the framework is possible to achive very good results and avoid some pains to the developers.   
In the case of this project some of the followed best practice that had a positive impact in development of the project are:
1. *Reuse of components*: Nuxt permits to create single file components, they once have been created, can be used in every page of the website. This permitted us to save many lines of code just by calling the components when needed.
2. *Layout configuration*: Nuxt permits to create customized layouts that can be used in a website for each page or just for some of them avoiding the replication of code, just by calling the layout file. In our case all the pages have been designed with the same layout (the default layout).
3. *Mixin*: through mixins in Nuxt is possible to reuse methods in several components or pages just by writing them once. In our case the mixin was used for the toContent method that was requested in several pages.
4. *SEO optimization*: Nuxt permitted us an easy configuration of the metadata locally within each file, dinamically overwriting the global metadata in the nuxt.confing.js file. This resulted in good SEO optimization scores according to Lighthouse.
