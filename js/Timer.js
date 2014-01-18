"use strict";

function Timer() {

    this.time_date = null;
    this.hours = null;
    this.minutes = null;
    this.seconds = null;
    this.month = null;
    this.day = null;
    this.year = null;

    this.render = function() {
        var mathod = this.getDate();
        return mathod.hours + ":" + mathod.minutes;
    };

    this.normalize = function(arg) {
        return (arg < 10) ? '0' + arg : arg;
    };

    var time_date;

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