import React from "react";
import createReactClass from 'create-react-class';
import PropTypes from 'prop-types';
import * as UU5 from "uu5g04";
import "uu5g04-bricks";
import "uu5g04-forms";

import Cfg from "../core/_config.js";
import Counter from "./counter.js";
import Counter2 from "./counter2.js";

const View1 = createReactClass({

  //@@viewOn:mixins
  mixins: [
    UU5.Common.BaseMixin,
    UU5.Common.ElementaryMixin
  ],
  //@@viewOff:mixins

  //@@viewOn:statics
  statics: {
    tagName: Cfg.APP + ".View1",
    nestingLevel: "spa",
    classNames: {
      main: Cfg.CSS + "-demo-spa clear-sans"
    }
  },

  //@@viewOff:statics

  //@@viewOn:propTypes
  //@@viewOff:propTypes

  //@@viewOn:getDefaultProps
  getDefaultProps() {
    return {
      licenceCount: 1,
      counter2: 5
    }
  },
  //@@viewOff:getDefaultProps

  //@@viewOn:standardComponentLifeCycle
  getInitialState() {
    return {
      licenceCount: 5,
      counter2: 5
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
  _onFinishStep() {
    if (this._form.isValid()) {
      let formValues = this._form.getValues();
      console.log(formValues.licenceCount);
    }
  },
  //@@viewOff:componentSpecificHelpers

  //@@viewOn:render
  render() {
    return (
      <UU5.Bricks.Div>
        <UU5.Bricks.Line/>
        <UU5.Bricks.Paragraph/>
        <UU5.Bricks.Paragraph>hello asdasddsworld!</UU5.Bricks.Paragraph>
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

        <UU5.Forms.Form onSave={this._onFinishStep} saveLabel={"Uloz"} ref_={(form) => { this._form = form } } >
          <UU5.Bricks.Row>
            <UU5.Bricks.Column>
              <UU5.Bricks.Row>
                <UU5.Bricks.Text>aaaaaaaaaaaaabbbaaaaaaaaaaaa</UU5.Bricks.Text>
              </UU5.Bricks.Row>
              <UU5.Bricks.Row>
                <UU5.Forms.Number name="licenceCount" label="" value={this.state.licenceCount} required min={1} max={10} />
              </UU5.Bricks.Row>
              <UU5.Bricks.Row>
                <UU5.Bricks.Column>
                  <UU5.Forms.FormControls />
                </UU5.Bricks.Column>
              </UU5.Bricks.Row>
            </UU5.Bricks.Column>
          </UU5.Bricks.Row>
        </UU5.Forms.Form>

      </UU5.Bricks.Div>

    )
  }
  //@@viewOff:render
});

export default View1;
