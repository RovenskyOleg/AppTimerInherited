function DisplayingTime(value) {

    var timer,
    time_form = {
        short_timer: new ShortTime(),
        full_timer: new FullTime(),
        date_timer: new DateTime()
    };

    timer = new ShortTime();

    function leftClick() {
        if(timer instanceof ShortTime) {
            timer = time_form.full_timer;
        } else {
            timer = time_form.short_timer;
        }
    }

    function rightClick(e) {
        if(timer instanceof ShortTime || timer instanceof FullTime) {
            timer = time_form.date_timer;
        } else {
            timer = time_form.short_timer;
        }

        e.preventDefault();
    }

    value.addEventListener ("click", leftClick, false);
    value.addEventListener ("contextmenu", rightClick, false);

    function start() {
        value.innerHTML = timer.render();
    }

    setInterval(start,500);

    return this;
}