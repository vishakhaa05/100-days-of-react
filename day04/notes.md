# Day 4: State

## What I learned
- State is a component's memory. It stores data that can change over time.
- When state changes, React re-renders the component and the screen updates.
- A normal variable does not trigger a re-render, so the screen stays the same.

## Example

```jsx
const [count, setCount] = useState(0);
```

- `count` is the current value
- `setCount` is the function that updates it
- `useState(0)` sets the starting value to 0

## State is a snapshot
Each render has its own fixed value of `count`. Calling `setCount` does not change the value in the current render. It asks React to re-render with a new value, and the new value appears in the next render.

```jsx
function handleClick() {
  setCount(count + 1);
  console.log(count); // still the old value
}
```

## Common bug

```jsx
setCount(count + 1);
setCount(count + 1);
setCount(count + 1);
// count increases by 1, not 3
```

All three lines use the same old `count`.

## Fix: use the updater function

```jsx
setCount(prev => prev + 1);
setCount(prev => prev + 1);
setCount(prev => prev + 1);
// count increases by 3
```

## Flow
Click -> setState -> Re-render -> New value in the next render

## Props vs state
- Props: data received from the parent, read-only
- State: data owned by the component, changed with `setState`

## Key point
State updates are scheduled, not instant. If the new value depends on the old one, use the updater function.