# Day 1: JSX Explained

## What I learned
- Browsers don't understand JSX.
- JSX is converted into `React.createElement()` calls.
- `createElement` returns a JavaScript object that describes the UI.
- React compares it with the previous object and updates only what changed in the DOM.

## Flow
JSX -> createElement -> JS Object -> DOM Update

## Example

JSX:

```jsx
const element = <h1>Hello</h1>;
```

What it becomes:

```js
const element = React.createElement("h1", null, "Hello");
```

## Key point
JSX is not HTML. It is a cleaner way to write `React.createElement()`.

## Things to remember
- JSX must return one parent element (or a fragment `<></>`).
- Use `className` instead of `class`.
- Use curly braces `{}` to write JavaScript inside JSX.