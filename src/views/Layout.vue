<script setup>
import "../javascript/header-nav.js";
import "../javascript/menu-onclick.js";
import "../javascript/layout-map.js";
</script>
<template>
  <article>
    <div class="title">
      <h1>園區導覽</h1>
      <h2>Park Layout</h2>
    </div>
    <div class="layout">
      <div class="layout-content">
        <div class="breadcrumb">
          <RouterLink class="breadcrumb-item" to="/">首頁</RouterLink>
          <RouterLink class="breadcrumb-item" to="/layout">園區導覽</RouterLink>
        </div>
        <div class="layout-box">
          <div class="main-box">
            <div class="main">
              <h2>五大主題</h2>
            </div>
            <div class="btn-box">
              <div class="btn" id="btn_gold">
                <RouterLink to="/layout/theme-gold">
                  <div class="btn-img">
                    <img src="../img/layout/music-gold.png" alt="music-gold" />
                  </div>
                  <span>金精靈區</span>
                </RouterLink>
              </div>
              <div class="btn" id="btn_wood">
                <RouterLink to="/layout/theme-wood">
                  <div class="btn-img">
                    <img src="../img/layout/music-wood.png" alt="music-wood" />
                  </div>
                  <span>木精靈區</span>
                </RouterLink>
              </div>
              <div class="btn" id="btn_water">
                <RouterLink to="/layout/theme-water">
                  <div class="btn-img">
                    <img
                      src="../img/layout/music-water.png"
                      alt="music-water"
                    />
                  </div>
                  <span>水精靈區</span>
                </RouterLink>
              </div>
              <div class="btn" id="btn_fire">
                <RouterLink to="/layout/theme-fire">
                  <div class="btn-img">
                    <img src="../img/layout/music-fire.png" alt="music-fire" />
                  </div>
                  <span>火精靈區</span>
                </RouterLink>
              </div>
              <div class="btn" id="btn_terra">
                <RouterLink to="/layout/theme-terra">
                  <div class="btn-img">
                    <img
                      src="../img/layout/music-terra.png"
                      alt="music-terra"
                    />
                  </div>
                  <span>土精靈區</span>
                </RouterLink>
              </div>
            </div>
          </div>
          <div class="map-box">
            <img
              id="control-map"
              src="../img/layout/control-map.png"
              alt="control-map"
              usemap="#image-map"
            />
            <img
              class="all-theme"
              src="../img/layout/all-theme.png"
              alt="all-theme"
            />
            <map name="image-map">
              <area
                id="image_wood"
                coords="345,135,360,139,377,137,393,133,402,121,397,109,384,103,367,101,351,103,340,108,330,117,331,126,337,131"
                shape="poly"
              />
              <area
                id="image_fire"
                coords="367,120,601,154,616,190,610,208,619,222,615,231,635,283,621,306,626,321,647,330,633,351,226,271"
                shape="poly"
              />
              <area
                id="image_terra"
                coords="233,270,364,125,347,120,155,123,133,130,117,152,94,109,78,105,55,116,47,129,73,170,53,172,29,199,29,209,32,217,19,226"
                shape="poly"
              />
              <area
                id="image_water"
                coords="415,53,372,117,347,126,156,124,163,106,193,88,201,60,198,45,206,40,230,41,287,41,343,39"
                shape="poly"
              />
              <area
                id="image_gold"
                coords="370,117,414,55,441,55,445,25,452,23,455,11,465,11,466,21,479,24,477,57,485,57,484,75,492,74,493,65,511,67,513,53,541,57,540,70,543,79,552,91,562,91,561,104,565,108,569,101,577,101,581,109,603,157,391,125"
                shape="poly"
              />
              <img
                class="map"
                id="map_wood"
                src="../img/layout/wood-theme.png"
                alt="wood-theme"
              />
              <img
                class="map"
                id="map_fire"
                src="../img/layout/fire-theme.png"
                alt="fire-theme"
              />
              <img
                class="map"
                id="map_gold"
                src="../img/layout/gold-theme.png"
                alt="gold-theme"
              />
              <img
                class="map"
                id="map_water"
                src="../img/layout/water-theme.png"
                alt="water-theme"
              />
              <img
                class="map"
                id="map_terra"
                src="../img/layout/terra-theme.png"
                alt="terra-theme"
              />
              <img
                id="control-map2"
                src="../img/layout/control-map.png"
                alt="control-map"
              />
              <span class="text" id="text_terra">石子聲/鋪面設施</span>
              <span class="text" id="text_wood">青蛙、竹子聲/能源設施</span>
              <span class="text" id="text_gold">鳥聲/音樂設施</span>
              <span class="text" id="text_water">水聲/休憩設施</span>
              <span class="text" id="text_fire">人群聲/筑景館</span>
              <RouterLink to="/layout/theme-terra"
                ><span class="text3" id="text_terra2"
                  >土精靈區</span
                ></RouterLink
              >
              <RouterLink to="/layout/theme-wood"
                ><span class="text2" id="text_wood2">木精靈區</span></RouterLink
              >
              <RouterLink to="/layout/theme-gold"
                ><span class="text3" id="text_gold2">金精靈區</span></RouterLink
              >
              <RouterLink to="/layout/theme-water"
                ><span class="text3" id="text_water2"
                  >水精靈區</span
                ></RouterLink
              >
              <RouterLink to="/layout/theme-fire"
                ><span class="text3" id="text_fire2">火精靈區</span></RouterLink
              >
            </map>

            <div class="compass">
              <img src="../img/layout/compass.png" alt="compass" />
            </div>
            <div class="knowledge">
              <h3>學習天地</h3>
              <div class="knowledge-text">
                <div class="knowledge-text-box">
                  <RouterLink to="/knowledge/nature">知識庫(1)</RouterLink>
                  <p>自然篇</p>
                  <p>自然聲音/ 鄉村雨聲/ 水之聆聽</p>
                </div>
                <div class="knowledge-text-box">
                  <RouterLink to="/knowledge/urban">知識庫(2)</RouterLink>
                  <p>都市篇</p>
                  <p>都市噪音/ 都市音樂/ 乾淨能源</p>
                </div>
                <div class="knowledge-text-box">
                  <RouterLink to="/knowledge/UHI">知識庫(3)</RouterLink>
                  <p>番外篇</p>
                  <p>都市熱島/ 植栽/ 水體/ 鋪面</p>
                </div>
              </div>
              <div class="knowledge-mascot">
                <img src="../img/layout/mascot(4).png" alt="/mascot(4)" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="backimg">
      <img src="../img/layout/background.jpg" alt="background" />
    </div>
  </article>
</template>

<style lang="scss" scoped>
.title {
  margin-top: 0.5rem;
  padding: 5.5rem 0 1.5rem;
  position: relative;
}
.title h1 {
  color: #000;
  font-family: "華康墨字體";
  font-size: 1.4rem;
  text-align: center;
  margin-top: -1.5rem;
}
.title h2 {
  color: #000;
  font-family: "華康墨字體";
  font-size: 1rem;
  text-align: center;
  opacity: 0.9;
}
.layout {
  max-width: 1180px;
  width: 100%;
  margin: 0 auto;
}
.layout-content {
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
}
.breadcrumb {
  width: 100%;
  display: flex;
  margin-top: 0.5rem;
  margin-left: 0.5rem;
}
.breadcrumb-item {
  color: #ffffff8a;
  font-family: "華康中圓體";
  font-size: 0.6rem;
}
.breadcrumb-item + .breadcrumb-item::before {
  content: " / ";
}
.layout-box {
  width: 100%;
  margin: 1.5rem 0;
  border-radius: 10px;
  display: flex;
  flex-wrap: wrap;
}
.main-box {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0.6rem;
  box-sizing: border-box;
  background: rgba(255, 255, 255, 0.7);
  z-index: 1;
}
.main h2 {
  color: teal;
  font-family: "華康墨字體";
  font-size: 1.4rem;
  border-bottom: 0.1rem solid rgba(0, 128, 128, 0.7);
  margin-top: 1.5rem;
}
.btn-box {
  position: relative;
  width: 100%;
  height: 4rem;
}
.btn {
  border: 0.1rem solid rgba(0, 128, 128, 0.5);
  border-radius: 0.2rem;
  text-align: right;
  margin-top: 0.5rem;
  cursor: pointer;
}
.btn span {
  display: inline-block;
  color: teal;
  font-family: "華康中圓體";
  font-size: 0.7rem;
  text-align: center;
  writing-mode: vertical-lr;
  padding: 1.4rem 0.6rem 0.4rem;
}
.btn:hover {
  border: 0.1rem solid #00c234;
  background: rgba(255, 255, 255, 0.4);
}
.btn:hover span {
  color: #00c234;
}
#btn_gold {
  position: absolute;
  left: 2%;
  top: 20%;
}
#btn_wood {
  position: absolute;
  left: 23%;
  top: 20%;
}
#btn_water {
  position: absolute;
  left: 44%;
  top: 20%;
}
#btn_fire {
  position: absolute;
  left: 65%;
  top: 20%;
}
#btn_terra {
  position: absolute;
  left: 85%;
  top: 20%;
}
.btn-img {
  width: 60%;
  position: absolute;
  transform: translate(-50%, -50%);
  left: 50%;
  top: 10%;
}
.btn-img img {
  width: 100%;
}
.map-box {
  width: 100%;
  height: 38rem;
  position: relative;
  background: rgba(255, 255, 255, 0.7);
  box-sizing: border-box;
}
.map-box img {
  width: 270px;
  vertical-align: top;
  margin: auto;
}
map {
  position: absolute;
  transform: translateX(-50%);
  top: 15%;
  left: 50%;
}
#control-map {
  position: absolute;
  transform: translateX(-50%);
  top: 15%;
  left: 50%;
  z-index: 100;
}
.all-theme {
  position: absolute;
  transform: translateX(-50%);
  top: 15%;
  left: 50%;
}
.map-box .map {
  display: none;
}
.text {
  font-family: "華康中圓體";
  font-size: 0.7rem;
  display: none;
  position: relative;
  z-index: 2;
}
.text::after {
  content: "";
  height: 70px;
  width: 2px;
  background-color: #000;
  position: absolute;
  transform: translateX(-50%);
  top: 130%;
  left: 50%;
  z-index: 2;
}
.text::before {
  content: "";
  height: 10px;
  width: 10px;
  border-radius: 50%;
  background-color: #000;
  transform: translateX(-50%);
  position: absolute;
  top: 560%;
  left: 50%;
  z-index: 2;
}
#text_gold {
  color: #ffc909;
  position: absolute;
  top: -32%;
  right: 14%;
}
#text_wood {
  color: #46a12b;
  position: absolute;
  top: -26%;
  right: 17%;
}
#text_water {
  color: #00b7e4;
  position: absolute;
  top: -35%;
  right: 38%;
}
#text_fire {
  color: #ea0000;
  position: absolute;
  top: -10%;
  right: 23%;
}
#text_terra {
  color: #d64d00;
  position: absolute;
  top: -12%;
  right: 42%;
}
.text2 {
  font-family: "華康中圓體";
  font-size: 0.7rem;
  padding: 0.1rem;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 0.2rem;
  position: relative;
  z-index: 2;
}
.text3 {
  font-family: "華康中圓體";
  font-size: 0.7rem;
  padding: 0.1rem;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 0.2rem;
  position: relative;
  z-index: 2;
}
.text2::after {
  content: "";
  height: 60px;
  width: 0.5px;
  background-color: #000;
  position: absolute;
  transform: translateX(-50%);
  top: 100%;
  left: 50%;
  z-index: 2;
}
.text2::before {
  content: "";
  height: 5px;
  width: 5px;
  border-radius: 50%;
  background-color: #000;
  transform: translateX(-50%);
  position: absolute;
  top: 420%;
  left: 50%;
  z-index: 2;
}
#text_gold2 {
  color: #ffc909;
  position: absolute;
  top: 12%;
  right: 12%;
}
#text_wood2 {
  color: #46a12b;
  position: absolute;
  top: -22%;
  right: 34%;
}
#text_water2 {
  color: #00b7e4;
  position: absolute;
  top: 0;
  right: 46%;
}
#text_fire2 {
  color: #ea0000;
  position: absolute;
  top: 50%;
  right: 23%;
}
#text_terra2 {
  color: #d64d00;
  position: absolute;
  top: 32%;
  right: 58%;
}
.compass {
  width: 5rem;
  position: absolute;
  bottom: 61%;
  left: 10%;
  opacity: 0.5;
}
.compass img {
  width: 100%;
}
.knowledge {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  position: absolute;
  transform: translateX(-50%);
  bottom: 5%;
  left: 50%;
}
.knowledge h3 {
  display: inline;
  color: teal;
  font-family: "華康墨字體";
  font-size: 1.4rem;
  border-bottom: 0.1rem solid rgba(0, 128, 128, 0.7);
  margin: 0 auto 1rem;
}
.knowledge-text {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
.knowledge-text-box {
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 0.5rem;
  padding: 0.5rem;
  box-sizing: border-box;
  border: 0.1rem solid rgba(0, 128, 128, 0.1);
}
.knowledge-text-box a {
  color: teal;
  font-family: "華康中圓體";
  text-align: center;
  font-size: 0.7rem;
  padding: 0.4rem 1rem;
  border: 0.1rem solid teal;
  border-radius: 0.1rem;
}
.knowledge-text-box a:hover {
  color: #00c234;
  border: 0.1rem solid #00c234;
  background-color: rgba(255, 255, 255, 0.7);
}
.knowledge-text-box p {
  width: 100%;
  color: #000000a1;
  font-family: "華康中圓體";
  font-size: 0.6rem;
  text-align: center;
  line-height: 0.4rem;
  margin-top: 0.5rem;
}
.knowledge-mascot {
  position: absolute;
  top: 0;
  left: 75%;
}
.knowledge-mascot img {
  width: 2rem;
}
.backimg {
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: -1;
}
.backimg img {
  width: 241400%;
  opacity: 0.9;
  vertical-align: top;
}
@media screen and (min-width: 414px) {
  html {
    font-size: 22px;
  }
  .layout-content {
    width: 90%;
  }
  .breadcrumb {
    margin-left: 0;
  }
  #btn_gold {
    left: 9%;
  }
  #btn_wood {
    left: 28%;
  }
  #btn_water {
    left: 47%;
  }
  #btn_fire {
    left: 66%;
  }
  #btn_terra {
    left: 85%;
  }
  .map-box img {
    width: 370px;
  }
  .map-box {
    height: 39rem;
  }
  .text::after {
    height: 100px;
  }
  .text::before {
    top: 760%;
  }
  #text_gold {
    top: -28%;
    right: 16%;
  }
  #text_wood {
    top: -25%;
    right: 22%;
  }
  #text_water {
    top: -35%;
  }
  .text2::after {
    height: 80px;
    width: 1px;
  }
  .text2::before {
    height: 7px;
    width: 7px;
    top: 500%;
  }
  #text_wood2 {
    top: -17%;
    right: 35%;
  }
  .compass {
    bottom: 58%;
  }
  .compass img {
    width: 100%;
  }
  .knowledge-mascot {
    left: 68%;
  }
  .knowledge-mascot img {
    width: 2rem;
  }
}
@media screen and (min-width: 640px) {
  .breadcrumb-item {
    font-size: 0.5rem;
  }
  .btn {
    width: 15%;
    box-shadow: 0 0.3rem 0.05rem rgba(0, 122, 128, 0.5);
    transition: top 0.2s, box-shadow 0.3s;
  }
  .btn span {
    font-size: 0.6rem;
    writing-mode: horizontal-tb;
    padding: 0.5rem 0.6rem;
  }
  .btn:hover {
    border: 0.1rem solid rgba(0, 128, 128, 0.5);
    background: 0 0;
  }
  #btn_gold {
    left: 4%;
  }
  #btn_wood {
    left: 23%;
  }
  #btn_water {
    left: 42%;
  }
  #btn_fire {
    left: 61%;
  }
  #btn_terra {
    left: 80%;
  }
  .btn-img {
    width: 25%;
    position: absolute;
    transform: translate(-50%, -50%);
    left: 0.2rem;
    top: 50%;
  }
  .btn-img img {
    width: 100%;
  }
  #btn_gold:hover {
    top: 34%;
    box-shadow: 0 0 0.3rem #ffc909, inset 0 0 0.3rem #ffc909;
    border: none;
  }
  #btn_wood:hover {
    top: 34%;
    box-shadow: 0 0 0.3rem #46a12b, inset 0 0 0.3rem #46a12b;
    border: none;
  }
  #btn_water:hover {
    top: 34%;
    box-shadow: 0 0 0.3rem #00b7e4, inset 0 0 0.3rem #00b7e4;
    border: none;
  }
  #btn_fire:hover {
    top: 34%;
    box-shadow: 0 0 0.3rem #ea0000, inset 0 0 0.3rem #ea0000;
    border: none;
  }
  #btn_terra:hover {
    top: 34%;
    box-shadow: 0 0 0.3rem #d64d00, inset 0 0 0.3rem #d64d00;
    border: none;
  }
  .map-box {
    height: 35rem;
  }
  map {
    top: 9%;
  }
  #control-map {
    top: 9%;
  }
  .all-theme {
    top: 9%;
  }
  .compass {
    bottom: 63%;
  }
  .compass img {
    width: 100%;
  }
  .knowledge-text-box a {
    font-size: 0.6rem;
    margin-bottom: 0.5rem;
    padding: 0.4rem 0.6rem;
    border: 0.1rem solid rgba(0, 128, 128, 0.5);
    border-radius: 0.2rem;
    box-shadow: 0 0.3rem 0.05rem rgba(0, 122, 128, 0.5);
    position: relative;
    transition: top 0.2s, box-shadow 0.3s;
  }
  .knowledge-text-box a:hover {
    box-shadow: 0 0 0.3rem teal, inset 0 0 0.3rem teal;
    border: none;
    background-color: transparent;
    top: 0.35rem;
    margin-top: 0.2rem;
  }
}
@media screen and (min-width: 768px) {
  .title {
    margin-top: 3rem;
  }
  .title h1 {
    margin-top: -1.8rem;
  }
  .btn-img {
    left: 0.8rem;
  }
  .map-box {
    height: 38rem;
  }
  .map-box img {
    width: 656px;
  }
  map {
    top: 14%;
  }
  #control-map {
    top: 14%;
  }
  .all-theme {
    top: 14%;
  }
  .text {
    font-size: 1rem;
  }
  .text::after {
    height: 150px;
  }
  .text::before {
    content: "";
    top: 800%;
  }
  #text_gold {
    top: -25%;
    right: 25%;
  }
  #text_wood {
    top: -18%;
    right: 27%;
  }
  #text_water {
    top: -25%;
    right: 45%;
  }
  #text_fire {
    top: 0;
    right: 30%;
  }
  #text_terra {
    top: -5%;
    right: 50%;
  }
  #control-map2 {
    display: none;
  }
  .text3 {
    display: none;
  }
  .text2 {
    display: none;
  }
  .compass {
    width: 7rem;
    bottom: 42%;
  }
  .compass img {
    width: 100%;
  }
  .knowledge-text-box {
    width: 30%;
    margin-top: 0.4rem;
  }
  .knowledge-text-box a {
    padding: 0.4rem 0.8rem;
  }
  .knowledge-mascot {
    position: absolute;
    top: -20%;
    left: 60%;
  }
  .knowledge-mascot img {
    width: 3rem;
  }
}
@media screen and (min-width: 1024px) {
  html {
    font-size: 24px;
  }
  .text::before {
    content: "";
    top: 730%;
  }
}
@media screen and (min-width: 1200px) {
  html {
    font-size: 27px;
  }
  .title {
    padding: 4.5rem 0 1.5rem;
  }
  .layout-box {
    flex-wrap: nowrap;
    box-shadow: 0.6rem 0.6rem 0.6rem rgba(0, 0, 0, 0.2);
    margin-bottom: 10rem;
  }
  .main-box {
    width: 30%;
    height: 630px;
    background: linear-gradient(
      to right,
      #fff 0,
      #e7e7e7 55%,
      #c3c3c2 80%,
      #9a9a9a 93%,
      #6e6c6d 99%,
      #444243 100%
    );
  }
  .btn-box {
    height: 18rem;
  }
  .btn {
    width: 50%;
  }
  #btn_gold {
    transform: translateX(-50%);
    left: 50%;
    top: 0;
  }
  #btn_wood {
    transform: translateX(-50%);
    left: 50%;
    top: 16%;
  }
  #btn_water {
    transform: translateX(-50%);
    left: 50%;
    top: 32%;
  }
  #btn_fire {
    transform: translateX(-50%);
    left: 50%;
    top: 48%;
  }
  #btn_terra {
    transform: translateX(-50%);
    left: 50%;
    top: 64%;
  }
  #btn_gold:hover {
    top: 2%;
  }
  #btn_wood:hover {
    top: 18%;
  }
  #btn_water:hover {
    top: 34%;
  }
  #btn_fire:hover {
    top: 50%;
  }
  #btn_terra:hover {
    top: 66%;
  }
  .map-box {
    width: 70%;
    height: auto;
    background: linear-gradient(
      to left,
      #fff 0,
      #e7e7e7 55%,
      #c3c3c2 80%,
      #9a9a9a 93%,
      #6e6c6d 99%,
      #444243 100%
    );
  }
  .map-box img {
    right: 5%;
  }
  map {
    top: 20%;
  }
  #control-map {
    top: 20%;
  }
  .all-theme {
    top: 20%;
  }
  .text::before {
    content: "";
    top: 680%;
  }
  #text_gold {
    right: 20%;
  }
  #text_wood {
    top: -20%;
    right: 23%;
  }
  #text_water {
    right: 40%;
  }
  #text_fire {
    right: 25%;
  }
  #text_terra {
    right: 45%;
  }
  .compass {
    bottom: 18%;
  }
  .compass img {
    width: 100%;
  }
  .knowledge {
    background-color: #c3d6d5;
    bottom: -30%;
    left: 55%;
    box-shadow: 0.6rem 0.6rem 0.6rem rgba(0, 0, 0, 0.2);
    padding: 1rem 0;
  }
  .knowledge-text-box {
    border: none;
    padding: 0;
  }
  .knowledge-text-box p {
    font-size: 0.5rem;
  }
}
@media screen and (min-width: 1536px) {
  html {
    font-size: 30px;
  }
  .title {
    margin-top: 5rem;
    padding: 3.8rem 0 1.5rem;
  }
  .text::before {
    content: "";
    top: 610%;
  }
  #text_wood {
    right: 20%;
  }
}
</style>
