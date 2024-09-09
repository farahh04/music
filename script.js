const music = new Audio('aud/14.mp4');
// music.play();
const songs = [
    { id: 1, songName: `On My Way <br><div class="subtitle">Allan Walker</div>`, poster: "img/1.jpg" },
    { id: 2, songName: `Jhuti thi Kasmein Teri <br><div class="subtitle">Darshan Raval</div>`, poster: "img/2.jpg" },
    { id: 3, songName: `Kamleya <br><div class="subtitle">Arjit Singh</div>`, poster: "img/3.jpg" },
    { id: 4, songName: `Khamosiyan <br><div class="subtitle">Rashmi</div>`, poster: "img/4.jpg" },
    { id: 5, songName: `Dilbar <br><div class="subtitle">Nora Fatehi</div>`, poster: "img/5.jpg" },
    { id: 6, songName: `Lehnga <br><div class="subtitle">Dilljit Dosanjh</div>`, poster: "img/6.jpg" },
    { id: 7, songName: `Softly <br><div class="subtitle">Karan Aujla</div>`, poster: "img/7.jpg" },
    { id: 8, songName: `Pehli dfa <br><div class="subtitle">Atif Aslam</div>`, poster: "img/8.jpg" },
    { id: 9, songName: `Rabba Mehr Kari <br><div class="subtitle">Darshan Raval</div>`, poster: "img/9.jpg" },
    { id: 10, songName: `Mujhy peeny do <br><div class="subtitle">Darshan Raval</div>`, poster: "img/10.jpg" },
    { id: 11, songName: `Dil ko Karrar aya <br><div class="subtitle">Neha Kakkar</div>`, poster: "img/11.jpg" },
    { id: 12, songName: `Tu Jo Mileya <br><div class="subtitle">Juss</div>`, poster: "img/12.jpg" },
    { id: 13, songName: `Tu hi Haqeeqat<br><div class="subtitle">Arjit Singh</div>`, poster: "img/13.jpg" },
    { id: 14, songName: `Hawa Hawa <br><div class="subtitle">Anil Kapoor</div>`, poster: "img/14.jpg" },
    { id: 15, songName: `Talab hai tu <br><div class="subtitle">Arjit Singh</div>`, poster: "img/15.jpg" },
    { id: 16, songName: `Lut gaye <br><div class="subtitle">Jubin Nuteyal</div>`, poster: "img/16.jpg" },
    { id: 17, songName: `Banjara <br><div class="subtitle">Jubin Nuteyal</div>`, poster: "img/17.jpg" },
    { id: 18, songName: `Tauba Tauba <br><div class="subtitle">Vicky Kahushal</div>`, poster: "img/18.jpg" },
    { id: 19, songName: `One Sided Love <br><div class="subtitle">Justin Bieber</div>`, poster: "img/19.jpg" }
];


let pop_song_left = document.getElementById('pop_song_left');
let pop_song_right = document.getElementById('pop_song_right');
let pop_song = document.getElementsByClassName('pop_song')[0];

pop_song_right.addEventListener('click', ()=>{ 
pop_song.scrollLeft += 350;
});
pop_song_left.addEventListener('click', ()=>{
    pop_song.scrollLeft -= 350;
});
let pop_art_left = document.getElementById('pop_art_left');
let  pop_art_right = document.getElementById('pop_art_right');
let  Artists_bx = document.getElementsByClassName(' Artists_bx')[0];
pop_art_right.addEventListener('click', ()=>{
    Artists_bx.scrollLeft += 350;
});
pop_art_left.addEventListener('click', ()=>{
    Artists_bx.scrollLeft -= 350;
});

let masterPlay = document.getElementById('masterPlay');

masterPlay.addEventListener('click', ()=>{
    if (music.paused || music.currentTime <=0) {
        music.play();
        wave.classList.add('active1');
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
    } else {
       music.pause(); 
       wave.classList.remove('active1');
       masterPlay.classList.add('bi-play-fill');
       masterPlay.classList.remove('bi-pause-fill');
    }
});
const makeAllBackground = () =>{
    Array.from(document.getElementsByClassName('song_item')).forEach((el) =>{
        el.style.background =  'rgb(105, 105 , 105, .0)';
    });
}
const makeAllPlays = () =>{
    Array.from(document.getElementsByClassName('playlistplay')).forEach((el) =>{
    el.classList.add('bi-play-circle-fill');
        el.classList.remove('bi-pause-circle-fill');
    });
}

let index=0;
 let poster_master_play = document.getElementById('poster_master_play');

 let title = document.getElementById('title');

Array.from(document.getElementsByClassName(' playlistplay')).forEach((e)=>{
    e.addEventListener('click',(el)=>{
        index = el.target.id;
        // console.log (index);
        music.src = `aud/${index}.mp4`;
        poster_master_play.src =`img/${index}.jpg`;
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');

        let songTitles =  songs.filter((els) =>{
            return els.id == index;
        });
        songTitles.forEach(elss =>{
            let {songName} = elss;
title.innerHTML = songName;
        });
        makeAllBackground();
        Array.from(document.getElementsByClassName('song_item'))[index-1].style.background = "rgb(105, 105 , 105, .1)";  
        makeAllPlays();
        el.target.classList.remove('bi-play-circle-fill');
        el.target.classList.add('bi-pause-circle-fill');
        wave.classList.add('active1');
    });
});
 let current_start = document.getElementById('current_start');
 let current_end = document.getElementById('current_end');
 let seek = document.getElementById('seek');
 let bar2 = document.getElementById('bar2');
 let dot = document.getElementsByClassName('dot')[0];


 music.addEventListener('timeupdate',()=>{
    let music_curr = music.currentTime;
    let music_durr = music.duration;
let min1 = Math.floor(music_durr / 60);
let sec1 = Math.floor(music_durr % 60);
    // console.log(min1);
    if(sec1 < 10){
        sec1 = `0${sec1}`;
    }
current_end.innerText = `${min1}:${sec1}`;
let min2 = Math.floor(music_curr / 60);
let sec2 = Math.floor(music_curr % 60);
if(sec2 < 10){
    sec2 = `0${sec2}`;
}
current_start.innerText = `${min2}:${sec2}`;

let progressBar = parseInt((music_curr / music_durr)* 100);
seek.value =  progressBar ;
// console.log(seek.value);
let seekBar = seek.value ;
bar2.style.width = `${seekBar}%`;
dot.style.left = `${seekBar}%`;



 });
 seek.addEventListener('change',()=>{
    music.currentTime = seek.value * music.duration / 100;
 });
music.addEventListener('ended',()=>{
    masterPlay.classList.add('bi-pause-fill');
    wave.classList.add('active2');
    index ++;
    music.play();
    music.src = `aud/${index}.mp4`;
    poster_master_play.src =`img/${index}.jpg`;

})

 document.addEventListener('DOMContentLoaded', () => {
    let vol_icon = document.getElementById('vol_icon');
    let vol_input = document.querySelector('.vol_input');  // Select the input with the class 'vol_input'
    let vol_bar = document.getElementsByClassName('vol_bar')[0];
    let vol_dot = document.getElementById('vol_dot');

    // Log each element to see which one is missing
    console.log('vol_icon:', vol_icon);
    console.log('vol_input:', vol_input);
    console.log('vol_bar:', vol_bar);
    console.log('vol_dot:', vol_dot);

    if (!vol_icon || !vol_input || !vol_bar || !vol_dot) {
        console.error("One or more elements are missing from the DOM!");
        return;
    }

    vol_input.addEventListener('change', () => {
        if (vol_input.value == 0) {
            vol_icon.classList.remove('bi-volume-up-fill');
            vol_icon.classList.remove('bi-volume-down-fill');
            vol_icon.classList.add('bi-volume-off-fill');
        } else if (vol_input.value > 0 && vol_input.value <= 50) {
            vol_icon.classList.remove('bi-volume-up-fill');
            vol_icon.classList.add('bi-volume-down-fill');
            vol_icon.classList.remove('bi-volume-off-fill');
        } else if (vol_input.value > 50) {
            vol_icon.classList.add('bi-volume-up-fill');
            vol_icon.classList.remove('bi-volume-down-fill');
            vol_icon.classList.remove('bi-volume-off-fill');
        }

        let vol_a = vol_input.value;
        vol_bar.style.width = `${vol_a}%`;
        vol_dot.style.left = `${vol_a}%`;
        music.volume = vol_a / 100;  // Make sure 'music' is properly defined
    });
});
let back = document.getElementById('back');
let next = document.getElementById('next');
back.addEventListener('click',()=>{
    index -= 1;
if(index < 1){
    index = Array.from(document.getElementsByClassName('song_item')).length;
}

    music.src = `aud/${index}.mp4`;
    poster_master_play.src =`img/${index}.jpg`;
    music.play();
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');

    let songTitles =  songs.filter((els) =>{
        return els.id == index;
    });
    songTitles.forEach(elss =>{
        let {songName} = elss;
title.innerHTML = songName;
    });
    makeAllBackground();
    Array.from(document.getElementsByClassName('song_item'))[index-1].style.background = "rgb(105, 105 , 105, .1)";  
    makeAllPlays();
    el.target.classList.remove('bi-play-circle-fill');
    el.target.classList.add('bi-pause-circle-fill');
    wave.classList.add('active1');
});
next.addEventListener('click',()=>{
    index ++;
if(index > Array.from(document.getElementsByClassName('song_item')).length){
    index = 1;;
}

    music.src = `aud/${index}.mp4`;
    poster_master_play.src =`img/${index}.jpg`;
    music.play();
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');

    let songTitles =  songs.filter((els) =>{
        return els.id == index;
    });
    songTitles.forEach(elss =>{
        let {songName} = elss;
title.innerHTML = songName;
    });
    makeAllBackground();
    Array.from(document.getElementsByClassName('song_item'))[index-1].style.background = "rgb(105, 105 , 105, .1)";  
    makeAllPlays();
    el.target.classList.remove('bi-play-circle-fill');
    el.target.classList.add('bi-pause-circle-fill');
    wave.classList.add('active1');
})


