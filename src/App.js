import React from 'react';
import ItemHeader from "./components/ItemHeader";
import LeftJumbotron from "./components/LeftJumbotron";
import LeftAchievement from "./components/LeftAchievement";
import CircularBg from './components/CircularBg/CircularBg';
import FlyingImage from './components/FlyingImage';
import BottomBg from './components/BottomBg';
import Introdivider from './components/Introdivider';
import LatestWorkPlayground from './components/LatestWorkPlayground';

import LatestWorksCard from './components/LatestWorksCard';

import circularreact from './assets/circlereact.png';
import circularnode from './assets/circlenode.png';
import circuleruby from './assets/circleruby.png';
import circularfirebase from './assets/circularfirebase.png';
import circlepython from './assets/circlepython.png';
import lasre from './assets/lasre.png';
import cohimsMobile from './assets/cohimsMobile.png';
import hdmiImage from './assets/hdmireg.png';
import afro from './assets/afro.png';
import nikeshop from './assets/nike.jpg';
import food from './assets/food.png';


function App() {
  return (
    <div style={{overflow:'hidden'}}>
    
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
    <BottomBg>
      <Introdivider />
    </BottomBg>
      <LatestWorkPlayground>
      <LatestWorksCard appName="Cohims" image={hdmiImage} link="http://64.227.37.120:3300/hdmi" technologies={["nodeexpress", "mongodb", "handlebars"]}/>
      <LatestWorksCard image={cohimsMobile} appName="Cohims Mobile" technologies={["react-native", "enzyme and jest", "redux", "contextApi"]}/>
      <LatestWorksCard appName="Afronews" image={afro} link="https://play.google.com/store/apps/details?id=com.afronews" technologies={["react-native", "enzyme and jest", "firebase", "redux"]}/>
      <LatestWorksCard image={lasre} link="https://lasretrad.landlordstech.com" appName="Lasretrad" technologies={["react", "redux", "contextApi"]}/>


      <LatestWorksCard image={nikeshop} link=" http://theoderic.website/android_apps/nikeshop.apk" appName="Nike Shop" technologies={["react-native", "contextApi"]}/>
      <LatestWorksCard image={food} link="http://theoderic.website/android_apps/app-release.apk" appName="Food Order App" technologies={["react-native", "contextApi"]}/>


      </LatestWorkPlayground> 
    </div>
  );
}

export default App;
