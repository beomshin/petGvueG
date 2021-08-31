<template>
    <div>
        <BaseLoader></BaseLoader>
        <div class="page">
            <Header></Header>
            <Footer/>
        </div>
    </div>
</template>

<script>
import $ from 'jquery'
import Header from '@/layout/common/header.vue'
import Footer from '@/layout/common/footer.vue'

    export default {
        name: 'index',
        components: {
            Header,
            Footer
        },
        mounted() {
            $('.preloader').addClass('loaded');
        },
        
    }
</script>

<style lang="scss" scoped>

</style>