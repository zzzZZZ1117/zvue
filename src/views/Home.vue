<!--
 * @Author: ZQJ-1130123899
 * @Date: 2020-09-01 16:40:26
 * @LastEditTime: 2020-09-02 14:01:54
 * @LastEditors: ZQJ-1130123899
 * @Description: home.vue
 * @FilePath: \zvue\src\views\Home.vue
 * @Additional information: NULL
-->
<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
