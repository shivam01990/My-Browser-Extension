function getURLFromPageInfo(info) {
    return 'Url: ' + info.url;
}

function getDomainFromUrl(url) {
    var matches = url.match(/:\/\/(.[^/]+)/);
    return ((matches != null && typeof matches[1] != 'undefined') ? matches[1] : null);
}

function COExtension() {
    var self = this;
    kango.ui.browserButton.addEventListener(kango.ui.browserButton.event.COMMAND, function() {
        self._onCommand();
    });   
}


kango.addMessageListener('PageInfo', function(event) {
    // is message from active tab?
      kango.console.log('Page info received\nTarget tab url=' + event.target.getUrl());
          if (event.target.isActive()) {
       // kango.console.log('Page info received\nTarget tab url=' + event.target.getUrl());
        //kango.ui.browserButton.setTooltipText(getTooltipTextFromPageInfo(event.data));
         var domain = getDomainFromUrl(getURLFromPageInfo(event.data));
       // i don't like bing, redirect to google
        if (domain == 'www.flipkart.com' || domain == 'flipkart.com') {
             kango.console.log('domain is: '+domain);
             event.target.dispatchMessage('ShowDiscountAlert');
          }
        }
});

COExtension.prototype = {
    _onCommand: function() {
        kango.browser.tabs.create({url: 'http://www.collectoffers.com'});
    }
};


var extension = new COExtension();