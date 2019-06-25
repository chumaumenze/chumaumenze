<template lang="pug">
  div
    ul.bg-slide
      li
        span
      li
        span
      li
        span
      li
        span

    .flex-col-c-sb.size1.overlay1.p-l-75.p-r-75.p-t-20.p-b-40.p-lr-15-sm
      .w-full.flex-w.flex-sb-m
        .wrappic1.m-r-30.m-t-10.m-b-10
          a.fa.fa-2x.fa-blog.text-white(href='/')
      .flex-col-c-m.p-l-15.p-r-15.p-t-80.p-b-90
        h3.l1-txt2.txt-center.p-b-55.respon1
          | Coming Soon
      .flex-sb-m.flex-w.w-full
        .flex-w.flex-c-m.m-t-10.m-b-10
          a.size3.flex-c-m.how-social.trans-04.m-r-3.m-l-3.m-b-3.m-t-3(href='https://facebook.com/chumaumenze' target="blank" ref="no-opener")
            i.fab.fa-facebook-f
          a.size3.flex-c-m.how-social.trans-04.m-r-3.m-l-3.m-b-3.m-t-3(href='https://twitter.com/chumaumenze' target="blank" ref="no-opener")
            i.fab.fa-twitter
          a.size3.flex-c-m.how-social.trans-04.m-r-3.m-l-3.m-b-3.m-t-3(href='mailto:hello@chumaumenze.com')
            i.fa.fa-envelope

</template>

<!--<script></script>-->

<style lang="scss" scoped>
  @import url("../assets/fonts/font-awesome/fontawesome-all.min.css");
  @font-face {
    font-family: Playlist Script;
    src: url('../assets/fonts/playlist/Playlist Script.otf');
  }

  a { color: rgb(0, 123, 255); text-decoration: none; background-color: transparent; border-bottom: unset }
  .text-white { color: rgb(255, 255, 255) !important; }.l1-txt2 { font-family: "Playlist Script"; font-size: 180px; color: rgb(255, 255, 255); line-height: 1.1; }
  .size1 { width: 100%; min-height: 100vh; }
  .size3 { width: 36px; height: 36px; }
  // .bg-img1 { background-position: center center; background-repeat: no-repeat; background-size: cover; }
  .overlay1 { position: relative; z-index: 1; }
  .overlay1::after { content: ""; display: block; position: absolute; z-index: -1; width: 100%; height: 100%; top: 0; left: 0; background: rgba(0, 0, 0, 0.5); }
  .wrappic1 { display: block; flex-grow: 1; }
  .wrappic1 img { max-width: 100%; }
  .how-social { color: rgb(153, 153, 153); font-size: 18px; border: 1px solid rgba(255, 255, 255, 0.1); background-color: transparent; border-radius: 50%; }
  .how-social:hover { background-color: rgb(255, 255, 255); color: rgb(85, 85, 85); }

  @media (max-width: 992px) {
    .respon1 {
      font-size: 160px;
    }
  }
  @media (max-width: 768px) {
    .respon1 {
      font-size: 120px;
    }

  }
  @media (max-width: 576px) {
    .p-lr-15-sm {padding-left: 15px; padding-right: 15px;}
    .respon1 {
      font-size: 80px;
    }
  }
  .bg-slide,
  .bg-slide:after {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 0;
  }
  .bg-slide {
    li {
      &:nth-child(1) {
        span {
          background-image: url('../assets/images/wip/bg01.jpg');
        }
      }
      &:nth-child(2) {
        span {
          background-image: url('../assets/images/wip/bg02.jpg');
          animation-delay: 6s;
        }
      }
      &:nth-child(3) {
        span {
          background-image: url('../assets/images/wip/bg03.jpg');
          animation-delay: 12s;
        }
      }
      &:nth-child(4) {
        span {
          background-image: url('../assets/images/wip/bg04.jpg');
          animation-delay: 18s;
        }
      }
      span {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        color: transparent;
        background-size: cover;
        background-position: 50% 50%;
        background-repeat: unset;
        opacity: 0;
        z-index: 0;
        animation: imageAnimation 36s linear infinite 0s;
      }
    }
  }

  @keyframes imageAnimation {
    0% { opacity: 0; animation-timing-function: ease-in; }
    8% { opacity: 1; animation-timing-function: ease-out; }
    55% { opacity: 1 }
    100% { opacity: 0 }
    /*100% { opacity: 0 }*/
  }
</style>
