<script setup>
import "../../javascript/header-nav.js";
import "../../javascript/menu-onclick.js";
import "../../javascript/theme_video.js";
</script>
<template>
  <div class="container">
    <div class="c-video">
      <video class="video" src="../../video/terra-theme.mp4"></video>
      <div class="controls">
        <div class="green-bar">
          <div class="green-juice"></div>
        </div>
        <div class="buttons">
          <button class="play" id="play-pause"></button>
          <div class="play-text">
            <span>Play</span>
            <p>注意"有聲音"</p>
          </div>
        </div>
      </div>
      <div class="video-text">
        <h1>土精靈<span>主題區</span></h1>
        <p>透水鋪面設計-增加透水鋪面，打造會呼吸土地。</p>
        <p>噪音偵測系統-智慧化系統偵測機動車輛噪音。</p>
        <p>自然聲音設計-打造石子鋪面。</p>
      </div>
    </div>
  </div>
  <article>
    <div class="theme">
      <div class="main">
        <div class="breadcrumb">
          <RouterLink class="breadcrumb-item" to="/">首頁</RouterLink>
          <RouterLink class="breadcrumb-item" to="/layout">園區導覽</RouterLink>
          <RouterLink class="breadcrumb-item" to="/layout/theme-terra"
            >土精靈主題區</RouterLink
          >
        </div>
        <div class="main-box">
          <h2>土精靈主題區</h2>
          <div class="text-box">
            <div class="text-box-left">
              <p>意涵</p>
              <p>【樸實】</p>
            </div>
            <div class="text-box-right">
              <p>
                隨著音樂文化的遞進時間軸，完成當地環境音製程，推廣音樂與生活的各種可能性，從音樂知識傳遞與遊客體驗開始，彷彿生命開始運行於音樂的教學體驗，印染的自然知識與學習，最後人跟音樂的創意或更多想像，相信未來都可以在這座園區內被實現與落實！
              </p>
            </div>
          </div>
          <div class="text-box">
            <div class="text-box-left">
              <p>意涵</p>
              <p>【簡約)】</p>
            </div>
            <div class="text-box-right">
              <p>
                「簡約」並非捨棄細節，壓縮美感。它是過濾不必要的繁複，回歸設計美學的本質，構思不過度浮誇或耗費，並反映對人本質的尊重；「簡約」就是少了浮面，多了意義。
              </p>
            </div>
          </div>
          <div class="text-box">
            <div class="text-box-left">
              <p>主題</p>
              <p>【都市噪音】</p>
            </div>
            <div class="text-box-right">
              <p>
                噪音，又稱噪聲，從物理角度上看，是聲波的頻率、強弱變化無規律、雜亂無章的聲音。絕大部分噪音都是准隨機波，如果符合數學上的隨機過程，那就屬於白雜訊。噪音是令人生理或心理上覺得不舒服，一般讓聽到它的人不悅、不舒服、不想要的，或帶來煩惱的、不受歡迎的聲音，影響人的交談或思考、工作學習休息的聲音。一般人們用分貝（dB）來量噪聲的強度，用信噪比（S/N）來衡量噪音對有用信號的影響程度。噪音的可能來源有飛機、汽車、工廠、建築工地、日常生活等。噪音是環境污染之一，各國政府一般有相應的法律、規定管制噪音。
              </p>
            </div>
          </div>
          <div class="text-box">
            <div class="text-box-left">
              <p>主題</p>
              <p>【都市熱島-鋪面篇】</p>
            </div>
            <div class="text-box-right">
              <p>
                建築物與鋪面主要之影響係來自都市表面材質之高吸熱力、街道幾何形式之熱吸收增加。建物因結構物形狀不同、表面材質不同，導致建物溫度高於周邊區域。鋪面表面材質比熱、反照率、熱容量的不同，導致地表溫度也有所差異。
              </p>
            </div>
          </div>
        </div>
        <div class="main_img">
          <img
            src="../../img/terra-theme/terra-introduction.png"
            alt="terra-introduction"
          />
        </div>
        <div class="main_imgbox">
          <img src="../../img/terra-theme/permeable.png" alt="permeable" />
          <div class="main_imgbox-text">
            <h3>透水鋪面設計</h3>
            <p>增加透水鋪面，打造會呼吸土地。</p>
          </div>
        </div>
      </div>
    </div>

    <div class="first-topic">
      <div class="first-topic-content">
        <div class="first-topic-box">
          <div class="first-topic-text">
            <h2>噪音偵測系統</h2>
            <p>
              主要偵測機動車輛噪音，自動偵測以及車牌辨識，智慧化系統減少人力支配，有效率抓改管車輛，嚇阻道路噪音造成居民健康。除此之外，增加多元功能，如測速儀、空氣偵測儀等，讓設備效能最大化。
            </p>
            <span>IoT智慧系統</span>
          </div>
          <div class="first-topic-img">
            <img src="../../img/terra-theme/noise1.jpg" alt="noise1" />
          </div>
          <div class="first-topic-imgbox">
            <img src="../../img/terra-theme/noise.png" alt="noise" />
            <span class="imgbox-text">麥克風/攝影機</span>
            <span class="imgbox-text">太陽能板</span>
            <span class="imgbox-text">車牌辨識</span>
            <span class="imgbox-text">電源</span>
            <span class="imgbox-text">遠端控制</span>
            <span class="imgbox-text">超標觸發</span>
          </div>
        </div>
      </div>
    </div>

    <div class="second-topic">
      <div class="second-topic-content">
        <div class="second-topic-box">
          <div class="second-topic-text">
            <h2>自然聲音設計</h2>
            <p>
              打造石子鋪面，當腳踩踏時，石子間摩擦發吱吱作響聲，專注體驗觸覺、聽覺感官，掩飾機動車噪音的影響。創造音樂-建設音樂景觀設施，與民眾互動。水流、噴泉-設計水體相關設施，發出水聲音，掩蓋噪音。植栽-種植易受風晃動的植栽，發出聲音，例如柳樹、竹子。人聚集場所-人聚集聊天，散布人聲，產生安全感。
            </p>
            <p>
              打造石子鋪面，當腳踩踏時，石子間摩擦發吱吱作響聲，專注體驗觸覺、聽覺感官，掩飾機動車噪音的影響。創造音樂-建設音樂景觀設施，與民眾互動。水流、噴泉-設計水體相關設施，發出水聲音，掩蓋噪音。植栽-種植易受風晃動的植栽，發出聲音，例如柳樹、竹子。人聚集場所-人聚集聊天，散布人聲，產生安全感。
            </p>
            <p>
              打造石子鋪面，當腳踩踏時，石子間摩擦發吱吱作響聲，專注體驗觸覺、聽覺感官，掩飾機動車噪音的影響。創造音樂-建設音樂景觀設施，與民眾互動。水流、噴泉-設計水體相關設施，發出水聲音，掩蓋噪音。植栽-種植易受風晃動的植栽，發出聲音，例如柳樹、竹子。人聚集場所-人聚集聊天，散布人聲，產生安全感。
            </p>
          </div>
          <div class="second-topic-img">
            <div class="second-topic-img-box">
              <div class="second-topic-img-left">
                <img src="../../img/terra-theme/img1.jpg" alt="img1" />
              </div>
              <div class="second-topic-img-right">
                <img src="../../img/terra-theme/img2.jpg" alt="img2" />
                <img src="../../img/terra-theme/img3.jpg" alt="img3" />
              </div>
            </div>
            <div class="second-topic-img-box">
              <div class="second-topic-img-left">
                <img src="../../img/terra-theme/img4.jpg" alt="img4" />
              </div>
              <div class="second-topic-img-right">
                <img src="../../img/terra-theme/img5.jpg" alt="img5" />
                <img src="../../img/terra-theme/img6.jpg" alt="img6" />
              </div>
            </div>
            <div class="second-topic-img-box">
              <div class="second-topic-img-left">
                <img src="../../img/terra-theme/img7.jpg" alt="img7" />
              </div>
              <div class="second-topic-img-right">
                <img src="../../img/terra-theme/img8.jpg" alt="img8" />
                <img src="../../img/terra-theme/img9.jpg" alt="img9" />
              </div>
            </div>
          </div>
          <span>打造自然聲音設計，與自然環境融合一體，體驗聲景享受。</span>
        </div>
      </div>
    </div>
  </article>
</template>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: center;
}
.c-video {
  width: 100%;
  position: relative;
  overflow: hidden;
}
.video {
  width: 200%;
  margin-left: -50%;
}
.controls {
  width: 100%;
  display: block;
  background-color: rgba(0, 128, 128, 0.5);
  position: absolute;
  transform: translateY(100%) translateY(-5px);
  bottom: 0;
  transition: transform 0.5s;
  z-index: 2;
}
.c-video:hover .controls {
  transform: translateY(0);
}
.green-bar {
  width: 100%;
  height: 0.3rem;
  background-color: #000;
}
.green-juice {
  height: 0.3rem;
  background-color: teal;
}
.buttons {
  display: flex;
  justify-content: center;
  padding: 0.3rem;
}
#play-pause {
  background: 0 0;
  border: none;
  position: relative;
  cursor: pointer;
}
#play-pause::before {
  content: "";
  width: 1.5rem;
  height: 1.5rem;
  display: inline-block;
  border-radius: 50%;
  box-shadow: 0.1rem 0.1rem 0.1rem rgba(255, 255, 255, 0.7);
}
.play::after {
  content: "";
  width: 0.6rem;
  height: 0.6rem;
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
  width: 0.15rem;
  height: 0.6rem;
  border-right: 0.15rem solid #fff;
  border-left: 0.15rem solid #fff;
  background-color: transparent;
  opacity: 0.7;
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
}
#play-pause:hover::before {
  box-shadow: 0.1rem 0.1rem 0.2rem #00c234;
  opacity: 1;
}
.play:hover::after {
  width: 0.8rem;
  height: 0.8rem;
  opacity: 1;
}
.pause:hover::after {
  width: 0.2rem;
  height: 0.8rem;
  border-right: 0.2rem solid #fff;
  border-left: 0.2rem solid #fff;
  opacity: 1;
}
.play-text {
  text-align: center;
  margin: auto 0.2rem;
}
.play-text span {
  color: #ffffffe8;
  font-family: "華康墨字體";
  font-size: 1rem;
}
.play-text p {
  color: #ffffffe8;
  font-family: "華康墨字體";
  font-size: 0.2rem;
  margin-top: 5px;
}
.video-text {
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  background-color: rgba(0, 128, 128, 0.3);
  position: absolute;
  transform: translateY(-50%);
  top: 50%;
  right: 0;
}
.video-text h1 {
  color: #fff;
  font-family: "華康墨字體";
  font-size: 1.4rem;
  padding-bottom: 0.3rem;
}
.video-text span {
  font-size: 1rem;
}
.video-text p {
  width: 80%;
  color: #fff;
  font-family: "華康中圓體";
  font-size: 0.6rem;
  text-align: justify;
  line-height: 1rem;
  letter-spacing: 0.05rem;
}
article {
  margin: 0 auto;
  overflow: hidden;
}
.theme {
  max-width: 1180px;
  margin: 0 auto;
  position: relative;
}
.main {
  width: 90%;
  margin: 0 auto 2rem;
}
.breadcrumb {
  margin-top: 0.5rem;
  display: flex;
  justify-content: left;
}
.breadcrumb-item {
  color: #0000007a;
  font-family: "華康中圓體";
  font-size: 0.6rem;
}
.breadcrumb-item + .breadcrumb-item::before {
  content: " / ";
}
.main-box {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 1rem 0;
  background-color: rgba(255, 255, 255, 0.7);
}
.main-box h2 {
  display: inline-block;
  color: #000000e1;
  font-family: "華康墨字體";
  font-size: 1.4rem;
  margin-top: 0.6rem;
  margin-bottom: 0.6rem;
  padding-bottom: 0.2rem;
  border-bottom: 0.2rem solid #ffc909;
}
.text-box {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding: 0.3rem 0;
}
.text-box:nth-of-type(1) ~ .text-box::before {
  content: "";
  width: 95%;
  height: 0.06rem;
  margin-bottom: 0.5rem;
  background: repeating-linear-gradient(
    90deg,
    #ffc909 0,
    #ffc909 3%,
    transparent 3%,
    transparent 4%
  );
  opacity: 0.7;
}
.text-box p {
  color: #000000a1;
  font-family: "華康中圓體";
  font-size: 0.7rem;
  line-height: 1.2rem;
  letter-spacing: 0.05rem;
}
.text-box-left p {
  text-align: center;
}
.text-box-right p {
  text-align: justify;
  text-indent: 1.3rem;
  padding: 0 0.6rem;
}
.text-box-left {
  width: 25%;
  text-align: center;
  font-weight: 700;
}
.text-box-right {
  width: 75%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
}
.main_img {
  position: absolute;
  transform: translate(-100%, -50%);
  top: 50%;
  right: 50%;
  z-index: -1;
}
.main_img img {
  width: 600%;
}
.main_imgbox {
  display: flex;
  width: 100%;
}
.main_imgbox img {
  width: 50%;
}
.main_imgbox-text {
  width: 50%;
  display: flex;
  flex-wrap: wrap;
  align-content: center;
}
.main_imgbox h3 {
  color: #000000e1;
  font-family: "華康墨字體";
  font-size: 1rem;
  margin-bottom: 0.3rem;
}
.main_imgbox p {
  color: #000000a1;
  font-family: "華康中圓體";
  font-size: 0.6rem;
  line-height: 1rem;
  letter-spacing: 0.05rem;
  text-align: justify;
}
.first-topic {
  margin: 0 auto 2rem;
  background-color: rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;
}
.first-topic-content {
  max-width: 1180px;
  margin: 0 auto;
}
.first-topic-box {
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.first-topic-text {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: auto 0;
  padding: 1.5rem 0.6rem;
  box-sizing: border-box;
}
.first-topic-text h2 {
  display: inline-block;
  color: #fff;
  font-family: "華康墨字體";
  font-size: 1.4rem;
  margin: 1rem 0;
  padding-bottom: 0.2rem;
  border-bottom: 0.2rem solid #ffc909;
}
.first-topic-text p {
  color: #ffffffc2;
  font-family: "華康中圓體";
  font-size: 0.7rem;
  line-height: 1.2rem;
  letter-spacing: 0.05rem;
  text-align: justify;
  text-indent: 1.3rem;
  margin-bottom: 0.3rem;
}
.first-topic-text span {
  color: #ffffffc2;
  font-family: "華康中圓體";
  font-size: 0.7rem;
  text-align: end;
  margin-top: 1.2rem;
  margin-left: auto;
}
.first-topic-img {
  position: absolute;
  width: 100%;
  top: 0;
  right: 0;
  z-index: -1;
}
.first-topic-img img {
  width: 650%;
  margin-right: 200%;
  margin-top: -50%;
}
.first-topic-imgbox {
  max-width: 9rem;
  width: 100%;
  margin: 0 auto;
  padding: 2rem;
  position: relative;
}
.first-topic-imgbox img {
  width: 100%;
  height: 100%;
  opacity: 0.8;
}
.imgbox-text {
  color: #ffffffe8;
  font-family: "華康中圓體";
  font-size: 0.6rem;
  position: absolute;
}
.second-topic {
  margin: 0 auto 2rem;
}
.second-topic-content {
  max-width: 1180px;
  margin: 0 auto;
}
.second-topic-box {
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  margin: 1rem auto;
}
.second-topic-text {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.second-topic-text h2 {
  display: inline-block;
  color: #000000e1;
  font-family: "華康墨字體";
  font-size: 1.4rem;
  margin: 0.6rem 0;
  padding-bottom: 0.2rem;
  border-bottom: 0.2rem solid #ffc909;
}
.second-topic-text p {
  color: #000000a1;
  font-family: "華康中圓體";
  font-size: 0.7rem;
  line-height: 1.2rem;
  letter-spacing: 0.05rem;
  text-align: justify;
  text-indent: 1.3rem;
  margin-bottom: 0.3rem;
}
.second-topic-img {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 1rem;
}
.second-topic-img-box {
  width: 100%;
  display: flex;
  margin: 0 2rem;
  overflow: hidden;
  transform: skew(8deg, 0deg);
}
.second-topic-img-box:nth-of-type(1) {
  border-radius: 3% 3% 0 0/6% 6% 0 0;
}
.second-topic-img-box:nth-child(even) {
  flex-direction: row-reverse;
  transform: skew(-8deg, 0deg);
}
.second-topic-img-box:nth-last-of-type(1) {
  border-radius: 0 0 3% 3%/0 0 6% 6%;
  box-shadow: 0.3rem 0.3rem 1rem rgba(0, 0, 0, 0.3);
}
.second-topic-img-left {
  width: 70%;
}
.second-topic-img-left img {
  width: 100%;
  height: 100%;
  vertical-align: top;
}
.second-topic-img-right {
  width: 30%;
  display: flex;
  flex-wrap: wrap;
}
.second-topic-img-right img {
  width: 100%;
  vertical-align: top;
}
.second-topic-box span {
  display: flex;
  align-items: center;
  color: #0000007a;
  font-family: "華康中圓體";
  font-size: 0.6rem;
  line-height: 1rem;
  letter-spacing: 0.05rem;
  text-align: justify;
  text-indent: 1.3rem;
  margin: 1rem auto 0;
}
.second-topic-box span::before {
  content: "";
  width: 5rem;
  height: 0.05rem;
  margin-right: 0.3rem;
  background-color: #ffc909;
}
.second-topic-box span::after {
  content: "";
  width: 5rem;
  height: 0.05rem;
  margin-left: 0.3rem;
  background-color: #ffc909;
}
@media screen and (min-width: 414px) {
  html {
    font-size: 22px;
  }
}
@media screen and (min-width: 640px) {
  .history {
    height: 21rem;
  }
}
@media screen and (min-width: 768px) {
  .video {
    width: 100%;
    margin-left: 0;
  }
  #play-pause::before {
    width: 2.6rem;
    height: 2.6rem;
  }
  .play::after {
    width: 1.1rem;
    height: 1.1rem;
  }
  .pause::after {
    width: 0.3rem;
    height: 1.1rem;
    border-right: 0.3rem solid #fff;
    border-left: 0.3rem solid #fff;
  }
  #play-pause:hover::before {
    box-shadow: 0.2rem 0.2rem 0.3rem #00c234;
  }
  .play:hover::after {
    width: 1.3rem;
    height: 1.3rem;
  }
  .pause:hover::after {
    width: 0.5rem;
    height: 1.4rem;
    border-right: 0.4rem solid #fff;
    border-left: 0.4rem solid #fff;
  }
  .play-text {
    margin: auto 0.6rem;
  }
  .play-text span {
    font-size: 1.4rem;
  }
  .play-text p {
    font-size: 0.6rem;
  }
  .video-text {
    width: 30%;
    height: 65%;
    border-radius: 50%;
  }
  .main {
    margin: 0 auto 4rem;
  }
  .breadcrumb-item {
    font-size: 0.5rem;
  }
  .main-box {
    width: 65%;
  }
  .text-box p {
    color: #000000a1;
    font-size: 0.6rem;
    line-height: 1rem;
  }
  .main_img {
    transform: none;
    top: 0;
    right: -5%;
  }
  .main_img img {
    width: 100%;
  }
  .main_imgbox {
    display: block;
    width: 25%;
    position: absolute;
    top: 60%;
    right: 1.6rem;
    z-index: -1;
  }
  .main_imgbox img {
    width: 80%;
  }
  .main_imgbox-text {
    width: auto;
    display: block;
    flex-wrap: nowrap;
    align-content: stretch;
  }
  .main_imgbox h3 {
    margin-bottom: 0;
    position: absolute;
    top: 95%;
  }
  .main_imgbox p {
    position: absolute;
    top: 105%;
  }
  .first-topic {
    margin: 0 auto 4rem;
  }
  .first-topic-text {
    width: 65%;
  }
  .first-topic-text p {
    font-size: 0.6rem;
    line-height: 1rem;
  }
  .first-topic-text span {
    font-size: 0.6rem;
  }
  .first-topic-img img {
    width: 100%;
    margin-right: 0;
    margin-top: 0;
  }
  .first-topic-imgbox {
    max-width: none;
    width: 20%;
    margin: 0;
  }
  .imgbox-text:nth-of-type(3) {
    top: 35%;
  }
  .second-topic {
    position: relative;
  }
  .second-topic-box {
    margin: 2rem auto;
  }
  .second-topic-text {
    width: 65%;
  }
  .second-topic-text p {
    font-size: 0.6rem;
    line-height: 1rem;
  }
  .second-topic-img {
    width: 35%;
    position: absolute;
    transform: translateY(-50%);
    top: 40%;
    right: 0;
  }
  .second-topic-box span {
    margin: 2rem auto 0;
    color: #000000a1;
  }
}
@media screen and (min-width: 1024px) {
  html {
    font-size: 24px;
  }
  .main_img {
    right: -42%;
  }
  .main_img img {
    width: 70%;
  }
}
@media screen and (min-width: 1200px) {
  html {
    font-size: 27px;
  }
  .main_img img {
    width: 80%;
  }
  .main_imgbox img {
    width: 90%;
  }
  .first-topic-imgbox {
    left: 2rem;
  }
}
@media screen and (min-width: 1536px) {
  html {
    font-size: 30px;
  }
  .main_img img {
    width: 95%;
  }
  .main_imgbox img {
    width: 100%;
    margin-left: 50%;
  }
  .main_imgbox h3 {
    right: 0;
  }
  .main_imgbox p {
    margin-left: 60%;
    right: -60%;
  }
  .first-topic-imgbox {
    left: 6rem;
  }
  .second-topic-img {
    width: 30%;
    right: 5%;
  }
}
.main-box h2 {
  border-bottom: 0.2rem solid #d64d00;
}
.text-box:nth-of-type(1) ~ .text-box::before {
  background: repeating-linear-gradient(
    90deg,
    #d64d00 0,
    #d64d00 3%,
    transparent 3%,
    transparent 4%
  );
}
.first-topic-text h2 {
  border-bottom: 0.2rem solid #d64d00;
}
.imgbox-text:nth-of-type(1) {
  top: 28%;
  right: 43%;
}
.imgbox-text:nth-of-type(2) {
  top: 20%;
  right: 10%;
}
.imgbox-text:nth-of-type(3) {
  top: 45%;
  right: 60%;
}
.imgbox-text:nth-of-type(4) {
  top: 37%;
  right: 10%;
}
.imgbox-text:nth-of-type(5) {
  top: 50%;
  right: 10%;
}
.imgbox-text:nth-of-type(6) {
  top: 56%;
  right: 45%;
}
.imgbox-text:nth-of-type(1)::after {
  content: "↜";
  color: #fff;
  font-size: 50px;
  position: absolute;
  transform: rotate(60deg);
  right: 0;
  top: 100%;
  opacity: 0.8;
}
.imgbox-text:nth-of-type(2)::before {
  content: "⇙";
  color: #ffc909;
  font-size: 50px;
  position: absolute;
  right: 50%;
  top: 100%;
  opacity: 0.5;
}
.second-topic-text h2 {
  border-bottom: 0.2rem solid #d64d00;
}
.second-topic-box span::before {
  content: "";
  width: 5rem;
  height: 0.05rem;
  margin-right: 0.3rem;
  background-color: #d64d00;
}
.second-topic-box span::after {
  content: "";
  width: 5rem;
  height: 0.05rem;
  margin-left: 0.3rem;
  background-color: #d64d00;
}
</style>
