## Typescript Training Course Notes

- Typescript Adds Types
- Can use Next-gen JS Features and get them compiled down for older browsers
- Adds Interfaces and Generics (Help us during development and give us more
  clear errors)
- Gives us Meta Programming Features like Decorators
- Rich Config Options
- Modern Tooling that helps outside of TS Projects

## Core Types

- numbers (1, 5.4, -10)
- strings ('hi', "hi", `hi`)
- boolean (true, false)
- object ({key: '4343', idNum: 34345})
- Array [1,2,3,obj]
- Tuple [1,2] (A fixed-length and fixed type array) Tuples are special because
  they allow you to control the sequence of data types in an array to keep input
  more strict
  - Push is allowed on Tuples, although it affects length
- Enum enum {NEW, OLD} - Automatically enumerated global constant identifiers
- Any - (\*) - Any value, no restrictions -- you may want to avoid this whenever
  possible

  - Union Types

  variable: type | type --> allows multiple types in one variable, but use with
  caution

  - Literal Types

  variable: "actual string" | 8 --> Actual direct values

  \*Type Alias : declared at the top of a file :

- type Combinable = number | string

- void : a type that can be inferred explicity for a function that doesnt not
  return a type

- functions can also be set as types

var cb: (num: number) => void // shows the input value type and the return value
type

- unknown : strange one but cannot be assigned to strict types

- never : specificied when a function NEVER returns i.e. when an error is thrown
  only

< function generateError(message: string, code: number): never { throw {
message: message, errorCode: code }; } >

## Additonal Terms

Type Inferrence : Typescript understanding what Type you're using after
declaring a variable

## Typescript CLI

- > tsc
- > tsc -w --watch
- > tsc --init
