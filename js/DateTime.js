function DateTime() {
    this.render = function() {
        var mathod = this.getDate();
        return mathod.month + "/" + mathod.day + "/" + mathod.year;
    };

    return this;  
}

DateTime.prototype = new Timer();