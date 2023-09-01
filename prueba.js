const DEFAULT_USER = {
  heroImage: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/cookies.jpg",
  avatar: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/avatar.png",
  name: "Johnathan Robertson",
  position: "Creative Manager",
  stats: {
    followers: 12,
    following: 52,
    stories: 143,
  },
};

let container;

const createElementWithClass = (tagName, className) => {
  const userCardDiv = document.createElement(tagName);
  userCardDiv.className = className;
  return userCardDiv;
};

const createUserCard = (user) => {
  // Card
  const userCardDiv = createElementWithClass("div", "user-card");

  // Card Container
  const userCardContainerDiv = createElementWithClass("div", "card-container");
  userCardDiv.appendChild(userCardContainerDiv);

  // Card Hero Image
  const heroImage = document.createElement("img");
  heroImage.className = "hero-image";
  heroImage.setAttribute("src", user.heroImage);
  userCardContainerDiv.appendChild(heroImage);

  // heroImage.parentElement = userCardContainerDiv

  // Information
  const informationDiv = document.createElement("div");
  informationDiv.className = "information";
  userCardContainerDiv.appendChild(informationDiv);

  informationDiv.innerHTML = `
        <img src="" alt="avatar" class="avatar" />
        <div class="name"></div>
        <div class="position">Creative Manager</div>
        
        <div class="stats">
        <span class="followers">
            <span class="value">323</span>
            <span class="label">followers</span>
        </span>
        
        <span class="following">
            <span class="value">290</span>
            <span class="label">following</span>
        </span>
        
        <span class="stories">
            <span class="value">22</span>
            <span class="label">stories</span>
        </span>
        
        </div> 
    `;

  return userCardDiv;
};

const addUser = () => {
  console.log("Button clicked!");

  const userCard = createUserCard(DEFAULT_USER);
  console.log(userCard);

  container.appendChild(userCard);
};

function initialize() {
  container = document.getElementById("container");

  console.log(container);

  const addButton = document.querySelector(".btn-add");
  console.log(addButton);

  addButton.addEventListener("click", addUser);
}

window.addEventListener("load", (event) => {
  console.log("page is fully loaded");

  initialize();
});
