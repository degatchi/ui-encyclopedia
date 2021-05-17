# ui-encyclopedia
All the UI designs & concepts I learn will be stored here for future reference :)

My main focus is towards `lucus'-custom-components` where I will be making components from scratch with inspired ideas. If you have any suggestions or questions feel free to contact me on twitter @DeGatchi.


## React
- `useEffect`: You must add all component-internal (if var is defined outside the component, changing it wont cause the component to be re-evaluated) "things" you use in your effect function if those "things" could change because your component (or some parent component) re-rendered.
- When `useState` becomes cumbersome or you're getting a lot of bugs/uintended behaviours, use `useReducer`
- `useState` is the main state management tool, great for independent pieces of state/date, great if state updates are easy and limited to a few kinds of updates.
- `useReducer` if you need more power, should be considered if you have related pieces of state/data, can be helpful if you have more complex state updates.
- `useContext` acts as a component-wide, 'behind the scenes' state storage, therefore we don't need to forward props.function up and down a propchain with `app.js`. However, it's not optimised for high frequency changes (multiple changes per second - use Redux)
