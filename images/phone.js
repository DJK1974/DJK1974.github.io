$(document).ready(function () {
    checkPhone();
});

function checkPhone() {
    var sUserAgent = navigator.userAgent.toLowerCase();
    var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
    var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
    var bIsMidp = sUserAgent.match(/midp/i) == "midp";
    var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
    var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
    var bIsAndroid = sUserAgent.match(/android/i) == "android";
    var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
    var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
    var scriptArgs = document.getElementById('machineCheck');
    if ((bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM)) {
        var scriptArgs = document.getElementById('jsphone').getAttribute('data');
        if (scriptArgs != null) {
            var str = "<div style=\"width:100%;height:40px;\"></div><div style=\"width:100%; background:#fff; position:fixed; bottom:0px; left:0px;z-index:999999\">";
	str+="<a href=\"tel:" + scriptArgs + "\" style=\"text-decoration:none;\"><img src=\"http://img.yutaiyun.com/call/phone.png\"/></a></div>";
            //str += "<a href=\"tel:" + scriptArgs + "\" style=\"text-decoration:none;\"><div style=\"padding:10px 10px;text-align:center; font-size:14px; background-color:#10A8AB; font-weight:bolder; color:white;\">";
            //str += "我要联系" + scriptArgs + "</div></a></div>";
            $("body").append(str);
        }
    }
}