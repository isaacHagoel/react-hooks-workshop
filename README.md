# react-hooks-workshop
This repo was bootstrapped using create-react-app (ejected).
Each branch represents a meaningful checkpoint to make it easy to follow along. 

1. **step-1-counters-no-hooks**: create two class based components. One has two buttons to increment/ decrement a number, the other counts mouse down events anywhere. Can they be functional component?
2. **step-2-intuition**: How can we take the first counter (the one with the two buttons) and do away with anything but the render function while still being able to keep track of its state? Is there a way to use closures to achieve it? How much integration with the rendering engine would be required?
3. **step-3-use-state-use-effect**: We are now ready to look at the two most basic built in hooks: useState and useEffect. Now is also a good time to go over the rules of hooks and use our 'intuition' from step-2 to understand why they make sense. Also worth mentioning the difference between useEffect and useLayoutEffect. 
