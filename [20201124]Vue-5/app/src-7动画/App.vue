<template>
  <div id="app">
    <h1>HELLO VUE!!!!</h1>

    <hr>

    <button :class="{current:currentComponent =='InBox'}" @click="currentComponent='InBox'">收邮件</button>
    <button :class="{current:currentComponent =='PostMail'}" @click="currentComponent='PostMail'">发邮件</button>
    <button :class="{current:currentComponent =='RecycleBin'}" @click="currentComponent='RecycleBin'">垃圾箱</button>

    <hr>

    <!-- <in-box v-if="currentComponent =='InBox'"></in-box>
    <post-mail v-if="currentComponent =='PostMail'"></post-mail>
    <recycle-bin v-if="currentComponent =='RecycleBin'"></recycle-bin> -->
    <keep-alive>
      <transition name="slide-fade">
        <component :is="currentComponent"></component>
      </transition>
    </keep-alive>

  </div>
</template>

<script>
import InBox from './components/InBox';
import PostMail from './components/PostMail';
import RecycleBin from './components/RecycleBin';

export default {
  name: 'App',

  data() {
    return {
      currentComponent: 'InBox'
    }
  },
  components: {
    InBox,
    PostMail,
    RecycleBin
  }

}
</script>

<style>
.current {
  background: #ff8200;
}
.slide-fade-enter,
.slide-fade-leave-to {
  opacity: 0;
}
.slide-fade-enter-to,
.slide-fade-leave {
  opacity: 1;
}
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.3s;
}
</style>
