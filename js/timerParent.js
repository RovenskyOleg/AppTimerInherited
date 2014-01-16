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
        return "";
    };

    this.timeline = function() {
        this.time_date = new Date();
        this.hours = this.time_date.getHours();
        this.minutes = this.time_date.getMinutes();
        this.seconds = this.time_date.getSeconds();
        this.month = this.time_date.getMonth() + 1;
        this.day = this.time_date.getDate();
        this.year = this.time_date.getFullYear().toString().substr(2,2);
    };

    this.normalize = function() {
        this.seconds = ((this.seconds < 10) ? "0" : "") + this.seconds;
        this.minutes = ((this.minutes < 10) ? "0" : "") + this.minutes;
        this.hours = (this.hours < 24) ? this.hours : this.hours-24;
        this.hours = (this.hours === 0) ? 0 : this.hours;
        this.day = ((this.day < 10) ? "0" : "") + this.day;
        this.month = ((this.month < 10) ? "0" : "") + this.month;
    };

    this.getDate = function() {
        this.timeline();
        this.normalize();

        return this.hours + ":" + this.minutes;
    };

//in view
    // function wrapper(obj) {
    //     return function() {
    //         return obj.getDate();
    //     };
    // }

    // var callback = wrapper(this);

    // function changeTimer() {
    //     document.getElementById("clock").innerHTML = callback();
    // }
    
    // setInterval(changeTimer,500);

    //console.log(this.getDate());

    return this;
}