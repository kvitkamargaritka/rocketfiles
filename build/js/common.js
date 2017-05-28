$(document).ready(function() {

  //$fancyBox.fancybox({
  //  padding : 0,
  //  titleShow : true,
  //  transitionIn : 'fade',
  //
  //  helpers: {
  //    overlay: {
  //      locked: false
  //    }
  //  }
  //});

  $('.slider').slick({
    infinity: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  });

  $('.social-likes').socialLikes({
    url: 'https://github.com/sapegin/social-likes/',
    title: 'social likes',
    counters: true,
    singleTitle: 'Share it!'
  });

  var tabsSwitcher = function(tabsArray, contentArray) {
    tabsArray.map(function (i, el) {
      $(el).click(function () {
        var activeIndex = i;
        contentArray.map(function(contentIndex, content) {
          if( activeIndex === contentIndex ) {
            $(content).addClass('is-visible')
          } else (
            $(content).removeClass('is-visible')
          )
        });
        tabsArray.map(function(i, tab) {
          $(this).removeClass('is-active');
        });
        $(this).addClass('is-active');
      });
    });
  };

  var hoverSwitcher = function(tabsArray, contentArray) {
    tabsArray.map(function (i, el) {
      $(el).hover(function () {
        var activeIndex = i;
        contentArray.map(function(contentIndex, content) {
          if( activeIndex === contentIndex ) {
            $(content).addClass('is-visible')
          } else (
            $(content).removeClass('is-visible')
          )
        });
        tabsArray.map(function(i, tab) {
          $(this).removeClass('is-active');
        });
        $(this).addClass('is-active');
      });
    });
  };

  //Language
  $('.language').hover(function(){
    $(this).toggleClass('is-open');
  });

  $('.language__el').click(function(){
    $('.language__el').removeClass('is-active');
    $(this).toggleClass('is-active');
  });

  // Run tabsSwitcher for #tabs-big
  var generalTabs = $('#tabs-big'),
      generalTabsEl = generalTabs.find('.tabs__el'),
      generalTabsContent = generalTabs.find('.tabs__content');
  tabsSwitcher(generalTabsEl, generalTabsContent);

  // Run tabsSwitcher for #tabs-small
  var smallTabs = $('#tabs-small'),
      smallTabsEl = smallTabs.find('.tabs__el'),
      smallTabsContent = smallTabs.find('.tabs__content');
  tabsSwitcher(smallTabsEl, smallTabsContent);

  // Run tabsHower for menu inner drop-downs
  var innerMenu = $('.drop-down__el'),
      innerDropDown = $('.drop-down-inner');
  hoverSwitcher(innerMenu, innerDropDown);

  // Scroll to discussion
  $('.btn-scroll').on('click',function() {
    var margin = 25;
    $('body,html').animate({
      scrollTop: $('.discussion').offset().top - margin
    }, 1000);
  });


});