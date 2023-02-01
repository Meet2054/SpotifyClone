console.log("Welcome to Spotify.");

let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let masterSongName = document.getElementById('masterSongName');

let gif = document.getElementById('gif');
let songItem = Array.from(document.getElementsByClassName('songItem'));


let songs = [
    { songName: "Let me Love You", filePath: "song/1.mp3", coverPath: "covers/1.jpg" },
    { songName: "Love is in the Air", filePath: "song/2.mp3", coverPath: "covers/2.jpg" },
    { songName: "Shape of You", filePath: "song/3.mp3", coverPath: "covers/3.jpg" },
    { songName: "BlackBear", filePath: "song/4.mp3", coverPath: "covers/4.jpg" },
    { songName: "Care-Less", filePath: "song/5.mp3", coverPath: "covers/5.jpg" },
    { songName: "Give me a Kiss", filePath: "song/6.mp3", coverPath: "covers/6.jpg" },
    { songName: "Pretty Girl", filePath: "song/7.mp3", coverPath: "covers/7.jpg" },
    { songName: "PayPhone", filePath: "song/8.mp3", coverPath: "covers/8.jpg" },
    { songName: "Fuck You", filePath: "song/9.mp3", coverPath: "covers/9.jpg" },
    { songName: "Salame-e-Ishq", filePath: "song/10.mp3", coverPath: "covers/10.jpg" },
    { songName: "Zingaat - Sairat", filePath: "song/11.mp3", coverPath: "covers/11.jpg" },
    { songName: "Yaari Hai", filePath: "song/12.mp3", coverPath: "covers/12.jpg" },
    { songName: "She Move it Like", filePath: "song/13.mp3", coverPath: "covers/13.jpg" },
    { songName: "Saami Saami Pushpa The Rise ", filePath: "song/14.mp3", coverPath: "covers/14.jpg" },
    { songName: "Preaty Girl", filePath: "song/15.mp3", coverPath: "covers/15.jpg" },





]


songItem.forEach((element, i)=>{   
    // console.log(element,i);  

    element.getElementByTagName('img')[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName
})

//Handle play pause the event 
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;


    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;


    }
}) 

//Listen to event
audioElement.addEventListener('timeupdate', () => {
    // console.log('timeupdate');
    // Update seekbar
    let progress = parseInt((audioElement.currentTime/audioElement.duration)*100)
    // console.log(progress);
    myProgressBar.value = progress;
})
// audioElement.play();


myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{ 
    Array.from(document.getElementsByClassName('songItemsPlay')).forEach((element)=>{
         element.classList.remove('fa-circle-pause');
         element.classList.add('fa-circle-play');

    })    
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
     element.addEventListener('click', (e)=>{
        console.log(e.target);
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');

     })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex >=14){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex <=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
})

 