# ui-encyclopedia
All the UI designs I learn will be stored here for future reference :)


## React
- `useEffect`: You must add all component-internal (if var is defined outside the component, changing it wont cause the component to be re-evaluated) "things" you use in your effect function if those "things" could change because your component (or some parent component) re-rendered.