document.getElementById("search-button").addEventListener('click',()=>{
    const query = document.getElementById("search-input").value;
    const apiKey = 'AXmmCaCe_dh1_0MiuvhgDz0lBTYY1cXFz_5jMlNgvOg';
    const url = `https://api.unsplash.com/search/photos?query=${query}&client_id=${apiKey}`;

    fetch(url).then(response=>response.json())
    .then(data=>{
        const images = data.results;
        let gallery = document.getElementById("image-gallery");
        gallery.innerHTML="";   

        images.forEach(image => {
            let imgEle = document.createElement("img")
            imgEle.src=image.urls.small;
            gallery.appendChild(imgEle);

        });
    })
    .catch(error=>{
        console.error('error fetching the images',error)
    });
});