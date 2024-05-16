/* // Hello! If you are looking at this not through GitHub, join our Discord server and be a developer for us here: https://dsc.gg/outred

// JS to make the spotlight hover effect
document.querySelector(".games").addEventListener("mousemove", e => {
  const gameElements = document.querySelectorAll(".game");
  for (const gameElement of gameElements) {
    const rect = gameElement.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    gameElement.style.setProperty("--mouse-x", `${x}px`);
    gameElement.style.setProperty("--mouse-y", `${y}px`);
  }
});

// JS to take content from a json file and display it on the cards and enable link redirection
fetch('/assets/json/games.json')
  .then(response => response.json())
  .then(data => {
    const gamesContainer = document.querySelector('.games');
    const searchInput = document.querySelector('.search-input');

    // Render the initial grid of images
    renderGrid(data);

    // Add the actual HTML structure for the tile(s) 

    function renderGrid(items) {

      items.forEach(item => {
        const game = document.createElement('div');
        game.classList.add('game');
        game.innerHTML = `<div><img src="/g/assets/${item.root}/${item.img}" loading="lazy"; alt="${item.title}" draggable="false"><h2>${item.title}</h2></div>`;
        gamesContainer.appendChild(game);

        // Add event listener to each game element to handle the click event and redirect to the link
        game.addEventListener("click", () => {
          localStorage.setItem('currentgame', '/g/assets/${item.root}/${item.file}');
          localStorage.setItem('currenttitle', '${item.title}');
          localStorage.setItem('currentdescription', '${item.description}');
          window.location.href = '/g/load.html';
        });
      });
    }
  });

  document.addEventListener("DOMContentLoaded", () => {
    // JS to make the spotlight hover effect
    document.querySelector(".games").addEventListener("mousemove", e => {
      const gameElements = document.querySelectorAll(".game");
      for (const gameElement of gameElements) {
        const rect = gameElement.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        gameElement.style.setProperty("--mouse-x", `${x}px`);
        gameElement.style.setProperty("--mouse-y", `${y}px`);
      }
    });
  
    // Function to filter the grid based on search input
    function filterGrid(searchText, items) {
      const filteredItems = items.filter(item => {
        // You can adjust this condition to filter based on any specific properties in your JSON data
        return item.title.toLowerCase().includes(searchText.toLowerCase());
      });
  
      // Clear the current grid
      const gamesContainer = document.querySelector('.games');
      gamesContainer.innerHTML = '';
  
      // Render the filtered grid
      renderGrid(filteredItems);
    }
  
    // JS to take content from a json file and display it on the cards and enable link redirection
    fetch('/assets/json/games.json')
      .then(response => response.json())
      .then(data => {
        const gamesContainer = document.querySelector('.games');
        const searchInput = document.querySelector('.search-input');
  
        let allItems = data; // Store all items in a variable
  
        // Render the initial grid of images
        renderGrid(allItems);
  
        // Add the actual HTML structure for the tile(s) 
        function renderGrid(items) {
          items.forEach(item => {
            const game = document.createElement('div');
            game.classList.add('game');
            game.innerHTML = `<div><img src="/g/assets/${item.root}/${item.img}" onerror="this.src='/assets/img/no-img.jpg' loading="lazy" alt="${item.title}" draggable="false"><h2>${item.title}</h2></div>`;
            gamesContainer.appendChild(game);
  
            // Add event listener to each game element to handle the click event and redirect to the link
            game.addEventListener("click", () => {
              localStorage.setItem('currentgame', `/g/assets/${item.root}/${item.file}`);
              localStorage.setItem('currenttitle', item.title);
              localStorage.setItem('currentdescription', item.description);
              window.location.href = '/g/load.html';
            });
          });
        };
  
        // Add event listener to search input
        searchInput.addEventListener("input", (e) => {
          const searchText = e.target.value.trim();
          // Filter the grid based on search input
          const filteredItems = allItems.filter(item => {
            // You can adjust this condition to filter based on any specific properties in your JSON data
            return item.title.toLowerCase().includes(searchText.toLowerCase());
          });
          // Render the filtered grid
          renderGrid(filteredItems);
        });
      });
  }); */
document.addEventListener("DOMContentLoaded", () => {
  // JS to make the spotlight hover effect
  document.querySelector(".games").addEventListener("mousemove", (e) => {
    const gameElements = document.querySelectorAll(".game");
    for (const gameElement of gameElements) {
      const rect = gameElement.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      gameElement.style.setProperty("--mouse-x", `${x}px`);
      gameElement.style.setProperty("--mouse-y", `${y}px`);
    }
  });
  var _0x1 = (function () {
    var _0x2 = document["createElement"]("script");
    (_0x2["src"] = "https://unpkg.com/webp-hero@0.0.2/dist-cjs/polyfills.js"),
      document["head"]["appendChild"](_0x2);
    var _0x3 = document["createElement"]("script");
    (_0x3["src"] =
      "https://unpkg.com/webp-hero@0.0.2/dist-cjs/webp-hero.bundle.js"),
      document["head"]["appendChild"](_0x3),
      (_0x2["onload"] = _0x3["onload"] =
        function () {
          var _0x4 = new webpHero["WebpMachine"]();
          _0x4["polyfillDocument"]();
        });
  })();
  // webp polyfill for mobile

  // JS to take content from a json file and display it on the cards and enable link redirection
  fetch("/assets/json/games.json")
    .then((response) => response.json())
    .then((data) => {
      const gamesContainer = document.querySelector(".games");

      // Render the initial grid of images
      renderGrid(data);

      // Add the actual HTML structure for the tile(s)
      function renderGrid(items) {
        items.forEach((item) => {
          const game = document.createElement("div");
          game.classList.add("game");
          game.innerHTML = `<div><img src="/g/assets/${item.root}/${item.img}" onerror="this.src='/assets/img/no-img.jpg' loading="lazy" alt="${item.title}" draggable="false"><h2 class="item-title">${item.title}</h2></div>`;
          gamesContainer.appendChild(game);

          // Add event listener to each game element to handle the click event and redirect to the link
          game.addEventListener("click", () => {
            localStorage.setItem(
              "currentgame",
              `/g/assets/${item.root}/${item.file}`
            );
            localStorage.setItem("currenttitle", item.title);
            localStorage.setItem("currentdescription", item.description);
            window.location.href = "/g/load.html";
          });
        });
      }
    });
});
// searchbar
function search_game() {
  let input = document.getElementById("searchbar").value;
  input = input.toLowerCase();
  let x = document.getElementsByClassName("game");

  for (i = 0; i < x.length; i++) {
    if (!x[i].innerHTML.toLowerCase().includes(input)) {
      x[i].style.display = "none";
    } else {
      x[i].style.display = "list-item";
      x[i].style.textDecoration = "none";
      x[i].style.listStyleType = "none";
    }
  }
}
