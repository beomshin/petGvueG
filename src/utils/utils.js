import $ from 'jquery'

export default {
    pageTransitio: ({
        // target: document.querySelector('.page'),
        // delay: 0,
        // duration: 500,
        // classIn: 'fadeIn',
        // classOut: 'fadeOut',
        // classActive: 'animated',
        // conditions: function (event, link) {
        //     return link && !/(\#|javascript:void\(0\)|callto:|tel:|mailto:|:\/\/)/.test(link) && !event.currentTarget.hasAttribute('data-lightgallery');
        // },
        onTransitionStart: function (options) {
            setTimeout(function () {
                $('.preloader').removeClass('loaded');
            }, options * .75)
            .then(()=> {
                $('.preloader').addClass('loaded');
            });
        },
        onReady: function () {
            $('.preloader').addClass('loaded');
        }
    })
}