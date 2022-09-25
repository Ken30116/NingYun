<script setup>
import "../../javascript/header-nav.js";
import "../../javascript/menu-onclick.js";
import "../../javascript/message.js";
import "../../javascript/img360.js";
</script>
<template>
  <article>
    <div class="main">
      <div class="main_img">
        <img src="../../img/platform_no5/airport1.jpg" alt="/airport1" />
      </div>
      <div class="main-text">
        <div class="main-text-title">
          <h1>降低噪音 造福住戶噪音防制區住戶</h1>
          <p>
            機場夜間噪音擾民，增加噪音防制費提等議題，邀集專業人士召開協調會。
          </p>
        </div>
      </div>
      <div class="main-content">
        <div class="main-content-box">
          <div class="main-text-bottom">
            <div class="breadcrumb">
              <RouterLink class="breadcrumb-item" to="/">首頁</RouterLink>
              <RouterLink class="breadcrumb-item" to="/platform"
                >交流平台</RouterLink
              >
              <RouterLink class="breadcrumb-item" to="/platform/no3"
                >降低噪音 造福住戶噪音防制區住戶</RouterLink
              >
            </div>
            <div class="main-text-box">
              <div class="box">
                <h3>飛機</h3>
                <p>飛機轟巄巄聲，吵雜聲音影響住戶。</p>
              </div>
              <div class="box">
                <h3>住戶</h3>
                <p>住戶內老人家無法接受噪音，引響心理作用。</p>
              </div>
              <div class="box">
                <h3>噪音</h3>
                <p>噪音易造成身心理健康，使情緒不穩。</p>
              </div>
              <div class="box">
                <h3>防制</h3>
                <p>繪製噪音管制地圖，分為三類。</p>
              </div>
            </div>
            <p>
              國際機場夜間航班噪音擾民，以及增加噪音防制費提撥額度等議題，邀集地方各級民代召開協調會。希望交通部能正視民意，研議修法提高飛機降落費徵收費率，及增加航空噪音防制費提撥比例，同時也希望所有縣籍立委一起來幫忙推動。
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="first-topic">
      <div class="first-topic-box">
        <div class="first-topic-imgbox">
          <div class="imgbox blankbox"></div>
          <div class="imgbox blankbox"></div>
          <div class="imgbox linebox"></div>
          <div class="imgbox">
            <img src="../../img/platform_no5/img1.jpg" alt="img1" />
          </div>
          <div class="imgbox">
            <img src="../../img/platform_no5/img2.jpg" alt="img2" />
          </div>
          <div class="imgbox textbox">
            <span>噪音迫害</span>
          </div>
          <div class="imgbox">
            <img src="../../img/platform_no5/img3.jpg" alt="img3" />
          </div>
          <div class="imgbox">
            <img src="../../img/platform_no5/img4.jpg" alt="img4" />
          </div>
          <div class="imgbox">
            <img src="../../img/platform_no5/img5.jpg" alt="img5" />
          </div>
        </div>
        <div class="first-topic-con">
          <div class="first-topic-img">
            <img src="../../img/platform_no5/airport2.jpg" alt="airport2" />
          </div>
          <div class="first-topic-text">
            <h2>噪音影響</h2>
            <p>
              車輛和飛機的轟鳴聲，甚至電話鈴聲會有害於人體健康。現在，科學家們開始研究這些噪音是如何對我們身體造成影響。德國最繁忙的法蘭克福機場2011年建成第四條跑道。但新跑道剛落成即引發了大規模抗議活動，此後10年抗議者每周星期一必來此示威。一位抗議者在新建一年後的一次抗議中告訴路透社「這條跑道毀了我的生活。每當走進我的花園，聽到看到的都是在我頭頂掠過的飛機。」
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="second-topic">
      <div class="second-topic-box">
        <div class="second-topic-span">
          <span>黑科技</span>
        </div>
        <div class="second-topic-img">
          <img src="../../img/platform_no5/airport3.jpg" alt="airport3" />
        </div>
        <div class="second-topic-text">
          <h2>「空中計程車」有譜 未來黑科技</h2>
          <p>
            但無論它飛得多快，也只是飛行器，並不適用城市空中交通。怎樣的飛行器才可用於城市公共交通呢？安全：乘客的人身安全永遠放在首位。安靜：城市空中交通工具需不打擾他人，安靜運行。經濟：如果想成為日常通勤方式，控制成本極為重要。這樣的飛行器有了嗎？還真有了。
          </p>
        </div>
      </div>
    </div>

    <div class="message">
      <div class="message-box">
        <h2>留言區</h2>
        <div class="mark">
          <div class="people">
            <img src="../../img/platform_no5/people5.jpg" alt="people5" />
            <span>趙慶木</span>
          </div>
          <div class="frequency">
            <span>觀看次數: </span>
            <number>8,000</number>
          </div>
          <div class="time">
            <span>發表日期: </span>
            <number>2021/07/01</number>
          </div>
          <div class="number">
            <span>留言數: </span>
            <number>2</number>
          </div>
          <div class="great">
            <img
              src="../../img/platform_no1/great-black.png"
              alt="great-black"
            />
            <span>8,000</span>
          </div>
        </div>
        <div class="user">
          <label id="spokesman"
            >發言人
            <input type="text" id="name" value="匿名" required />
            (可更改名稱)</label
          >
          <textarea id="user-text" placeholder="新增公開留言..."></textarea>
          <div class="btn">
            <input id="cancel" type="button" value="取消" />
            <input id="send" type="button" value="送出" />
          </div>
          <div id="result"></div>
        </div>
      </div>
    </div>

    <div class="recommend">
      <div class="recommend-content">
        <h2>推薦文章</h2>
        <div class="recommend-box">
          <RouterLink to="/platform/no1">
            <div class="recommend-text">
              <div class="recommend-text-box">
                <div class="recommend-text-img">
                  <img
                    src="../../img/platform_no5/natural-sound1.jpg"
                    alt="natural-sound1"
                  />
                </div>
                <h3>聆聽全球大自然聲音</h3>
                <p>
                  鳥聲、蟲鳴與鈴聲、雨聲交織出屬於大自然的奏鳴曲。不同的聲音，也透露出不同的情感，大自然呈現出世間最美的音符！
                </p>
              </div>
              <span>-許宜靜</span>
            </div>
          </RouterLink>
          <RouterLink to="/platform/no2">
            <div class="recommend-text">
              <div class="recommend-text-box">
                <div class="recommend-text-img">
                  <img src="../../img/platform_no5/draw1.jpg" alt="art1" />
                </div>
                <h3>聲景錄大地，聆聽描繪環境的音符</h3>
                <p>
                  聽是人最早覺醒的感官。聲音能將人從沉睡中喚醒，聆聽、理解。
                </p>
              </div>
              <span>-黃于迪</span>
            </div>
          </RouterLink>
          <RouterLink to="/platform/no3">
            <div class="recommend-text">
              <div class="recommend-text-box">
                <div class="recommend-text-img">
                  <img src="../../img/platform_no5/art1.jpg" alt="art1" />
                </div>
                <h3>構築藝術音樂因子教育與未來</h3>
                <p>
                  近年教育課綱規定有音樂、美術等藝術相關領域課程，促使孩子學習更多元。
                </p>
              </div>
              <span>-張書瑋</span>
            </div>
          </RouterLink>
          <RouterLink to="/platform/no4">
            <div class="recommend-text">
              <div class="recommend-text-box">
                <div class="recommend-text-img">
                  <img
                    src="../../img/platform_no5/motorcycle1.jpg"
                    alt="motorcycle1"
                  />
                </div>
                <h3>固定式高噪音車輛偵測攝影系統</h3>
                <p>
                  科技執法區間測速系統引發不少爭議，下一階段就是「噪音偵測」相關系統。
                </p>
              </div>
              <span>-洪伶茵</span>
            </div>
          </RouterLink>
        </div>
      </div>
    </div>
  </article>
  <div class="backimg">
    <img src="../../img/home/background.jpg" alt="" />
  </div>
</template>

<style lang="scss" scoped>
.main {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.main_img {
  width: 100%;
  overflow: hidden;
}
.main_img img {
  width: 200%;
  margin-left: -50%;
  vertical-align: top;
}
.main-text {
  width: 90%;
  margin-top: -50%;
}
.main-text-title {
  width: 100%;
  padding: 0.3rem 0.6rem;
  box-sizing: border-box;
  background-color: rgba(0, 128, 128, 0.5);
  position: relative;
  z-index: 1;
}
.main-text-title h1 {
  color: #fff;
  font-family: "華康墨字體";
  font-size: 1.4rem;
  text-align: center;
  margin: 0 auto;
  padding: 0.3rem 0;
}
.main-text-title p {
  color: #ffffffe8;
  font-family: "華康中圓體";
  font-size: 0.6rem;
  text-align: justify;
  line-height: 1rem;
  letter-spacing: 0.05rem;
}
.main-content {
  max-width: 1180px;
  margin: 0 auto 1.5rem;
}
.main-content-box {
  width: 90%;
  margin: 0 auto;
}
.breadcrumb {
  width: 100%;
  display: flex;
  margin-top: 0.5rem;
}
.breadcrumb-item {
  color: #0000003d;
  font-family: "華康中圓體";
  font-size: 0.5rem;
}
.breadcrumb-item + .breadcrumb-item::before {
  content: " / ";
}
.main-text-box {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 1.5rem;
}
.box {
  width: 48%;
  box-sizing: border-box;
}
.box h3 {
  color: #000000e1;
  font-family: "華康墨字體";
  font-size: 1rem;
  margin-bottom: 0.3rem;
}
.box:nth-of-type(1) h3::after {
  content: "𓆦~~";
  color: teal;
}
.box:nth-of-type(2) h3::after {
  content: "𓅃~~";
  color: teal;
}
.box:nth-of-type(3) h3::after {
  content: "༄";
  color: teal;
}
.box:nth-of-type(4) h3::after {
  content: "☂";
  color: teal;
}
.box p {
  padding-bottom: 0.6rem;
}
.main-text-bottom p {
  color: #000000a1;
  font-family: "華康中圓體";
  font-size: 0.7rem;
  text-align: justify;
  line-height: 1.2rem;
  letter-spacing: 0.05rem;
}
.first-topic {
  max-width: 1180px;
  margin: 0 auto 3.5rem;
}
.first-topic-box {
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
}
.first-topic-imgbox {
  width: 90vw;
  height: 90vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-content: space-evenly;
  order: 1;
}
.imgbox {
  width: 30%;
  height: 30%;
  cursor: pointer;
  transition: all 2s;
}
.imgbox:nth-of-type(1) {
  order: -2;
}
.imgbox:nth-of-type(3) {
  order: -2;
}
.imgbox:nth-of-type(4) {
  order: -1;
}
.imgbox:nth-of-type(5) {
  order: -1;
}
.imgbox:nth-of-type(6) {
  order: -2;
}
.imgbox img {
  width: 100%;
}
.blankbox {
  background-color: rgba(255, 255, 255, 0.4);
}
.linebox {
  position: relative;
  background-color: rgba(255, 255, 255, 0.4);
}
.linebox::after {
  content: "";
  width: 100%;
  height: 0.05rem;
  background-color: rgba(0, 0, 0, 0.3);
  position: absolute;
  transform: translateY(-50%);
  top: 50%;
  right: 0;
}
.textbox {
  background-color: rgba(255, 255, 255, 0.4);
  display: flex;
}
.textbox span {
  color: #000000a1;
  font-family: "華康墨字體";
  font-size: 0.9rem;
  margin: auto;
}
.first-topic-con {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}
.first-topic-img {
  width: 100%;
  margin-top: 1.5rem;
}
.first-topic-img img {
  width: 100%;
}
.first-topic-text {
  margin: 0.6rem 0;
}
.first-topic-text h2 {
  color: teal;
  font-family: "華康墨字體";
  font-size: 1.4rem;
  opacity: 0.9;
  margin-bottom: 0.5rem;
  position: relative;
}
.first-topic-text h2::after {
  content: "";
  width: 50%;
  height: 0.05rem;
  background-color: teal;
  position: absolute;
  transform: translateY(-50%);
  top: 50%;
  margin-left: 0.6rem;
  opacity: 0.6;
}
.first-topic-text p {
  color: #000000a1;
  font-family: "華康中圓體";
  font-size: 0.7rem;
  text-align: justify;
  line-height: 1.2rem;
  letter-spacing: 0.05rem;
}
.second-topic {
  max-width: 1180px;
  margin: 1.5rem auto 3.5rem;
}
.second-topic-box {
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
}
.second-topic-span {
  width: 100%;
  text-align: center;
  position: relative;
  order: 2;
}
.second-topic-span span::before {
  content: "";
  width: 30%;
  height: 0.05rem;
  background-color: #000;
  position: absolute;
  transform: translateY(-50%);
  bottom: 50%;
  left: 0;
  opacity: 0.4;
}
.second-topic-span span::after {
  content: "";
  width: 30%;
  height: 0.05rem;
  background-color: #000;
  position: absolute;
  transform: translateY(-50%);
  bottom: 50%;
  right: 0;
  opacity: 0.4;
}
.second-topic-span span {
  color: #000000a1;
  font-family: "華康墨字體";
  font-size: 0.9rem;
  margin: auto;
}
.second-topic-img {
  width: 90vw;
  height: 60vw;
  overflow: hidden;
}
.second-topic-img img {
  width: 100%;
  margin-top: -50%;
}
.second-topic-text {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 0.6rem;
  box-sizing: border-box;
}
.second-topic-text h2 {
  color: teal;
  font-family: "華康墨字體";
  font-size: 1.4rem;
  margin-bottom: 0.5rem;
  opacity: 0.9;
}
.second-topic-text p {
  color: #000000a1;
  font-family: "華康中圓體";
  font-size: 0.7rem;
  text-align: justify;
  line-height: 1.2rem;
  letter-spacing: 0.05rem;
  margin-bottom: 1rem;
}
.message {
  max-width: 1180px;
  margin: 0 auto 3.5rem;
}
.message-box {
  width: 90%;
  margin: 1.5rem auto 0;
  border: 0.1rem solid teal;
  border-radius: 1.7rem;
  overflow: hidden;
}
.message-box h2 {
  color: teal;
  font-family: "華康墨字體";
  font-size: 1.4rem;
  text-align: center;
  padding: 0.3rem 0;
  border-bottom: 0.05rem solid teal;
  background-color: rgba(0, 128, 128, 0.3);
  opacity: 0.9;
}
.mark {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-end;
  color: #000000a1;
  font-family: "華康中圓體";
  font-size: 0.6rem;
  margin: 0.6rem 0.5rem;
  padding-bottom: 0.6rem;
  border-bottom: 0.1rem dashed rgba(0, 128, 128, 0.3);
}
.people {
  width: 45%;
  display: flex;
  align-items: center;
  order: -1;
  margin-bottom: 0.5rem;
}
.people img {
  width: 2.6rem;
  border-radius: 50%;
}
.people span {
  margin-left: 0.3rem;
}
.frequency {
  width: 100%;
  margin-bottom: 0.3rem;
}
.time {
  width: 100%;
  margin-bottom: 0.3rem;
}
.great {
  display: flex;
  align-items: center;
  margin: auto 0;
  order: -1;
}
.great img {
  width: 1rem;
  cursor: pointer;
}
.great span {
  margin-left: 0.3rem;
}
.user {
  width: 90%;
  display: flex;
  flex-direction: column;
  color: #000000a1;
  font-family: "華康中圓體";
  font-size: 0.6rem;
  margin: 0.6rem 0.5rem;
}
#spokesman {
  display: flex;
  align-items: center;
  margin-bottom: 0.3rem;
  cursor: pointer;
}
#spokesman input {
  width: 5.2rem;
  margin: 0 0.2rem;
}
#user-text {
  width: 100%;
  margin-bottom: 0.3rem;
  resize: none;
}
.btn {
  text-align: end;
  margin-bottom: 0.3rem;
}
#cancel {
  cursor: pointer;
}
#send {
  cursor: pointer;
}
#result {
  width: 100%;
  margin: 0 auto;
}
.replyuser {
  width: 90%;
  display: none;
  flex-direction: column;
  color: #000000a1;
  font-family: "華康中圓體";
  font-size: 0.6rem;
  margin: 0.6rem 0.5rem;
}
.replyman {
  display: flex;
  align-items: center;
  margin-bottom: 0.3rem;
  cursor: pointer;
}
.replyman input {
  width: 5.2rem;
  margin: 0 0.2rem;
}
.reply-text {
  width: 100%;
  margin-bottom: 0.3rem;
  resize: none;
}
.reply-cancel {
  cursor: pointer;
}
.reply-send {
  cursor: pointer;
}
.reply-result {
  width: 100%;
  margin: 0 auto;
}
.spokesname {
  color: #000000a1;
  font-family: "華康中圓體";
  font-size: 1rem;
  margin: 0.1rem 0;
}
.spokestext {
  color: #000000a1;
  font-family: "華康中圓體";
  font-size: 0.6rem;
  margin-bottom: 0.1rem;
  line-height: 1rem;
  letter-spacing: 0.05rem;
}
.reply {
  color: #0000007a;
  font-family: "華康中圓體";
  font-size: 0.6rem;
  cursor: pointer;
  margin-bottom: 0.5rem;
}
.recommend {
  max-width: 1180px;
  margin: 1.5rem auto;
}
.recommend-content {
  width: 90%;
  margin: 0 auto;
}
.recommend h2 {
  display: flex;
  justify-content: center;
  align-items: center;
  color: teal;
  font-family: "華康墨字體";
  font-size: 1.4rem;
  margin-bottom: 0.6rem;
  opacity: 0.9;
}
.recommend h2::before {
  content: "";
  width: 15%;
  height: 0.05rem;
  background-color: teal;
  margin-right: 1rem;
  opacity: 0.6;
}
.recommend h2::after {
  content: "";
  width: 15%;
  height: 0.05rem;
  background-color: teal;
  margin-left: 1rem;
  opacity: 0.6;
}
.recommend-box {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.recommend-box a {
  width: 47%;
  display: flex;
  flex-wrap: wrap;
}
.recommend-text {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  align-content: space-between;
  background-color: rgba(255, 255, 255, 0.6);
  margin-bottom: 0.5rem;
  padding: 0.3rem;
  box-sizing: border-box;
}
.recommend-text:hover img {
  transform: scale(1.3);
}
.recommend-text-img {
  width: 100%;
  height: 5em;
  overflow: hidden;
}
.recommend-text-img img {
  width: 200%;
  margin-left: -50%;
  transition: all 0.5s;
}
.recommend-text h3 {
  color: #000000e1;
  font-family: "華康墨字體";
  font-size: 0.9rem;
  text-align: justify;
  margin: 0.3rem 0;
}
.recommend-text p {
  color: #000000a1;
  font-family: "華康中圓體";
  font-size: 0.6rem;
  text-align: justify;
  line-height: 1rem;
  letter-spacing: 0.05rem;
}
.recommend-text span {
  color: #000000a1;
  font-family: "華康中圓體";
  font-size: 0.6rem;
}
.backimg {
  position: fixed;
  bottom: 0;
  z-index: -1;
  opacity: 0.3;
}
@media screen and (min-width: 414px) {
  html {
    font-size: 22px;
  }
  .recommend-text-img {
    height: 8em;
  }
}
@media screen and (min-width: 640px) {
  .mark {
    flex-wrap: nowrap;
    margin: 0.6rem 1.6rem;
  }
  .people {
    width: auto;
    order: 0;
    margin-bottom: 0;
  }
  .frequency {
    width: auto;
    margin-bottom: 0;
  }
  .time {
    width: auto;
    margin-bottom: 0;
  }
  .great {
    width: auto;
    margin: 0;
    order: 0;
  }
  .user {
    width: auto;
    margin: 0.6rem 1.6rem;
  }
  #spokesman {
    display: block;
    align-items: stretch;
  }
  #spokesman input {
    width: auto;
    margin: 0;
  }
}
@media screen and (min-width: 768px) {
  .main {
    display: flex;
    justify-content: stretch;
  }
  .main_img {
    width: 70%;
  }
  .main_img img {
    width: 100%;
    margin-left: 0;
  }
  .main-text {
    width: 60%;
    margin-top: 0;
    margin-left: -30%;
    align-self: center;
  }
  .main-text-title {
    background-color: rgba(255, 255, 255, 0.7);
  }
  .main-text-title h1 {
    color: #000;
    text-align: start;
  }
  .main-text-title p {
    color: #000;
  }
  .main-text-bottom p {
    font-size: 0.6rem;
    line-height: 1rem;
  }
  .first-topic-box {
    flex-wrap: nowrap;
    align-items: center;
    justify-content: space-between;
  }
  .first-topic-imgbox {
    max-width: 523px;
    max-height: 523px;
    width: 40vw;
    height: 40vw;
    order: 0;
  }
  .imgbox:nth-of-type(1) {
    order: 0;
  }
  .imgbox:nth-of-type(3) {
    order: 0;
  }
  .imgbox:nth-of-type(4) {
    order: 0;
  }
  .imgbox:nth-of-type(5) {
    order: 0;
  }
  .imgbox:nth-of-type(6) {
    order: 0;
  }
  .linebox::after {
    width: 0.05rem;
    height: 100%;
    transform: translateX(-50%);
    top: 0;
    right: 50%;
  }
  .textbox span {
    font-size: 1rem;
    transform: rotate(-90deg);
  }
  .first-topic-con {
    width: 50%;
  }
  .first-topic-text {
    margin: 0.6rem 0 0 3rem;
  }
  .first-topic-text p {
    font-size: 0.6rem;
    line-height: 1rem;
  }
  .second-topic-span {
    width: 15%;
    display: flex;
    text-align: start;
    margin-left: -5%;
    order: 0;
  }
  .second-topic-span span::before {
    width: 50%;
    transform: translateX(-50%);
    right: 90%;
    left: auto;
  }
  .second-topic-span span::after {
    width: 50%;
    transform: translateX(-50%);
    right: auto;
    left: 150%;
  }
  .second-topic-span span {
    font-size: 1rem;
    transform: rotate(-90deg);
  }
  .second-topic-img {
    width: 30%;
    height: auto;
    margin-left: -5%;
  }
  .second-topic-img img {
    margin-top: 0;
  }
  .second-topic-text {
    width: 65%;
    align-content: center;
    margin-top: 0;
    padding-left: 1rem;
  }
  .second-topic-text p {
    font-size: 0.6rem;
    line-height: 1rem;
    margin-bottom: 0;
  }
  .message-box h2 {
    padding: 0.6rem 0;
  }
  .recommend h2::before {
    width: 30%;
  }
  .recommend h2::after {
    width: 30%;
  }
  .recommend-box a {
    width: 23%;
  }
  .recommend-text-img {
    height: 3.5em;
    overflow: hidden;
  }
  .recommend-text-img img {
    width: 100%;
    margin-left: 0;
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
