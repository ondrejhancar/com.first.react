import React from "react";
import createReactClass from 'create-react-class';
import PropTypes from 'prop-types';
import * as UU5 from "uu5g04";
import "uu5g04-bricks";

import Cfg from "../core/_config.js";

const AddCar = createReactClass({

  //@@viewOn:mixins
  mixins: [
    UU5.Common.BaseMixin,
    UU5.Common.ElementaryMixin

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
  propTypes: {
    add: PropTypes.func.isRequired
  },
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
  _saveForm(e) {
    e.preventDefault();
    console.log(`Saving`);
  },
  //@@viewOff:componentSpecificHelpers

  //@@viewOn:render
  render() {
    return (
      <UU5.Bricks.Div>

        this is add car

        <h3>Nové auto</h3>
        <form onSubmit={(e) => this._saveForm(e)} ref="addCar">
          <label htmlFor="brand">Značka:</label>
          <input id="brand" type="text" name="brand" ref="brand" /><br />

          <label htmlFor="model">Model:</label>
          <input id="model" type="text" name="model" ref="model" /><br />

          <label htmlFor="year">Rok:</label>
          <input id="year" type="text" name="year" ref="year" /><br />

          <input type="submit" value="Přidat" />
        </form>
      </UU5.Bricks.Div>
    )
  }
  //@@viewOff:render
});

export default AddCar;
