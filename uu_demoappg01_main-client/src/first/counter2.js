import React from "react";
import createReactClass from 'create-react-class';
import PropTypes from 'prop-types';
import * as UU5 from "uu5g04";
import "uu5g04-bricks";

import Cfg from "../core/_config.js";

const Counter2 = createReactClass({

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
    tagName: Cfg.APP + ".Counter2",
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
    counter2: PropTypes.number.isRequired,
    decrement: PropTypes.func.isRequired,
    increment: PropTypes.func.isRequired
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
                <UU5.Bricks.Paragraph>
                  COUNTER 2
                </UU5.Bricks.Paragraph>
                <UU5.Bricks.Paragraph>
                  Objednat {this.props.counter2} ks.<br/>
                </UU5.Bricks.Paragraph>
                <UU5.Bricks.Button colorSchema="pink" onClick={()=>this.props.decrement()} size="l">-</UU5.Bricks.Button>
                <UU5.Bricks.Button colorSchema="yellow" onClick={()=>this.props.increment()} size="l">+</UU5.Bricks.Button>
              </UU5.Bricks.Column>
            </UU5.Bricks.Row>
          <UU5.Bricks.Line/>
        </UU5.Bricks.Container>
      </UU5.Bricks.Div>
    )
  }
  //@@viewOff:render
});

export default Counter2;
