$(document).ready(function() {

  var $slick = $('.slider'),
      $fancyBox = $('.img-gallery'),
      $socialLikes = $('.social-likes'),
      $languageEl = $('.language__el'),
      $language = $('.language'),
      $btnScroll = $('.btn-scroll');

  $slick.slick({
    infinity: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    prevArrow: '<span class="btn-prev"></span>',
    nextArrow: '<span class="btn-next"></span>'
  });

  $fancyBox.fancybox({
    padding : 0,
    titleShow : true,
    transitionIn : 'fade',
    showCloseButton: true,
    overlayColor: '#000',
    overlayOpacity: 0.4,

      helpers: {
      overlay: {
        locked: false
      }
    }
  });

  $socialLikes.socialLikes({
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
  $language.hover(function(){
    $(this).toggleClass('is-open');
  });

  $languageEl.click(function(){
    $languageEl.removeClass('is-active');
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
  $btnScroll.on('click',function() {
    var margin = 10;
    $('body,html').animate({
      scrollTop: $('.discussion').offset().top - margin
    }, 1000);
  });


});