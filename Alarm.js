class Alarm {
    constructor(time, dayOfWeek, alertTime) {
        this.time = time;
        this.dayOfWeek = dayOfWeek;
        this.alertTime = alertTime;
        this.snoozeCount = 0;
    }

    display() {
        const { dayOfWeek , time , alertTime} = this
        console.log("Alarm Time: ", dayOfWeek , "@" , time);
        console.log("Alert time : " , alertTime)
    }

    snooze() {
        if (this.snoozeCount < 3) {
            console.log("Alarm snoozed for 5 minutes.");
            this.snoozeCount++;
        } else {
            console.log("Maximum snooze limit reached.");
        }
    }
}

export default Alarm