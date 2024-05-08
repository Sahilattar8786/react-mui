import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MuiTextFieldDemo, ToggleButtonDemo } from './Component/ButtonDemo';
import SelectDemo from './Component/SelectDemo';
import RadioButtonDemo from './Component/RadioButtonDemo';
import CheckBoxDemo from './Component/CheckBoxDemo';
import SwitchDemo from './Component/SwitchDemo';
import RatingDemo from './Component/RatingDemo';
import AutoCompleteDemo from './Component/AutoCompleteDemo';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Routes>
         <Route path='/Toggle' element={<ToggleButtonDemo/>} ></Route>
         <Route path='/TextField' element={<MuiTextFieldDemo/>}></Route>
         <Route path='/select' element={<SelectDemo/>}></Route>
         <Route path='/Radio' element={<RadioButtonDemo/>}></Route>
         <Route path='/CheckBox'element={<CheckBoxDemo/>}></Route>
         <Route path='/Switch'element={<SwitchDemo/>}></Route>
         <Route path='/Rating' element={<RatingDemo/>} ></Route>
         <Route path='/AutoComplete' element={<AutoCompleteDemo/>} ></Route>
       </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
