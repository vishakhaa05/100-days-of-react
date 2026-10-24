# Day 2: Virtual DOM

## What I learned
- Updating the real DOM is slow, so React avoids doing it more than needed.
- The Virtual DOM is a lightweight copy of the UI kept in memory.

## How it works
1. State changes
2. React builds a new Virtual DOM
3. React compares the new one with the old one (diffing)
4. Only the changed parts are updated in the real DOM

## Example
If a counter goes from 5 to 6, only the number is updated. The rest of the page is untouched.

## How to see it yourself
Open the browser DevTools, go to Elements, and click the counter button. Only the number element flashes as it changes. The rest of the page does not.

## Key point
The Virtual DOM is not faster than the real DOM by itself. It helps React avoid unnecessary DOM updates.