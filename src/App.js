import React,{useReducer} from 'react';
// import logo from './logo.svg';
import './App.css';
import DataFetching2 from './components/DataFetching2';
import CounterMemo from './components/CounterMemo';
import FocusInput from './components/FocusInput';
import HookTimer from './components/HookTimer';
// import ComponentA from './components/ComponentA';
// import ComponentB from './components/ComponentB';
// import ComponentC from './components/ComponentC';
// import ComponentE from './components/ComponentE';
// import Counter3 from './components/Counter3';
// import HookCounter from './components/HookCounter';
// import HookCounterTwo from './components/HookCounterTwo';
// import HookCounterThree from './components/HookCounterThree';
// import HookCounterFour from './components/HookCounterFour';
// import NewHookCount from './components/NewHookCount';
// import HookMouse from './components/HookMouse';
// import MouseContainer from './components/MouseContainer';
// import IntervalHookCount from './components/IntervalHookCount';
// import DataFetching from './components/DataFetching';

// export const ChannelContext=React.createContext()
// export const UserContext=React.createContext()
// export const CountContext=React.createContext()

// const initialState=0;
// const reducer=(state,action) => {
// switch(action){
//     case 'increment':
//         return state+1
//     case 'decrement':
//          return state-1;
//     case 'reset':
//           return initialState
//     default:
//            return state
// }
// }
function App() {
  return(
  <div className="App">
    {/* <DataFetching2/> */}
    {/* <CounterMemo/> */}
    {/* <FocusInput/> */}
    <HookTimer/>
  </div>
  // const [count,dispatch]=useReducer(reducer,initialState)
  // return (  
    
  //   <CountContext.Provider value={{countState:count,countDispatch:dispatch}}>
  //    <div className="App">
  //     Count : {count}
  //     <ComponentA/>
  //     <ComponentB/>
  //     <ComponentC/> 
  //      </div>
  //     </CountContext.Provider>
     
    //  {/* <Counter3/> */}
    //   {/* <UserContext.Provider value={'Anchaal'}>
    //     <ChannelContext.Provider value={'ITER'}>
    //       <ComponentE/>
    //     </ChannelContext.Provider>
    //   </UserContext.Provider> */}
    //   {/* <HookCounter/> */}
    //   {/* <HookCounterTwo/> */}
    //   {/* <HookCounterThree/> */}
    //   {/* <HookCounterFour/> */}
    //   {/* <NewHookCount/> */}
    //   {/* <HookMouse/> */}
    //   {/* <MouseContainer/> */}
    //   {/* <IntervalHookCount/> */}
    //   {/* <DataFetching/> */}
   
  )
}

export default App;
