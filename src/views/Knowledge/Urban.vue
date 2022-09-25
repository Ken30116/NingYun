<script setup>
import "../../javascript/header-nav.js";
import "../../javascript/menu-onclick.js";
import "../../javascript/music-knowledge.js";
</script>
<template>
  <article>
    <div class="knowledge">
      <div class="main" id="topic1">
        <div class="title-content">
          <div class="title-box">
            <h1>知識庫(2)</h1>
            <h3>都市篇</h3>
            <div class="breadcrumb">
              <RouterLink class="breadcrumb-item" to="/">首頁</RouterLink>
              <RouterLink class="breadcrumb-item" to="/layout"
                >園區導覽</RouterLink
              >
              <RouterLink class="breadcrumb-item" to="/knowledge/urban"
                >知識庫 (2)</RouterLink
              >
            </div>
          </div>
        </div>
        <div class="main_img">
          <img src="../../img/urban-music-knowledge/noise.jpg" alt="noise" />
        </div>
        <div class="main-box">
          <div class="main-text">
            <h2>都市噪音</h2>
            <p>
              對噪聲的感受因各人的感覺、習慣等不同；對於某人喜歡的聲音，可能對於另一個人是噪聲；噪聲是一個主觀的感受。長期的噪音可以影響人的身心健康。為減低噪音對四周環境和人類的影響，主要噪音控制方式對噪音源、噪聲的傳播路徑及接收者三者進行隔離或防護，將噪音的能量作阻絕或吸收。
            </p>
            <span>Urban Noise</span>
          </div>
          <div class="main_imgwater">
            <div class="main_imgwater_top">
              <img
                src="../../img/urban-music-knowledge/airport.png"
                alt="airport"
              />
            </div>
            <div class="main_imgwater_hidden">
              <img
                class="musicimg1"
                src="../../img/urban-music-knowledge/music.png"
                alt="music"
              />
            </div>
            <div class="music-box">
              <p>播放"音樂"</p>
              <button class="play" id="play-pause-1"></button>
              <audio id="song-1" loop>
                <source src="../../music/noise.mp3" type="audio/mp3" />
              </audio>
            </div>
          </div>
        </div>
        <div class="main_imgbottom">
          <img
            src="../../img/urban-music-knowledge/construction.png"
            alt="construction"
          />
        </div>
      </div>
      <div class="main" id="topic2">
        <div class="main_img">
          <img src="../../img/urban-music-knowledge/street.jpg" alt="street" />
        </div>
        <div class="main_imgbottom">
          <img src="../../img/urban-music-knowledge/dance.png" alt="dance" />
        </div>
        <div class="main-box">
          <div class="main-text">
            <h2>都市音樂</h2>
            <p>
              Urban都市音樂，又稱為Urban
              Contemporary，是二十世紀八十年代和九十年代基於R&B/Soul出現的新詞。Urban是一種非常流暢和華麗的音樂風格，同時他浪漫的情歌調調和quiet
              storm
              一樣非常迎合大眾的口味，Urban能融合快歌和舞曲，在高科技感和入耳的旋律中保有靈魂似的唱腔。
            </p>
            <span>Urban Music</span>
          </div>
          <div class="main_imgwater">
            <div class="main_imgwater_top">
              <img src="../../img/urban-music-knowledge/Note.png" alt="Note" />
            </div>
            <div class="main_imgwater_hidden">
              <img
                class="musicimg2"
                src="../../img/urban-music-knowledge/music.png"
                alt="music"
              />
            </div>
            <div class="music-box">
              <p>播放"音樂"</p>
              <button class="play" id="play-pause-2"></button>
              <audio id="song-2" loop>
                <source src="../../music/citymusic.mp3" type="audio/mp3" />
              </audio>
            </div>
          </div>
        </div>
      </div>
      <div class="topic" id="topic3">
        <div class="topic-img">
          <img
            src="../../img/urban-music-knowledge/sunslectricity.jpg"
            alt="sun slectricity"
          />
          <img
            src="../../img/urban-music-knowledge/windelectricity.jpg"
            alt="wind electricity"
          />
        </div>
        <div class="music-box-3">
          <p>播放"音樂"</p>
          <button class="play" id="play-pause-3-1"></button>
          <audio id="song-3-1" loop>
            <source src="../../music/sun.mp3" type="audio/mp3" />
          </audio>
          <button class="play" id="play-pause-3-2"></button>
          <audio id="song-3-2" loop>
            <source src="../../music/strong_wind1.mp3" type="audio/mp3" />
          </audio>
        </div>
        <div class="topic-text">
          <h2>乾淨能源</h2>
          <p>
            清潔能源、潔淨能源或綠色能源是指不排放污染物的能源，如水力發電、風力發電、太陽能、生物能（沼氣）、地熱能、海潮能、海水溫差發電等。離岸風力發電（Offshore
            wind
            power），又稱離岸風力能源，係於海上建設風力發電廠，通常設置地點位於大陸架，利用風能進行發電。一般而言，海上風力資源較陸上豐富，且風向較為穩定，使得離岸風力發電較陸上風力發電在同樣時間內能提供更多的電力，且設施遠離民眾居住地，各界對此類鄰避設施的反彈也較小。
          </p>
          <span>Clean Energy</span>
        </div>
      </div>
    </div>
  </article>
</template>

<style lang="scss" scoped>
@keyframes musicshow {
  from {
    margin-left: -380%;
  }
  to {
    margin-left: 0;
  }
}
.main {
  position: relative;
  overflow: hidden;
}
.title-content {
  max-width: 1180px;
  width: 100%;
  margin: 0 auto;
  position: absolute;
  transform: translateX(-50%);
  top: 4.5rem;
  left: 50%;
}
.title-box {
  width: 90%;
  margin: 0 auto;
  padding: 0.5rem;
}
.title-box h1 {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  color: #000000e1;
  font-family: "華康墨字體";
  font-size: 1.4rem;
  text-align: center;
  margin: 0 auto;
}
.title-box h1::after {
  content: "";
  width: 2rem;
  height: 0.1rem;
  background-color: #000000e1;
  margin-left: 1rem;
  opacity: 0.2;
}
.title-box h1::before {
  content: "";
  width: 2rem;
  height: 0.1rem;
  background-color: #000000e1;
  margin-right: 1rem;
  opacity: 0.2;
}
.title-box h3 {
  color: #000000e1;
  font-family: "華康墨字體";
  font-size: 1rem;
  text-align: center;
  margin: 0 auto 1rem;
}
.breadcrumb {
  width: 100%;
  display: flex;
  margin-top: 0.5rem;
}
.breadcrumb-item {
  color: #0000007a;
  font-family: "華康中圓體";
  font-size: 0.6rem;
  opacity: 0.6;
}
.breadcrumb-item + .breadcrumb-item::before {
  content: " / ";
}
.main:nth-child(even) .main-box {
  flex-direction: row-reverse;
}
.main_img {
  width: 100%;
  display: flex;
  margin-left: -200%;
  position: relative;
  z-index: -1;
}
.main_img img {
  width: 600%;
}
.main_imgbottom {
  width: 100%;
  display: flex;
}
.main_imgbottom img {
  width: 100%;
  margin-top: -12.3%;
  position: relative;
  z-index: 2;
  vertical-align: top;
}
.main-box {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: flex-start;
  margin-top: -200%;
}
.main-text {
  width: 80vw;
  padding: 0.6rem;
  background-color: rgba(0, 0, 0, 0.7);
  border-top: 0.5rem solid teal;
  border-radius: 1.6rem;
  position: relative;
  z-index: 2;
}
.main-text h2 {
  color: #fff;
  font-family: "華康墨字體";
  font-size: 1.4rem;
  text-align: center;
  margin-bottom: 0.6rem;
}
.main-text p {
  color: #ffffffc2;
  font-family: "華康中圓體";
  font-size: 0.7rem;
  text-align: justify;
  line-height: 1.2rem;
  letter-spacing: 0.05rem;
}
.main-text span {
  color: #fff;
  font-family: "華康墨字體";
  font-size: 1.4rem;
  opacity: 0.1;
  position: absolute;
  top: 8%;
  right: 5%;
}
.main_imgwater {
  width: 8rem;
  height: 8rem;
  background-color: rgba(255, 255, 255, 0.4);
  border: 0.6rem solid teal;
  border-radius: 8.75rem 0 8.75rem 8.75rem;
  position: relative;
  transform: rotate(-45deg);
}
.main_imgwater_hidden {
  width: 100%;
  height: 100%;
  border-radius: 8.75rem 0 8.75rem 8.75rem;
  position: relative;
  left: 0;
  top: 0;
  overflow: hidden;
}
.main:nth-of-type(1) .main-box .main_imgwater {
  margin-left: auto;
}
.main:nth-of-type(2) .main-box {
  margin-top: -35rem;
}
.main:nth-of-type(2) .main-box .main_imgwater {
  margin-right: auto;
}
.main:nth-of-type(2) .main_imgbottom {
  position: absolute;
  bottom: 0;
  width: 150%;
  margin-left: -5%;
}
.musicimg1 {
  width: 500%;
  margin-left: -380%;
}
.musicimg2 {
  width: 500%;
  margin-left: -380%;
}
.main_imgwater_top img {
  width: 150%;
  position: absolute;
  transform: rotate(35deg);
  top: -20%;
  left: -30%;
  z-index: 2;
}
.music-box {
  text-align: center;
  position: absolute;
  transform: rotate(45deg);
  top: 50%;
  left: 35%;
}
.music-box p {
  color: teal;
  font-family: "華康墨字體";
  font-size: 0.8rem;
  text-shadow: 0.02rem 0.02rem 0 rgba(255, 255, 255, 0.5);
}
.music-box-3 {
  width: 100vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  text-align: center;
  position: absolute;
  transform: translateX(-50%);
  top: 5%;
  left: 50%;
}
.music-box-3 p {
  width: 100%;
  color: teal;
  font-family: "華康墨字體";
  font-size: 1rem;
  margin-bottom: 1rem;
  text-shadow: 0.02rem 0.02rem 0 rgba(255, 255, 255, 0.8);
}
#play-pause-1 {
  background: 0 0;
  border: none;
  position: relative;
  cursor: pointer;
}
#play-pause-1::before {
  content: "";
  width: 3rem;
  height: 3rem;
  display: inline-block;
  border-radius: 50%;
  box-shadow: 0.1rem 0.1rem 0.1rem rgba(255, 255, 255, 0.7);
}
#play-pause-2 {
  background: 0 0;
  border: none;
  position: relative;
  cursor: pointer;
}
#play-pause-2::before {
  content: "";
  width: 3rem;
  height: 3rem;
  display: inline-block;
  border-radius: 50%;
  box-shadow: 0.1rem 0.1rem 0.1rem rgba(255, 255, 255, 0.7);
}
#play-pause-3-1 {
  background: 0 0;
  border: none;
  position: relative;
  cursor: pointer;
}
#play-pause-3-1::before {
  content: "";
  width: 3rem;
  height: 3rem;
  display: inline-block;
  border-radius: 50%;
  box-shadow: 0.1rem 0.1rem 0.1rem rgba(255, 255, 255, 0.7);
}
#play-pause-3-2 {
  background: 0 0;
  border: none;
  position: relative;
  cursor: pointer;
}
#play-pause-3-2::before {
  content: "";
  width: 3rem;
  height: 3rem;
  display: inline-block;
  border-radius: 50%;
  box-shadow: 0.1rem 0.1rem 0.1rem rgba(255, 255, 255, 0.7);
}
.play::after {
  content: "";
  width: 1.2rem;
  height: 1.2rem;
  clip-path: polygon(0 0, 0 100%, 100% 50%);
  background-color: #fff;
  opacity: 0.7;
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 55%;
}
.pause::after {
  content: "";
  width: 0.3rem;
  height: 1.2rem;
  border-right: 0.3rem solid #fff;
  border-left: 0.3rem solid #fff;
  background-color: transparent;
  opacity: 0.7;
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
}
#play-pause-1:hover::before {
  box-shadow: 0.1rem 0.1rem 0.2rem #00c234;
  opacity: 1;
}
#play-pause-2:hover::before {
  box-shadow: 0.1rem 0.1rem 0.2rem #00c234;
  opacity: 1;
}
#play-pause-3-1:hover::before {
  box-shadow: 0.1rem 0.1rem 0.2rem #00c234;
  opacity: 1;
}
#play-pause-3-2:hover::before {
  box-shadow: 0.1rem 0.1rem 0.2rem #00c234;
  opacity: 1;
}
.play:hover::after {
  width: 1.6rem;
  height: 1.6rem;
  opacity: 1;
}
.pause:hover::after {
  width: 0.4rem;
  height: 1.6rem;
  border-right: 0.4rem solid #fff;
  border-left: 0.4rem solid #fff;
  opacity: 1;
}
.topic {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  position: relative;
  overflow: hidden;
}
.topic-img {
  display: flex;
  position: relative;
  overflow: hidden;
}
.topic-img img {
  width: 250%;
  margin-left: -99%;
}
.topic-text {
  width: 80vw;
  margin-top: -25rem;
  padding: 0.6rem;
  background-color: rgba(0, 0, 0, 0.7);
  border-top: 0.5rem solid teal;
  border-radius: 1.6rem;
  position: relative;
}
.topic-text h2 {
  color: #fff;
  font-family: "華康墨字體";
  font-size: 1.4rem;
  text-align: center;
  margin-bottom: 0.6rem;
}
.topic-text p {
  color: #ffffffc2;
  font-family: "華康中圓體";
  font-size: 0.7rem;
  text-align: justify;
  line-height: 1.2rem;
  letter-spacing: 0.05rem;
}
.topic-text span {
  color: #fff;
  font-family: "華康墨字體";
  font-size: 1.4rem;
  opacity: 0.1;
  position: absolute;
  top: 8%;
  right: 5%;
}
@media all and (min-width: 414px) {
  html {
    font-size: 22px;
  }
  .title-box h1::after {
    width: 3rem;
  }
  .title-box h1::before {
    width: 3rem;
  }
  .main_img img {
    width: 450%;
  }
  .main-text {
    width: 90vw;
  }
  .main-box {
    margin-top: -150%;
  }
  .main_imgwater {
    width: 12rem;
    height: 12rem;
    border: 0.8rem solid teal;
  }
  .main:nth-of-type(2) .main-box {
    margin-top: -35.3rem;
  }
  .main:nth-of-type(2) .main-box .main-text {
    margin-bottom: 6rem;
  }
  .topic {
    margin-top: 0;
  }
  .topic-img img {
    width: 130%;
    margin-left: -39%;
  }
  .topic-text {
    width: 90vw;
    margin-top: -16rem;
  }
}
@media all and (min-width: 640px) {
  .title-box h1::after {
    width: 5rem;
  }
  .title-box h1::before {
    width: 5rem;
  }
  .main_img {
    margin-left: -65%;
  }
  .main_img img {
    width: 280%;
  }
  .main-box {
    margin-top: -27.3rem;
  }
  .main-text {
    width: 23rem;
    margin-bottom: 3rem;
    z-index: 0;
  }
  .main:nth-of-type(2) .main-box {
    margin-top: -33.6rem;
  }
  .main:nth-of-type(2) .main-box .main-text {
    margin-bottom: 8rem;
  }
  .main:nth-of-type(2) .main_imgbottom {
    position: static;
    width: 100%;
    margin-left: 0;
  }
  .main_imgwater img:first-child {
    top: -50%;
  }
  .topic-text {
    width: 23rem;
    margin-top: -20rem;
  }
}
@media all and (min-width: 768px) {
  .title-box::before {
    height: 4rem;
    top: -1rem;
  }
  .title-box::after {
    width: 4rem;
    left: -1rem;
  }
  .main_img {
    margin-left: -15%;
  }
  .main_img img {
    width: 180%;
  }
  .main-text p {
    font-size: 0.6rem;
  }
  .main-box {
    flex-wrap: nowrap;
    margin-top: -16rem;
  }
  .main-text {
    width: 20rem;
    margin-bottom: 0;
  }
  .main_imgwater {
    width: 14rem;
    height: 14rem;
    border: 1rem solid teal;
  }
  .music-box {
    top: 50%;
    left: 50%;
  }
  .music-box p {
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }
  .main:nth-of-type(1) .main-box .main_imgwater {
    margin-left: 0;
  }
  .main:nth-of-type(2) .main-box {
    margin-top: -16rem;
  }
  .main:nth-of-type(2) .main-box .main-text {
    margin-bottom: 0rem;
  }
  .main:nth-of-type(2) .main-box .main_imgwater {
    margin-right: 0;
  }
  .topic-img img {
    width: 50%;
    margin-left: 0;
  }
  .topic-text {
    margin-top: -11rem;
  }
  .topic-text p {
    font-size: 0.6rem;
  }
}
@media all and (min-width: 1024px) {
  html {
    font-size: 24px;
  }
  .title-content {
    top: 5rem;
  }
  .topic-text {
    margin-top: -14rem;
  }
}
@media all and (min-width: 1200px) {
  html {
    font-size: 27px;
  }
  .title-content {
    top: 7rem;
  }
  .main_img img {
    width: 200%;
  }
}
@media all and (min-width: 1536px) {
  html {
    font-size: 30px;
  }
  .main_img {
    margin-left: 0;
  }
  .main_img img {
    width: 140%;
  }
  .main-text {
    width: 20rem;
    margin-bottom: 10%;
  }
  .main:nth-of-type(2) .main_imgbottom {
    width: 70%;
    margin-left: 10%;
  }
  .topic-text {
    margin-top: -18rem;
  }
}
</style>
