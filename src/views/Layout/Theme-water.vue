<script setup>
import "../../javascript/header-nav.js";
import "../../javascript/menu-onclick.js";
import "../../javascript/theme_video.js";
</script>
<template>
  <div class="container">
    <div class="c-video">
      <video class="video" src="../../video/water-theme.mp4"></video>
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
        <h1>水精靈<span>主題區</span></h1>
        <p>自然聲音設計-噴泉發出水聲。</p>
        <p>休憩設計-休憩座椅搭配音樂耳機功能，撥放助眠音樂。</p>
        <p>水流/體設計-水流動新增視覺美感，而且降低氣溫。</p>
      </div>
    </div>
  </div>
  <article>
    <div class="theme">
      <div class="main">
        <div class="breadcrumb">
          <RouterLink class="breadcrumb-item" to="/">首頁</RouterLink>
          <RouterLink class="breadcrumb-item" to="/layout">園區導覽</RouterLink>
          <RouterLink class="breadcrumb-item" to="/layout/theme-water"
            >水精靈主題區</RouterLink
          >
        </div>
        <div class="main-box">
          <h2>水精靈主題區</h2>
          <div class="text-box">
            <div class="text-box-left">
              <p>意涵</p>
              <p>【柔和】</p>
            </div>
            <div class="text-box-right">
              <p>
                波光粼粼的河水向下緩緩流淌，清涼的河風帶着水草的味道從河麵上吹過，渺渺的天空一片清朗，柔和的陽光投射在水麵上，反射出片片的金光。
              </p>
            </div>
          </div>
          <div class="text-box">
            <div class="text-box-left">
              <p>意涵</p>
              <p>【自由)】</p>
            </div>
            <div class="text-box-right">
              <p>
                在未來的日子裡，我們嚮往並需要確保一個由必要的人類自由構成的世界：言論與表達的自由——在世界上的所有地方。一切人民以自己的方式崇拜他們神祇的自由——在世界上的所有地方。免於匱乏的自由——以世界性的角度來說，可使每一個國家的所有居民享受在和平時期健康生活的經濟基礎——在世界上的所有地方。免於恐懼的自由——以世界性的角度來說，全球的兵力削減以至於任何國家都沒有對其鄰邦進行武力入侵的可能——在世界上的任何地方。
              </p>
            </div>
          </div>
          <div class="text-box">
            <div class="text-box-left">
              <p>主題</p>
              <p>【水之聆聽】</p>
            </div>
            <div class="text-box-right">
              <p>
                水在顫抖，他們的靈魂依舊不朽；水在激湧，他們的精神仍然長存。心泉汩汩，流水潺潺，用心去聆聽，他們的人生流出一汪碧海；側耳去聆聽，他們的理想匯成一灘小溪。
              </p>
            </div>
          </div>
          <div class="text-box">
            <div class="text-box-left">
              <p>主題</p>
              <p>【都市熱島-水體篇】</p>
            </div>
            <div class="text-box-right">
              <p>
                水主要降低熱島效應的機制主要來自於表面水分的蒸發作用以潛熱(latent
                heat)的方式帶走熱能，再加上水體的熱容量(heat
                capacity)大，導致相同吸熱狀況下水體較其他大部分表面材質而言升溫緩慢等所產生的效果。
              </p>
            </div>
          </div>
        </div>
        <div class="main_img">
          <img
            src="../../img/water-theme/water-introduction.png"
            alt="water-introduction"
          />
        </div>
        <div class="main_imgbox">
          <div class="main_imgbox-text">
            <h3>自然聲音設計</h3>
            <p>
              噴泉發出水聲音，轟轟聲可掩飾道路噪音，降低道路噪音帶來的影響。
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="first-topic">
      <div class="first-topic-content">
        <div class="first-topic-box">
          <div class="first-topic-text">
            <h2>休憩設計</h2>
            <p>
              休憩座椅搭配音樂耳機功能，音樂主要是撥放助眠音樂，增加使用者放鬆。旁種植柳樹，當風吹拂時，發出稀疏聲，體驗自然聲音。
            </p>
            <p>
              露天休憩區位於水精靈區，連接庭園造景，景色宜人，暑氣全消，令人流連忘返、心曠神怡。水流動新增趣味性，不僅有視覺美感，而且水面蒸發配合海風，將冷空氣帶到下風處，降低氣溫。水引用木精靈區收集之雨水，循環利用。
            </p>
            <span>水流/體設計</span>
          </div>
          <div class="first-topic-img">
            <img src="../../img/water-theme/rest.jpg" alt="rest" />
          </div>
          <div class="first-topic-imgbox">
            <img src="../../img/water-theme/water.png" alt="water" />
            <span class="imgbox-text">太陽能板</span>
            <span class="imgbox-text">音樂</span>
            <span class="imgbox-text">音樂撥放器</span>
            <span class="imgbox-text">抽水馬達</span>
            <span class="imgbox-text">水循環系統</span>
            <span class="imgbox-text">雨水儲蓄池/水池</span>
          </div>
        </div>
      </div>
    </div>

    <div class="second-topic">
      <div class="second-topic-content">
        <div class="second-topic-box">
          <div class="second-topic-text">
            <h2>水元素音樂</h2>
            <p>
              水滴，是小量的水體，能以任何形態出現。一支簡單的垂直管狀物體，慢慢流動液體到末端，便形成最容易出現的水滴。當氣態水份遇上冰冷的物體表面，冷凝作用便會發生，過度冷卻水蒸氣，霧化成水滴，結露的現象也是由於冷凝作用的關係。
            </p>
            <p>
              池塘又稱池溏，也有地方方言稱為地塘、埤塘、陂塘。池塘是指比湖泊小的水體。界定池塘和湖泊的方法頗有爭議性。一般而言，池塘是小得不需使用船隻而多採竹筏渡過的。另一個定義則是可以讓人在不被水全淹的情況下安全橫過，或者水淺得陽光能夠直達塘底。
            </p>
            <p>
              瀑布（waterfall），指河流或溪水經過河床縱斷面的顯著陡坡或懸崖處時，成垂直或近乎垂直地傾瀉而下的水流景象。波浪、波濤是發生在各種水體（海水上的又叫海浪）表面上的表面波，即沿著水與空氣界面間傳行的一種波動，屬於重力波的一種類型。當風吹起時，風所帶來的壓力及摩擦力對海洋表面的平衡態產生擾動，一些能量自風轉移到水上。水能夠自風得到能量是因為兩者間的摩擦力，使得表面粒子以橢圓式運動移動著，這種橢圓式運動是縱波（往覆運動）與橫波（上下運動）所合成。波浪的波動有隨機性；因為海面的風速、風向隨時隨地變化，所以波浪通常是雜亂無章的，其波高、波長和周期都為隨機量。
            </p>
          </div>
          <div class="second-topic-img">
            <div class="second-topic-img-box">
              <div class="second-topic-img-left">
                <img src="../../img/water-theme/img1.jpg" alt="img1" />
              </div>
              <div class="second-topic-img-right">
                <img src="../../img/water-theme/img2.jpg" alt="img2" />
                <img src="../../img/water-theme/img3.jpg" alt="img3" />
              </div>
            </div>
            <div class="second-topic-img-box">
              <div class="second-topic-img-left">
                <img src="../../img/water-theme/img4.jpg" alt="img4" />
              </div>
              <div class="second-topic-img-right">
                <img src="../../img/water-theme/img5.jpg" alt="img5" />
                <img src="../../img/water-theme/img6.jpg" alt="img6" />
              </div>
            </div>
            <div class="second-topic-img-box">
              <div class="second-topic-img-left">
                <img src="../../img/water-theme/img7.jpg" alt="img7" />
              </div>
              <div class="second-topic-img-right">
                <img src="../../img/water-theme/img8.jpg" alt="img8" />
                <img src="../../img/water-theme/img9.jpg" alt="img9" />
              </div>
            </div>
          </div>
          <span>打造水元素創意，與水共舞，體驗水世界之巧妙。</span>
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
  border-bottom: 0.2rem solid #00b7e4;
}
.text-box:nth-of-type(1) ~ .text-box::before {
  background: repeating-linear-gradient(
    90deg,
    #00b7e4 0,
    #00b7e4 3%,
    transparent 3%,
    transparent 4%
  );
}
.first-topic-text h2 {
  border-bottom: 0.2rem solid #00b7e4;
}
.imgbox-text:nth-of-type(1) {
  top: 18%;
  right: 40%;
}
.imgbox-text:nth-of-type(2) {
  top: 32%;
  right: 20%;
}
.imgbox-text:nth-of-type(3) {
  top: 35%;
  right: 67%;
}
.imgbox-text:nth-of-type(4) {
  top: 55%;
  right: 67%;
}
.imgbox-text:nth-of-type(5) {
  top: 55%;
  right: 7%;
}
.imgbox-text:nth-of-type(6) {
  top: 80%;
  right: 50%;
}
.imgbox-text:nth-of-type(5)::before {
  content: "⇙";
  color: teal;
  font-size: 50px;
  position: absolute;
  right: 50%;
  top: 100%;
}
.second-topic-text h2 {
  border-bottom: 0.2rem solid #00b7e4;
}
.second-topic-box span::before {
  background-color: #00b7e4;
}
.second-topic-box span::after {
  background-color: #00b7e4;
}
@media screen and (min-width: 768px) {
  .imgbox-text:nth-of-type(3) {
    top: 35%;
  }
}
</style>
