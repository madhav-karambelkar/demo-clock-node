import Clock from './Clock.js';

const clockObj = new Clock();

clockObj.displayCurrentTime();

clockObj.createAlarm('11:00 AM', 'Sunday', '10:01 AM');
clockObj.createAlarm('02:00 PM', 'Thursday', '01:15 PM');

clockObj.displayCurrentTime();

clockObj.snoozeAlarm(0);
clockObj.snoozeAlarm(0);
clockObj.snoozeAlarm(0);
// called for snooze limit.
clockObj.snoozeAlarm(0); 

clockObj.deleteAlarm(1);

console.log("Remaining alarms:");
clockObj.alarms.forEach((alarm, index) => {
    console.log(`Alarm ${index + 1}:`);
    alarm.display();
});