function ShortTime() {
    this.render = function() {
        var mathod = this.getDate();
        return mathod.hours + ":" + mathod.minutes;
    };

    return this;
}

ShortTime.prototype = new Timer();