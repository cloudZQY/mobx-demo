import React, {
  Component
} from 'react';
import ReactDom from 'react-dom'
import {
  observable,
  computed,
  autorun,
} from 'mobx';

/**
 * 普通例子
 */

// var value = observable(1);
// var person = observable({
//   name: 'Julie',
//   age: 24,
//   get labelText() {
//     return `${this.name}'s age is ${this.age}`
//   }
// });

// var doublevalue = computed(() => value * 2);
// var minAge = computed(() => person.age - 10);

// autorun(() => console.log('autoRun value', value.get()));
// autorun(() => console.log('autoRun labelText', person.labelText));

// console.log('first doubuleValue:', doublevalue.get());
// console.log('first minAge:', minAge.get());

// person.age = 28;

// console.log('second doubuleValue:', doublevalue.get());
// console.log('second minAge:', minAge.get());

/**
 * mobx 支持的类型有 primitives, arrays, classes 和 objects 。primitives (原始类型) 只能通过 set 和 get 方法取值和设值。而 Object 则可以利用 Object.defineProperty 方法自定义 getter 和 setter 。
 */


/**
 * 类
 */

// class Foo {
//     @observable length = 2
//     @computed get squared() {
//         return this.length * this.length;
//     }
//     set squared(value) {
//         this.length = Math.sqrt(value);
//     }
// }


// var foo = new Foo();
// autorun(() => console.log('auto', foo.length))
// foo.squared = 25;
// console.log(foo.squared)

/**
 * 深究autorun
 */

const counter = observable(0);
const foo = observable(0);
const bar = observable(0);
autorun(() => {
  console.log('触发 autorun');
  if (counter.get() === 0) {
    console.log('foo', foo.get());
  } else {
    console.log('bar', bar.get());
  }
});

bar.set(10);    // 不触发 autorun
counter.set(1); // 触发 autorun
foo.set(100);   // 不触发 autorun
bar.set(100);   // 触发 autorun



/**
 * https://github.com/sorrycc/blog/issues/3
 */