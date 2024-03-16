let navElement = document.querySelectorAll(".navList ul li");
navElement.forEach(function (el) {
    el.onmouseenter = function () {
        navElement.forEach(function (el) {
            el.classList.remove("home");
        });
        el.classList.add("home")
    }
    el.onmouseleave = function () {
        el.classList.remove("home")
        navElement[0].classList.add("home");
    }
});

let bars = document.querySelector(".bars label");
let list = document.querySelector(".navList");
let bar2 = document.querySelector(".bars .bar2")

bars.addEventListener("click", function () {
    list.classList.toggle("nList")
    bar2.classList.toggle("b2")
});

let input = document.querySelectorAll("input");
input.forEach((el) => {
    el.onmouseenter = function () {
        el.style.outline = "none";
        el.style.boxShadow = "3px 3px 4px #523901"
    }
})

let select = document.querySelector("select");
select.onmouseenter = function () {
    select.style.outline = "none";
    select.style.boxShadow = "3px 3px 4px #523901"
}

let area = document.querySelector("textarea");
area.onmouseenter = function () {
    area.style.outline = "none";
    area.style.boxShadow = "3px 3px 4px #523901"
}

// const url = 'https://mydoctory.net/betech/order.php';
// const data = {
//     name: 'John Doe',
//     phone: '1234567890',
//     email: 'john@example.com',
//     nameproject: 'Project Name',
//     descriptionproject: 'Project Description'
// };
//
// fetch(url, {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(data)
// })
//     .then(response => console.log(response.json()));
//     .then(responseData => {
//     if (responseData.accept) {
//         console.log('Data stored successfully');
//     } else if (responseData.error === 'server') {
//         console.log('Error server: Server stopped');
//     } else if (responseData.error === 'data not complete') {
//         console.log('Error: Data not complete or contains errors');
//     } else {
//         console.log('Unexpected response:', responseData);
//     }
//     })
//     .catch(error => {
//         console.error('Request error:', error);
// });

// Handle form submission
document.getElementById('projectData').addEventListener('submit', function(event) {
  event.preventDefault();

  // Get form data
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var appName = document.getElementById("category").value;
    var appDescription = document.getElementById("description").value;

  // Create user object
  var user = {
    name: name,
    email: email,
    phone: phone,
    nameproject: appName,
    descriptionproject: appDescription

  };

  // Make API request
  axios.post('https://mydoctory.net/betech/order.php', user)
    .then(function(response) {
      // Registration successful
      console.log('Registration successful:', response.data);
      alert('Registration successful!');
    })
    .catch(function(error) {
      // Registration failed
      console.log('Registration failed:', error);
      alert('Registration failed!' + error.response.data.error);
    });
});

