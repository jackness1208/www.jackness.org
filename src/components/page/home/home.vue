<template lang="pug">
div.p-home(:class="theme.themeClass")
  div.p-home__view
    div.p-home__view__item(
      v-for="(item, index) in viewItems",
      :data-index="index",
      :class="[curs.indexOf(index) !== -1 ? 'p-home__view__item--current' : '']"
    )
  div.p-home__foot
    a(href="http://www.miitbeian.gov.cn/", target="_blank") 粤ICP备14065612号

</template>
<style lang="scss">
@charset 'utf-8';
.p-home {
  position: fixed;
  z-index: 10;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
}
.p-home__view {
  width: 900px;
  height: 680px;
  position: absolute;
  left: 50%;
  top: 50%;
  margin: -300px 0 0 -450px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  flex-wrap: wrap;
}
.p-home__view__item {
  display: inline-block;
  width: 60px;
  height: 60px;
  margin: 2px;
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.5);
  transition: background 0.5s;
  &:hover {
    background: rgba(255, 172, 0, 0.5);
  }
}
.p-home__view__item--current {
  background: rgba(255, 255, 255, 0.5);
  &:hover {
    background: rgba(255, 172, 0, 0.8);
  }
}
.p-home__foot {
  position: fixed;
  bottom: 20px;
  left: 0;
  right: 0;
  text-align: center;
  a {
    color: #fff;
    font-size: 12px;
    text-decoration: none;
    &:hover {
      color: #ffac00;
    }
  }
}
</style>
<script>
import { mapGetters, mapActions } from 'vuex';
const VIEW_TOTAL = 10 * 28;
const randomIt = function (total, max) {
  const r = [];
  let index = -1;
  while(r.length < max) {
    index = Math.floor(Math.random() * total);
    if (r.indexOf(index) === -1) {
      r.push(index);
    }
  }
  return r;
};
const cache = {
  viewKey: 0
};

export default {
  computed: {
    ...mapGetters(['theme'])
  },
  methods: {
  },
  data() {
    return {
      viewItems: new Array(VIEW_TOTAL + 1).join(0).split('').map(() => 0),
      curs: []
    };
  },
  components: {
  },
  mounted() {
    const vm = this;
    cache.viewKey = setInterval(() => {
      vm.$set(vm, 'curs', randomIt(VIEW_TOTAL, 6));
    }, 1000);
  },
  beforeDestroy() {
    clearInterval(cache.viewKey);
  }
};
</script>
