import React from 'react';
import './App.css';
import Greet from './commponents/Greets'
import Welcome from './commponents/welcome'
import Message from './commponents/Message.';
import Counter from './commponents/Counter';
import FunctionClick from './commponents/FunctionClick'
import ClassClick from './commponents/ClassClick';
import EventBind from './commponents/EventBind';
import Parentcomponent from './commponents/Parentcomponent';
import UserGreeting from './commponents/UserGreeting';
import LIst from './commponents/LIst';
import Stylesheet from './commponents/Stylesheet';
import Inline from './commponents/Inline';
import './appStyles.css';
import Styles from './appStyle.module.css'
import Form from './commponents/Form'
import Mountcycle from './commponents/Mountcycle';
import Update from './commponents/Update';
import Fragment from './commponents/Fragment';
import Refdemo from './commponents/Refdemo';
import Focusinput from './commponents/Focusinput';
import FRParentInput from './commponents/FRParentInput';
import PortalDemo from './commponents/PortalDemo';
import Hero from './commponents/Hero';
import ErrorBoundary from './commponents/ErrorBoundary';
import ClickCounter from './commponents/ClickCounter';
import HoverCounter from './commponents/HoverCounter';
import ClickCounterTwo from './commponents/ClickCounterTwo';
import HoverCounterTwo from './commponents/HoverCounterTwo';
import User from './commponents/User';
import CounterTwo from './commponents/CounterTwo';

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <CounterTwo render={(count, increamentCount) => (

          <ClickCounter count={count} increamentCount={increamentCount}></ClickCounter>
        )}></CounterTwo>

        <CounterTwo render={(count, increamentCount) => (

          <HoverCounterTwo count={count} increamentCount={increamentCount}></HoverCounterTwo>
        )}></CounterTwo>
        {/* <ClickCounterTwo></ClickCounterTwo>
        <HoverCounterTwo></HoverCounterTwo>
         <User render = {(isloggedIn)=> isloggedIn ?'lalit' : 'guest'}></User> */}
        {/* <ClickCounter name = "visvas"></ClickCounter> */}
        {/* <HoverCounter></HoverCounter> */}
        {/* <ErrorBoundary>
        <Hero heroname = 'Batman'></Hero>
        </ErrorBoundary>
        
        <ErrorBoundary>
        <Hero heroname = 'superman'></Hero>
        </ErrorBoundary>

        <ErrorBoundary>
       <Hero heroname = 'joker'></Hero>
       </ErrorBoundary> */}
        {/* <PortalDemo></PortalDemo> */}
        {/* <FRParentInput></FRParentInput> */}
        {/* <Focusinput></Focusinput> */}
        {/* <Refdemo></Refdemo> */}
        {/* <Fragment></Fragment> */}
        {/* <Update></Update> */}
        {/* <Mountcycle></Mountcycle> */}
        {/* <Form></Form> */}
        {/* <h1 className = 'error'>error</h1>
        <h1 className = {Styles.success}>success</h1>
        <Inline></Inline> */}
        {/* <Stylesheet primary = {true}></Stylesheet> */}
        {/* <LIst></LIst> */}
        {/* <UserGreeting></UserGreeting> */}
        {/* <Parentcomponent></Parentcomponent> */}
        {/* <EventBind></EventBind> */}
        {/* <ClassClick></ClassClick> */}
        {/* <FunctionClick></FunctionClick> */}
        {/* <Counter/> */}
        {/* <Message/> */}
        {/* <Greet name = 'harish' heroname = 'batman'>
               <p>this is children props</p>
           </Greet> */}
        {/* <Greet name = 'appu' heroname = 'superman'>
              <button>click me</button>
           </Greet>
           <Greet name = 'ramu' heroname = 'pta nhi kon'/> */}
        {/* <Welcome name = 'appu' heroname = 'superman'/>  */}
      </div>
    );
  }
}

