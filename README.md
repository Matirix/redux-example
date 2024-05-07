# React + TypeScript + Vite

# Understanding of Redux with the Redux Tool Kit:
It's a global state manager with two key features; slices and store:

## Store
Store is a provider that is wrapped around the Application, here slices (state) are accessible down the component tree. This is seen in main.tsx, and defined in state -> store.ts.

### TypeScript specifics (useSelect and useDispatch)
Types are necessary for the use of the dispatch and selector hooks, It's what will allow it to access it's initial state and handle asynchronous requests respectively.

## Slices
Slices is where state is managed and actions are defined. To create a slice, I used the createSlice method that takes in a name (in order to identify it), an initial state, and reducers which are actions. In the Counter it's to increment/decrement, and notes it's to add/remove a note. Under the hood, these are copied, instead of mutated. 

### Extra Reducers
These are where asynchronous reducers are connected. They take in a builder which 'builds' out asynchronous cases (fulfilled, pending, etc). asynchronous functions are actually built outside of the slice, where the name is {slice.name} followed by '/{functionName}' and then the return of a result. It reminds me of the try/catch block where the the async tries and the cases are the handlers.
