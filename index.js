import { of, map, combineLatest, BehaviorSubject } from "rxjs";

const foo = new BehaviorSubject(2);
const bar = new BehaviorSubject(100);

const result = combineLatest([foo, bar]).pipe(
  map(([foo, bar]) => {
    console.log("map");
    return foo * bar;
  })
);

result.subscribe((value) => {
  console.log("subscribe");
  console.log(value);
});

setTimeout(() => {
  console.log("setTimeout");
  foo.next(10);
}, 5000);

console.log("end");
