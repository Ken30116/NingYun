<script setup>
import "../javascript/header-nav.js";
import "../javascript/menu-onclick.js";
</script>
<template>
  <article>
    <div class="title">
      <div class="title-backimg">
        <img
          src="../img/platform/music-platform-header.jpg"
          alt="music-platform-header"
        />
      </div>
      <div class="title-box">
        <h1>交流平台</h1>
        <h3>Platform</h3>
      </div>
    </div>
    <div class="main">
      <div class="platform-top">
        <div class="platform-top-box">
          <div class="breadcrumb">
            <RouterLink class="breadcrumb-item" to="/">首頁</RouterLink>
            <RouterLink class="breadcrumb-item" to="/platform"
              >交流平台</RouterLink
            >
          </div>
          <ul class="pagination">
            <li><a href="#">﹤</a></li>
            <li><a class="now" href="#">1</a></li>
            <li><a href="#">2</a></li>
            <li><a href="#">3</a></li>
            <li><a href="#">4</a></li>
            <li><a href="#">5</a></li>
            <li><a href="#">6</a></li>
            <li><a href="#">﹥</a></li>
          </ul>
        </div>
      </div>
      <div class="container-box">
        <div class="container">
          <div class="content-box">
            <div class="content-col">
              <div class="content-col-box">
                <RouterLink to="/platform/no1">
                  <div class="content">
                    <div class="img-box">
                      <img
                        src="../img/platform/natural-sound1.jpg"
                        alt="natural-sound1"
                      />
                    </div>
                    <div class="text-box">
                      <div class="text">
                        <h2>聆聽全球大自然聲音</h2>
                        <p>
                          鳥聲、蟲鳴與鈴聲、雨聲交織出屬於大自然的奏鳴曲。不同的聲音，也透露出不同的情感，大自然呈現出世間最美的音符！
                        </p>
                      </div>
                      <div class="mark">
                        <div class="people">
                          <img
                            src="../img/platform/people1.jpg"
                            alt="people1"
                          />
                          <span>許宜靜</span>
                        </div>
                        <div class="great">
                          <img
                            src="../img/platform/great-black.png"
                            alt="great-black"
                          />
                          <span>1.5萬</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </RouterLink>
              </div>
            </div>
          </div>
          <div class="con-backimg">
            <img
              src="../img/platform/natural-sound-background1.jpg"
              alt="natural-sound-background1"
            />
          </div>
        </div>
        <div class="container">
          <div class="content-box">
            <div class="content-col">
              <div class="content-col-box">
                <RouterLink to="/platform/no2">
                  <div class="content">
                    <div class="img-box">
                      <img src="../img/platform/draw1.jpg" alt="draw1" />
                    </div>
                    <div class="text-box">
                      <div class="text">
                        <h2>聲景錄大地，聆聽描繪環境的音符</h2>
                        <p>
                          聽是人最早覺醒的感官。聲音能將人從沉睡中喚醒，聆聽、理解。
                        </p>
                      </div>
                      <div class="mark">
                        <div class="people">
                          <img
                            src="../img/platform/people2.jpg"
                            alt="people2"
                          />
                          <span>黃于迪</span>
                        </div>
                        <div class="great">
                          <img
                            src="../img/platform/great-black.png"
                            alt="great-black"
                          />
                          <span>1.2萬</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </RouterLink>
              </div>
            </div>
          </div>
          <div class="con-backimg">
            <img src="../img/platform/draw-background1.jpg" alt="" />
          </div>
        </div>
        <div class="container">
          <div class="content-box">
            <div class="content-col">
              <div class="content-col-box">
                <RouterLink to="/platform/no3">
                  <div class="content">
                    <div class="img-box">
                      <img src="../img/platform/art1.jpg" alt="art1" />
                    </div>
                    <div class="text-box">
                      <div class="text">
                        <h2>構築藝術音樂因子教育與未來</h2>
                        <p>
                          近年教育課綱規定有音樂、美術等藝術相關領域課程，促使孩子學習更多元。
                        </p>
                      </div>
                      <div class="mark">
                        <div class="people">
                          <img
                            src="../img/platform/people3.jpg"
                            alt="people3"
                          />
                          <span>張書瑋</span>
                        </div>
                        <div class="great">
                          <img
                            src="../img/platform/great-black.png"
                            alt="great-black"
                          />
                          <span>1.1萬</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </RouterLink>
              </div>
            </div>
          </div>
          <div class="con-backimg">
            <img src="../img/platform/art-background1.jpg" alt="" />
          </div>
        </div>
        <div class="container">
          <div class="content-box">
            <div class="content-col">
              <div class="content-col-box">
                <RouterLink to="/platform/no4">
                  <div class="content">
                    <div class="img-box">
                      <img
                        src="../img/platform/motorcycle1.jpg"
                        alt="motorcycle1"
                      />
                    </div>
                    <div class="text-box">
                      <div class="text">
                        <h2>固定式高噪音車輛偵測攝影系統</h2>
                        <p>
                          科技執法區間測速系統引發不少爭議，下一階段就是「噪音偵測」相關系統。
                        </p>
                      </div>
                      <div class="mark">
                        <div class="people">
                          <img
                            src="../img/platform/people4.jpg"
                            alt="people4"
                          />
                          <span>洪伶茵</span>
                        </div>
                        <div class="great">
                          <img
                            src="../img/platform/great-black.png"
                            alt="great-black"
                          />
                          <span>9000</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </RouterLink>
              </div>
            </div>
          </div>
          <div class="con-backimg">
            <img
              src="../img/platform/motorcycle-background1.jpg"
              alt="motorcycle-background1"
            />
          </div>
        </div>
        <div class="container">
          <div class="content-box">
            <div class="content-col">
              <div class="content-col-box">
                <RouterLink to="/platform/no5">
                  <div class="content">
                    <div class="img-box">
                      <img
                        src="../img/platform/aircraft1.jpg"
                        alt="aircraft1"
                      />
                    </div>
                    <div class="text-box">
                      <div class="text">
                        <h2>降低噪音 造福住戶噪音防制區住戶</h2>
                        <p>
                          機場夜間噪音擾民，增加噪音防制費提等議題，邀集專業人士召開協調會。
                        </p>
                      </div>
                      <div class="mark">
                        <div class="people">
                          <img
                            src="../img/platform/people5.jpg"
                            alt="people5"
                          />
                          <span>趙慶木</span>
                        </div>
                        <div class="great">
                          <img
                            src="../img/platform/great-black.png"
                            alt="great-black"
                          />
                          <span>8000</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </RouterLink>
              </div>
            </div>
          </div>
          <div class="con-backimg">
            <img
              src="../img/platform/aircraft-background1.jpg"
              alt="aircraft-background1"
            />
          </div>
        </div>
      </div>

      <div class="platform-bottom">
        <div class="platform-bottom-box">
          <ul class="pagination">
            <li><a href="#">﹤</a></li>
            <li><a class="now" href="#">1</a></li>
            <li><a href="#">2</a></li>
            <li><a href="#">3</a></li>
            <li><a href="#">4</a></li>
            <li><a href="#">5</a></li>
            <li><a href="#">6</a></li>
            <li><a href="#">﹥</a></li>
          </ul>
        </div>
      </div>
    </div>
  </article>
</template>

<style lang="scss" scoped>
.title {
  position: relative;
}

.title-backimg {
  width: 100%;
  overflow: hidden;
}

.title-backimg img {
  width: 300%;
  margin-left: -144%;
  opacity: 0.9;
  vertical-align: top;
}

.title-box {
  position: absolute;
  transform: translate(-50%, -50%);
  bottom: 0;
  left: 50%;
}

.title-box h1 {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  color: #ffffff;
  font-family: "華康墨字體";
  font-size: 1.4rem;
  text-align: center;
}

.title-box h3 {
  color: #ffffff;
  font-family: "華康墨字體";
  font-size: 1rem;
  text-align: center;
  padding: 0 4rem;
}

.title-box h1::after {
  content: "";
  width: 2rem;
  height: 0.1rem;
  background-color: #ffffff;
  margin-left: 1rem;
  opacity: 0.2;
}

.title-box h1::before {
  content: "";
  width: 2rem;
  height: 0.1rem;
  background-color: #ffffff;
  margin-right: 1rem;
  opacity: 0.2;
}

.main {
  position: relative;
}

.platform-top {
  max-width: 1180px;
  width: 100%;
  background-color: rgba(0, 128, 128, 0.7);
}

.platform-top-box {
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
}

.breadcrumb {
  width: 100%;
  display: flex;
  margin-top: 0.5rem;
}

.breadcrumb-item {
  color: #ffffffc2;
  font-family: "華康中圓體";
  font-size: 0.5rem;
}

.breadcrumb-item + .breadcrumb-item::before {
  content: " / ";
}

.pagination {
  display: flex;
  margin: 0.7rem auto;
}

.pagination:nth-of-type(1) {
  top: 0;
  right: 0;
}

.pagination:nth-of-type(2) {
  bottom: 0;
  right: 0;
}

.pagination li {
  display: inline;
  margin: 0.1rem;
}

.pagination li a {
  display: inline-block;
  color: #ffffff;
  font-family: "華康中圓體";
  font-size: 0.8rem;
  padding: 0 0.2rem;
  border-radius: 10%;
}

.pagination li a:hover {
  background-color: #24ff00;
  opacity: 1;
}

.now {
  background-color: #008080;
  opacity: 1;
}

.container {
  display: flex;
  flex-wrap: wrap;
}

.con-backimg {
  display: none;
}

.content-box {
  width: 100%;
  background-color: rgba(0, 128, 128, 0.7);
}

.content-col {
  max-width: 1180px;
  margin: 0 auto;
}

.content-col-box {
  width: 90%;
  margin: 0 auto;
  position: relative;
}

.container:nth-child(even) .content-box {
  background-color: rgba(0, 0, 0, 0.7);
}

.content {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin: 1rem 0;
  padding: 0.6rem 1rem;
  box-sizing: border-box;
  background-color: #ffffff;
  border-radius: 2% 100% 2% 100%/100% 4% 100% 4%;
  box-shadow: 0.3rem 0.3rem 0.15rem rgba(0, 0, 0, 0.1);
  transform: skew(-1deg);
}

.img-box {
  width: 100%;
  border-radius: 3% 100% 3% 100%/100% 4% 100% 4%;
  box-shadow: inset 0.3rem 0.3rem 0.15rem rgba(0, 0, 0, 0.2);
  overflow: hidden;
}

.img-box img {
  width: 100%;
  border-radius: 2% 100% 2% 100%/100% 4% 100% 4%;
  position: relative;
  z-index: -1;
  vertical-align: top;
}

.text-box {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  padding: 0.3rem 0.6rem;
  box-sizing: border-box;
  transform: skew(1deg);
}

.text h2 {
  color: #000000e1;
  font-family: "華康墨字體";
  font-size: 1rem;
  text-align: justify;
  margin-bottom: 0.3rem;
}

.text p {
  color: #000000a1;
  font-family: "華康中圓體";
  font-size: 0.7rem;
  line-height: 1.2rem;
  letter-spacing: 0.05rem;
  text-align: justify;
}

.mark {
  display: flex;
  justify-content: space-between;
  flex-grow: 1;
  margin-top: 0.3rem;
  padding: 0px 0.3rem;
}

.people {
  display: flex;
  align-items: center;
}

.people img {
  width: 1.2rem;
  border-radius: 50%;
}

.people span {
  color: #000000a1;
  font-family: "華康中圓體";
  font-size: 0.6rem;
  margin-left: 0.3rem;
}

.great {
  display: flex;
  align-items: center;
}

.great img {
  width: 1rem;
}

.great span {
  color: #000000a1;
  font-family: "華康中圓體";
  font-size: 0.6rem;
  margin-left: 0.3rem;
}

.platform-bottom {
  max-width: 1180px;
  width: 100%;
  background-color: rgba(0, 128, 128, 0.7);
}

.platform-bottom-box {
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: flex-end;
}

@media screen and (min-width: 414px) {
  html {
    font-size: 22px;
  }

  .mark {
    justify-content: flex-end;
  }

  .people {
    margin-right: 1rem;
  }
}
@media screen and (min-width: 768px) {
  .title-backimg img {
    width: 100%;
    margin-left: 0;
  }

  .title-box h3 {
    padding: 0;
  }

  .title-box h1::after {
    width: 4rem;
  }

  .title-box h1::before {
    width: 4rem;
  }

  .text p {
    font-size: 0.6rem;
    line-height: 1rem;
  }

  .platform-top {
    max-width: 1180px;
    width: 100%;
    background-color: transparent;
    position: absolute;
    transform: translateX(-50%);
    top: 0;
    left: 50%;
    z-index: 1;
  }

  .platform-top-box {
    width: 90%;
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
  }

  .breadcrumb {
    width: auto;
  }

  .pagination {
    display: flex;
    justify-content: flex-end;
    margin: 1rem 0;
  }

  .container {
    justify-content: flex-start;
  }

  .con-backimg {
    display: block;
    height: 17rem;
    margin-top: -17rem;
  }

  .con-backimg img {
    height: 100%;
  }

  .container:nth-child(even) {
    justify-content: flex-end;
  }

  .content-box {
    clip-path: polygon(35% 0%, 100% 0%, 100% 100%, 20% 100%);
    height: 17rem;
  }

  .content-col {
    height: 17rem;
  }

  .content-col-box {
    height: 100%;
  }

  .container:nth-child(even) .content-box {
    clip-path: polygon(0% 0%, 80% 0%, 65% 100%, 0% 100%);
  }

  .content {
    width: 23.3rem;
    height: 9.3rem;
    flex-wrap: nowrap;
    margin: 0;
    padding: 0.6rem 0px 0.6rem 1rem;
    box-sizing: content-box;
    position: absolute;
    bottom: 19%;
    right: 0;
  }

  .container:nth-child(even) .content-box .content .img-box {
    order: 2;
  }

  .container:nth-child(even) .content-box .content {
    padding: 0.6rem 1rem 0.6rem 0rem;
    left: 0;
  }

  .img-box {
    width: 60%;
  }

  .img-box img {
    width: auto;
    height: 100%;
  }

  .text-box {
    width: 40%;
  }

  .platform-bottom {
    max-width: 1180px;
    width: 100%;
    background-color: transparent;
    position: absolute;
    transform: translateX(-50%);
    bottom: 0;
    left: 50%;
    z-index: 2;
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
