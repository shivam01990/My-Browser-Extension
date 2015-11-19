function getURLFromPageInfo(info) {
    return 'Url: ' + info.url;
}

function getDomainFromUrl(url) {
    var matches = url.match(/:\/\/(.[^/]+)/);
    return ((matches != null && typeof matches[1] != 'undefined') ? matches[1] : null);
}

var getQueryString = function (field, url) {
    var href = url;
    var reg = new RegExp('[?&]' + field + '=([^&#]*)', 'i');
    var string = reg.exec(href);
    return string ? string[1] : null;
};

function COExtension() {
    var self = this;
    kango.ui.browserButton.addEventListener(kango.ui.browserButton.event.COMMAND, function () {
        self._onCommand();
    });
}


kango.addMessageListener('PageInfo', function (event) {
    // is message from active tab?
    kango.console.log('Page info received\nTarget tab url=' + event.target.getUrl());
    if (event.target.isActive()) {
        var domain = getDomainFromUrl(getURLFromPageInfo(event.data));
        // i don't like bing, redirect to google
        if (domain == 'www.flipkart.com' || domain == 'flipkart.com') {
            kango.console.log('domain is: ' + domain);
            event.target.dispatchMessage('ShowDiscountAlert');
        }
    }
});



COExtension.prototype = {
    _onCommand: function () {
        kango.browser.tabs.create({ url: 'http://www.collectoffers.com' });
    }
};


var extension = new COExtension();

//var _GoogleSearch = setInterval(function () { CheckGooglePage() }, 4000);

//function CheckGooglePage() {
//    kango.browser.tabs.getCurrent(function (tab) {
//        // tab is KangoBrowserTab object
//        var tempurl = tab.getUrl();
//        kango.console.log(tempurl);
//        var domain = getDomainFromUrl(tempurl);
//        if (domain == 'www.google.co.in' || domain == 'google.co.in' || domain == 'www.google.com' || domain == 'google.com') {
//            kango.console.log('domain is: ' + domain);
//            var searchtext = getQueryString('q', tempurl);
//            if (searchtext != null) {
//                kango.console.log('searchtext is:' + searchtext);
//                //var domaintext=domain.replace('www.','').replace('.com','');             
//                if (searchtext.indexOf('flipkart') >= 0) {
//                    tab.dispatchMessage('ShowGoogleDiscountAlert');
//                }
//            }
//        }
//    });
//}