

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const player = $(".main");
const heading = $(".name__song h3");
const single = $(".name__single h4")
const cdThumb = $(".photo");
const audio = $("#audio");
const playBtn = $(".play-pause");
const progress = $("#progress");
const prevBtn = $(".preview");
const nextBtn = $(".next");
const playlist = $(".playlist");

const app = {
  currentIndex: 0,
  isPlaying: false,
  config: {},
  songs: [
    {
      name: "Đường Tôi Chở Em Về (Lofi)",
      singer: "buitruonglinh x Freak D",
      path: "https://stream.nixcdn.com/NhacCuaTui1017/DuongToiChoEmVeLofiVersion-buitruonglinhFreakD-7025960.mp3?st=gHgltfe37DwS1xDkoeuRUw&e=1665418306",
      image: "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/c/8/3/2/c83247bc75a132fdd93982c10b2cc152.jpg"
    },
    {
      name: "3107-1",
      singer: "W/n x Duongg x Nâu",
      path: "https://stream.nixcdn.com/NhacCuaTui996/3107-WnDuonggNau-6099150.mp3?st=vL4Ce_WKpVpBwXwoOtlJSQ&e=1665418721",
      image: "https://lyricvn.com/wp-content/uploads/2020/03/61b35411029c6156973232016738c1b7.jpg"
    },
    {
      name: "3107-2",
      singer: "W/n x Duongg x Nâu",
      path: "https://stream.nixcdn.com/NhacCuaTui1011/31072-DuonggNauWn-6937818.mp3?st=GR5gmDC3S2QwXPcKD7fZrg&e=1665419556&download=true",
      image: "https://avatar-ex-swe.nixcdn.com/song/2021/06/15/5/1/b/4/1623768316831_640.jpg"
    },
    {
      name: "3107-3",
      singer: "Nâu, Duongg, Titie",
      path: "https://stream.nixcdn.com/NhacCuaTui2027/31073-WnDuongGNauTitie-7058449.mp3?st=3TcwJA_C5A9K5fTVLQu9RA&e=1665418911",
      image: "https://avatar-ex-swe.nixcdn.com/song/2021/08/02/5/0/1/7/1627860417460_640.jpg"
    },
    {
      name: "3107-4",
      singer: "W/n, ERIK, Nâu",
      path: "https://stream.nixcdn.com/NhacCuaTui2026/31074-WnERIKNau-7663728.mp3?st=YesI_y9SvK9opQDBP0syGA&e=1665419827&download=true",
      image: "https://cdns-images.dzcdn.net/images/cover/1b6bce058de157f89a0a6eae2ff5c40c/264x264.jpg"
    },
    {
      name: "Chẳng Thể Tìm Được Em",
      singer: "PhucXp ft. Freak D",
      path: "https://stream.nixcdn.com/Believe_Audio17/ChangTheTimDuocEmBalladVersion-PhucXP-6887501.mp3?st=UcFxkmgSa4BBSE6FzXv5gw&e=1665419221",
      image: "https://i1.sndcdn.com/artworks-yukyFaBjTlbbBrn6-yjfdgg-t500x500.jpg"
    },
    {
      name: "Như Anh Đã Thấy Em",
      singer: "PhucXp ft. Freak D",
      path: "https://vnno-zn-5-tf-mp3-s1-zmp3.zmdcdn.me/61667d29d3683a366379/1425106264644905741?authen=exp=1665932702~acl=/61667d29d3683a366379/*~hmac=f3ed799a1c8977ed4f9637203a9b3fbe&fs=MTY2NTmUsIC1OTkwMjg3MHx3ZWJWNnwxMDYxNTM4NjQzfDEdUngNTUdUngNi45NA&filename=Nhu-Anh-Da-Thay-Em-PhucXP-Freak-D.mp3",
      image: "https://i.ytimg.com/vi/cPbp2iFaZRo/maxresdefault.jpg"
    },
    {
      name: "Ánh sao và bầu trời",
      singer: "Dick, Tofu, PC",
      path: "https://stream.nixcdn.com/NhacCuaTui1021/AnhSaoVaBauTroi-TRI-7085073.mp3?st=03rOBZW2B-L7lQ0TthMM6Q&e=1665409360&download=true",
      image: "https://i1.sndcdn.com/artworks-FYlZeEdyC6FDDiYs-H8KP0A-t500x500.jpg"
    },
    {
      name: "Ghé Qua",
      singer: "T.R.I x Cá",
      path: "https://stream.nixcdn.com/Believe_Audio19/GheQua-TaynguyenSoundTofuPC-7031399.mp3?st=NrWx0-Irgy7OioGq3LjWdg&e=1665418589",
      image: "https://i1.sndcdn.com/artworks-WFjcb9cbxTntQHor-hfUxYw-t500x500.jpg"
    },
    {
      name: "Sài Gòn hôm nay mưa",
      singer: " JSOL ft. Hoàng Duyên",
      path: "https://stream.nixcdn.com/NhacCuaTui1016/SaiGonHomNayMua-JSOLHoangDuyen-7026537.mp3?st=7U1jI6HWjFM-uCSeyht1Rg&e=1665409294&download=true",
      image:"https://i.ytimg.com/vi/WbVbcOYJFJk/0.jpg",
    },
    {
      name: "Chuyện Đôi Ta",
      singer: "Emcee L ft Muộii",
      path:"https://stream.nixcdn.com/NhacCuaTui1024/ChuyenDoiTa-EmceeLDaLAB-7120974.mp3?st=2UKoPjtiLQOoNnDl_i6D8g&e=1665404196&download=true",
      image: "https://avatar-ex-swe.nixcdn.com/song/2021/11/25/8/7/5/6/1637809824703_500.jpg"
    },
    {
      name: "Mãi Mãi Không Phải Anh ",
      singer: "Thanh Bình",
      path: "http://leecoffee.net/wp-content/uploads/2021/12/Mai-Mai-Khong-Phai-Anh-Thanh-Binh.mp3",
      image: "https://data.chiasenhac.com/data/cover/125/124616.jpg"
    },
    {
      name: "Waiting For You",
      singer: " MONO, Onionn",
      path: "https://stream.nixcdn.com/NhacCuaTui2026/WaitingForYou-MONOOnionn-7733882.mp3?st=GKOGLb2KyhHLRpH-dmQtdw&e=1665403971&download=true",
      image:
        "https://avatar-ex-swe.nixcdn.com/song/2022/08/10/4/8/b/1/1660104031203_500.jpg"
    },
    {
      name: "Chờ Đợi Có Đáng Sợ",
      singer: "Andiez",
      path:"https://stream.nixcdn.com/Believe_Audio78/ChoDoiCoDangSo-Andiez-7641306.mp3?st=JbbfMtR8Y_EEEiNz4BiCZg&e=1665469824&download=true",
      image:"https://i.scdn.co/image/ab67616d0000b27302af2be6e2dd46a1d1e9ad55"
    },
    {
      name: "Những Gì Anh Nói",
      singer: "Bozitt",
      path: "https://stream.nixcdn.com/NhacCuaTui1013/NhungGiAnhNoiLofiVersion-BozittBozitt-6986121.mp3?st=281M1shGFVI_SB1YkJ6mrg&e=1665410334",
      image:"https://i.ytimg.com/vi/5BH6hl9mQcg/0.jpg"
    },
    {
        name: "Cô Ấy Nói",
        singer: "Ngô Anh Đạt x Freak D",
        path:"https://stream.nixcdn.com/NhacCuaTui1022/CoAyNoi-NgoAnhDat-7092492.mp3?st=3rN9xQIAGIPVhMt72tBsmg&e=1665410386",
        image: "https://i.scdn.co/image/ab67616d0000b273999576545059a3f63bc0b358"
      },
      {
        name: "Ôm em lần cuối - lofi",
        singer: "Nit ft. Sing x Freak D",
        path:"https://stream.nixcdn.com/NhacCuaTui1023/OmEmLanCuoiLofiVersion-FreakDNITSing-7099594.mp3?st=3sdNeQMwUVHtbjqlKJi6rQ&e=1665410513",
        image: "https://i.scdn.co/image/ab67616d0000b2737dc7c048785d6ab347328274"
      },
      {
        name: "Bước Qua Nhau",
        singer: "Vũ",
        path:"https://stream.nixcdn.com/Warner_Audio86/BuocQuaNhau-Vu-7847964.mp3?st=02MW0qikRmfV6ZMAierjoQ&e=1665410812",
        image: "https://avatar-ex-swe.nixcdn.com/song/share/2021/11/19/b/e/5/0/1637317185220.jpg"
      },
      {
        name: "Bước Qua Mùa Cô Đơn",
        singer: "Vũ",
        path:"https://stream.nixcdn.com/Warner_Audio86/BuocQuaMuaCoDon-Vu-7847965.mp3?st=7bWSXaSY6mM0cFyBiHugUg&e=1665410914",
        image: "https://avatar-ex-swe.nixcdn.com/song/2020/12/11/4/0/f/e/1607643612541_640.jpg"
      },
  ],
  setConfig: function (key, value) {
    this.config[key] = value;
  },
  render: function () {
    const htmls = this.songs.map((song, index) => {
      return `
                        <div class="song ${
                          index === this.currentIndex ? "active" : ""
                        }" data-index="${index}">
                            <div class="thumb"
                                style="background-image: url('${song.image}')">
                            </div>
                            <div class="body">
                                <h3 class="title">${song.name}</h3>
                                <p class="author">${song.singer}</p>
                            </div>
                            <div class="box" > 
                                <div class="column"></div>
                                <div class="column"></div>
                                <div class="column"></div>
                                <div class="column"></div>
                                <div class="column"></div>
                                <div class="column"></div>
                            </div>
                            
                        </div>
                    `;
    });
    playlist.innerHTML = htmls.join("");
  },
  defineProperties: function () {
    Object.defineProperty(this, "currentSong", {
      get: function () {
        return this.songs[this.currentIndex];
      }
    });
  },
  handleEvents: function () {
    const _this = this;

    // Xử lý khi click play
    // Handle when click play
    playBtn.onclick = function () {
      if (_this.isPlaying) {
        audio.pause();
        
      } else {
        audio.play();
        
      }
    };

    // Khi song được play
    // When the song is played
    audio.onplay = function () {
      var flash = $$('.column')
      _this.isPlaying = true;
      player.classList.add("playing");
      for (let i = 0; i < flash.length; i++) {
        flash[i].classList.add("animations")
      }
    };

    // Khi song bị pause
    // When the song is pause
    audio.onpause = function () {
      var flash = $$('.column')
      _this.isPlaying = false;
      player.classList.remove("playing");
      for (let i = 0; i < flash.length; i++) {
        flash[i].classList.remove("animations")
      }
    };

    // Khi tiến độ bài hát thay đổi
    // When the song progress changes
    audio.ontimeupdate = function () {
      if (audio.duration) {
        const progressPercent = Math.floor(
          (audio.currentTime / audio.duration) * 100
        );
        progress.value = progressPercent;
      }
    };

    // Xử lý khi tua song
    // Handling when seek
    progress.onchange = function (e) {
      const seekTime = (audio.duration / 100) * e.target.value;
      audio.currentTime = seekTime;
    };

    // Khi next song
    // When next song
    nextBtn.onclick = function () {
        _this.nextSong();
      
      audio.play();
      _this.render();
      _this.scrollToActiveSong();
    };

    // Khi prev song
    // When prev song
    prevBtn.onclick = function () {
        _this.prevSong();
      
      audio.play();
      _this.render();
      _this.scrollToActiveSong();
    };

    // Xử lý next song khi audio ended
    // Handle next song when audio ended
    audio.onended = function () {
      if (_this.isRepeat) {
        audio.play();
      } else {
        nextBtn.click();
      }
    };

    // Lắng nghe hành vi click vào playlist
    // Listen to playlist clicks
    playlist.onclick = function (e) {
      const songNode = e.target.closest(".song:not(.active)");

      if (songNode || e.target.closest(".option")) {
        // Xử lý khi click vào song
        // Handle when clicking on the song
        if (songNode) {
          _this.currentIndex = Number(songNode.dataset.index);
          _this.loadCurrentSong();
          _this.render();
          audio.play();
        }

        // Xử lý khi click vào song option
        // Handle when clicking on the song option
        if (e.target.closest(".option")) {
        }
      }
    };
  },
  scrollToActiveSong: function () {
    setTimeout(() => {
      $(".song.active").scrollIntoView({
        behavior: "smooth",
        block: "nearest"
      });
    }, 300);
  },
  loadCurrentSong: function () {
    heading.textContent = this.currentSong.name;
    single.textContent = this.currentSong.singer;
    cdThumb.style.backgroundImage = `url('${this.currentSong.image}')`;
    audio.src = this.currentSong.path;
  },
  
  nextSong: function () {
    this.currentIndex++;
    if (this.currentIndex >= this.songs.length) {
      this.currentIndex = 0;
    }
    this.loadCurrentSong();
  },
  prevSong: function () {
    this.currentIndex--;
    if (this.currentIndex < 0) {
      this.currentIndex = this.songs.length - 1;
    }
    this.loadCurrentSong();
  },
  playRandomSong: function () {
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * this.songs.length);
    } while (newIndex === this.currentIndex);

    this.currentIndex = newIndex;
    this.loadCurrentSong();
  },
  start: function () {

    // Định nghĩa các thuộc tính cho object
    // Defines properties for the object
    this.defineProperties();

    // Lắng nghe / xử lý các sự kiện (DOM events)
    // Listening / handling events (DOM events)
    this.handleEvents();

    // Tải thông tin bài hát đầu tiên vào UI khi chạy ứng dụng
    // Load the first song information into the UI when running the app
    this.loadCurrentSong();

    // Render playlist
    this.render();
  }
};

app.start();


// set Volume bar
let volume = document.querySelector("#volume-control");
volume.addEventListener("change", function(e) {
audio.volume = e.currentTarget.value / 100;
})


// thời gian phát audio
function getTime(){
  var time = audio.currentTime;


  var timeSecons = Math.floor(time / 1);
  
    var min = Math.floor(timeSecons / 60);
    (min >= 1) ? timeSecons = timeSecons - (min*60) : min = '0';
    (timeSecons < 1) ? sec='0' : void 0;
    if(min < 10) {
      min = "0" + min;
  }
    if(timeSecons < 10) {
      timeSecons = "0" + timeSecons;
  }
  //gán vào class củTime
  $(".curTime").innerHTML = min + ":" + timeSecons;
}
setInterval("getTime()",1000);



// tổng thời gian file mp3
audio.onloadedmetadata = function() {
  var time = audio.duration;


  var timeSecons = Math.floor(time / 1);
  
    var min = Math.floor(timeSecons / 60);
    (min >= 1) ? timeSecons = timeSecons - (min*60) : min = '0';
    (timeSecons < 1) ? sec='0' : void 0;
    if(min < 10) {
      min = "0" + min;
  }
    if(timeSecons < 10) {
      timeSecons = "0" + timeSecons;
  }
  //gán vào class sumeTime
  $(".sumTime").innerHTML = min + ":" + timeSecons;
};
