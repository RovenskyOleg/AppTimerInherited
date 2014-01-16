window.onload = function() {
    var view_timer,
        view_timer2,
        statistic;
        // timer_parent,
        // short_time,
        // full_time,
        // date_time;

    view_timer = new DisplayingTime(document.getElementById("clock"));
    view_timer2 = new DisplayingTime(document.getElementById("time"));

    statistic = new Statistics(document.getElementById("time"));
    // timer_parent = new Timer();

    // ShortTime.prototype = timer_parent;

    // short_time = new ShortTime();

    // FullTime.prototype = timer_parent;

    // full_time = new FullTime();

    // DateTime.prototype = timer_parent;

    // date_time = new DateTime();
};