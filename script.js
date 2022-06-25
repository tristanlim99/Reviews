// local reviews data
const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];

//select items
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

//set starting item
let currentItem = 0;

//load initial item
//onLoad event listener so that the function will load on window
window.addEventListener("DOMContentLoaded", function () {
  showPerson(currentItem); // Callback function showPerson with currentItem as parameter
});

//show person based on item
//function focuses on the changes that will be made on the reviews var
const showPerson = (person) => {
  const item = reviews[person]; //block variable to target the reviews var
  img.src = item.img; //block variable to target the reviews img
  author.textContent = item.name; //block variable to target the reviews name
  job.textContent = item.job; //block variable to target the reviews job
  info.textContent = item.text; //block variable to target the reviews paragraph
};

//click event listener to show/ transition to next person
nextBtn.addEventListener("click", function () {
  currentItem++; //increment the current item per click
  //if currentItem is greater than the reviews' length minus 1
  //currentItem will reset to 0
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem); //Callback function to showPerson
});
//click event to show/transition to previous person
prevBtn.addEventListener("click", function () {
  currentItem--; //decrement currentItem value per click
  //if currentItem is less than 0, currentItem should be equal to reviews' length minus 1
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem); //Callback function to showPerson
});

//click event listener to show random person
randomBtn.addEventListener("click", function () {
  currentItem = Math.floor(Math.random() * reviews.length); //rounding up the random numbers by multiplying reviews' length
  showPerson(currentItem); //Callback function to showPerson
});
