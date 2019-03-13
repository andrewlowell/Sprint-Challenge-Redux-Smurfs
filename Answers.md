1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

  Array.concat(), Object.assign(), Array.map(), and Object.assign() is the method we use to create a new object while extending the props of another object.

2.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

  The store is one object where you can keep all of your application's state data, which is known as a single source of truth for a redux application because it is immutable and can only be changed by dispatching actions in a predictable way. Actions are simple objects with a type and a payload, which are really instructions to the reducer on how to change the current state to the next state. Reducers take actions that only provide a type of action to complete and some data to do it with and perform all of the logic neccessary to change the state to the next state based on the action.

3.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

  Component state is managed by individual components, whereas application state is managed in a centralized location and accessed through the store and through props.

4.  What is middleware?

  Middleware are functions that intercept requests to and perform some kind of logic to either modify or stop the requests, or dispatch other requests. 

5.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

  Redux thunk is a middleware that allows us to write action creators which return functions instead of simple actions. That means that we can perform asynchronous actions using axios and only dispatch actions conditionally when we want to.

6.  Which `react-redux` method links up our `components` with our `redux store`?

  connect()