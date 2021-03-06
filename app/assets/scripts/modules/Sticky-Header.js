import $ from 'jquery';
 HEAD
import

import import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';
import smoothScroll from 'jquery-smooth-scroll';
 sticky-header

class StickyHeader {
  constructor() {
   this.siteHeader=$(".site-header");
 HEAD

   this.headerTriggerElement=$(".large-hero__title");
   this.createHeaderWaypoint();
   this.pageSections=$(".page-section");
   this.headerLinks=$(".primary-nav a");
   this.createPageSectionWaypoints();
   this.addSmoothScrolling();
  }

  addSmoothScrolling(){
    this.headerLinks.smoothScroll();
  }

  createHeaderWaypoint(){
    new Waypoint({
      element:this.headerTriggerElement[0],
      handler: function(direction) {
        if(direction== "down"){
          that.siteHeader.addClass("site-header--dark");
        } else{
          that.siteHeader.removeClass("site-header--dark");
        }
      }
    });
  }

  createPageSectionWaypoints(){
    var that = this;
    this.pageSections.each(function () {
      new Waypoint({
        var currentPageSection=this;
        element: currentPageSection,
        handler: function (direction) {
          if (direction=="down") {
            var matchingHeaderLink=currentPageSection.getAttribute("data-matching-link");
            that.headerLinks.removeClass("is-current-link");
            $(matchingHeaderLink).addClass("is-current-link");
          }
        },
        offset: "18%"
      });

      new Waypoint({
        var currentPageSection=this;
        element: currentPageSection,
        handler: function (direction) {
          if (direction=="up") {
            var matchingHeaderLink=currentPageSection.getAttribute("data-matching-link");
            that.headerLinks.removeClass("is-current-link");
            $(matchingHeaderLink).addClass("is-current-link");
          }
        },
        offset: "-40%"
      });
    });
 sticky-header
  }
}

export default StickyHeader;
