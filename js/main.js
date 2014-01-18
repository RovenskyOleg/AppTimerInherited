window.onload = function() {
    var view_timer,
        view_timer2,
        statistic;
 
    view_timer = new DisplayingTime(document.getElementById("clock"));
    view_timer2 = new DisplayingTime(document.getElementById("time"));

    statistic = new Statistics(document.getElementById("time"));
};