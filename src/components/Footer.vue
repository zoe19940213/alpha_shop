<template>
  <footer class="footer w-100">
    <div class="footer_logo">
      <div class="web-logo"></div>
    </div>
    <div class="footer_sitemap">
      <div class="sitemap_area">
        <h2 class="sitemap_area_title">客戶服務</h2>
        <ul>
          <li class="sitemap_area_item"><a href="">運送說明</a></li>
          <li class="sitemap_area_item"><a href="">退換貨相關</a></li>
          <li class="sitemap_area_item"><a href="">付款資訊</a></li>
          <li class="sitemap_area_item"><a href="">FAQ</a></li>
        </ul>
      </div>
      <div class="sitemap_area">
        <h2 class="sitemap_area_title">關於我們</h2>
        <ul>
          <li class="sitemap_area_item"><a href="">品牌故事</a></li>
          <li class="sitemap_area_item"><a href="">媒體聯繫</a></li>
          <li class="sitemap_area_item"><a href="">Press Kit</a></li>
        </ul>
      </div>
      <div class="sitemap_area">
        <h2 class="sitemap_area_title">資訊</h2>
        <ul>
          <li class="sitemap_area_item"><a href="">隱私權政策</a></li>
          <li class="sitemap_area_item"><a href="">Cookie</a></li>
          <li class="sitemap_area_item"><a href="">GDPR</a></li>
        </ul>
      </div>
    </div>
    <div class="footer_follow">
      <h2 class="follow_title">追蹤ALPHA Shop</h2>
      <p class="follow_phone">+886 02123-45678</p>
      <div class="follow_social p-1">
        <button><i class="fab fa-facebook-f"></i></button>
        <button><i class="fab fa-instagram"></i></button>
        <button><i class="fab fa-whatsapp"></i></button>
      </div>
    </div>
  </footer>
</template>

<style lang="scss">
footer {
    margin-top: 120px;
    padding: 64px 10%;
    display: flex;
    justify-content: space-between;
    @include settheme($themes) {
      background: themed("footer-bg");
    }
    .footer_logo {
      height: unset;
      flex: 1 1 10%;
      display: flex;
      align-items: center;
    }
    .footer_sitemap {
      margin: 0 10%;
      flex: 1 1 40%;
      display: flex;
      justify-content: space-between;
      .sitemap_area_title {
        margin-bottom: 1.5rem;
      }
      .sitemap_area_item {
        a {
          line-height: 1.5rem;
          color: $light-text;
        }
        @include settheme($themes) {
          @include hovereffect(themed("text"), transparent);
        }
      }
    }
    .footer_follow {
      flex: 1 1 20%;
      .follow_title {
        margin-bottom: 1.5rem;
      }
      .follow_phone {
        color: $light-text;
      }
      .follow_social {
        button {
          margin-right: 1rem;
          font-size: 1.2rem;
          @include settheme($themes) {
            @include hovereffect(themed("text"), transparent);
          }
          i {
            color: $light-text;
          }
        }
      }
    }
  }
</style>