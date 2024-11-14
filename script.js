console.log("welcome to spotify")

//Intialize the Variables
let songIndex =0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar =document.getElementById('myprogressBar');
let gif = document.getElementById('gif')
let songItems = Array.from(document.getElementsByClassName('songItem'));


let songs =[
    {songName: "Love Me Like You Do", filePath: "songs/1.mp3", coverPath:"covers/2.jpeg"},
    {songName: "Salam-e-Ishq", filePath: "songs/1.mp3", coverPath:"covers/2.jpeg"},
    {songName: "Salam-e-Ishq", filePath: "songs/1.mp3", coverPath:"covers/1.jpeg"},
    {songName: "Salam-e-Ishq", filePath: "songs/1.mp3", coverPath:"covers/1.jpeg"},
    {songName: "Salam-e-Ishq", filePath: "songs/1.mp3", coverPath:"covers/1.jpeg"},
    {songName: "Salam-e-Ishq", filePath: "songs/1.mp3", coverPath:"covers/1.jpeg"},
    {songName: "Salam-e-Ishq", filePath: "songs/1.mp3", coverPath:"covers/1.jpeg"}
]

songItems.forEach((element, i)=> {
    
    element.getElementsByTagName('img')[0].src = songs[i].coverPath;
    element.getElementsByClassName('songName')[0].innerText = songs[i].songName;
})


// audioElement.play();

//Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity=0;
    }
})


//Listen to Events
audioElement.addEventListener('timeupdate', ()=>{

    //Update Seekbar
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value =progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime= myProgressBar.value* audioElement.duration/100;
})

const makeAllPlays = ()=> {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })

}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e) =>{
        console.log(e.target);
        makeAllPlays();
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src='songs/1.mp3';
        audioElement.currentTime=0;
        audioElement.play();
    })
})