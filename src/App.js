import React, {useReducer} from 'react';
import './App.css';
import TotalDisplay from './components/TotalDisplay';
import CalcButton from './components/CalcButton';
import { changeOperation, applyNumber, clearDisplay, memoryAdd, memoryRelease, memoryClear} from './actions/index'
import reducer, {initialState} from './reducers/index.js'

let currentState = initialState;
console.log('current state: ', currentState)

currentState = reducer(currentState, changeOperation('-'));
console.log('current State after using operator: ', currentState);

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleOperation = (operator) => {
    dispatch(changeOperation(operator))
  }
  const handleNumber = (number) => {
    dispatch(applyNumber(number))
  }
  const handleClearDisplay = () => {
    dispatch(clearDisplay)
  }
  const handleMemoryAdd = () => {
    dispatch(memoryAdd());
  }
  const handleMemoryRelease = () =>{
    dispatch(memoryRelease());
  }
  const handleMemoryClear = () => {
    dispatch(memoryClear())
  }

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#"><img width="40px" src="./Lambda-Logo-Red.png"/> Lambda Reducer Challenge</a>
      </nav>

      <div className = "container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            
            <TotalDisplay value={0}/>
            <div className="row details">
              <span id="operation"><b>Operation:</b> X</span>
              <span id="memory"><b>Memory:</b> 0</span>
            </div>
            
            <div className="row">
              <CalcButton value={"M+"} onClick = {handleMemoryAdd}/>
              <CalcButton value={"MR"} onClick = {handleMemoryRelease}/>
              <CalcButton value={"MC"} />
            </div>

            <div className="row">
              <CalcButton value={1} onClick = {() => {handleNumber(1)}}/>
              <CalcButton value={2} onClick = {() => {handleNumber(2)}}/>
              <CalcButton value={3} onClick = {() => {handleNumber(3)}}/>
            </div>

            <div className="row">
              <CalcButton value={4} onClick = {() => {handleNumber(4)}}/>
              <CalcButton value={5} onClick = {() => {handleNumber(5)}}/>
              <CalcButton value={6} onClick = {() => {handleNumber(6)}}/>
            </div>

            <div className="row">
              <CalcButton value={7} onClick = {() => {handleNumber(7)}}/>
              <CalcButton value={8} onClick = {() => {handleNumber(8)}}/>
              <CalcButton value={9} onClick = {() => {handleNumber(9)}}/>
            </div>

            <div className="row">
              <CalcButton value={"+"} onClick = {() => {handleOperation('+')}}/>
              <CalcButton value={"*"} onClick = {() => {handleOperation('*')}}/>
              <CalcButton value={"-"} onClick = {() => {handleOperation('-')}}/>
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"} onCLick = {handleClearDisplay}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
