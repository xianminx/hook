# Hook Function Wrapper

This project includes a TypeScript function named `hook` that wraps another function with optional "`before`" and "`after`" hooks.

## Usage

First, import the hook:

```javascript
import { hook } from "hook";
```

Then, you can use it to wrap your function:

```js
const wrappedFunction = hook(yourFunction, {
  before: () => console.log('Before'),
  after: () => console.log('After'),
});

```

In this example, `yourFunction` is the function you want to wrap. The `before` and `after` options are functions that will be executed before and after yourFunction, respectively.

## Interface

The hook function accepts two parameters:

- `f`: The function to be wrapped.
- `opts`: An object with the following properties:
  - `before`: A function to be executed before the wrapped function. This is optional. 
  - `after`: A function to be executed after the wrapped function. This is optional.

The `hook` function returns the wrapped function.
