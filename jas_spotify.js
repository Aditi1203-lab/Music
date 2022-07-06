console.log("hi");
let songindex=0;
let audioelement= new Audio("Lagdi Lahore Di - Street Dancer 3D.mp3");
let masterplay=document.getElementById('masterplay');
let mybar=document.getElementById('mybar');
let songs=[
    {songname:"Lagdi Lahore Di - Street Dancer 3D",path:"Lagdi Lahore Di - Street Dancer 3D.mp3",
    s_image:"Lagdi-Lahore-Di-From-Street-Dancer-3D--Hindi-2020-20200115004001-500x500.jpg"},
    {songname:"Buzz - Aastha Gill Ft Badshah 320Kbps",path:"Buzz - Aastha Gill Ft Badshah 320Kbps.mp3",
    s_image:"115968-buzz-aastha-gill-n-badshah-hd-720p-mp4-song-300.jpg"},
    {songname:"Bijlee Bijlee - Harrdy Sandhu",path:"Bijlee Bijlee - Harrdy Sandhu.mp3",
    s_image:"146278-bijlee-bijlee-harrdy-sandhu-mp3-song-300.jpg"},
    {songname:"Jugnu - Badshah",path:"Jugnu - Badshah.mp3",
    s_image:"146242-jugnu-badshah-mp3-song-300.jpg"},
    {songname:"Suit Suit (Hindi Medium) 128 Kbps",path:"Suit Suit (Hindi Medium) 128 Kbps.mp3",
    s_image:"Lagdi-Lahore-Di-From-Street-Dancer-3D--Hindi-2020-20200115004001-500x500.jpg"},
    {songname:"High Rated Gabru (Nawabzaade) 128 Kbps",path:"High Rated Gabru (Nawabzaade) 128 Kbps.mp3",
    s_image:"Lagdi-Lahore-Di-From-Street-Dancer-3D--Hindi-2020-20200115004001-500x500.jpg"},
    {songname:"Najaa - Sooryavanshi",path:"Najaa - Sooryavanshi.mp3",
    s_image:"Lagdi-Lahore-Di-From-Street-Dancer-3D--Hindi-2020-20200115004001-500x500.jpg"},
]

// audioelement.play();
masterplay.addEventListener('click',()=>{
    if(audioelement.paused || audioelement.currentTime==0)
    {
        audioelement.play();
        masterplay.classList.remove('fa-play');
        masterplay.classList.add('fa-pause');

    }
    else{
        audioelement.pause();
       
        masterplay.classList.remove('fa-pause');
        masterplay.classList.add('fa-play');
    }
})
masterplay.addEventListener('click',()=>{
    if(masterplay.classList.contains('fa-pause')){
         audioelement.pause();
         masterplay.classList.remove('fa-pause');
         masterplay.classList.add('fa-play');
    }
})
audioelement.addEventListener('timeupdate',()=>{
    console.log('timeupdate');
    let progress=parseInt((audioelement.currentTime/audioelement.duration)*100);
   mybar.value=progress;
});
mybar.addEventListener('change',()=>{
    audioelement.currentTime=(mybar.value*audioelement.duration)/100;
});
const makeAllplay=()=>{
   
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
        element.classList.remove('fa-pause');
        element.classList.add('fa-play');
    })
}
Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllplay();
        index=e.target.id;
        e.target.classList.remove('fa-play');
        e.target.classList.add('fa-pause');
        audioelement.src=`${index}.mp3`;
        audioelement.currentTime=0;
        audioelement.play();
        masterplay.classList.remove('fa-play');
        masterplay.classList.add('fa-pause');
           })
});


