<template lang="pug">
  div
    ul.bg-slide
      li(v-for="i in 4" :key="i")
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

<style src="@/assets/css/wip.scss" lang="scss" scoped></style>
