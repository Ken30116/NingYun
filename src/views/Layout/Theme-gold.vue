<script setup>
import "../../javascript/header-nav.js";
import "../../javascript/menu-onclick.js";
import "../../javascript/theme_video.js";
</script>
<template>
  <div class="container">
    <div class="c-video">
      <video class="video" src="../../video/gold-theme.mp4"></video>
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
        <h1>金精靈<span>主題區</span></h1>
        <p>斜梯設計-旋轉式斜梯圍繞。</p>
        <p>大面積常綠喬木-降低太陽直接輻射，表面溫度下降。</p>
        <p>音樂景觀設施-互動式音樂設施。</p>
      </div>
    </div>
  </div>
  <article>
    <div class="theme">
      <div class="main">
        <div class="breadcrumb">
          <RouterLink class="breadcrumb-item" to="/">首頁</RouterLink>
          <RouterLink class="breadcrumb-item" to="/layout">園區導覽</RouterLink>
          <RouterLink class="breadcrumb-item" to="/layout/theme-gold"
            >金精靈主題區</RouterLink
          >
        </div>
        <div class="main-box">
          <h2>金精靈主題區</h2>
          <div class="text-box">
            <div class="text-box-left">
              <p>意涵</p>
              <p>【韌性】</p>
            </div>
            <div class="text-box-right">
              <p>
                都市韌性（urban
                resilience）為都市系統及其居民在各種衝擊和壓力下保持正常運作，且積極適應並轉向永續發展的可量化的能力。因此，一座韌性城市就是對自然和人為的、突發和慢性的、預期和未預期到的災害進行評估、計劃並採取行動，以對災害未雨綢繆和積極應對的都市。韌性城市更能夠保護和改善人們的生活、保衛發展成果、營造良好投資環境以及推動積極的改變。關於都市韌性的學術討論主要集中在不同的威脅上：氣候變化、自然災害。不少學者已討論過都市計畫和設計的物質和非物質層面上抵禦這些威脅的能力。因此，韌性城市更多在自然災害（地震、海嘯、洪水、太陽耀斑等）以及基礎設施採用可持續能源方面提出應變策略。
              </p>
            </div>
          </div>
          <div class="text-box">
            <div class="text-box-left">
              <p>意涵</p>
              <p>【堅守】</p>
            </div>
            <div class="text-box-right">
              <p>
                堅守在流行音樂的嘻哈版圖中。厲害的人，更破格的事情其實不難，但要守在「框」內，寫出不同於制式的歌曲，是修煉級數後才能有的結果。所謂「框」，也不必全是流水帳的rap，但你得有使人願意聽懂的心，適時的放進專屬的才能。
              </p>
            </div>
          </div>
          <div class="text-box">
            <div class="text-box-left">
              <p>主題</p>
              <p>【自然聲音】</p>
            </div>
            <div class="text-box-right">
              <p>
                活動規劃四大主題市集，帶領民眾認識國產木竹、材產品、環境友善餐飲、森林特色商品，並提供森林生態旅遊遊程規劃建議，讓民眾理解多樣化的森林生態系服務價值，鼓勵大家閒暇時親身步入自然，與森林來場約會，用森林照顧身、心、靈。將自然系音樂、親子活動融入室外森林野台，並於室內展場打造感官漫遊體驗工作坊，民眾可透過視、聽、嗅、味、觸等五感與大自然互動，並搭配木作、植物染等DIY實作，親自接觸國產木竹材和林下經濟所帶來的臺灣森林特色產品，感受精彩的森活體驗。
              </p>
            </div>
          </div>
          <div class="text-box">
            <div class="text-box-left">
              <p>主題</p>
              <p>【都市熱島-植栽篇】</p>
            </div>
            <div class="text-box-right">
              <p>
                綠地對環境的降溫效果，主來自植物葉面蒸散及本身遮蔽等機制所產生的效應。蒸散作用如同水的蒸發，植物透過氣孔開閉讓水氣以潛熱(latent
                heat)的方式散失帶走熱能。而遮蔽作用主要由於葉面吸收、反射太陽輻射，使其下之地表面受照射減少而有較低的表面溫度，同時亦使得其上之氣溫因此而降低。
              </p>
            </div>
          </div>
        </div>
        <div class="main_img">
          <img
            src="../../img/gold-theme/gold-introduction.png"
            alt="gold-introduction"
          />
        </div>
        <div class="main_imgbox">
          <img
            src="../../img/gold-theme/stairs-design.png"
            alt="stairs-design"
          />
          <div class="main_imgbox-text">
            <h3>斜梯設計</h3>
            <p>採用旋轉式斜梯，並圍繞樹，能近距離接觸大自然，吸收芬多精。</p>
          </div>
        </div>
      </div>
    </div>

    <div class="first-topic">
      <div class="first-topic-content">
        <div class="first-topic-box">
          <div class="first-topic-text">
            <h2>大面積常綠喬木</h2>
            <p>
              樹木與植栽可吸附空氣中的懸浮物質淨化空氣、阻絕噪音、吸收雨水以減少大雨時的地面淨流量，同時過濾水源。它們是城市生物的棲息與覓食地，彼此之間可連繫成為生態綠網，串聯郊區丘陵與城市公園、校園綠地，提升生態系的豐富度，讓更多生物得以把城市當作棲身之所。行道樹提供的遮蔭與防風效果，甚至能減少人行道鋪面因過度曝曬而毀損的頻率。
            </p>
            <p>
              舉例來說，在建築物外側，特別是東曬與西曬的牆面，利用樹木遮蔭，便可減少傳導入屋內的熱氣。這也是為何校園裡的長排教室外，總是種植一排茄苳樹或大王椰子。屋頂綠化更不用說，藉由土壤與植栽，能夠大量降低屋頂表層溫度，在夏季降溫成果至少可達10度以上。
            </p>
            <span>都市熱島-植栽篇</span>
          </div>
          <div class="first-topic-img">
            <img src="../../img/gold-theme/trees.jpg" alt="trees" />
          </div>
          <div class="first-topic-imgbox">
            <img
              src="../../img/gold-theme/heat-island-tree.png"
              alt="heat-island-tree"
            />
            <span class="imgbox-text">釋放地表熱輻射</span>
            <span class="imgbox-text">太陽輻射</span>
            <span class="imgbox-text">原始(無植栽)</span>
            <span class="imgbox-text">大面積喬木</span>
            <span class="imgbox-text">太陽輻射</span>
            <span class="imgbox-text">改造後(有植栽)</span>
          </div>
        </div>
      </div>
    </div>

    <div class="second-topic">
      <div class="second-topic-content">
        <div class="second-topic-box">
          <div class="second-topic-text">
            <h2>音樂景觀設施</h2>
            <p>
              景觀造型上有許多的鈴鐺，造型上的鈴鐺是依相對位置擺放，造型旁邊的左右上方各有LED燈。每到晚上路燈亮時，LED燈會發出紅、藍、綠三種顏色。非常有特色的青蛙形景觀，整個公園有兩隻，一隻綠，一隻藍。一隻看起來在游泳(綠)、一隻看起來像在休息(藍)。他們位在露天音樂台的前方與左方的草皮上，因為特別，所以常引來民眾拍照拍照。如果你不熟悉園區，此地形經過精心設計。仔細看這地紋，屬於引導指標，可說是相當有創意，還能凸顯其特色，更可以讓大家會心一笑，可說是一舉多得。
            </p>
            <p>
              團隊為賦予既有園區更多元的功能及價值，翻轉舊有的刻板印象，開始推動主題特色營造，更讓園區增添新鮮感及吸引力，團隊合作將園區的在地人文特色及環境設施串連，營造出音樂主題特色，讓漫步園區的民眾，能夠享受到悠揚的樂聲及音符的律動，音樂主題特色是利用綠、藍等不同色彩的律動並搭配植栽以及鋪面－「寧韻道」，讓民眾徜徉於繽紛浪漫的旋律之中。
            </p>
          </div>
          <div class="second-topic-img">
            <div class="second-topic-img-box">
              <div class="second-topic-img-left">
                <img src="../../img/gold-theme/img1.jpg" alt="img1" />
              </div>
              <div class="second-topic-img-right">
                <img src="../../img/gold-theme/img2.jpg" alt="img2" />
                <img src="../../img/gold-theme/img3.jpg" alt="img3" />
              </div>
            </div>
            <div class="second-topic-img-box">
              <div class="second-topic-img-left">
                <img src="../../img/gold-theme/img4.jpg" alt="img4" />
              </div>
              <div class="second-topic-img-right">
                <img src="../../img/gold-theme/img5.jpg" alt="img5" />
                <img src="../../img/gold-theme/img6.jpg" alt="img6" />
              </div>
            </div>
            <div class="second-topic-img-box">
              <div class="second-topic-img-left">
                <img src="../../img/gold-theme/img7.jpg" alt="img7" />
              </div>
              <div class="second-topic-img-right">
                <img src="../../img/gold-theme/img8.jpg" alt="img8" />
                <img src="../../img/gold-theme/img9.jpg" alt="img9" />
              </div>
            </div>
          </div>
          <span>打造互動式音樂設施，增加對音樂認識，體驗聽覺感官。</span>
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
.imgbox-text:nth-of-type(1) {
  top: 10%;
  right: 50%;
}
.imgbox-text:nth-of-type(2) {
  top: 10%;
  right: 20%;
}
.imgbox-text:nth-of-type(3) {
  top: 37%;
  right: 60%;
}
.imgbox-text:nth-of-type(4) {
  top: 42%;
  right: 20%;
}
.imgbox-text:nth-of-type(5) {
  top: 52%;
  right: 10%;
}
.imgbox-text:nth-of-type(6) {
  top: 84%;
  right: 60%;
}
.imgbox-text:nth-of-type(1)::before {
  content: "↜";
  color: red;
  font-size: 2rem;
  position: absolute;
  transform: rotate(60deg);
  top: 100%;
  opacity: 0.6;
}
.imgbox-text:nth-of-type(1)::after {
  content: "↜";
  color: red;
  font-size: 2rem;
  position: absolute;
  transform: rotate(60deg);
  top: 100%;
  right: 0;
  opacity: 0.6;
}
.imgbox-text:nth-of-type(2)::before {
  content: "⇙";
  color: #ffc909;
  font-size: 2rem;
  position: absolute;
  top: 100%;
  right: 50%;
  opacity: 0.6;
}
.imgbox-text:nth-of-type(4)::before {
  content: "⇩";
  color: #fff;
  font-size: 2rem;
  opacity: 0.7;
  position: absolute;
  transform: translateY(-50%);
  top: 50%;
  right: 110%;
}
.imgbox-text:nth-of-type(5)::before {
  content: "⇙";
  color: #ffc909;
  font-size: 2rem;
  position: absolute;
  top: 100%;
  right: 50%;
  opacity: 0.5;
}
</style>
