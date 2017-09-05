(function(a){
    a.fn.morpho_scroller=function(p){
        var p=p||{};

        var g=p&&p.scroller_time_interval?p.scroller_time_interval:"3000";
        var h=p&&p.scroller_title_show?p.scroller_title_show:"enable";
        var i=p&&p.scroller_window_background_color?p.scroller_window_background_color:"white";
        var j=p&&p.scroller_window_padding?p.scroller_window_padding:"1";
        var k=p&&p.scroller_border_size?p.scroller_border_size:"1";
        var l=p&&p.scroller_border_color?p.scroller_border_color:"black";
        var m=p&&p.scroller_images_width?p.scroller_images_width:"52";
        var n=p&&p.scroller_images_height?p.scroller_images_height:"35";
        var o=p&&p.scroller_title_size?p.scroller_title_size:"12";
        var q=p&&p.scroller_title_color?p.scroller_title_color:"blue";
        var r=p&&p.scroller_show_count?p.scroller_show_count:"3";
        var d=p&&p.directory?p.directory:"img";
        j += "px";
        k += "px";
        m += "px";
        n += "px";
        o += "px";
        var dom=a(this);
        var s;
        var t=0;
        var u;
        var v;
        var w=dom.find("ul:first").children("li").length;
        var x=Math.ceil(w/r);
        if(dom.find("ul").length==0||dom.find("li").length==0){
            dom.append("Require content");
            return null
        }
        dom.find("ul:first").children("li").children("a").children("img").css("width",m).css("height",n);
        if(h=='enable'){
            dom.find("ul:first").children("li").children("a").each(function(){
                $(this).append('<div class="morpho_scroller_title">'+$(this).attr("title")+'</div>')
            })
			dom.find("ul:first").children("li").css("height",n+o+"px");
        }else{
			dom.find("ul:first").children("li").css("height",n+"px");
		}
		dom.find(".morpho_scroller_title").height(parseInt(o)+"px");
        s_s_ul(dom,j,k,l,i);
        s_s_nav(dom.find(".morpho_scroller_nav"),d);
        m=parseInt(m);
        dom.find("ul:first").children("li").css("width",m+"px");
        n=parseInt(n);
        
        dom.find("ul:first").children("li").children("a").css("color",q);
        dom.find("ul:first").children("li").children("a").css("font-size",o);
        begin();
        s=setTimeout(play,g);
        dom.find(".morpho_scroller_nav").children("li").hover(
            function(){
                if($(this).parent().children().index($(this))==0){
                    $(this).css("background-position","left -50px");
                }else if($(this).parent().children().index($(this))==1){
                    $(this).css("background-position","right -50px");
                }
            },
            function(){
                if($(this).parent().children().index($(this))==0){
                    $(this).css("background-position","left top");
                }else if($(this).parent().children().index($(this))==1){
                    $(this).css("background-position","right top");
                }
            }
            );
        dom.find(".morpho_scroller_nav").children("li").click(function(){
            if($(this).parent().children().index($(this))==0){
                previous()
            }else if($(this).parent().children().index($(this))==1){
                next()
            }
        });
        dom.hover(
            function(){
                clearTimeout(s);
            },
            function(){
                s=setTimeout(play,g);
            }
        );
        function begin(){
            var a=dom.find("ul:first").children("li").outerWidth(true)*w;
            dom.find("ul:first").children("li").hide();
            dom.find("ul:first").children("li").slice(0,r).show();
            u=dom.find("ul:first").outerWidth();
            v=dom.find("ul:first").outerHeight();
            dom.find("ul:first").width(a);
            dom.width(u+60);
            dom.height(v);
            dom.children(".morpho_scroller_mask").width(u);
            dom.children(".morpho_scroller_mask").height(v);
            dom.find("ul:first").children("li").show();
            dom.css("position","relative");
            dom.find("ul:first").css("position","absolute");
            dom.children(".morpho_scroller_mask").width(u);
            dom.children(".morpho_scroller_mask").height(v);
            dom.find(".morpho_scroller_nav").css('top',(v-50)/2+parseInt(j)+"px");
            dom.find(".morpho_scroller_nav").width(u+60)
			dom.find("ul:first").clone().appendTo(dom.children(".morpho_scroller_mask"));
			dom.children(".morpho_scroller_mask").find("ul:last").css("left",a);
        }
        function previous(){
			clearTimeout(s);
			if(t > 0){
				t--;
				dom.children(".morpho_scroller_mask").find("ul").animate({
	                left: '+='+(m+10)
	            },500);
			}
        }
        function next(){
            play();
        }
        function play(){
            clearTimeout(s);
			t++;
			var a = dom.find("ul:first").children("li").outerWidth(true)*w;
            if(t >= w+1){
				t = 0;
				dom.children(".morpho_scroller_mask").find("ul:first").css("left","0px");
				dom.children(".morpho_scroller_mask").find("ul:last").css("left",a);
				s=setTimeout(play,0);
            }else{
				dom.children(".morpho_scroller_mask").find("ul").animate({
	                left: '-='+(m+10)
	            },500);
				s=setTimeout(play,g);
			}
        }
        function s_s_ul(a,b,c,d,e){
            b=parseInt(b);
            c=parseInt(c);
            var f="border: "+d+" solid "+" "+c+"px; padding:"+b+"px; background-color:"+e;
            a.attr("style",f)
        }
        function s_s_nav(a,d){
            var b=a.children("li:first");
            var c=a.children("li:last");
            a.children("li").css("width","32px");
            a.children("li").css("height","54px");
            a.children("li").css('background-image','url("'+d+'/arrow.gif")');
            c.css('background-position','right top');
            a.children("li").css('background-repeat','no-repeat');
            c.css('right','12px');
            b.css('left','12px');
        }
    }
})(jQuery);






