const pets = [
  {
    id: 1,
    name: "Dusty",
    color: "Green",
    specialSkill: "Gives sincere apologies.",
    type: "cat",
    imageUrl:
      "http://kittentoob.com/wp-content/uploads/2015/06/funny-cat-with-a-towel.jpg",
  },
  {
    id: 2,
    name: "Trouble",
    color: "Brown",
    specialSkill:
      "Just picks the tomatoes off of a sandwich instead of requesting a whole new sandwich.",
    type: "dino",
    //imageUrl: "http://www.jozilife.co.za/wp-content/uploads/The-Dino-Expo.jpg",
    imageUrl: "https://source.unsplash.com/random/600x400/?Dinosaur",
  },
  {
    id: 3,
    name: "Whiskers",
    color: "Yellow",
    specialSkill: "Can prove he is a real man by drinking whiskey.",
    type: "dino",
    imageUrl:
      "https://mydinosaurs.com/wp-content/uploads/2017/02/2-3-600x400.jpg",
  },
  {
    id: 4,
    name: "Coco",
    color: "Black",
    specialSkill: "Burps minimally.",
    type: "dog",
    imageUrl:
      "http://cdn.akc.org/content/article-body-image/funny-pembroke_welsh_corgi.jpg",
  },
  {
    id: 5,
    name: "Spooky",
    color: "Brown",
    specialSkill: "Comfortable in the outdoors for up to eight hours.",
    type: "cat",
    imageUrl:
      "http://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg",
  },
  {
    id: 6,
    name: "Tiger",
    color: "Black",
    specialSkill: "Can read (but cannot understand) Hebrew.",
    type: "dog",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/7/7e/Basset_Hound_600.jpg",
  },
  {
    id: 7,
    name: "Oreo",
    color: "Yellow",
    specialSkill: "Able to stop chewing ice or whistling on request.",
    type: "cat",
    imageUrl: "https://source.unsplash.com/random/600x400/?Cat",
  },
  {
    id: 8,
    name: "Ginger",
    color: "Grey",
    specialSkill: "Comfortable in the outdoors for up to eight hours.",
    type: "dino",
    imageUrl: "https://source.unsplash.com/random/600x400/?Dinosaur",
    //"http://www.theouthousers.com/images/jck//ThanosCopter/news/grumpasaur.jpg",
  },
  {
    id: 9,
    name: "Sassy",
    color: "Brown",
    specialSkill: "Adept at talking self and others out of fights.",
    type: "cat",
    imageUrl:
      "https://tailandfur.com/wp-content/uploads/2015/09/40-Amazing-Cat-Funny-Moment-Pictures-Feature-Image.jpg",
  },
  {
    id: 10,
    name: "Sadie",
    color: "Mixed",
    specialSkill: "Killer of stuff animals.",
    type: "dog",
    imageUrl: "images/sadie2.jpg",
    //"https://i.pinimg.com/originals/04/54/92/0454926d39eeb420f4f01948e94e9e41.jpg",
  },
  {
    id: 11,
    name: "Maggie",
    color: "White",
    specialSkill: "Varmit hunter and champion ditch digger.",
    type: "dog",
    imageUrl: "images/maggie2.jpg",
    // "http://www.cantref.com/userfiles/events/walking%20dino.jpg?w=600",
  },
  {
    id: 12,
    name: "Raven",
    color: "Black",
    specialSkill: "Sports lover - Geaux Tigers!!!",
    type: "dog",
    imageUrl: "images/raven.jpg",
    //"https://i.pinimg.com/originals/1f/30/8c/1f308c9c108a384b91b39430cc7312e9.jpg",
  },
  {
    id: 13,
    name: "Remington",
    color: "Tan & White",
    specialSkill: "Remi (as he's known by his friends) is a lap dog's lap dog.",
    type: "dog",
    imageUrl: "images/remington.jpg",
    //"http://1kjkdg1axrkd2g03cnboj761.wpengine.netdna-cdn.com/wp-content/uploads/2017/12/braydon-anderson-105552-e1512684107659.jpg",
  },
  {
    id: 14,
    name: "Samantha",
    color: "Brown",
    specialSkill: "Always up for dessert.",
    type: "cat",
    imageUrl:
      "http://3.bp.blogspot.com/-RzIFLsIO-XQ/UFoMLOT66JI/AAAAAAAAVps/JRF98hdA9S8/s640/funny-cat-pictures-016-027.jpg",
  },
  {
    id: 15,
    name: "Coco",
    color: "Red",
    specialSkill: "Burps minimally.",
    type: "cat",
    imageUrl: "https://source.unsplash.com/random/600x400/?Cat",
    //"http://cathumor.net/wp-content/uploads/2013/12/cat-humor-funny-karate-cat-2.jpg",
  },
  {
    id: 16,
    name: "Smokey",
    color: "Brown",
    specialSkill: "Drives at a safe rate of speed in snow or rain.",
    type: "dino",
    imageUrl: "https://source.unsplash.com/random/600x400/?Dinosaur",
    //"https://images.readwrite.com/wp-content/uploads/2018/03/t-rex-dino-quiz-e1490854556549.jpg",
  },
  {
    id: 17,
    name: "Muffin",
    color: "Yellow",
    specialSkill:
      "Does not freak out if you haven???t seen his favorite movie (The Big Lebowski).",
    type: "cat",
    imageUrl: "https://source.unsplash.com/random/600x400/?Cat",
    //"http://www.funnycatsite.com/pictures/Close_Up_Yawn.jpg",
  },
  {
    id: 18,
    name: "Salem",
    color: "Brown",
    specialSkill: "Proficient in air guitar",
    type: "dog",
    imageUrl: "https://source.unsplash.com/random/600x400/?Dog",
    //"https://www.nation.co.ke/image/view/-/4078922/highRes/1742693/-/maxw/600/-/1453yvh/-/DINO.jpg",
  },
  {
    id: 19,
    name: "Callie",
    color: "Blue",
    specialSkill: "Listens attentively to boring stories.",
    type: "dog",
    imageUrl: "https://source.unsplash.com/random/600x400/?Dog",
    //"http://dailynewsdig.com/wp-content/uploads/2014/03/Creative-And-Funny-Dog-Stock-Photography-Pictures-2.jpg",
  },
  {
    id: 20,
    name: "Spooky",
    color: "Black",
    specialSkill: "Uses litter box at appropriate hours.",
    type: "cat",
    imageUrl: "https://source.unsplash.com/random/600x400/?Cat",
    //"http://www.funnycatsite.com/pictures/Lazy_White_Cat.jpg",
  },
  {
    id: 21,
    name: "Miss kitty",
    color: "Red",
    specialSkill: "Owns a Nintendo Power Glove.",
    type: "dino",
    imageUrl: "https://source.unsplash.com/random/600x400/?Dinosaur",
    // "https://img.buzzfeed.com/buzzfeed-static/static/2015-11/2/12/enhanced/webdr15/anigif_enhanced-29802-1446485228-10.gif?crop=250:165;0,0&downsize=715",
  },
  {
    id: 22,
    name: "Snuggles",
    color: "Orange",
    specialSkill: "Is comfortable with jokes about his receding hairline.",
    type: "cat",
    imageUrl: "https://source.unsplash.com/random/600x400/?Cat",
    //"http://funnyanimalphoto.com/wp-content/uploads/2013/08/cat_caught_mouse_thegatewaypundit.jpg",
  },
  {
    id: 23,
    name: "Buddy",
    color: "Red",
    specialSkill: "Enjoys fine wine.",
    type: "dog",
    imageUrl:
      "http://1.bp.blogspot.com/-VjM0CmtN-vU/T7YX-LXa09I/AAAAAAAADA0/Vt1oGWEG0lw/s1600/sheepdog+border+collie+shakes+off+water+funny+picture+photo+pulling+faces+raspberry+tongue.jpg",
  },
  {
    id: 24,
    name: "George",
    color: "Brown",
    specialSkill:
      "Participates in karaoke but does not force others to go out to karaoke.",
    type: "dog",
    imageUrl: "https://source.unsplash.com/random/600x400/?Dog",
    //"http://www.dogbreedplus.com/dog_breeds/images/basset-hound-4.jpg",
  },
  {
    id: 25,
    name: "Salem",
    color: "Red",
    specialSkill: "Knows the words to 4 rap songs.",
    type: "cat",
    imageUrl: "https://source.unsplash.com/random/600x400/?Cat",
    //"http://funbk.s3.amazonaws.com/wp-content/uploads/2016/06/funny-cat-video-which-will-make-you-laugh-louder.jpg",
  },
  {
    id: 26,
    name: "Bubba",
    color: "Yellow",
    specialSkill: "Cleans himself.",
    type: "dog",
    imageUrl:
      "https://www.thetrendywhippet.co.uk/wp-content/uploads/2016/11/IMG_1651-600x400.jpg",
  },
  {
    id: 27,
    name: "Chloe",
    color: "Green",
    specialSkill: "Admits he is wrong",
    type: "dino",
    imageUrl:
      "https://assets.creationmuseum.org/img/pages/1703-DinoDen-TwoCard.jpg",
  },
  {
    id: 28,
    name: "Nala",
    color: "Purple",
    specialSkill: "Dances when he has to.",
    type: "cat",
    imageUrl:
      "https://tailandfur.com/wp-content/uploads/2016/03/40-Scary-and-Funny-Cat-Pictures-8.jpg",
  },
  {
    id: 29,
    name: "Oscar",
    color: "Green",
    specialSkill:
      "Gives hugs with appropriate pressure and for the right length of time.",
    type: "cat",
    imageUrl: "http://img.izismile.com/img/img2/20090219/cats_02.jpg",
  },
  {
    id: 30,
    name: "Lucy",
    color: "Red",
    specialSkill: "Doesn???t get weirded out by the word ???moist.???",
    type: "dino",
    imageUrl: "https://source.unsplash.com/random/600x400/?Dinosaur",
    //"http://lsae2.iypcdn.com/static//modules/uploads/photos/language1/dino-live-22.jpg?119",
  },
];

//  Query Selectors
//const targetInApp = document.querySelector("#app");
const catFilterButton = document.querySelector("#cat");
const dogFilterButton = document.querySelector("#dog");
const dinoFilterButton = document.querySelector("#dino");
const allPetsButton = document.querySelector("#allPets");

const cardsOnDom = (array) => {
  let domString = "";

  for (const pet of array) {
    // let cardFooterColor;
    // if (pet.type === "cat") {
    //   cardFooterColor = "bg-blue";
    // } else if (pet.type === "dog") {
    //   cardFooterColor = "bg-green";
    // } else if (pet.type === "dino") {
    //   cardFooterColor = "bg-yellow";
    // }
    domString += `
  <div class="card">
    <div class="card-header text-center fw-bold">
      ${pet.name}
      </div>
      <div class="card-body">
        <img class="img-fluid"src=${pet.imageUrl} />
        <p class="card-text text-center">${pet.color}</p>
        <p class="card-text">${pet.specialSkill}</p>
        <button class="btn btn-danger btn-sm" id="delete--${pet.id}">Delete</button>
      </div>
      <div class="card-footer text-center bg--${pet.type}">${pet.type}</div>
</div>

`;
  }
  renderToDom("#app", domString);
};

const renderToDom = (divId, htmlToRender) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = htmlToRender;
};

// filter function
const filter = (array, petType) => {
  const petTypeArray = [];
  for (const pet of array) {
    if (pet.type === petType) {
      petTypeArray.push(pet);
    }
  }

  return petTypeArray;
};

// filter all cats
catFilterButton.addEventListener("click", () => {
  const cats = filter(pets, "cat");

  cardsOnDom(cats);
});
// filter all dogs
dogFilterButton.addEventListener("click", () => {
  const dogs = filter(pets, "dog");

  cardsOnDom(dogs);
});
// filter all dinos
dinoFilterButton.addEventListener("click", () => {
  const dinos = filter(pets, "dino");

  cardsOnDom(dinos);
});

allPetsButton.addEventListener("click", () => {
  cardsOnDom(pets);
});

// create new pet object and update display
const makePet = (event) => {
  event.preventDefault();
  const name = document.querySelector("#name");
  const color = document.querySelector("#color");
  const specialSkills = document.querySelector("#specialSkills");
  const type = document.querySelector("#type");
  const image = document.querySelector("#image");

  const newPet = {
    id: pets.length + 1,
    name: name.value,
    color: color.value,
    specialSkill: specialSkills.value,
    type: type.value,
    imageUrl: image.value,
  };

  pets.unshift(newPet);

  cardsOnDom(pets);
  document.querySelector("#addPetForm").reset();
};

// form submit button
const submitBtn = document.querySelector("#form-submit");
submitBtn.addEventListener("click", makePet);

// Delete buttons
const appDiv = document.querySelector("#app");

appDiv.addEventListener("click", (event) => {
  if (event.target.id.includes("delete")) {
    const [, memberId] = event.target.id.split("--");

    const indexMemberOf = pets.findIndex(
      (object) => object.id === Number(memberId)
    );

    pets.splice(indexMemberOf, 1);
  }

  cardsOnDom(pets);
});

//show - hide form button Add Pet
const showHideBtn = document.querySelector("#addPet");

// **  One way to modify styles on elements: ***

// showHideBtn.addEventListener("click", () => {
//   const form = document.querySelector("#formContainer");
//   if (form.style.display === "none") {
//     form.style.display = "block";
//   } else {
//     form.style.display = "none";
//   }
// });

// *** A way to toggle a class on and off on an element ***
showHideBtn.addEventListener("click", () => {
  const toggleShow = document.querySelector(".hideForm");
  toggleShow.classList.toggle("showForm");
});

// SEARCH
// .filter()
const search = (event) => {
  const eventLC = event.target.value.toLowerCase();
  const searchResult = pets.filter(
    (item) =>
      item.type.toLocaleLowerCase().includes(eventLC) ||
      item.color.toLocaleLowerCase().includes(eventLC) ||
      item.name.toLocaleLowerCase().includes(eventLC)
  );

  cardsOnDom(searchResult);
};

// SELECT THE SEARCH INPUT
document.querySelector("#searchInput").addEventListener("keyup", search);

const startApp = () => {
  cardsOnDom(pets);
};

startApp();
