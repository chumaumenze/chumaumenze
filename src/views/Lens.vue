<template lang="pug">
  div
    ul.bg-slide
      li(v-for="i in 4" :key="i")
        span

    .flex-col-c-sb.size1.overlay1
      .w-full.flex-w.flex-sb-m.p-l-80.p-r-80.p-t-22.p-lr-15-sm
        .wrappic1.m-r-30.m-t-10.m-b-10
          a.fa.fa-2x.fa-camera-retro.text-white(href='/')  Lens

      .flex-col-c-m.p-l-15.p-r-15.p-t-50.p-b-120
        h3.l1-txt2.txt-center.p-b-40.respon1
          | Coming Soon
      //
      .flex-w.flex-c-m.p-b-35
        a.size3.flex-c-m.how-social.trans-04.m-r-3.m-l-3.m-b-5(href='https://facebook.com/chumaumenze')
          i.fab.fa-facebook-f
        a.size3.flex-c-m.how-social.trans-04.m-r-3.m-l-3.m-b-5(href='https://twitter.com/chumaumenze')
          i.fab.fa-twitter
        a.size3.flex-c-m.how-social.trans-04.m-r-3.m-l-3.m-b-5(href='mailto:hello@chumaumenze.com')
          i.fa.fa-envelope

</template>

<style src="@/assets/css/wip.scss" lang="scss" scoped></style>
