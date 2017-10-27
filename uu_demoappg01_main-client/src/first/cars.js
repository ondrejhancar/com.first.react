import React from "react";
import createReactClass from 'create-react-class';
import * as UU5 from "uu5g04";
import "uu5g04-bricks";

import Cfg from "../core/_config.js";
import Car from "./car.js";
import AddCar from  "./addCar.js";

const Cars = createReactClass({

  //@@viewOn:mixins
  mixins: [
    UU5.Common.BaseMixin,
    UU5.Common.ElementaryMixin,
    UU5.Common.NestingLevelMixin,
    UU5.Common.SectionMixin
  ],
  //@@viewOff:mixins

  //@@viewOn:statics
  statics: {
    tagName: Cfg.APP + ".Car",
    classNames: {
      main: Cfg.CSS + "-welcome-row",
      text: Cfg.CSS + "-welcome-row-text",
      iconColumn: Cfg.CSS + "-welcome-icon-column"
    },
    defaults: {}
  },
  //@@viewOff:statics

  //@@viewOn:propTypes
  //@@viewOff:propTypes

  //@@viewOn:getDefaultProps
  //@@viewOff:getDefaultProps

  //@@viewOn:standardComponentLifeCycle
  //@@viewOff:standardComponentLifeCycle

  //@@viewOn:interface
  //@@viewOff:interface

  //@@viewOn:overridingMethods
  //@@viewOff:overridingMethods

  //@@viewOn:componentSpecificHelpers
  _removeCar(id) {
    console.log(`remove ${id}`);
  },

  _toggleCar(id) {
    console.log(`toggle ${id}`);
  },

  _addCar() {
    console.log(`Adding`);
  },
  //@@viewOff:componentSpecificHelpers

  //@@viewOn:render
  render() {

    const car = {
      id: 1,
      brand: 'Ferrari',
      model: 'FF',
      year: '2014',
      details: true
    };

    const car2 = {
      id: 2,
      brand: 'BMW',
      model: 'M5',
      year: '2013',
      details: false
    };

    return (



      <UU5.Bricks.Div>
        <Car car={car} remove={this._removeCar} toggle={this._toggleCar}/>
        <Car car={car2} remove={this._removeCar} toggle={this._toggleCar}/>
        <AddCar add={this._addCar} />
      </UU5.Bricks.Div>
    )
  }
  //@@viewOff:render
});

export default Cars;
