document.querySelector('.search-bar button:nth-child(2)').addEventListener('click', function() {
    document.querySelector('.search-bar input').value = '';
    document.getElementById('recommendations').classList.remove('hidden');
    loadRecommendations();
});

 function loadRecommendations() {
        const destinations = [
            {
                name: "Paris, France",
                description: "The city of light, known for its art, fashion, and landmarks.",
                image: "paris.jpg"
            },
            {
                name: "Tokyo, Japan",
                description: "A bustling city with modern skyscrapers, traditional temples, and rich culture.",
                image: "tokyo.jpg"
            },
            {
                name: "New York, USA",
                description: "The city that never sleeps, known for its iconic landmarks and vibrant culture.",
                image: "newyork.jpg"
            }
        ];
    }






// document.getElementById('start').addEventListener('click', function() {
//     document.getElementById('home').classList.add('hidden');
//     document.getElementById('recommendations').classList.remove('hidden');
//     loadRecommendations();
// });

// function loadRecommendations() {
//     const destinations = [
//         {
//             name: "Paris, France",
//             description: "The city of light, known for its art, fashion, and landmarks.",
//             image: "paris.jpg"
//         },
//         {
//             name: "Tokyo, Japan",
//             description: "A bustling city with modern skyscrapers, traditional temples, and rich culture.",
//             image: "tokyo.jpg"
//         },
//         {
//             name: "New York, USA",
//             description: "The city that never sleeps, known for its iconic landmarks and vibrant culture.",
//             image: "newyork.jpg"
//         }
//     ];

//     const destinationList = document.getElementById('destination-list');
//     destinationList.innerHTML = '';

//     destinations.forEach(destination => {
//         const card = document.createElement('div');
//         card.className = 'destination-card';

//         const img = document.createElement('img');
//         img.src = destination.image;
//         img.alt = destination.name;

//         const content = document.createElement('div');

//         const name = document.createElement('h3');
//         name.textContent = destination.name;

//         const description = document.createElement('p');
//         description.textContent = destination.description;

//         content.appendChild(name);
//         content.appendChild(description);
//         card.appendChild(img);
//         card.appendChild(content);

//         destinationList.appendChild(card);
//     });
// }
