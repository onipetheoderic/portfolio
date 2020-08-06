import React from 'react';
import LogoText from '../LogoText';
import { shallow, mount } from 'enzyme';


describe("LogoText Testing", () => {
    //since we will be using the wrapper alot
    //we say
    let wrapper;
    beforeEach(() => {
      // wrapper = shallow(<App />)
      // console.log(wrapper.debug())
      //lets say we want to access the Counter component through the App.js file
      //we use mount
      wrapper = mount(<LogoText />)
      console.log(wrapper.debug())
    })

    test("render the title of counter", () => {
        const mockData = {
            firstName: "Theoderic",
            lastName: "Onipe"
        }
        const component = shallow(<LogoText {...mockData} />)
        // expect(wrapper.find('h4').text()).toContain("Theoderic Onipe");
        expect(component.find('h4').text()).toContain("Theoderic Onipe")
    })
    

})