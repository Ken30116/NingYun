<script setup>
import "../javascript/showLarge.js";
import "../javascript/menu-onclick.js";
import "../javascript/home-animation.js";
import "../javascript/slideshow.js";
import "../javascript/ShowHistory.js";
import "../javascript/commodity.js";
</script>

<template>
  <article>
    <div class="slideshow">
      <div class="slideshow_img">
        <img src="../img/home/slideshow/slideshow0.jpg" alt="slideshow" />
        <img src="../img/home/slideshow/slideshow1.jpg" alt="slideshow" />
        <img src="../img/home/slideshow/slideshow2.jpg" alt="slideshow" />
        <img src="../img/home/slideshow/slideshow3.jpg" alt="slideshow" />
        <img src="../img/home/slideshow/slideshow4.jpg" alt="slideshow" />
      </div>
      <div class="slideshow-text">
        <div id="slideshow-title"></div>
        <span id="slideshow-con"></span>
      </div>
      <div class="slideshow-selector">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div class="btn btn_left" id="left"></div>
      <div class="btn btn_right" id="right"></div>
    </div>

    <div id="introduction">
      <div class="main">
        <h2>園區簡介</h2>
        <div class="main-box">
          <h1>寧韻美麗島<span>文創園區</span></h1>
          <div class="text-box">
            <div class="text-box-left">
              <p>
                寧韻美麗島文創園區是全臺第一座音樂性質的景點，於2021年開幕，占地約2公頃，座落於都市中心地帶。其中園區中心區域懸空於道路交匯處，彷彿都市空中花園，不僅只是休憩觀賞空間外，還能利用"聽"體驗環境，並感受五大主題區音樂趣味。全區皆以採用低耗能、永續循環概念，創造出舒適環境下，展現自己音樂style。
              </p>
              <p>
                當地美麗島近年來遊客數逾一百萬觀光人次，已經成為國際上知名的觀光勝地。由於交通流量增加，噪音問題嚴重，所以本團隊在地經營維護、音景生活進駐，以教育性質及文創商品帶動經濟發展，並兼具自然與生態保護議題，達到人與環境共存。因此我們非常感謝支持與喜愛每一位遊客。對於音樂支持，以及合作互惠，讓全世界看到這裡的故事及風景。
              </p>
            </div>

            <div class="text-box-right">
              <p>
                本團隊將音樂的創作精神及理念持續推廣，讓來到寧韻美麗島的人們感受到療癒人心、生動童趣、與環境充滿音樂娛樂與幸福的正能量，讓來玩的遊客們都能盡情的聆聽，帶著美好的回憶回家，這就是寧韻美麗島能隨時保持色彩繽紛的小秘密。寧韻美麗島並不會止步於現狀，也會不斷持續挑戰和創新。在未來將致力於4D環景的發展及推廣，更能體驗環境音樂魅力。期望成為全世界獨一無二的文創音樂產業之「聲音地景」。
              </p>
              <div class="small-text">
                <h3>聲音地景(Soundscape)</h3>
                <p>
                  聲音加上景觀（風景）的融合，稱「聲音地景」​或「聲音風景」，其簡稱為「音景」。主要描繪環境中聲音，包含負面音、正面音，負面音例如汽機車爆音、施工敲打、喧嘩聲等；正面音例如溪流聲、音樂、鳥鳴等。當認識一個城市，往往就以視覺性的主觀代表既定都市文化特色。錄製環境聲音，用耳朵感受城市風貌，認識更不一樣的城市。
                </p>
                <div class="small-img">
                  <img src="../img/home/mascot(1).png" alt="mascot(1)" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="main_img">
        <img src="../img/home/city.png" alt="city" />
      </div>
    </div>

    <div class="history">
      <div class="background">
        <img
          src="../img/home/history-background.jpg"
          alt="history-background"
        />
      </div>
      <div class="scroll-bar">
        <div class="scroll-bar-box">
          <div class="history_box">
            <img src="../img/home/history(1).jpg" alt="history(1)" />
            <img src="../img/home/history(2).jpg" alt="history(2)" />
            <img src="../img/home/history(3).jpg" alt="history(3)" />
            <img src="../img/home/history(4).jpg" alt="history(4)" />
            <img src="../img/home/history(5).jpg" alt="history(5)" />
            <div class="boxx">
              <div class="box1">
                <div class="op"></div>
              </div>
              <div class="history-msg">
                <div class="history-msg-right"></div>
              </div>
            </div>
          </div>
          <div class="history-text-box">
            <h3>時光隧道(history)</h3>
            <h4 id="year"></h4>
            <p id="history-text"></p>
          </div>
        </div>
      </div>
    </div>
    <div id="new">
      <div class="new-box">
        <h2>園區大小事</h2>
        <div class="new_img-click">
          <img id="large_img" src="../img/home/new/new0.jpg" />
        </div>
        <img class="small_img" src="../img/home/new/new0.jpg" alt="new0" />
        <img class="small_img" src="../img/home/new/new1.jpg" alt="new1" />
        <img class="small_img" src="../img/home/new/new2.jpg" alt="new2" />
        <img class="small_img" src="../img/home/new/new3.jpg" alt="new3" />
        <img class="small_img" src="../img/home/new/new4.jpg" alt="new4" />
        <div class="new-msg"></div>
      </div>
    </div>
    <div id="commodity">
      <h2>文創商品</h2>
      <div class="commodity-box">
        <div class="commodity_img">
          <img src="../img/home/commodity/commodity0.jpg" alt="commodity0" />
        </div>
      </div>
      <div class="commodity-selector">
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
        <span>5</span>
      </div>
    </div>
  </article>
  <div class="backimg">
    <img src="../img/home/background.jpg" alt="background" />
  </div>
</template>

<style scoped>
@keyframes slidetext1 {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes slidetext2 {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes slidetext3 {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes slideimg1 {
  from {
    margin-left: -10%;
  }
  to {
    margin-left: -110%;
  }
}
@keyframes slideimg2 {
  from {
    margin-left: -80%;
  }
  to {
    margin-left: -180%;
  }
}
@keyframes slideimg3 {
  from {
    margin-left: -50%;
  }
  to {
    margin-left: -150%;
  }
}
@keyframes msg-rco {
  from {
    border-left: 0.6rem solid rgba(0, 128, 128, 0.5);
  }
  to {
    border-left: 0.6rem solid #00c234;
  }
}
@keyframes historymsgshow {
  from {
    left: 25%;
  }
  to {
    left: 30%;
  }
}
@keyframes newmsgshow {
  from {
    width: 1rem;
    margin-left: -50%;
    background-color: #00c234;
  }
  to {
    width: 0.3rem;
    margin-left: -45%;
    background-color: #00c234;
  }
}
@keyframes smallimgshow1 {
  from {
    left: -100%;
  }
  to {
    left: 32%;
  }
}
@keyframes smallimgshow2 {
  from {
    left: -100%;
  }
  to {
    left: 44%;
  }
}
@keyframes smallimgshow3 {
  from {
    left: -100%;
  }
  to {
    left: 56%;
  }
}
@keyframes smallimgshow4 {
  from {
    left: -100%;
  }
  to {
    left: 68%;
  }
}
@keyframes smallimgshow5 {
  from {
    left: -100%;
  }
  to {
    left: 80%;
  }
}
@keyframes newmsgshow {
  from {
    width: 1rem;
    margin-left: -30%;
    background-color: rgba(0, 128, 128, 0.2);
  }
  to {
    width: 0.3rem;
    margin-left: -25%;
    background-color: #00c234;
  }
}
@keyframes smallimgshow1 {
  from {
    left: -100%;
  }
  to {
    left: 40%;
  }
}
@keyframes smallimgshow2 {
  from {
    left: -100%;
  }
  to {
    left: 48%;
  }
}
@keyframes smallimgshow3 {
  from {
    left: -100%;
  }
  to {
    left: 56%;
  }
}
@keyframes smallimgshow4 {
  from {
    left: -100%;
  }
  to {
    left: 64%;
  }
}
@keyframes smallimgshow5 {
  from {
    left: -100%;
  }
  to {
    left: 72%;
  }
}
.slideshow {
  width: 100%;
  clip-path: polygon(100% 0, 100% 90%, 50% 100%, 0 90%, 0 0);
  position: relative;
  overflow: hidden;
  z-index: 2;
  transition: all 1.5s;
}
.slideshow-text {
  position: absolute;
  top: 70%;
  right: 0;
  left: 0;
  text-align: center;
}
#slideshow-title {
  color: #fff;
  font-family: "華康中圓體";
  font-size: 1.4rem;
  text-align: center;
  position: relative;
  z-index: 2;
}
#slideshow-con {
  color: #fff;
  font-family: "華康中圓體";
  font-size: 0.6rem;
  letter-spacing: 0.05rem;
  background: linear-gradient(
    90deg,
    rgb(0, 0, 0, 0),
    rgb(0, 0, 0, 0.6),
    rgb(0, 0, 0, 0)
  );
  padding: 1rem 2.2rem 0.3rem;
}
.slideshow_img {
  width: 300%;
  position: relative;
}
.slideshow_img img {
  vertical-align: top;
}
.slideshow_img img:first-child {
  width: 100%;
}
.slideshow_img img:first-child ~ img {
  width: 0%;
  position: absolute;
  top: 0;
  right: 0;
}
.btn {
  width: 1.5rem;
  height: 1.5rem;
  background-color: #fff;
  opacity: 0.5;
  border-radius: 50%;
  box-shadow: 0.1rem 0.1rem 0.2rem#000;
  position: absolute;
  transform: translateY(-50%);
  top: 50%;
}
.btn_left {
  left: 1rem;
  cursor: pointer;
}
.btn_right {
  right: 1rem;
  cursor: pointer;
}
.btn::after {
  content: "";
  width: 0.8rem;
  height: 0.8rem;
  border-bottom: 0.1rem solid teal;
  position: absolute;
  top: 22%;
}
.btn_left::after {
  border-left: 0.1rem solid teal;
  transform: rotate(45deg);
  right: 12%;
}
.btn_right::after {
  border-right: 0.1rem solid teal;
  transform: rotate(-45deg);
  left: 12%;
}
.btn:active {
  background-color: #00c234;
  opacity: 1;
  box-shadow: 0 0 0.2rem #00c234;
}
.btn_left:active::after {
  border-bottom: 0.1rem solid #fff;
  border-left: 0.1rem solid #fff;
  opacity: 1;
}
.btn_right:active::after {
  border-bottom: 0.1rem solid #fff;
  border-right: 0.1rem solid #fff;
  opacity: 1;
}
article {
  position: relative;
}
#introduction {
  max-width: 1180px;
  margin: 0 auto;
  padding: 1rem 0.2rem;
  box-sizing: border-box;
}
.main {
  width: 90%;
  margin: 0 auto;
}
.main h2 {
  display: flex;
  justify-content: center;
  align-items: center;
  color: teal;
  font-family: "華康墨字體";
  font-size: 1.4rem;
  margin: 0.6rem 0;
}
.main h2::before {
  content: "";
  width: 1.6rem;
  height: 0.1rem;
  margin-right: 0.6rem;
  background-color: teal;
}
.main h2::after {
  content: "";
  width: 1.6rem;
  height: 0.1rem;
  margin-left: 0.6rem;
  background-color: teal;
}
.main-box {
  padding: 0.6rem;
  background-color: rgba(255, 255, 255, 0.9);
  position: relative;
  z-index: 2;
}
.main-box h1 {
  color: #000000e1;
  font-family: "華康墨字體";
  font-size: 1.4rem;
  text-align: center;
  margin-bottom: 0.5rem;
}
.main-box span {
  font-size: 1rem;
}
.text-box {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
.text-box p {
  color: #000000a1;
  font-family: "華康中圓體";
  font-size: 0.6rem;
  text-align: justify;
  line-height: 1rem;
  letter-spacing: 0.05rem;
  text-indent: 1.2rem;
  letter-spacing: 0.05rem;
  margin: 0 0.3rem 0.3rem 0.3rem;
}
.text-box-left {
  width: 100%;
}
.text-box-right {
  width: 100%;
  align-self: flex-start;
  padding-bottom: 4%;
  position: relative;
}
.small-text {
  width: 90%;
  padding: 0.6rem;
  margin: 2rem auto 0;
  box-sizing: border-box;
  background-color: #dfeeee;
  position: relative;
}
.small-text h3 {
  color: #000000e1;
  font-family: "華康墨字體";
  font-size: 1rem;
  text-align: center;
  margin-bottom: 0.3rem;
}
.small-text p {
  color: #000000a1;
  font-family: "華康中圓體";
  font-size: 0.6rem;
  text-align: justify;
  line-height: 1rem;
  letter-spacing: 0.05rem;
  text-indent: 1.2rem;
  letter-spacing: 0.05rem;
}
.small-img {
  width: 13%;
  position: absolute;
  transform: translateY(-78%);
  top: 0;
  right: 0;
}
.small-img img {
  width: 100%;
}
.main_img {
  display: none;
  position: absolute;
  top: 30%;
  left: 0;
}
.main_img img {
  width: 100%;
  opacity: 0.7;
}
.background {
  width: 0%;
  height: 0%;
}
.background img {
  width: 0%;
  height: 0%;
}
.scroll-bar {
  max-width: 1180px;
  margin: 0 auto;
}
.scroll-bar-box {
  width: 90%;
  margin: -10% auto 0;
  position: relative;
  z-index: 2;
}
.history {
  height: 18rem;
  margin-top: 2rem;
}
.history_box {
  width: 100%;
  display: flex;
  box-shadow: 0.3rem 0.3rem 0.3rem rgba(0, 0, 0, 0.3);
  border-radius: 50% 50% 50% 50%/25% 25% 25% 25%;
  position: relative;
  overflow: hidden;
}
.history_box img {
  width: 100%;
  position: relative;
}
.history-text-box {
  width: 100%;
  margin: 1.8rem auto;
  padding: 0.6rem;
  box-sizing: border-box;
  background-color: #fff;
  box-shadow: inset 0.3rem 0.3rem 0.3rem rgba(0, 0, 0, 0.3);
  border-radius: 0.3rem;
  position: relative;
}
.history-text-box h3 {
  color: #000000e1;
  font-family: "華康墨字體";
  font-size: 1rem;
  text-align: center;
  padding: 0.2rem;
  background-color: #dfeeee;
  box-shadow: 0.3rem 0.3rem 0.3rem rgba(0, 0, 0, 0.3);
  border-radius: 0.3rem;
  position: absolute;
  transform: translate(-50%, -50%);
  top: 0;
  left: 50%;
}
#year {
  color: #000000a1;
  font-family: "華康中圓體";
  font-size: 0.7rem;
  font-weight: bolder;
  text-align: center;
  margin-top: 1rem;
  margin-bottom: 0.3rem;
}
#history-text {
  color: #000000a1;
  font-family: "華康中圓體";
  font-size: 0.6rem;
  text-align: justify;
  line-height: 1rem;
  letter-spacing: 0.05rem;
  margin: 0.2rem 0.3rem 0;
}
.boxx {
  width: 150px;
  height: 40px;
  display: flex;
  background: rgba(214, 228, 228, 0.8);
  border-radius: 21% 21% 21% 21%/79% 79% 79% 79%;
  position: absolute;
  transform: translateX(-50%);
  bottom: 0;
  left: 50%;
}
.box1 {
  width: 125px;
  height: 25px;
  margin: auto;
  position: relative;
}
.op {
  width: 25px;
  height: 25px;
  background: conic-gradient(
    #309139 45deg,
    transparent 45deg,
    transparent 115deg,
    #309139 115deg
  );
  border-radius: 50%;
  position: absolute;
  top: 0;
  z-index: 1;
  cursor: pointer;
}
.history-msg {
  position: absolute;
  transform: translateY(-50%);
  top: 50%;
  left: 25%;
  animation: historymsgshow 1s infinite;
}
.history-msg-right {
  width: 1rem;
  height: 0.2rem;
  background-color: #00c234;
}
.history-msg-right::after {
  content: "";
  width: 0;
  height: 0;
  border-top: 0.3rem solid transparent;
  border-left: 0.6rem solid #00c234;
  border-bottom: 0.3rem solid transparent;
  position: absolute;
  transform: translateY(-50%);
  top: 50%;
  left: 100%;
}
#new {
  max-width: 1180px;
  height: 13.5rem;
  margin: 0 auto;
}
.new-box {
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  position: relative;
  z-index: 2;
}
.new-box h2 {
  display: flex;
  align-items: center;
  color: teal;
  font-family: "華康墨字體";
  font-size: 1.4rem;
  margin: 0.6rem 0;
}
.new-box h2::before {
  content: "";
  width: 1.6rem;
  height: 0.1rem;
  margin-right: 0.6rem;
  background-color: teal;
}
.new-box h2::after {
  content: "";
  width: 1.6rem;
  height: 0.1rem;
  margin-left: 0.6rem;
  background-color: teal;
}
.new_img-click {
  width: 100%;
  border-radius: 0.3rem;
  box-shadow: inset 0 0 1rem rgba(0, 0, 0, 0.7);
}
#large_img {
  width: 100%;
  height: 100%;
  border-radius: 0.3rem;
  position: relative;
  z-index: -1;
  vertical-align: top;
}
.small_img {
  width: 30%;
  opacity: 0.5;
  position: absolute;
  transform: perspective(400px) rotateY(50deg);
  bottom: -10%;
  clip-path: circle(30% at 25% 50%);
  cursor: pointer;
  transition: all 0.25s;
}
.small_img:hover {
  width: 35%;
  opacity: 1;
  transform: perspective(400px) rotateY(0);
  bottom: -12%;
  z-index: 2;
}
.small_img:nth-of-type(1) {
  left: -100%;
  animation: smallimgshow1 1s 2s forwards;
}
.small_img:nth-of-type(2) {
  left: -100%;
  animation: smallimgshow2 1s 1.5s forwards;
}
.small_img:nth-of-type(3) {
  left: -100%;
  animation: smallimgshow3 1s 1s forwards;
}
.small_img:nth-of-type(4) {
  left: -100%;
  animation: smallimgshow4 1s 0.5s forwards;
}
.small_img:nth-of-type(5) {
  left: -100%;
  animation: smallimgshow5 1s forwards;
}
.new-msg {
  width: 1rem;
  height: 0.2rem;
  margin-left: -50%;
  margin-top: 1rem;
  background-color: rgba(0, 128, 128, 0.2);
  position: relative;
  animation: newmsgshow 1s 3s 6 alternate;
}
.new-msg::after {
  content: "";
  width: 0;
  height: 0;
  border-top: 0.3rem solid transparent;
  border-left: 0.6rem solid rgba(0, 128, 128, 0.2);
  border-bottom: 0.3rem solid transparent;
  position: absolute;
  transform: translateY(-50%);
  top: 50%;
  left: 100%;
  animation: msg-rco 1s 3s 6 alternate;
}
#commodity {
  max-width: 1180px;
  margin: 0 auto;
}
#commodity h2 {
  display: flex;
  justify-content: center;
  align-items: center;
  color: teal;
  font-family: "華康墨字體";
  font-size: 1.4rem;
  margin: 10% 0 1rem;
  position: relative;
  z-index: 1;
}
#commodity h2::before {
  content: "";
  width: 1.6rem;
  height: 0.1rem;
  margin-right: 0.6rem;
  background-color: teal;
}
#commodity h2::after {
  content: "";
  width: 1.6rem;
  height: 0.1rem;
  margin-left: 0.6rem;
  background-color: teal;
}
.commodity-box {
  clip-path: polygon(0 25%, 100% 0, 100% 100%, 0 100%);
  width: 90%;
  margin: -10% auto;
  border-radius: 0 0 2% 2%/0 0 4% 4%;
  overflow: hidden;
}
.commodity_img img {
  width: 100%;
  vertical-align: top;
}
.commodity-selector {
  width: 8rem;
  height: 0.9rem;
  display: flex;
  justify-content: space-between;
  margin: 11% auto 5%;
}
.commodity-selector span {
  width: 0.9rem;
  height: 0.9rem;
  color: teal;
  font-family: "華康墨字體";
  font-size: 0.8rem;
  text-align: center;
  background-color: #fff;
  border-radius: 50%;
  opacity: 0.6;
  box-shadow: 0.1rem 0.1rem 0.2rem rgba(0, 0, 0, 0.2);
  cursor: pointer;
}
.commodity-selector span:hover {
  color: #fff;
  background-color: #00c234;
  opacity: 1;
}
@media screen and (min-width: 414px) {
  html {
    font-size: 22px;
  }
  .history {
    height: 20rem;
  }
  #new {
    height: 18rem;
  }
}
@media screen and (min-width: 640px) {
  .history {
    height: 21rem;
  }
  #new {
    height: 20rem;
  }
}
@media screen and (min-width: 768px) {
  .slideshow_img {
    width: 100%;
    position: relative;
  }
  .slideshow_img img {
    width: 100%;
    margin-left: 0;
    transform: scale(1.2);
    transition: transform 2s;
  }
  .slideshow-text {
    top: 30%;
    right: 47%;
  }
  #slideshow-con {
    background: linear-gradient(
      90deg,
      rgb(255, 255, 255, 0),
      rgb(255, 255, 255, 0.4),
      rgb(255, 255, 255, 0)
    );
    padding: 1rem 4rem 0.3rem;
  }
  .slideshow-selector {
    width: 8rem;
    height: 0.9rem;
    display: flex;
    justify-content: space-between;
    position: absolute;
    transform: translateX(-50%);
    bottom: 3rem;
    left: 50%;
  }
  .slideshow-selector span {
    width: 0.9rem;
    height: 0.9rem;
    background-color: #fff;
    opacity: 0.5;
    border-radius: 50%;
    box-shadow: 0.1rem 0.1rem 0.2rem #000;
    cursor: pointer;
  }
  .slideshow-selector span:hover {
    box-shadow: 0 0 0.2rem #00c234;
  }
  .btn {
    width: 2.2rem;
    height: 2.2rem;
  }
  .btn_left {
    left: 2rem;
  }
  .btn_right {
    right: 2rem;
  }
  .btn::after {
    width: 1rem;
    height: 1rem;
  }
  .btn:hover {
    background-color: #00c234;
    opacity: 1;
    box-shadow: 0 0 0.2rem #00c234;
  }
  .btn_left:hover::after {
    border-bottom: 0.1rem solid #fff;
    border-left: 0.1rem solid #fff;
    opacity: 1;
  }
  .btn_right:hover::after {
    border-bottom: 0.1rem solid #fff;
    border-right: 0.1rem solid #fff;
    opacity: 1;
  }
  #introduction {
    padding: 1.6rem;
  }
  .text-box-left {
    width: 50%;
  }
  .text-box-right {
    width: 50%;
  }
  .small-img {
    width: 20%;
  }
  .main_img {
    display: block;
  }
  .small-text {
    margin: 0;
    position: absolute;
    transform: translateY(100%);
    bottom: 0;
    right: -8%;
  }
  .history {
    height: auto;
    margin-top: 0;
    clip-path: polygon(0 0, 100% 10%, 100% 90%, 0 100%);
    background-color: rgba(255, 255, 255, 0.8);
    position: relative;
    overflow: hidden;
    transition: all 1.5s;
  }
  .background {
    width: 100%;
    height: 100%;
    position: absolute;
  }
  .background img {
    width: 100%;
    height: 100%;
  }
  .scroll-bar {
    position: relative;
  }
  .scroll-bar-box {
    margin: 0 auto;
    padding: 6.6rem 0;
  }
  .history_box {
    width: 80%;
    border-radius: 40% 40% 40% 40%/25% 25% 25% 25%;
  }
  .history-text-box {
    width: 25%;
    margin: 0;
    box-sizing: content-box;
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    right: -7%;
  }
  .boxx {
    width: 250px;
    height: 50px;
  }
  .box1 {
    width: 235px;
    height: 35px;
  }
  .op {
    width: 35px;
    height: 35px;
  }
  #new {
    margin-top: -4rem;
    height: 18rem;
  }
  .new_img-click {
    width: 60%;
    border-radius: 2.6rem;
  }
  #large_img {
    border-radius: 2.6rem;
  }
  .small_img {
    width: 20%;
  }
  .small_img:hover {
    width: 25%;
    bottom: -13%;
  }
  .new-msg {
    margin-left: -30%;
  }
  .footer-content {
    flex-wrap: nowrap;
    justify-content: space-between;
  }
  .connection {
    order: 0;
    width: 40%;
    justify-content: center;
  }
  .connection h2 {
    margin: 0 0 0.2rem;
  }
  .connection p {
    line-height: 0.8rem;
    text-align: center;
  }
  .icon-box {
    margin: 0.3rem 0;
  }
  .google-map {
    width: 50%;
    margin-bottom: 0;
  }
  iframe {
    border-radius: 5% 5% 5% 5%/15% 15% 15% 15%;
  }
}
@media screen and (min-width: 1024px) {
  html {
    font-size: 24px;
  }
}
@media screen and (min-width: 1200px) {
  html {
    font-size: 27px;
  }
}
@media screen and (min-width: 1536px) {
  html {
    font-size: 30px;
  }
}
</style>
