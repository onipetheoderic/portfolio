import React from 'react';
import ItemHeader from "./components/ItemHeader";
import LeftJumbotron from "./components/LeftJumbotron";
import LeftAchievement from "./components/LeftAchievement";
import CircularBg from './components/CircularBg';
import FlyingImage from './components/FlyingImage';

import circularreact from './assets/circlereact.png';
import circularnode from './assets/circlenode.png';
import circuleruby from './assets/circleruby.png';
import circularfirebase from './assets/circularfirebase.png';
import circlepython from './assets/circlepython.png';


function App() {
  return (
    <div className="App">
        <CircularBg />
      <ItemHeader />
      <LeftJumbotron />
      <FlyingImage image={circuleruby} topPosition={200} 
      rightPosition={80} width={200} height={200}/>

      <FlyingImage image={circularnode} topPosition={550} 
      rightPosition={500} width={300} height={300}/>

      <FlyingImage image={circularreact} topPosition={600} 
      rightPosition={10} width={350} height={350}/>

      <FlyingImage image={circularfirebase} topPosition={400}
      rightPosition={30} width={100} height={100}
      />
       <FlyingImage image={circlepython} topPosition={300}
      rightPosition={620} width={100} height={100}
      />

      <div style={{display:'flex', flexDirection:'row', marginLeft:'17%'}}>
        <LeftAchievement expYears="5+" title="Years Experience" width="30" />
        <LeftAchievement expYears="21" title="Projects Deployed In over 3 Countries" width="100" />
      </div>
    
      
    </div>
  );
}

export default App;
