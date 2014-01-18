function FullTime() {
    this.render = function() {
        var mathod = this.getDate();
        return mathod.hours + ":" + mathod.minutes + ":" + mathod.seconds;
    };

    return this;
}

FullTime.prototype = new Timer();