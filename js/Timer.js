"use strict";

function Timer() {
    var time_date;

    this.render = function() {
        var mathod = this.getDate();
        return mathod.hours + ":" + mathod.minutes;
    };

    this.normalize = function(arg) {
        return (arg < 10) ? '0' + arg : arg;
    };

    this.getDate = function() {
        time_date = new Date();
        return {
            hours: time_date.getHours(),
            minutes: this.normalize(time_date.getMinutes()),
            seconds: this.normalize(time_date.getSeconds()),
            month: this.normalize(time_date.getMonth() + 1),
            day: this.normalize(time_date.getDate()),
            year: this.normalize(time_date.getFullYear().toString().substr(2,2))
        };
    };

    return this;
}

var timer_parent = new Timer();