import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';


class StickyHeader {
    constructor(){
        this.siteHeader = $(".site-header");
        this.trigger = $(".large-hero__title");
        this.createHeaderWaypoint();
        this.pageSections = $(".page-section");
        this.createPageSectionWaypoints();
    }

    createHeaderWaypoint(){

        var that = this;
        new Waypoint({
            element: this.trigger[0],
            handler: function(direction){
                

                if(direction == "down"){
                    that.siteHeader.addClass("site-header--dark");
                } else {
                    that.siteHeader.removeClass("site-header--dark");
                }
            }
        });
    }
     
    createPageSectionWaypoints(){
        var currentPageSection = this;
        this.pageSections.each(function(){
            new Waypoint({
                element: currentPageSection,
                handler: function(){
                    var matchingHeaderLink = currentPageSection.getAttribute("data-matching-link");
                    $(matchingHeaderLink).addClass("is-current-link");
                }
            });
        });
    }
}

export default StickyHeader;