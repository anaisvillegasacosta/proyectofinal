const respuesta = axios.get("https://leonardoapi.onrender.com/songs")
    .then((res) => {

        res.data.songs.map((song) => {

            let div = document.createElement("li")
            div.classList.add('flex', 'items-center')
            div.innerHTML = `
            <img src="${song.path.front}" alt="" class="h-16">
             
            <h2>${song.title}<h2>
            <p>${song.author}</p>
            
            `
            div.addEventListener("click", () => {
                console.log(song.title)

                document.getElementById('current-song-audio').setAttribute('src', song.path.audio)
                document.getElementById('current-song-img').setAttribute('src', song.path.front)
                // document.getElementById("current-song-title").innerHTML = song.title
                document.getElementById("current-song-author").innerHTML = song.author
                document.getElementById("current-song-album").innerHTML = song.album
            })

            document.getElementById('Track-list').appendChild(div)

        })
    })