# Day 3: Props

## What I learned
- Props are the data a parent component passes to a child component.
- Data flows in one direction: parent to child.
- Props are read-only. A component must not change its own props.

## Example

```jsx
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

<Welcome name="Vishakha" />
```

## Why props are read-only
1. Data stays predictable, because you always know where a value comes from.
2. Bugs are easier to find.
3. React can safely compare old and new values and decide what to re-render.

## Extra learning (from a comment on my post)
- In development mode, React freezes the props object, so `props.name = "XYZ"` throws an error.
- The freeze only covers the top level. Objects and arrays inside props are not frozen, but changing them is still a bug, because the data belongs to the parent and the parent will not re-render to show the change.
- Fix: make a copy, or let the parent update the data.

```jsx
const updatedUser = { ...user, age: 30 }; // a copy, not the original
```

## Key point
Props are for receiving data. State is for changing data.