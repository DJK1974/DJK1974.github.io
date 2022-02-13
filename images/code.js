$(document).ready(function(){
    
    var regdh = /,/g;	
    	$("a").each(function(){
    		if($(this).attr("href") == 'http://www.beian.miit.gov.cn/')
    		{
    			$(this).attr("href",'https://beian.miit.gov.cn/');
    		}
    		if($(this).attr("href") == 'https://www.beian.miit.gov.cn/')
    		{
    			$(this).attr("href",'https://beian.miit.gov.cn/');
    		}
    		var h = $(this).attr("href");
    		if(h){
    			if(h.indexOf(",")>0){
    				$(this).attr("href",$(this).attr("href").replace(regdh,'%2C'));			
    			}
    		}
    	});

    
    rp();
    if(IsMobile() == false){
    		//console.log("开始滚动！");
    		gd();
    	}

});


function rp(){
    var keylist = jQuery.parseJSON('[{"key": "全网销量第一"},{"key": "全球首发"},{"key": "全国首家"},{"key": "高档"},{"key": "精确"},{"key": "正品"},{"key": "不会再便宜"},{"key": "领导品牌"},{"key": "非转基因更安全"},{"key": "销量冠军"},{"key": "世界"},{"key": "绝无仅有"},{"key": "最新技术"},{"key": "专利"},{"key": "卓越"},{"key": "最佳"},{"key": "龙头"},{"key": "首屈一指"},{"key": "驰名"},{"key": "马上降价"},{"key": "仅此一次"},{"key": "厂家直销"},{"key": "十大品牌"},{"key": "榜首"},{"key": "优质"},{"key": "百强"},{"key": "热销"},{"key": "十分"},{"key": "绝对"},{"key": "效果"},{"key": "领先"},{"key": "全面"},{"key": "超过"},{"key": "全方位"},{"key": "立即提升"},{"key": "独有"},{"key": "完美"},{"key": "引领"},{"key": "完全"},{"key": "卓越"},{"key": "最具"}, {"key": "最爱"}, {"key": "最赚"}, {"key": "最优"}, {"key": "最优秀"}, {"key": "最好"}, {"key": "最大"}, {"key": "最大程度"}, {"key": "最高"}, {"key": "最高级"}, {"key": "最高档"}, {"key": "最奢侈"}, {"key": "最低"}, {"key": "最低级"}, {"key": "最低价"}, {"key": "最底"}, {"key": "最便宜"}, {"key": "时尚最低价"}, {"key": "最流行"}, {"key": "最受欢迎"}, {"key": "最时尚"}, {"key": "最聚拢"}, {"key": "最符合"}, {"key": "最舒适"}, {"key": "最先"}, {"key": "最先进"}, {"key": "最先进科学"}, {"key": "最先进加工工艺"}, {"key": "最先享受"}, {"key": "最后"}, {"key": "最后一波"}, {"key": "最新"}, {"key": "最新科技"}, {"key": "最新科学"}, {"key": "第一"}, {"key": "中国第一"}, {"key": "全网第一"}, {"key": "销量第一"}, {"key": "排名第一"}, {"key": "唯一"}, {"key": "第一品牌"}, {"key": "NO.1"}, {"key": "TOP.1"}, {"key": "no.1"}, {"key": "no1"}, {"key": "top1"}, {"key": "top.1"}, {"key": "独一无二"}, {"key": "全国第一"}, {"key": "一流"}, {"key": "一天"}, {"key": "仅此一次"}, {"key": "仅此一款"}, {"key": "最后一波"}, {"key": "大品牌之一"}, {"key": "国家级"}, {"key": "国家级产品"}, {"key": "全球级"}, {"key": "宇宙级"}, {"key": "世界级"}, {"key": "顶级"}, {"key": "顶尖"}, {"key": "尖端"}, {"key": "顶级工艺"}, {"key": "顶级享受"}, {"key": "高级"}, {"key": "极品"}, {"key": "极佳"}, {"key": "绝佳"}, {"key": "绝对"}, {"key": "终极"}, {"key": "极致 "}, {"key": "首家"}, {"key": "首个"}, {"key": "首选"}, {"key": "独家"}, {"key": "独家配方"}, {"key": "首发"}, {"key": "全网首发"}, {"key": "全国首发"}, {"key": "独家"}, {"key": "首次"}, {"key": "首款"}, {"key": "全国销量冠军"}, {"key": "国家级产品"}, {"key": "国家"}, {"key": "国家免检"}, {"key": "国家领导人"}, {"key": "填补国内空白"}, {"key": "中国驰名"}, {"key": "驰名商标"}, {"key": "国际品质"}, {"key": "大牌"}, {"key": "金牌"}, {"key": "名牌"}, {"key": "王牌"}, {"key": "领袖品牌"}, {"key": "世界领先"}, {"key": "遥遥领先"}, {"key": "领导者"}, {"key": "缔造者"}, {"key": "创领品牌"}, {"key": "领先上市"}, {"key": "巨星"}, {"key": "著名"}, {"key": "掌门人"}, {"key": "至尊"}, {"key": "巅峰"}, {"key": "奢侈"}, {"key": "优秀"}, {"key": "资深"}, {"key": "领袖"}, {"key": "之王"}, {"key": "王者"}, {"key": "冠军"}, {"key": "史无前例"}, {"key": "前无古人"}, {"key": "永久"}, {"key": "万能"}, {"key": "祖传"}, {"key": "特效"}, {"key": "无敌"}, {"key": "纯天然"}, {"key": "100%"}, {"key": "超赚"}, {"key": "精准"}, {"key": "老字号"}, {"key": "中国驰名商标"}, {"key": "特供"}, {"key": "专供"}, {"key": "专家推荐"}, {"key": "质量免检"}, {"key": "无需国家质量检测"}, {"key": "免抽检"}, {"key": "领导人推荐"}, {"key": "机关推荐"}, {"key": "使用人民币图样"}, {"key": "点击领奖"}, {"key": "恭喜获奖"}, {"key": "全民免单"}, {"key": "点击有惊喜"}, {"key": "点击获取"}, {"key": "点击转身"}, {"key": "点击试穿"}, {"key": "点击翻转"}, {"key": "领取奖品"}, {"key": "秒杀"}, {"key": "抢爆"}, {"key": "再不抢就没了"}, {"key": "不会更便宜了"}, {"key": "没有他就"}, {"key": "错过就没机会了"}, {"key": "万人疯抢"}, {"key": "全民疯抢"}, {"key": "全民抢购"}, {"key": "抢疯了"}, {"key": "卖疯了"}, {"key": "今日"}, {"key": "今天"}, {"key": "几天几夜"}, {"key": "倒计时"}, {"key": "趁现在"}, {"key": "就"}, {"key": "仅限"}, {"key": "周末"}, {"key": "周年庆"}, {"key": "特惠趴"}, {"key": "购物大趴"}, {"key": "闪购"}, {"key": "品牌团"}, {"key": "精品团"}, {"key": "单品团"}, {"key": "随时结束"}, {"key": "随时涨价"}, {"key": "马上降价"}, {"key": "最"}, {"key": "专业"}, {"key": "品质保证"}]');
	$.each(keylist,function(index,item){
			var htmlall = $('html').text();
            keystring = item.key;
            ckey(keystring,$('html'));
		});
}


function ckey(keystring,$dom){
    if($dom.length>0)
        if($dom.text().indexOf(keystring)>=0){
            //console.log("发现违规关键词：" + keystring);
            if(tchilden(keystring,$dom) == 0)
            {
                //替换
                console.log("替换违规关键词：" + keystring);
                var regkey = new RegExp(keystring,"g");
                rpkey = '********************************'.substr(0,keystring.length);
                $dom.html($dom.html().replace(regkey ,rpkey));
                ckey(keystring,$('html'));
                
            }else{
                ckey(keystring,$dom.children(":first"));
            }
        }else{
            ckey(keystring,$dom.next());
        }
}

function tchilden(keystring,$dom)
{
    var number = $dom.children().length;
    if(number == 0){
        return '0';
    }else{
        var result = '0';
        $dom.children().each(function(){
            if($(this).text().indexOf(keystring)>=0){
                result = keystring
                return false;
            }
        });
        return result;
    }
}
function gd(){
	var h = 0;
	try{
		h = $("div[ytname='banner']").find("img")[0].height;
	}catch(e){}
	if(h<10){
		h=500;
	}
	$(".banner").height(h + "px");
	$(".b-list").css('padding-top',(h - 20) + "px");
}

    //判断是否是手机
    function IsMobile() {
        var isMobile = {
            Android: function () {
                return navigator.userAgent.match(/Android/i) ? true : false;
            },
            BlackBerry: function () {
                return navigator.userAgent.match(/BlackBerry/i) ? true : false;
            },
            iOS: function () {
                return navigator.userAgent.match(/iPhone|iPad|iPod/i) ? true : false;
            },
            Windows: function () {
                return navigator.userAgent.match(/IEMobile/i) ? true : false;
            },
            any: function () {
                return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Windows());
            }
        };
        //console.log(document.body.clientWidth < 751);
        return isMobile.any() ? true : (document.body.clientWidth < 751); //是移动设备
    }
