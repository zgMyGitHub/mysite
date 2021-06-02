<template>
  <div class="app-container">
      <Layout>
          <template #left>
              <div class="aside">
                  <SiteAside />
              </div>
          </template>
          <template #default>
              <router-view />
          </template>

      </Layout>
      <ToTop />

  </div>
</template>
<script>
import Layout from "@/components/Layout"
import SiteAside from "@/components/SiteAside"
import ToTop from "@/components/ToTop"

export default {
  components:{
    Layout,
    SiteAside,
    ToTop
  }

}
</script>
<style scoped lang="less">
@import "~@/styles/mixin.less";
.app-container{
  .self-fill(fixed);
  background:rgb(255, 255, 255);
}
.aside{
  width: 200px;
  height: 100%;
  background-color: rgb(34, 34, 34);
}

</style>
