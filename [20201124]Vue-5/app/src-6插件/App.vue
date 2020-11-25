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
      <component :is="currentComponent"></component>
    </keep-alive>

    <hr>

    <h1>{{'bbh'|BBH1}}</h1>
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
</style>
