var feed = new Instafeed({
    get: 'user',
    userId: '2015090677',
    clientId: 'eb59fa72758f495786f0b55f7154053d',
    accessToken: '2439691.b06d8e0.295699aa607d4fd998452699298ff681',
    resolution: 'standard_resolution',
    sortBy: 'most-recent',
    template: '<div photo class="col-xs-6 col-md-3 no-padd"><a class="gallery-box" href="{{link}}" data-lightbox="gallery"><img src="{{image}}" alt="" class="img-responsive" style="max-height: 460px;margin-left:auto;margin-right:auto"><div class="gallery-overlay"><span class="ion-ios-plus-empty"></span></div></a></div>',
    after: function () {
        $("#instafeed div[photo]").each(
            function (index, item) {
                var value = index + 1;
                $(item).attr('id', value);
                if (value % 4 === 0) {
                    $('<div class="clearfix"></div>').insertAfter("#" + value);
                } else if (value % 2 === 0) {
                    $('<div class="clearfix visible-xs-block"></div>').insertAfter("#" + value);
                }
            });
    }
});
feed.run();
