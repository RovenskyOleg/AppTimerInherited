function ShortTime() {
    this.render = function() {
        
    };

    this.getDate = function() {
        this.timeline();
        this.normalize();
        return this.hours + ":" + this.minutes;
    };

    return this;
}