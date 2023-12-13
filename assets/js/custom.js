/*--------------------- Copyright (c) 2023 -----------------------
[Master Javascript]
Project: bootstrap package
Version: 1.0.0
-------------------------------------------------------------------*/

    //  Menu 
    $(document).ready(function(){
        $(".openMenu").click(function(){
          $(".myNav").addClass("active");
        });
        $(".hideMe").click(function(){
            $(".myNav").removeClass("active");
          });
      });

   
   // main Slider
        $('.mainslider').owlCarousel({
            loop:true,
            margin:30,
            center: false,
            nav:false,
            dots:false,
            autoplay:true,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                1000:{
                    items:1
                }
            }
        })

        // AOS Animation 
        AOS.init({
            duration: 1200,
        })

        if (window.matchMedia('(min-width: 992px)').matches)
        {
               $(".dashboradMenu").hover(function(){
          $(".dashboradMenu, .dashMenuList li a span").addClass("active");
        });
        
             $(".dashboradMenu").mouseleave(function(){
          $(".dashboradMenu, .dashMenuList li a span").removeClass("active");
        });   
        }

        $(document).ready(function() {
            $(".dropDownMenu, .userDrop").click(function(e) {
              e.preventDefault();
      
              var submenu = $(this).siblings(".dashSubmenu");
              var otherSubmenus = $(this).parent().siblings().find(".dashSubmenu");
      
              submenu.slideToggle();
              otherSubmenus.slideUp();
            });
          });

        //   

        $(document).ready(function(){
          $('.list').click(function(){
              const value = $(this).attr('data-filter');
              if (value == 'all'){
                  $('.itembox').show('1000');
              }
              else {
                  $('.itembox').not('.'+value).hide('1000');
                  $('.itembox').filter('.'+value).show('1000');
                }
          })
          });
          // add active class on selected item
          $('.list').click(function(){
              $(this).addClass('active').siblings().removeClass('active')
          });
s       // main Slider
$('.mainslider').owlCarousel({
    loop:true,
    center: false,
    nav:false,
    dots:false,
    autoplay:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})
