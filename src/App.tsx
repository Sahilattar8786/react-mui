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
import BoxModel from './Component/Layout/BoxModel';
import StackModel from './Component/Layout/StackModel';
import GridModel from './Component/Layout/GridModel';
import PapelModel from './Component/Layout/PapelModel';
import CardComponent from './Component/CardComponent';
import AccordionComponent from './Component/AccordionComponent';
import NavbarDemo from './Component/NavbarDemo';
import LinkDemo from './Component/LinkDemo';
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
         <Route path='/Box' element={<BoxModel/>}></Route>
         <Route path='/Stack' element={<StackModel/>}></Route>
         <Route path='/Grid' element={<GridModel/>}></Route>
         <Route path='/paper' element={<PapelModel/>}></Route>
         <Route path='/Card' element={<CardComponent/>}></Route>
         <Route path='/Accordian' element={<AccordionComponent/>}></Route>
         <Route path='/Navbar' element={<NavbarDemo/>}></Route>
         <Route path='Link' element={<LinkDemo/>}></Route>
       </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
