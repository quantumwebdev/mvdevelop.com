$(window).load(function(){if($(window).width()>767&&$(".equal-holder").length>0){function e(e){var t=0;e.each(function(){var e=$(this).height();e>t&&(t=e)});e.height(t)}e($(".equal"))}$(".carousel").length>0&&$(".carousel").carousel({interval:5e3});$(".slider").length>0&&$(".slider").bxSlider({mode:"fade",auto:!0,controls:!1,pause:5e3,pager:!1});$(".contact-form").length>0&&$(".contact-form").validate()});