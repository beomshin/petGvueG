<template>
    <div class="preloader">
      <div class="preloader-logo"><img src="images/logo-default-167x44.png" alt="" width="83" height="22"/>
      </div>
      <div class="preloader-body">
        <div id="loadingProgressG">
          <div class="loadingProgressG" id="loadingProgressG_1"></div>
        </div>
      </div>
    </div>
</template>

<script>
import util from '@/utils/utils'
// 
    export default {
        name: 'Loader',
        created() {
          util.pageTransitio.onTransitionStart(1000)
          util.pageTransitio.onReady()
        },
        
    }
</script>

<style lang="scss" scoped>

</style>