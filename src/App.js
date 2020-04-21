import React from 'react';
import 'bulma/css/bulma.css';
import './App.css';
import Navbar from './navbar/navbar'
import FormField from './FormField/FormField'
import CoolButton from './CoolButton/CoolButton'

function App() {
  return (
    <>
   <Navbar/>
   
   <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
   <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
   <CoolButton isSmall isDanger className="is-rounded my-class">Button 1</CoolButton>
   <CoolButton isSmall isSuccess>Button 2</CoolButton>
   </>
  );
}

export default App;
