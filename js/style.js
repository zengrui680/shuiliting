/**
 * Created by Administrator on 2017/1/9.
 */
//设置视屏字体
new function (){
    var _self = this;
    _self.width = 640;
    _self.fontSize = 100;
    _self.widthProportion = function(){var p = (document.body&&document.body.clientWidth,document.getElementsByTagName("html")[0].offsetWidth)/_self.width;return p>1?1:p<0.5?0.5:p;};
    _self.changePage = function(){
        document.getElementsByTagName("html")[0].setAttribute("style","font-size:"+_self.widthProportion()*_self.fontSize+"px !important");
    }
    _self.changePage();
    window.addEventListener("resize",function(){_self.changePage();},false);
};
//设置适屏高度
$(function(){
    $(".cus").css("height",window.innerHeight);

    window.addEventListener('load', function() {
        FastClick.attach(document.body);
    }, false);
    $(".xuan li i").click(function(){
        $(".xuan li i").removeClass("on");
        $(this).addClass("on");
    })
    $(".rule").click(function(){
        $(".tang").fadeIn("slow");
        $(".zhe1").fadeIn("slow");
    })
    $(".x").click(function(){
        $(".tang").fadeOut("fast");
        $(".zhe1").fadeOut("fast");
    })
    //答题选择
    //活动规则弹框
    if($(".anwser").length>0) {
        var anwserwidth = $(".anwser").get(0).clientWidth;
        var contwidth = $(".cont").get(0).clientWidth;
        $(".anwser").css("margin-left", (contwidth - anwserwidth) / 2);
    }
    //答题返回
    $(".top i").click(function(){
        //window.location.reload();
        window.history.back();
    })
var http=require("http");
    http.createServer()
    /*fastclick_iphone手机专用*/

    //提交
    $(".push").click(function(){

    })

})
//机会用完
function notime(){

}