
//var pageType=undefined;
//var ytOnline=undefined;
$(function () {
    ytpangainData(0);
});


//#region 参数获取
/*
获取参数
*/
function GetQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]); return null;
}
//#endregion 

function contains(arr, obj) {
    var i = arr.length;
    while (i--) {
        if (arr[i] === obj) {
            return true;
        }
    }
    return false;
}


function ytpangainData(tips) {

    try {
        console.log(pageType);
    }
    catch (e) {
        pageType = undefined;
    }

    if (pageType == undefined || pageType == 1) {
        var yttcPageHtml = $("ytlist[ytparam]");
        if (yttcPageHtml.length==0) {
            yttcPageHtml = $("div[ytparam]");
        }
        var yttcPageTempID = yttcPageHtml[0].attributes["ytcontrol"];
        var yttcHtmlTemp = "";

        if (yttcPageTempID != null) {
            var str = "";
            var nodFenye = document.createElement("style");
            str += "#" + yttcPageTempID.nodeValue.toString() + " a{height:40px;line-height:40px;border: 1px solid #e4e4e4;color: Black;font-size: 12px;text-decoration: none; padding: 8px; cursor: pointer; margin-left:5px; margin-right:5px;}";
            str += "#" + yttcPageTempID.nodeValue.toString() + " a:hover{ background-color: #e1e1e1;}";
            nodFenye.type = "text/css";
            if (nodFenye.styleSheet) {         //ie下
                nodFenye.styleSheet.cssText = str;
            } else {
                nodFenye.innerHTML = str;       //或者写成 nod.appendChild(document.createTextNode(str))
            }
            document.getElementsByTagName("head")[0].appendChild(nodFenye);

            var strHTML = "";
            strHTML += "<a href=\"javascript:void(0)\"  title=\"0\" id=\"yttcBegin\" onclick=\"ytpangain(this.id)\">首页</a>";
            strHTML += "<a href=\"javascript:void(0)\"  title=\"1\" id=\"yttcUp\" onclick=\"ytpangain(this.id)\">上一页</a>";
            strHTML += "<a href=\"javascript:void(0)\" title=\"2\"  id=\"yttcDown\" onclick=\"ytpangain(this.id)\">下一页</a>";
            strHTML += "<a href=\"javascript:void(0)\" title=\"3\" id=\"yttcEnd\"  onclick=\"ytpangain(this.id)\">尾页</a>";
            strHTML += "<a href=\"javascript:void(0)\"  id=\"yttcTipsShow\" onclick=\"ytpangain(this.id)\">当前第1页</a>";
            strHTML += "<a href=\"javascript:void(0)\" title=\"3\" id=\"yttcTipsCount\"  onclick=\"ytpangain(this.id)\">总共1页</a>";


            document.getElementById(yttcPageTempID.nodeValue.toString()).innerHTML = strHTML;
        }
    }

    var yttcDataCount = 0;
    var newJson = [];

    if (GetQueryString("note") != null) {
        for (nd = 0; nd < yttypeData.length; nd++) {
            var note = GetQueryString("note");
            var array = note.split(',');
            if (yttypeData[nd].ParentID != null) {
                if (contains(array, yttypeData[nd].ParentID.toString())) {
                    newJson.push(yttypeData[nd]);
                }
            }
        }
        yttcDataCount = newJson.length;

    }
    else {
        newJson = yttypeData;
        if (newJson != null) {
            yttcDataCount = yttypeData.length;
        }
        else {
            yttcDataCount = 0;
        }
    }

    //    var datas = [];
    //    for (ds = (pageSizeStart * pageSize); ds < (pageSizeEnd * pageSize); ds++) {
    //        if (yttypeData[ds] != null) {
    //            datas.push(yttypeData[ds]);
    //        }
    //    }

    if (newJson != null) {
        var pageData = 0;
        var yttcPageHtml = $("ytlist[ytparam]");
        if (yttcPageHtml.length == 0) {
            yttcPageHtml = $("div[ytparam]");
        }
        if (yttcPageHtml.length > 0) //存在需要的分页数据
        {
            var yttcPageSize = yttcPageHtml[0].attributes["ytend"];
            if (yttcPageSize != null) {
                var DtBegin = 0;
                var DtUp = 0;
                var DtDown = 0;
                var DtEnd = 0;
                if (parseInt(parseInt(yttcDataCount) % parseInt(yttcPageSize.nodeValue)) == 0) {
                    DtEnd = parseInt(parseInt(yttcDataCount) / parseInt(yttcPageSize.nodeValue));
                }
                else {
                    DtEnd = parseInt(parseInt(yttcDataCount) / parseInt(yttcPageSize.nodeValue)) + 1;
                }
                if (DtEnd > 0) {
                    DtDown = 1;
                }

                document.getElementById("yttcBegin").title = DtBegin.toString();

                if (tips == 0) {
                    document.getElementById("yttcUp").title = DtUp.toString();
                    document.getElementById("yttcDown").title = DtDown.toString();
                }
                document.getElementById("yttcEnd").title = DtEnd.toString();
                //document.getElementById("txtshow").value = document.getElementById("yttcBegin").title + "," + document.getElementById("yttcUp").title + "," + document.getElementById("yttcDown").title + "," + document.getElementById("yttcEnd").title;
                var divEle = document.getElementById("yttcTipsShow");
                var divEleCount = document.getElementById("yttcTipsCount");
                if (divEle != null) {
                    divEle.innerHTML = "当前第" + document.getElementById("yttcDown").title + "页";
                }
                if (divEleCount != null) {
                    divEleCount.innerHTML = "总共" + document.getElementById("yttcEnd").title + "页";
                }

                var yttcPageTempID = yttcPageHtml[0].attributes["yttemp"];
                var yttcHtmlTemp = "";
                if (yttcPageTempID != null) {

                    yttcHtmlTemp = document.getElementById(yttcPageTempID.nodeValue.toString()).innerHTML;
                }

                var yttcHtmlTempbf = yttcHtmlTemp;
                var yttcContents = "";

                var pageSizeStart = parseInt(document.getElementById("yttcUp").title);
                var pageSizeEnd = parseInt(document.getElementById("yttcDown").title);
                var pageSize = parseInt(yttcPageSize.nodeValue);


                var datas = [];
                for (ds = (pageSizeStart * pageSize); ds < (pageSizeEnd * pageSize); ds++) {
                    if (newJson[ds] != null) {
                        datas.push(newJson[ds]);
                    }
                }

                if (datas.length == 0) {
                    datas = [{ "title": "暂无数据", "ParentID": 0, "url": "javascript:void(0)", "imgsrc": "http://img.yutaiyun.com/js/nomessage.jpg", "note": null, "keyword": "暂无数据", "description": "暂无数据", "createtime": "2016-08-30"}];
                }

                $.each(datas, function (e, item) {
                    var array = ["ID", "imgsrc", "title", "keyword", "createtime", "description", "createtime", "url", "ytcontent"];
                    for (ay = 0; ay < array.length; ay++) {
                        if (array[ay].toString().toLowerCase() == "imgsrc") {
                            re = new RegExp("{%%" + array[ay].toString() + "%%}", "g");
                            imgsrc = item[array[ay].toString()] != null ? item[array[ay].toString()].toString() : "";
                            yttcHtmlTemp = yttcHtmlTemp.replace(re, imgsrc);
                        }
                        else if (array[ay].toString().toLowerCase() == "url") {
                            re = new RegExp("{%%" + array[ay].toString() + "%%}", "g");

                            try {
                                console.log(ytOnline);
                            }
                            catch (e) {
                                ytOnline = undefined;
                            }

                            if (ytOnline == undefined) {
                                urlTemp = item["ID"] != null ? item["ID"].toString() + ".html" : "";
                            }
                            else {
                                urlTemp = item["url"] != null ? item["url"].toString() : "";
                            }
                            yttcHtmlTemp = yttcHtmlTemp.replace(re, urlTemp);
                        }
                        else if (array[ay].toString().toLowerCase() == "ytcontent") {
                            re = new RegExp("{%%" + array[ay].toString() + "%%}", "g");
                            yttcHtmlTemp = yttcHtmlTemp.replace(re, (item[array[ay].toString()] != null ? HtmlDecode(item[array[ay].toString()].toString()) : ""));
                        }
                        else {
                            re = new RegExp("{%%" + array[ay].toString() + "%%}", "g");
                            yttcHtmlTemp = yttcHtmlTemp.replace(re, (item[array[ay].toString()] != null ? item[array[ay].toString()].toString() : ""));
                        }
                    }
                    yttcContents += yttcHtmlTemp;
                    yttcHtmlTemp = yttcHtmlTempbf;
                });


                yttcPageHtml.each(function () {
                    if (pageType == undefined || pageType == 0) {
                        $(this).html(yttcContents);
                    }
                });

            }
        }
    }
}

function HtmlDecode(str) {
    var t = document.createElement("div");
    t.innerHTML = str;
    return t.textContent || t.innerText;
}

//#region 点击分页展示
function ytpangain(btnID) {
    pageType = 0;
    switch (btnID) {
        case "yttcBegin":
            ytpangainData(0);
            break;
        case "yttcUp":
            var upTitle = document.getElementById("yttcUp").title;
            var downTitle = document.getElementById("yttcDown").title;
            if (parseInt(upTitle) > 0) {
                upTitle = (parseInt(upTitle) - 1).toString();
                downTitle = (parseInt(downTitle) - 1).toString();
                document.getElementById("yttcUp").title = upTitle;
                document.getElementById("yttcDown").title = downTitle;
            }
            ytpangainData(1);
            break;
        case "yttcDown":
            var upTitle = document.getElementById("yttcUp").title;
            var downTitle = document.getElementById("yttcDown").title;
            var endTitle = document.getElementById("yttcEnd").title;
            if (parseInt(downTitle) < parseInt(endTitle)) {
                upTitle = (parseInt(upTitle) + 1).toString();
                downTitle = (parseInt(downTitle) + 1).toString();
                document.getElementById("yttcUp").title = upTitle;
                document.getElementById("yttcDown").title = downTitle;
            }
            ytpangainData(1);
            break;
        case "yttcEnd":
            var upTitle = document.getElementById("yttcUp").title;
            var downTitle = document.getElementById("yttcDown").title;
            var endTitle = document.getElementById("yttcEnd").title;
            if (parseInt(endTitle) > 0) {
                var dtup = parseInt(endTitle) - 1;
                if (dtup >= 0) {
                    upTitle = dtup.toString();
                }
                else {
                    upTitle = "0";
                }
                downTitle = (parseInt(endTitle)).toString();
                document.getElementById("yttcUp").title = upTitle;
                document.getElementById("yttcDown").title = downTitle;
            }
            ytpangainData(1);
            break;
    }
}
//#endregion
