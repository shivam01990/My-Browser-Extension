// ==UserScript==
// @name content
// @include http://*
// @include https://*
// ==/UserScript==


function postPageInfoMessage() {
    var pageInfo = {
        url: document.URL
    };

    kango.console.log('Sending page info...');

    // dispatch messsage to background script
    kango.dispatchMessage('PageInfo', pageInfo);
}

postPageInfoMessage();

function GetAlertHTML()
{
	var rType = "";
	rType +="<div style=\"position: fixed; width: 350px;right: 20px;top: 20px; z-index: 2147483647;background: rgb(255, 255, 255) !important;text-align: center; font-family: Arial, sans-serif;font-size: 14px; font-weight: bolder; color: rgb(73, 73, 73); line-height: 18px; box-sizing: content-box;  border-radius: 2px !important;\">";
	rType +=" <div style=\" height: 60px;  background: rgb(3, 89, 66) !important; color: rgb(255, 255, 255); border-top-left-radius: 2px;  border-top-right-radius: 2px;\" class=\"tcb_boxhmin\">";
	rType +="  <img src=\"http://in.collectoffers.com/img/collect-offers-logo.png\" height=\"50px\" class=\"tcb_logo\">";
	rType +="  <span style=\" float: right; border: 1px solid rgb(255, 255, 255) !important;    border-image:  !important;  padding: 1px 7px !important; font-size: 11px; position: relative; top: 20px;  right: 10px;  cursor: pointer;\" class=\"tcb_close\">X</span>";
	rType +="  <span style=\" float: right; border: 1px solid rgb(255, 255, 255) !important;    border-image:  !important;  padding: 1px 7px !important; font-size: 11px; position: relative; top: 20px;  right: 10px;  cursor: pointer;\" class=\"tcb_res\">-</span>";
	rType +=" </div>";
	rType +=" <div class=\"tcb_boxh\">";	
	rType +="  <span class=\"tcb_min\">_</span>";
	rType +=" </div>";
	rType +=" <div style=\"border:  !important; border-image:  !important;  border-bottom-left-radius: 2px;  border-bottom-right-radius: 2px;\" class=\"tcb_boxw\">";
	rType +="   <div class=\"tcb_boxc\">Visit collect offers to earn Up to 9% cashback on your purchases from this merchant.</div>";
	rType +="   <a href=\"http://www.collectoffers.com\" style=\"  margin-bottom: 10px; padding: 10px !important;font-size: 12px; font-weight: 700; background: rgb(237, 28, 92) !important;  color: rgb(255, 255, 255);  text-decoration: none;  display: inline-block; vertical-align: middle; text-align: center; cursor: pointer; border-radius: 3px !important;\" class=\"tcb_boxbtn\" target=\"_blank\">Get Cashback Now</a>";
	rType +=" </div>";
	rType +="</div>";
	return rType;
}

// handle messages from background script
kango.addMessageListener('ShowDiscountAlert', function(event) {  
   //alert('append to body'); 
   document.body.innerHTML += GetAlertHTML();
});