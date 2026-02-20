/** @babel */
/** @jsx React.createElement */
import React from "react";

export default class LoadingView extends React.Component {
  render() {
    return (
      <div className="github-panel-Loader">
        <span className="github-panel-Spinner" />
      </div>
    );
  }
}
