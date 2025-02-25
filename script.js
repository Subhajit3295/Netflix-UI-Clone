const url = "https://repo-tech2edge.github.io/tasks/sample.json";
const heroImg = document.getElementById('main-img');
const seriesTitle = document.getElementById('series-title');
const swiperWrapper = document.getElementById("swiperWrapper");





fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        heroImg.setAttribute('src', data.series.img);
        seriesTitle.innerText = (data.series.title).toUpperCase();
        data.episodes.forEach(episode => {
            let slide = document.createElement("div");
            slide.classList.add("swiper-slide");

            slide.innerHTML = `
            <div class="img_box position-relative">
            <div class="play-interface">
                <i class='bx bx-play-circle'></i>
            </div>
                <img src="${episode.img}" alt="${episode.title}" id="episode-img">
                <p class="episode-number">Episode ${episode.id}</p>
            </div>
        `;

            swiperWrapper.appendChild(slide);
        });
    })
    .catch(error => {
        console.log(error)
    })





