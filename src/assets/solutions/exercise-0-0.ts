// ------------ HTML
// {{ data | async }}

// ------------ TS
// data = new Observable<string>(subscriber => {
//     subscriber.next(this._getDateTimeString());

//     const interval = setInterval(() => {
//         subscriber.next(this._getDateTimeString());
//     }, 1000);

//     return () => {
//         clearInterval(interval);
//     };
// });
