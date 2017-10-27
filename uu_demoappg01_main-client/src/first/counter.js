import React from "react";
import createReactClass from 'create-react-class';
import * as UU5 from "uu5g04";
import "uu5g04-bricks";

import Cfg from "../core/_config.js";

const Counter = createReactClass({

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
    tagName: Cfg.APP + ".Counter",
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
  getInitialState() {
    return {
      counter: 0
    }
  },
  //@@viewOff:standardComponentLifeCycle

  //@@viewOn:interface
  //@@viewOff:interface

  //@@viewOn:overridingMethods
  //@@viewOff:overridingMethods

  //@@viewOn:componentSpecificHelpers
  _decrement(){
    this.setState(previousState => {
      return {counter: previousState.counter===0 ? previousState.counter : previousState.counter-1}
    });
  },
  _increment(){
    this.setState(previousState => {
      return {counter: previousState.counter===10 ? previousState.counter : previousState.counter+1}
    });
  },
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
                  COUNTER 1
                </UU5.Bricks.Paragraph>
                <UU5.Bricks.Paragraph>
                  Objednat {this.state.counter} ks.<br/>
                </UU5.Bricks.Paragraph>
                <UU5.Bricks.Button colorSchema="red" onClick={()=>this._decrement()} size="l">-</UU5.Bricks.Button>
                <UU5.Bricks.Button colorSchema="green" onClick={()=>this._increment()} size="l">+</UU5.Bricks.Button>
              </UU5.Bricks.Column>
            </UU5.Bricks.Row>
          <UU5.Bricks.Line/>
        </UU5.Bricks.Container>
      </UU5.Bricks.Div>
    )
  }
  //@@viewOff:render
});

export default Counter;
