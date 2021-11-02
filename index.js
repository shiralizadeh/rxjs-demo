import { of, map, combineLatest, BehaviorSubject } from "rxjs";

const foo = of(2);
const bar = of(100);

const result = combineLatest([foo, bar]).pipe(
  map(([foo, bar]) => {
    return foo * bar;
  })
);
