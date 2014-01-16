function FullTime() {
    this.render = function() {
        
    };

    this.getDate = function() {
        this.timeline();
        this.normalize();
        return this.hours + ":" + this.minutes + ":" + this.seconds;
    };

    return this;
}