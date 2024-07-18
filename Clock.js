import Alarm from "./Alarm.js";

class Clock {
    constructor() {
        // all alarms
        this.alarms = [];
    }

    //  display current time
    displayCurrentTime() {
        const now = new Date();
        console.log("Current time: ", now.toLocaleTimeString());
    }

    createAlarm(time, dayOfWeek, alertTime) {
        const newAlarm = new Alarm(time, dayOfWeek, alertTime);
        this.alarms.push(newAlarm);
        newAlarm.display();
    }

    deleteAlarm(index) {
        if (index >= 0 && Boolean(this.alarms[index])) {
            const deletedAlarm = this.alarms.splice(index, 1)[0];
            console.log("Deleted alarm:");
            deletedAlarm.display();
        } else {
            console.log("Invalid alarm index.");
        }
    }

    snoozeAlarm(index) {
        if (index >= 0 && index < this.alarms.length) {
            this.alarms[index].snooze();
        } else {
            console.log("Invalid alarm index.");
        }
    }
}

export default Clock