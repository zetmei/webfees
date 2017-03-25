//宣告window的東西不要放fonction裡面
var $win = $(window);

/////////////////////////////////////layout共用物////////////////////////////////////////
$(function(){

    //foundation(banner換圖,最新消息slider)
    $(document).foundation();

    //搜尋
    $('#search-open').click(function(){    
        $("#search_bar").fadeToggle();
        $('#search_bar input[type=text]').focus();
          
    });

    $('#search_bar input[type=text]').blur(function(e){
          closeSearch();
    });
    function closeSearch(){
        $('#search_bar').stop(true).fadeOut(350,'easeOutExpo');
    }


      //menu-header
      $(".menu").on("click",show_menu);
      function show_menu(){
          $(".search-mobile").hide();
          $(".sub-menu").hide();
          $(".menu-mobile").slideToggle();
          event.preventDefault();
      }

      //sub-menu-show
      $('.menu-mobile li').each(function(){
          $(this).click(
                function(){     
                   //自己的打開 
                    $(this).find('.sub-menu-mobile').slideToggle(500);
                    //鄰居的關起來
                    $(this).siblings('li').find('.sub-menu-mobile').slideUp(500);

                }
          );

      });

      //search-header
      $(".search").on("click",show_search);
      function show_search(){
          $(".menu-mobile").hide();
          $(".search-mobile").slideToggle();
          event.preventDefault();
      }


      //cart
      $('#cart-open').mouseover(function(){    
          $("#shopping_cart").fadeIn();
          
      }); 
      //(摸同伴消失
      $('#cart-open').siblings('li').mouseover(function(){    
         $("#shopping_cart").fadeOut();
          
      });    
      //(離開自己消失>>>用BEFORE加大感應區,非常好用~屌屌der  
      $('#shopping_cart').mouseleave(function(){            
          $("#shopping_cart").fadeOut();
          
      });

      //側導覽列打開(商用)
             $('#sidenav_ul01 li').click(
                 function(){      
                   //摸到的第幾個
                     var NOW1=$(this).index();  
                      //自己的打開
                      $("#sidenav_ul01 li .sidenav_ul_in").eq(NOW1).slideToggle(300);
                      //自己樣式toggle
                      $("#sidenav_ul01>li").eq(NOW1).toggleClass('active');
                      //其他人收起來
                      $("#sidenav_ul01 li .sidenav_ul_in").eq(NOW1).parent().siblings().find('.sidenav_ul_in').slideUp(300);
                      //其他人樣式拿掉
                      $("#sidenav_ul01>li").eq(NOW1).siblings().removeClass('active');
                      // $("#sidenav_ul01 li .sidenav_ul_in").eq(NOW1).siblings().find('.sidenav_ul_in').removeClass('active');
                 }
     );

    //導覽列fixed        
    var $header = $('header'),

        _headerHeight = $header.outerHeight(),

        _headerOffset = $header.offset();

    $win.on('scroll', function() {

        var _fixed = $header.hasClass('fixed');

        if ($win.scrollTop() > _headerOffset.top) {

            if (!_fixed) {

                // $('.header-mobile').addClass('fixed');

                $header.addClass('fixed');

                // $('body').css('margin-top', _headerHeight);

            }

        } else {

            if (_fixed) {

                $header.removeClass('fixed');

                // $('.header-mobile').removeClass('fixed');

                // $('body').css('margin-top', 0);



            };

        };
   });   



//結束
});

/////////////////////////////////////做網頁時網頁共用物/////////////////////////////////////////
$(function(){
	//取消連結虛線
    $("a").focus(function(){
         $(this).blur();
     }); 
    $("button").focus(function(){
         $(this).blur();
     }); 

	//判定IE8
    $(function(){
	     var WHAT = navigator.userAgent;
	     if(WHAT.match(/(MSIE 5.0|MSIE 6.0|MSIE 7.0|MSIE 8.0)/)){
	      // alert("123")
	     window.location="update.html";
     }
    });

    //支援IE9 placeholder
    var Browser = {
            IsIe: function () {
                return navigator.appVersion.indexOf("MSIE") != -1;
            },
            Navigator: navigator.appVersion,
            Version: function() {
                var version = 999; // we assume a sane browser
                if (navigator.appVersion.indexOf("MSIE") != -1)
                    // bah, IE again, lets downgrade version number
                    version = parseFloat(navigator.appVersion.split("MSIE")[1]);
                return version;
            }
        };

    if (Browser.IsIe() && Browser.Version() <= 9) {
         // Placeholder fix for IE
          $('input').focus(function() {
            var i = $(this);
            if(i.val() == i.attr('placeholder')) {
              i.val('').removeClass('placeholder');
              if(i.hasClass('password')) {
                i.removeClass('password');
                this.type='password';
              }     
            }
          }).blur(function() {
            var i = $(this);  
            if(i.val() == '' || i.val() == i.attr('placeholder')) {
              if(this.type=='password') {
                i.addClass('password');
                this.type='text';
              }
              i.addClass('placeholder').val(i.attr('placeholder'));
            }
          }).blur().parents('form').submit(function() {
            //if($(this).validationEngine('validate')) { // If using validationEngine
              $(this).find('[placeholder]').each(function() {
                var i = $(this);
                if(i.val() == i.attr('placeholder'))
                  i.val('');
                  i.removeClass('placeholder');

              })
            //}
          });
    }
   if (Browser.IsIe() && Browser.Version() <= 9) {
         // Placeholder fix for IE
          $('textarea').focus(function() {
            var i = $(this);
            if(i.val() == i.attr('placeholder')) {
              i.val('').removeClass('placeholder');
              if(i.hasClass('password')) {
                i.removeClass('password');
                this.type='password';
              }     
            }
          }).blur(function() {
            var i = $(this);  
            if(i.val() == '' || i.val() == i.attr('placeholder')) {
              if(this.type=='password') {
                i.addClass('password');
                this.type='text';
              }
              i.addClass('placeholder').val(i.attr('placeholder'));
            }
          }).blur().parents('form').submit(function() {
            //if($(this).validationEngine('validate')) { // If using validationEngine
              $(this).find('[placeholder]').each(function() {
                var i = $(this);
                if(i.val() == i.attr('placeholder'))
                  i.val('');
                  i.removeClass('placeholder');

              })
            //}
          });
    }


//結束
});

////////////////////////////////////////////////視窗resize、翻轉
$(window).on("resize orientationchange",function(){

            var _width = $win.width();         
               
            if(_width>=1024){
               //  $(".search_open").hide();
               // $(".search_more").show();
            }else{
              // $(".search_open").show();
              //  $(".search_close").hide();
            };  
      

 }).resize();