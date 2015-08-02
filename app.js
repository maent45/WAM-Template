/**
 * Created by Maen Terawasi on 2/08/2015.
 */
(function(){
    var app = angular.module('wam', [ ]);

    /*--- creating news controller ---*/
    app.controller('NewsController', function () {
        /*--- set property of this controller to equals newsarticles variable ---*/
        this.news = newsarticles;
    });

    /*--- newsarticles variable ---*/
    var newsarticles = [
        {
            title: "Basin Reserve flyover appeal finishes",
            date: "27th June 2015",
            image: "images/newsTestImgs/1.jpg"
        },
        {
            title: "Basin Reserve flyover appeal finishes",
            date: "27th June 2015",
            image: "images/newsTestImgs/3.jpg"
        }
    ];

})();


