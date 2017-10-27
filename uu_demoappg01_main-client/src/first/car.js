import React from "react";
import createReactClass from 'create-react-class';
import PropTypes from 'prop-types';
import * as UU5 from "uu5g04";
import "uu5g04-bricks";

import Cfg from "../core/_config.js";

const Car = createReactClass({

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
  propTypes: {
    car: PropTypes.object.isRequired,
    remove: PropTypes.func.isRequired,
    toggle: PropTypes.func.isRequired
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
  //@@viewOff:componentSpecificHelpers

  //@@viewOn:render
  render() {
    return (
      <UU5.Bricks.Div>
        <UU5.Bricks.Container>
          <UU5.Bricks.Line/>
            <UU5.Bricks.Row>
              <UU5.Bricks.Column colWidth="xs12">
                <UU5.Bricks.Paragraph> This is Car 2
                </UU5.Bricks.Paragraph>
                <UU5.Bricks.Div>
                  <UU5.Bricks.Div><b>Značka:</b> {this.props.car.brand}</UU5.Bricks.Div>
                  {this.props.car.details &&
                  <UU5.Bricks.Div>
                    <b>Model:</b> {this.props.car.model} <br />
                    <b>Rok:</b> {this.props.car.year}
                  </UU5.Bricks.Div>
                  }
                  <UU5.Bricks.Button colorSchema="blue" onClick={() => this.props.toggle(this.props.car.id)}>{this.props.car.details ? 'Méně' : 'Více'}</UU5.Bricks.Button>
                  <UU5.Bricks.Button colorSchema="red" onClick={() => this.props.remove(this.props.car.id)}>Smazat</UU5.Bricks.Button>
                </UU5.Bricks.Div>
              </UU5.Bricks.Column>
            </UU5.Bricks.Row>
          <UU5.Bricks.Line/>
        </UU5.Bricks.Container>
      </UU5.Bricks.Div>
    )
  }
  //@@viewOff:render
});

export default Car;
