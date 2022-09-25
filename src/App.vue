<script setup>
import { RouterLink } from "vue-router";
import "./javascript/jquery-3.6.0.min.js";
</script>

<template>
  <header>
    <div id="logo">
      <img src="./img/All/logo.png" alt="logo" />
    </div>
    <nav>
      <RouterLink class="item" to="/">首頁</RouterLink>
      <RouterLink class="item" to="/layout">園區導覽</RouterLink>
      <RouterLink class="item" to="/platform">交流平台</RouterLink>
      <RouterLink class="item" to="/traffic">交通指南</RouterLink>
    </nav>
    <div id="menu">
      <div class="menu-close">✖</div>
      <div class="menu-line"></div>
      <div class="menu-line"></div>
      <div class="menu-line"></div>
    </div>
  </header>
  <RouterView />
  <footer>
    <div class="footer-box">
      <div class="footer-content">
        <div class="connection">
          <h2>寧韻美麗島<span>文創園區</span></h2>
          <p>
            營業時間: 08:00~22:00<br />
            園區地址: 999香吉市美麗區花田一路6號<br />
            聯絡電話: 00-123456789<br />
            電子信箱: NingYun@mail.com
          </p>
          <div class="icon-box">
            <div class="icon">
              <a href="#"><img src="./img/All/fb.png" alt="fb" /></a>
            </div>
            <div class="icon">
              <a href="#"><img src="./img/All/ig.png" alt="ig" /></a>
            </div>
            <div class="icon">
              <a href="#"><img src="./img/All/line.png" alt="line" /></a>
            </div>
            <div class="icon">
              <a href="#"><img src="./img/All/twitter.png" alt="twitter" /></a>
            </div>
            <div class="icon">
              <a href="#"><img src="./img/All/youtube.png" alt="youtube" /></a>
            </div>
          </div>
          <div class="copyright">
            Copyright © 2021 NingYun all rights reserved.
          </div>
        </div>
        <div class="google-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1172.750699106649!2d121.22461926641243!3d24.957342175137317!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346823ea50c732a5%3A0x1b5e6ee66e9fec49!2z57ev6IKyVGliYU1l6ZmE6Kit5Lit5aOi6IG36KiT5Lit5b-D!5e0!3m2!1szh-TW!2stw!4v1625838568839!5m2!1szh-TW!2stw"
          ></iframe>
        </div>
      </div>
    </div>
  </footer>
</template>

<style></style>
