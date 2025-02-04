document.querySelector("#fetch-user").addEventListener("click", async function(evt){
    evt.preventDefault();
    
    try {
        const response = await fetch("https://randomuser.me/api/");
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        
        const data = await response.json();
        const user = data.results[0];
        
        console.log(data);
        // assign email and username
        document.querySelector("#email").textContent = user.email;
        document.querySelector("#userName").textContent = 
            `${user.name.title} ${user.name.first} ${user.name.last}`;
        
        // assign image container
        const imageContainer = document.querySelector("#image-container");
        // initialize image data
        imageContainer.innerHTML = '';
        
        // create image element
        const imgElement = document.createElement("img");
        imgElement.src = user.picture.large;
        imgElement.alt = "User profile picture";
        imgElement.style.width = "200px"; // default size 200px
        
        // add image container
        imageContainer.appendChild(imgElement);
        
    } catch (error) {
        console.error("Error fetching data: ", error);
        document.querySelector("#email").textContent = "Could not fetch the data. Please try again later";
        document.querySelector("#image-container").innerHTML = '';
        document.querySelector("#userName").textContent = '';
    }
});