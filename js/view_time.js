function DisplayingTime(value) {

    var flag = true,
        date = false,
        timer_parent,
        short_time,
        full_time,
        date_time;

    timer_parent = new Timer();

    ShortTime.prototype = timer_parent;

    short_time = new ShortTime();

    FullTime.prototype = timer_parent;

    full_time = new FullTime();

    DateTime.prototype = timer_parent;

    date_time = new DateTime();

    console.log(timer_parent.getDate());
    console.log(short_time.getDate());
    console.log(date_time.getDate());

    function leftClick() {
        changeTimer();
        flag = !flag; 
    }

    function rightClick(e) {
        flag = true;
        date = !date;
        changeTimer();
        e.preventDefault(); 
    }

    value.addEventListener ("click", leftClick, false);
    value.addEventListener ("contextmenu", rightClick, false);
    

    var callback = timer_parent.getDate();

    function changeTimer() {
        callback = date_time.getDate();
        if(!date) {
            callback = flag ? short_time.getDate() : full_time.getDate();
        }
        value.innerHTML = callback;
    }

    function start() {
        changeTimer();
    }
    
    setInterval(start,500);

    return this;
}