import React from "react";
import createReactClass from 'create-react-class';
import * as UU5 from "uu5g04";
import "uu5g04-bricks";

import Cfg from "../core/_config.js";
import Counter from "./counter.js";
import Counter2 from "./counter2.js";

const View1 = createReactClass({

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
    tagName: Cfg.APP + ".DemoSpa",
    nestingLevel: "spa",
    classNames: {
      main: Cfg.CSS + "-demo-spa clear-sans"
    },
    opt: {
      nestingLevelWrapper: true,
      ccrKey: Cfg.CCRKEY_SPA
    }
  },

  //@@viewOff:statics

  //@@viewOn:propTypes
  //@@viewOff:propTypes

  //@@viewOn:getDefaultProps
  //@@viewOff:getDefaultProps

  //@@viewOn:standardComponentLifeCycle
  getInitialState() {
    return {
      counter2: 5,
    }
  },
  //@@viewOff:standardComponentLifeCycle

  //@@viewOn:interface
  //@@viewOff:interface

  //@@viewOn:overridingMethods
  //@@viewOff:overridingMethods

  //@@viewOn:componentSpecificHelpers
  _decrement(){
    console.log(`view1 - counter2 - decrement`);
    this.setState(previousState => {
      return {counter2: previousState.counter2===0 ? previousState.counter2 : previousState.counter2-1}
    });
  },
  _increment(){
    console.log(`view1 - counter2 - increment`);
    this.setState(previousState => {
      return {counter2: previousState.counter2===10 ? previousState.counter2 : previousState.counter2+1}
    });
  },
  //@@viewOff:componentSpecificHelpers

  //@@viewOn:render
  render() {
    return (
      <UU5.Bricks.Div>
        <UU5.Bricks.Line/>
        <UU5.Bricks.Paragraph/>
        <UU5.Bricks.Paragraph>hello worldq!</UU5.Bricks.Paragraph>
        <UU5.Bricks.Paragraph>{' '}{this.state.counter2}</UU5.Bricks.Paragraph>


        <UU5.Bricks.Container>
          <UU5.Bricks.Row>
            <UU5.Bricks.Column colWidth="xs12 s6">
              <UU5.Bricks.Paragraph/>
            </UU5.Bricks.Column>
            <UU5.Bricks.Column colWidth="xs12 s6">
              <UU5.Bricks.Paragraph/>
            </UU5.Bricks.Column>
          </UU5.Bricks.Row>
        </UU5.Bricks.Container>
        <UU5.Bricks.Line/>
        <UU5.Bricks.Row>
          <UU5.Bricks.Column colWidth="xs12 s6">
            <Counter />
          </UU5.Bricks.Column>
          <UU5.Bricks.Column colWidth="xs12 s6">
            <Counter2 counter2={this.state.counter2} increment={this._increment} decrement={this._decrement}/>
          </UU5.Bricks.Column>
        </UU5.Bricks.Row>
      </UU5.Bricks.Div>

    )
  }
  //@@viewOff:render
});

export default View1;
