const data = {
    currentDate: "2023-01-01",
    events: [
        {
            name: "2 Wheels Fair",
            image: "https://i.postimg.cc/0y5CJ7Hx/800-X-600-300x300.png",
            date: "2022-12-12",
            description: "the event with the greatest commercial impact of the motorcycle industry in America.",
            price: 15,
        },
        {
            name: "Tribute to the Mother of Mothers",
            image: "https://i.postimg.cc/13YDn2qc/Whats-App-Image-2024-04-19-at-11-44-45-AM-300x300.jpg",
            date: "2023-08-12",
            description: "The great concert of the international choir and symphony orchestra of the Knights of the Virgin, with Gregorian music.",
            price: 15,
        },
        {
            name: "Vape South America Medellin 2024",
            image: "https://i.postimg.cc/T3PrPfp3/Vape-South-America-Listing-800x600-1-300x300.jpg",
            date: "2022-11-02",
            description: "This edition promises to be the largest meeting point for vape enthusiasts, with a renewed look and focus on promoting the vaping industry.",
            price: 15,
        },
        {
            name: "PMU Industry Expo",
            image: "https://i.postimg.cc/FzgjYKy7/Expoindustry-300x300.jpg",
            date: "2023-11-02",
            description: "It is the ideal space to promote brands and make commercial alliances.",
            price: 15,
        },
        {
            name: "Expotatuaje Medellín 2024",
            image: "https://i.postimg.cc/59w57shb/Expotatuaje1-300x300.jpg",
            date: "2022-02-12",
            description: "This year the Expo will have significant growth and will be the incorporation of a new room, which will be the white room.",
            price: 15,
        },
        {
            name: "Expopartes Autopartes Medellin Fair",
            image: "https://i.postimg.cc/kXqQkxC8/LOGO-AUTOPARTES-Mesa-de-trabajo-1-300x300.png",
            date: "2023-02-12",
            description: "Asopartes has developed one of the most representative after-sales fairs of the automotive industry in Latin America.",
            price: 15,
        },
        {            
            name: "Expobelleza 2024",
            image: "https://i.postimg.cc/brjxYn27/Expobelleza-2024-800x600-1-300x300.jpg",
            date: "2023-01-22",
            description: "Expobelleza Medellín is the business platform that connects multiple national and international brands interested in opening new markets in Medellín, Colombia and the world.",
            price: 15,
        },
        {            
            name: "Business and Entrepreneurship Fair",
            image: "https://i.postimg.cc/cLDB76V3/BANNER-EN-PAGINA-DE-PLAZA-Mesa-de-trabajo-1-3-300x300.png",
            date: "2022-01-22",
            description: "It seeks to bring together businessmen and entrepreneurs from different sectors of the economy, being the opportunity for them to make their business visible and promote their products and services.",
            price: 15,
        },
        {            
            name: "XII National Convention of Alcoholics Anonymous",
            image: "https://i.postimg.cc/g0X8vsy9/XII-Convencion-Nacional-de-AA-300x300.jpg",
            date: "2022-03-01",
            description: "event held every five years in which topics are developed in community with exhibitors and the attending public.",
            price: 15,
        },
        {            
            name: "Expoartesano La Memoria 2024",
            image: "https://i.postimg.cc/k4SNdsDN/expoartesano-la-memoria-2024-300x300.png",
            date: "2023-03-01",
            description: "It is an event that exalts the memory, traditions and ancestral customs of Colombia.",
            price: 15,            
        },
        {            
            name: "Colombiamoda 2024",
            image: "https://i.postimg.cc/0NbdVPsB/banners-colmodatex-24-plaza-mayor-800x600-300x300.jpg",
            date: "2023-10-15",
            description: "SPACES OF INSPIRATION and FASHION EXPRESSIONS in finished products, and together with Colombiatex activates business in the second half of the year for the textile chain in the region.",
            price: 15,
        },
        {           
            name: "Expo Mobile",
            image: "https://i.postimg.cc/bNgx8sY5/sitio-web-300x300.jpg",
            date: "2022-11-09",
            description: "the most complete commercial exhibition of the LATAM cell phone industry.",
            price: 15,
        },
        {           
            name: "EFFIX Electronic Commerce Fair",
            image: "https://i.postimg.cc/MHyY15SZ/800-x-600-300x300.jpg",
            date: "2022-3-11",
            description: "It brings together various E-commerce actors, including service and product providers.",
            price: 15,
        },
        {            
            name: "Expocamacol 2024",
            image: "https://i.postimg.cc/rFkjMB1D/Banner-800-x-600-Expo-CAMACOL2024-1-300x300.jpg",
            date: "2023-10-15",
            description: "the International Construction, Engineering, Architecture and Design Fair.",
            price: 15,
        },
    ],
};

let cardsHome = document.getElementById("cardsPast");
for (let i = 0; i < data.events.length; i++) {
    let card = document.createElement("div");
    if (data.events[i].date < data.currentDate) {
        card.innerHTML = `
        <div class="card me-3 my-1 h-100 cards-i" style="width: 18rem">
            <img src="${data.events[i].image}" class="card-img-top" alt="${data.events[i].name}" style="height: 20vh; object-fit: cover;"/>
            <div class="card-body text-center d-flex flex-column justify-content-around">
                <h5 class="card-title">${data.events[i].name}</h5>
                <p class="card-text">
                    ${data.events[i].description}
                </p>
                <div class="d-flex justify-content-around align-items-baseline">
                    <p>US ${data.events[i].price} USD</p>
                    <a href="./details.html" class="btn go-details">Details</a>
                </div>
            </div>
        </div>
        `;
        card.classList.add("my-3");
        cardsHome.appendChild(card);
    }
} 