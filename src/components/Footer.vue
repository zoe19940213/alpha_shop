<template>
  <footer class="footer w-100">
    <div class="footer_logo">
      <div class="web-logo"></div>
    </div>
    <div class="footer_sitemap">
      <div 
        v-for="sitemap in sitemaps" 
        :key="sitemap.id" 
        class="sitemap_area">
        <h2 class="sitemap_area_title">{{sitemap.title}}</h2>
        <ul>
          <li
            v-for="(item, index) in sitemap.items" 
            :key=index
            class="sitemap_area_item"><a href="">{{item}}</a></li>
        </ul>
      </div>
    </div>
    <div class="footer_follow">
      <h2 class="follow_title">追蹤ALPHA Shop</h2>
      <p class="follow_phone">+886 02123-45678</p>
      <div class="follow_social p-1">
        <button><font-awesome-icon icon="fa-brands fa-facebook" class="icon" /></button>
        <button><font-awesome-icon icon="fa-brands fa-instagram" class="icon"/></button>
        <button><font-awesome-icon icon="fa-brands fa-whatsapp" class="icon" /></button>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      sitemaps: [
        {
          id: 1,
          title: "客戶服務",
          items: ["運送說明", "退換貨相關", "付款資訊", "FAQ"],
        },
        {
          id: 2,
          title: "關於我們",
          items: ["品牌故事", "媒體聯繫", "Press Kit"],
        },
        {
          id: 3,
          title: "資訊",
          items: ["隱私權政策", "Cookie", "GDPR"],
        },
      ],
    };
  },
};
</script>

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
        .icon path {
          color: $light-text;
        }
      }
    }
  }
}
</style>