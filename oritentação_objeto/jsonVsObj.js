const obj = {a: 1, b: 2, c: 3, soma(){return a+b+c}}
console.log(JSON.stringify(obj));

// console.log(JSON.parse("{ a: 1, b: 2, c: 3}"));
// console.log(JSON.parse("{ 'a': 1, 'b': 2, 'c': 3}"));
console.log(JSON.parse('{ "a": 1, "b": 2, "c": 3}'));
console.log(JSON.parse('{ "a": 1, "b": 2, "c": 3, "d": {"a": 10, "b": 20, "c": 30}, "e": [{"a": 50, "b": 60, "d": 70}]}'));
