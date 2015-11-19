// ==UserScript==
// @name content
// @include http://*
// @include https://*
// @require jquery-1.9.1.min.js
// ==/UserScript==


var $ = window.$.noConflict(true); // Required for IE

function postPageInfoMessage() {
    var pageInfo = {
        url: document.URL
    };

    kango.console.log('Sending page info...');

    // dispatch messsage to background script
    kango.dispatchMessage('PageInfo', pageInfo);
}

postPageInfoMessage();

function GetAlertHTML() {
    var rType = "";
    rType += "<div style=\"position: fixed; width: 350px;right: 20px;top: 20px; z-index: 2147483647;background: rgb(255, 255, 255) !important;text-align: center; font-family: Arial, sans-serif;font-size: 14px; font-weight: bolder; color: rgb(73, 73, 73); line-height: 18px; box-sizing: content-box;  border-radius: 2px !important;\">";
    rType += " <div style=\" height: 60px;  background: rgb(3, 89, 66) !important; color: rgb(255, 255, 255); border-top-left-radius: 2px;  border-top-right-radius: 2px;\" class=\"tcb_boxhmin\">";
    rType += "  <img src=\"http://in.collectoffers.com/img/collect-offers-logo.png\" height=\"50px\" class=\"tcb_logo\">";
    rType += "  <span style=\" float: right; border: 1px solid rgb(255, 255, 255) !important;    border-image:  !important;  padding: 1px 7px !important; font-size: 11px; position: relative; top: 20px;  right: 10px;  cursor: pointer;\" class=\"tcb_close\">X</span>";
    rType += "  <span style=\" float: right; border: 1px solid rgb(255, 255, 255) !important;    border-image:  !important;  padding: 1px 7px !important; font-size: 11px; position: relative; top: 20px;  right: 10px;  cursor: pointer;\" class=\"tcb_res\">-</span>";
    rType += " </div>";
    rType += " <div class=\"tcb_boxh\">";   
    rType += " </div>";
    rType += " <div style=\"border:  !important; border-image:  !important;  border-bottom-left-radius: 2px;  border-bottom-right-radius: 2px;\" class=\"tcb_boxw\">";
    rType += "   <div class=\"tcb_boxc\">Visit collect offers to earn Up to 9% cashback on your purchases from this merchant.</div>";
    rType += "   <a href=\"http://www.collectoffers.com\" style=\"  margin-bottom: 10px; padding: 10px !important;font-size: 12px; font-weight: 700; background: rgb(237, 28, 92) !important;  color: rgb(255, 255, 255);  text-decoration: none;  display: inline-block; vertical-align: middle; text-align: center; cursor: pointer; border-radius: 3px !important;\" class=\"tcb_boxbtn\" target=\"_blank\">Get Cashback Now</a>";
    rType += " </div>";
    rType += "</div>";
    return rType;
}

//function GenerateGoogleAlert()
//{
//     var rType = "";
//     rType+="<div style=\"position: fixed; width: 100%;z-index: 2147483647;background: rgb(3, 89, 66) !important;height: 26px;padding-top: 5px;text-align: center; font-family: Arial, sans-serif;font-size: 13px;font-weight: bolder;color: rgb(255, 255, 255); line-height: 18px;box-sizing: content-box;\" id=\"tcbnotify\">";
//     rType+=" <span style=\"position: absolute;top: 0px;left: 5px;\"><img src=\"http://in.collectoffers.com/img/collect-offers-logo.png\" height=\"50px\" class=\"tcb_logo\"></span>";
//     rType+=" <span id=\"tcbnotifycontent\" style=\"top: 7px;display: inline-block;position: absolute;left: 35px;right: 35px; text-align: center;white-space: nowrap; overflow: hidden !important;text-overflow: ellipsis;\">";
//     rType+=" <a href=\"http://www.collectoffers.in/\" target=\"_blank\">FlipKart - Up to 9% cashback</a>";
//     rType+=" </span>";
//     rType+=" <span style=\"float: right; border: 1px solid rgb(255, 255, 255) !important; border-image:  !important;padding: 1px 7px !important;font-size: 11px; position: relative; bottom: 1px; right: 5px;cursor: pointer;\" class=\"tcbclose\">X </span>";
//     rType+="</div>";
//     return rType;
//}

var IsAlertDisplay = true;
// handle messages from background script
kango.addMessageListener('ShowDiscountAlert', function (event) {
    if (IsAlertDisplay) {
        $('body').append(GetAlertHTML());
        displayalert = false;
    }
});

//kango.addMessageListener('ShowGoogleDiscountAlert', function (event) {
//    if (IsAlertDisplay) {
//        $('body').append(GenerateGoogleAlert());
//        displayalert = false;
//    }
//});



