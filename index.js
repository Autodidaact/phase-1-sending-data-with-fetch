// Add your code here
function submitData(userName, userEmail){

    const configurationObject = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
            name: userName,
            email: userEmail,
        }),
      
    }  
      return fetch("http://localhost:3000/users", configurationObject)
        .then(function (response) {
          return response.json();
        })
        .then(function (object) {
           let p = document.createElement("p");
           p.textContent = object.id;
           document.querySelector("body").appendChild(p);
          console.log(object);
        })
        .catch(function (error) {
            let h = document.createElement("h3");
            h.textContent = error.message;
            document.querySelector("body").appendChild(h);
           
        });
}
submitData("Abu", "Abu@qee.com");
