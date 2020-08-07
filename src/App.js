import React from 'react';
import ItemHeader from "./components/ItemHeader";
import LeftJumbotron from "./components/LeftJumbotron";
import LeftAchievement from "./components/LeftAchievement";


function App() {
  return (
    <div className="App">
      <ItemHeader />
      <LeftJumbotron />
      <div style={{display:'flex', flexDirection:'row', marginLeft:'17%'}}>
        <LeftAchievement expYears="5+" title="Years Experience" width="30" />
        <LeftAchievement expYears="21" title="Projects Deployed In over 3 Countries" width="100" />
      </div>
      
    </div>
  );
}

export default App;
