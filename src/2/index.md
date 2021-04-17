# Functional Programming
Functional Programming, by default enforces some of the common traits of testable code,
unfortunately not all of them.

In fact, non properly designed code can still be very hard to test, as hard as any other paradigm.

Effect-TS is a set of libraries designed with testability in mind from the start and presents an opinionated approach that make testing simple out of the box.

Effect-TS includes a full port of ZIO, a functional programming library for Scala that feature a highly scalable fiber-based effect data type as its backbone and contains a huge set of useful data-types that are throught to be used in everyday application development.

#### Addressing the issues:

1) make helloWorld a function -
  ```shell
    yarn file src/2/1.ts
  ``` 

2) express the fact that helloWold cannot fail in the return type
  ```shell
    yarn file src/2/2.ts
  ```

3) make the dependency on console explicit
  ```shell
    yarn file src/2/3.ts
  ```
