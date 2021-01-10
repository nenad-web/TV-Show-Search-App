const form = document.querySelector('#form')
const div = document.querySelector('#imageDiv')

form.addEventListener('submit', async function(e) {
    e.preventDefault();
    try {
        const searchTerm = form.elements.query.value;
        const config = {params: {q: searchTerm}}
        const res = await axios.get(`http://api.tvmaze.com/search/shows/`, config);
        // console.log(res)
        createImages(res.data);
        form.elements.query.value = '';
    }
    catch(err) {
        alert('Error URL!', err)
    }
})

const createImages = (arrayOfImgs) => {
    div.innerHTML = '';
    for (const result of arrayOfImgs) {
        if(result.show.image){
            const img = document.createElement('img');
            img.src = result.show.image.medium;
            img.style.padding = '20px';
            div.append(img);
        }
    }   
}

