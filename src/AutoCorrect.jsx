import React from "react";
import { render } from "react-dom";
import { hot } from "react-hot-loader";
import Input from "@reactmaker/react-autocorrect-input";

class AutoCorrect extends React.Component {
  state = {
    value: "",
    dataSource: [
      "apple",
      "ask",
      "applice",
      "best",
      "book",
      "beep",
      "cat",
      "can",
      "car",
    ],
  };

  onChange = (value) => this.setState({ value });

  render() {
    const { value, dataSource } = this.state;
    return (
      <Input onChange={this.onChange} value={value} dataSource={dataSource} />
    );
  }
}

const Main = hot(module)(AutoCorrect);

export default AutoCorrect;

render(<Main />, document.getElementById("app"));
