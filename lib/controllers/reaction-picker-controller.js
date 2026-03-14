/** @babel */
/** @jsx React.createElement */
import React from "react";

import ReactionPickerView from "../views/reaction-picker-view";

export default class ReactionPickerController extends React.Component {
  render() {
    return (
      <ReactionPickerView
        addReactionAndClose={this.addReactionAndClose}
        removeReactionAndClose={this.removeReactionAndClose}
        {...this.props}
      />
    );
  }

  addReactionAndClose = async (content) => {
    await this.props.addReaction(content);
    this.props.tooltipHolder.map((tooltip) => tooltip.dispose());
  };

  removeReactionAndClose = async (content) => {
    await this.props.removeReaction(content);
    this.props.tooltipHolder.map((tooltip) => tooltip.dispose());
  };
}
