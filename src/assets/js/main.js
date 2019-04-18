;(function ( $, window, document, undefined ) {
    Starter = window.Starter || {};
    Starter.Main = window.Starter.Main || {};

    Starter.Main.onInit = function() {

        // highlightjs
        hljs.initHighlightingOnLoad();

        // navigation
        Starter.Main.navigation();

        // analytics
        Starter.Main.tracking();

    };

    Starter.Main.navigation = function() {

        $('#page-menu-button').on('click',function(e){
            e.preventDefault();
            $('#page').toggleClass('site-menu-open');
        });

    };

    Starter.Main.tracking = function() {

        $('#download a').on('click',function(){
            var filename = $(this).attr('href').split('/')[1];
            gtag('event', 'ZIP', {
              'event_category': 'Download',
              'event_label': filename,
              'value': 1
            });
        });

    };

    Starter.Main.onInit();
})( jQuery, window, document );