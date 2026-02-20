/** @babel */
/** @jsx React.createElement */
import React from "react";
import { shell } from "electron";

import { incrementCounter } from "../reporter-proxy";
import IssueishSearchesController from "./issueish-searches-controller";

export default class RemoteController extends React.Component {
  render() {
    return (
      <IssueishSearchesController
        endpoint={this.props.endpoint}
        token={this.props.token}
        workingDirectory={this.props.workingDirectory}
        repository={this.props.repository}
        workspace={this.props.workspace}
        remote={this.props.remote}
        remotes={this.props.remotes}
        branches={this.props.branches}
        aheadCount={this.props.aheadCount}
        pushInProgress={this.props.pushInProgress}
        onCreatePr={this.onCreatePr}
      />
    );
  }

  onCreatePr = async () => {
    const currentBranch = this.props.branches.getHeadBranch();
    const upstream = currentBranch.getUpstream();
    if (!upstream.isPresent() || this.props.aheadCount > 0) {
      await this.props.onPushBranch();
    }

    let createPrUrl = "https://github.com/";
    createPrUrl += this.props.remote.getOwner() + "/" + this.props.remote.getRepo();
    createPrUrl += "/compare/" + encodeURIComponent(currentBranch.getName());
    createPrUrl += "?expand=1";

    await shell.openExternal(createPrUrl);
    incrementCounter("create-pull-request");
  };
}
