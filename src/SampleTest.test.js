import React from "react";
import { shallow } from "enzyme";   
import SampleTest from "./SampleTest";

describe("Sample Test Component", () => {
    it("Render NoStrings Text", () => {
      const component = shallow(<SampleTest listOfStrings={[]} />)
      expect(component).toEqual({});
    })

    it("Render the two strings", () => {
        const strings = ["three", "four", "five", "six"];
        const component = shallow(<SampleTest listOfStrings={strings}/>)
        expect(component).toMatchSnapshot();
    })
})

const myBeverage = {
    delicious: true,
    sour: false,
  };
  
  describe('my beverage', () => {
    test('is delicious', () => {
      expect(myBeverage.delicious).toBeTruthy();
    });
  
    test('is not sour', () => {
      expect(myBeverage.sour).toBeFalsy();
    });
  });