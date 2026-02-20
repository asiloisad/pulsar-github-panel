/** @babel */
/** @jsx React.createElement */
import React from "react";

import ReactionPickerView from "../views/reaction-picker-view";
import { addEvent } from "../reporter-proxy";

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
    addEvent("add-emoji-reaction", { package: "github" });
    this.props.tooltipHolder.map((tooltip) => tooltip.dispose());
  };

  removeReactionAndClose = async (content) => {
    await this.props.removeReaction(content);
    addEvent("remove-emoji-reaction", { package: "github" });
    this.props.tooltipHolder.map((tooltip) => tooltip.dispose());
  };
}
