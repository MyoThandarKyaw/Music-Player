window.onload = () => {
   const music_container = document.querySelector(".music");
  const cover = document.getElementById("song-image");
  const song_title_el = document.getElementById("song-title");
  const song_artist_el = document.getElementById("song-artist");
  const song_next_up_el = document.getElementById("song-next-up");
  const play_btn = document.getElementById("play-btn");
  const play_btn_icon = document.getElementById("play-icon");
  const prev_btn = document.getElementById("prev-btn");
  const next_btn = document.getElementById("next-btn");

  const audio_player = document.getElementById("music-player");

  let current_song_index;
  let next_song_index;

  let songs = [
    {
      title: 'I Know I Love You',
      artist: 'TXT',
      song_path: 'music/I Know I Love You.mp3',
      img_path: 'images/m10.jpg'
    },
    {
      title: 'I Like Me Better',
      artist: 'Lauv',
      song_path: 'music/I Like Me Better.mp3',
      img_path: 'images/m5.jpg'
    },
    {
      title: 'Ghost',
      artist: 'Justin Bieber',
      song_path: 'music/Ghost.mp3',
      img_path: 'images/m4.jpg'
     },
     {
      title: 'Polaroid Love',
      artist: 'Enhypen',
      song_path: 'music/Polaroid Love.mp3',
      img_path: 'images/m9.jpg'
     },
     {
      title: 'Perfect',
      artist: 'Ed Sheeran',
      song_path: 'music/Perfect.mp3',
      img_path: 'images/m6.jpg'
    }
  ]


   play_btn.addEventListener('click', togglePlaySong);
   next_btn.addEventListener('click', () => {
      changeSong();
   })
   prev_btn.addEventListener('click', () => changeSong(false));
   InitPlayer();

function InitPlayer() {
  current_song_index = 0;
  next_song_index = current_song_index + 1;
  updatePlayer();
}
function updatePlayer() {
   let song = songs[current_song_index];
  
  song_title_el.innerText = song.title;
  song_artist_el.innerText = song.artist;

  song_next_up_el.innerText = songs[next_song_index].title + " By " + songs[next_song_index].artist;
  cover.src = song.img_path;
  audio_player.src = song.song_path;

}
   function togglePlaySong() {
  if (audio_player.paused) {
     audio_player.play();
     music_container.classList.add("play");
     play_btn_icon.classList.remove('fa-play');
     play_btn_icon.classList.add('fa-pause');
  } else {
     audio_player.pause();
     music_container.classList.remove("play");
    play_btn_icon.classList.add('fa-play');
    play_btn_icon.classList.remove('fa-pause');
  }
}
   
function changeSong(next = true) {
  if (next) {
    current_song_index++;
    next_song_index = current_song_index + 1;

    if (current_song_index > songs.length - 1) {
      current_song_index = 0;
      next_song_index = current_song_index + 1;
    }
    if (next_song_index > songs.length - 1) {
      next_song_index = 0;
    }
  } else {
    current_song_index--;
    next_song_index = current_song_index + 1;

    if (current_song_index < 0) {
      current_song_index = songs.length - 1;
      next_song_index = 0;
    }
  }
  updatePlayer();
  togglePlaySong();
}
}
