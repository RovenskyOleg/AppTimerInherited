function DateTime() {
    this.render = function() {
        
    };

    this.getDate = function() {
        this.timeline();
        this.normalize();
        return this.month + "/" + this.day + "/" + this.year;
    };

    return this;      
}