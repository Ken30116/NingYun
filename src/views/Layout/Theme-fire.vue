<script setup>
import "../../javascript/header-nav.js";
import "../../javascript/menu-onclick.js";
import "../../javascript/theme_video.js";
</script>
<template>
  <div class="container">
    <div class="c-video">
      <video class="video" src="../../video/fire-theme.mp4"></video>
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
        <h1>火精靈<span>主題區</span></h1>
        <p>聚集場所-打造活動空間，街頭藝人能自由發揮創作。</p>
        <p>牆面、屋頂綠化-植物降低其表面溫度。</p>
        <p>花卉設計-種植多顏色花卉，吸引觀光客拍照。</p>
      </div>
    </div>
  </div>
  <article>
    <div class="theme">
      <div class="main">
        <div class="breadcrumb">
          <RouterLink class="breadcrumb-item" to="/">首頁</RouterLink>
          <RouterLink class="breadcrumb-item" to="/layout">園區導覽</RouterLink>
          <RouterLink class="breadcrumb-item" to="/layout/theme-fire"
            >火精靈主題區</RouterLink
          >
        </div>
        <div class="main-box">
          <h2>火精靈主題區</h2>
          <div class="text-box">
            <div class="text-box-left">
              <p>意涵</p>
              <p>【熱情】</p>
            </div>
            <div class="text-box-right">
              <p>
                指標性原創音樂節品牌「寧韻音樂節」，展開全新年度升級版演出計劃「2021寧韻音樂節．築景」。體驗以流行音樂、嘻哈音樂與世界音樂三種不同類型的聽覺饗宴，將為所有觀眾打造一場難忘又浪漫的音樂之旅！
              </p>
            </div>
          </div>
          <div class="text-box">
            <div class="text-box-left">
              <p>意涵</p>
              <p>【樂活】</p>
            </div>
            <div class="text-box-right">
              <p>
                樂活族又稱樂活生活、洛哈思主義、樂活，是一個西方傳來的新興生活型態族群，是由音譯LOHAS而來。雖然樂活族是以美國人為主的族群定義，但目前在全世界引起了不少報導，普遍認為各種文化和國家中都多多少少有樂活族的存在。因為它適合目前的有機食品工業，和消費性文化觀光產業等的推動。另一個與樂活族相關的慢食運動也有異曲同工之妙，慢食運動在於反快餐食品的不健康成份與製造過程。目前這兩股生活型態的趨勢都持續的在進行，而簡樸生活則是在樂活族之前較早被提出的，簡稱為LOVOS，它主要在於對抗消費至上的奢華主義，從行銷觀點看來，簡樸世代的特色較少也較不明顯，但未來的潛力是相當被期待的。
              </p>
            </div>
          </div>
          <div class="text-box">
            <div class="text-box-left">
              <p>主題</p>
              <p>【都市音樂】</p>
            </div>
            <div class="text-box-right">
              <p>
                如果做一個最佳都市專輯的列表，可能會選嘻哈街頭羅曼史質感與流行音樂明顯不同，不少歌曲甚至還流淌著摩城的血液，但它卻比大部分趕上潮流的同僚們在商業反響上更加成功，其重要原因不是有多獨一無二，相反中明顯限制其使用，只是更加正視生活的起落，做自己成功的嘗試，擁抱下流行趨勢的同時，找回最適合自己的音樂表達方式，認為自己徹底解放。
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
            src="../../img/fire-theme/fire-introduction.png"
            alt="fire-introduction"
          />
        </div>
        <div class="main_imgbox">
          <img src="../../img/fire-theme/place.png" alt="place" />
          <div class="main_imgbox-text">
            <h3>聚集場所</h3>
            <p>打造活動空間，街頭藝人能自由發揮創作。</p>
          </div>
        </div>
      </div>
    </div>

    <div class="first-topic">
      <div class="first-topic-content">
        <div class="first-topic-box">
          <div class="first-topic-text">
            <h2>牆面、屋頂綠化</h2>
            <p>
              植物通過增加建築的覆蓋層降低其表面溫度，因而降低室內溫度，減少空調使用率。綠色植物枝葉及其基層能削弱聲波，同時植物表面的氣孔和絨毛及基質布等能吸收聲音。除此之外，不但能吸收PM10
              、二氧化碳來凈化空氣。
            </p>
            <p>
              綠化屋頂是指建築物的屋頂被部分或完全覆蓋著植被，生長介質，和埋下一層防水膜。它也可以包括附加層，例如一個根屏障和排水和灌溉系統。屋頂上的容器花園，植物保存在盆中，通常不被認為是真正的綠色屋頂，儘管這是有爭議的。
              屋頂池塘是用於處理灰水的另一種綠色屋頂。
              植被，土壤，排水層，屋頂屏障和灌溉系統構成綠色屋頂。綠化屋頂也是低影響開發或海綿城市的一種技術措施。
            </p>
            <span>都市熱島-植栽篇</span>
          </div>
          <div class="first-topic-img">
            <img src="../../img/fire-theme/green-wall1.jpg" alt="green-wall1" />
          </div>
          <div class="first-topic-imgbox">
            <img src="../../img/fire-theme/green-wall.png" alt="green-wall" />
            <span class="imgbox-text">涼爽</span>
            <span class="imgbox-text">蒸散作用</span>
            <span class="imgbox-text">無植栽</span>
            <span class="imgbox-text">吸音</span>
            <span class="imgbox-text">聲波</span>
            <span class="imgbox-text">炎熱</span>
          </div>
        </div>
      </div>
    </div>

    <div class="second-topic">
      <div class="second-topic-content">
        <div class="second-topic-box">
          <div class="second-topic-text">
            <h2>花卉設計</h2>
            <p>
              花卉學或稱花卉栽培(Floriculture)是農業之一分支，歸在園藝學(Horticulture)部門裏。而園藝學是包括生產果樹、蔬菜、造園及花卉用之觀賞植物等。按歐美各國，把花卉作物歸納成四大類。(一)切花、切枝及切葉(Cut
              flowers and
              greens)：如香石竹、菊花、玫瑰、唐菖蒲、蕨葉及各種切枝等；(二)盆花(Flowering
              pot
              plants)：如非洲菫、盆菊、杜鵑花、聖誕紅等；(三)觀葉植物(Foliage
              plants)：盆栽或吊籃用之各種觀葉植物，以配合室內造景佈置之用；(四)花壇植物(Bedding
              plants)：如天竺葵、矮牽牛、非洲鳳仙花、四季秋海棠等花苗及各種住家種植之菜苗。
            </p>
            <p>
              在台灣和日本凡是生產觀賞植物(Ornamental
              plants)，都可歸入花卉作物，所以常造園觀賞植物(Landscape ornamental
              plants, 即Ornamental horticulture)亦併入花卉觀賞植物(Flowers and
              ornamental
              plants)中，範圍較廣。依台灣省農林廳所出之「農業年報」，花卉包括切花類、球根類、種子類、苗圃類和盆花類。
            </p>
          </div>
          <div class="second-topic-img">
            <div class="second-topic-img-box">
              <div class="second-topic-img-left">
                <img src="../../img/fire-theme/img1.jpg" alt="img1" />
              </div>
              <div class="second-topic-img-right">
                <img src="../../img/fire-theme/img2.jpg" alt="img2" />
                <img src="../../img/fire-theme/img3.jpg" alt="img3" />
              </div>
            </div>
            <div class="second-topic-img-box">
              <div class="second-topic-img-left">
                <img src="../../img/fire-theme/img4.jpg" alt="img4" />
              </div>
              <div class="second-topic-img-right">
                <img src="../../img/fire-theme/img5.jpg" alt="img5" />
                <img src="../../img/fire-theme/img6.jpg" alt="img6" />
              </div>
            </div>
            <div class="second-topic-img-box">
              <div class="second-topic-img-left">
                <img src="../../img/fire-theme/img7.jpg" alt="img7" />
              </div>
              <div class="second-topic-img-right">
                <img src="../../img/fire-theme/img8.jpg" alt="img8" />
                <img src="../../img/fire-theme/img9.jpg" alt="img9" />
              </div>
            </div>
          </div>
          <span>打造花卉與花海，吸引旅客觀賞拍照，體驗都市後花園。</span>
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
  border-bottom: 0.2rem solid #ea0000;
}
.text-box:nth-of-type(1) ~ .text-box::before {
  background: repeating-linear-gradient(
    90deg,
    #ea0000 0,
    #ea0000 3%,
    transparent 3%,
    transparent 4%
  );
}
.first-topic-text h2 {
  border-bottom: 0.2rem solid #ea0000;
}
.imgbox-text:nth-of-type(1) {
  top: 55%;
  right: 50%;
}
.imgbox-text:nth-of-type(2) {
  top: 35%;
  right: 20%;
}
.imgbox-text:nth-of-type(3) {
  top: 31%;
  right: 65%;
}
.imgbox-text:nth-of-type(4) {
  top: 45%;
  right: 30%;
}
.imgbox-text:nth-of-type(5) {
  top: 55%;
  right: 15%;
}
.imgbox-text:nth-of-type(6) {
  top: 55%;
  right: 75%;
}
.second-topic-text h2 {
  border-bottom: 0.2rem solid #ea0000;
}
.second-topic-box span::before {
  background-color: #ea0000;
}
.second-topic-box span::after {
  background-color: #ea0000;
}
@media screen and (min-width: 768px) {
  .imgbox-text:nth-of-type(3) {
    top: 35%;
  }
}
</style>
