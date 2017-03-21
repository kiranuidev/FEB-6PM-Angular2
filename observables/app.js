var obs = Rx.Observable.interval(500)
    .take(10)
    .do(value => console.log(value));


obs.subscribe(value => console.log("Observable value" + value));
