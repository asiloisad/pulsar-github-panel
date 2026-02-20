/** @babel */
/** @jsx React.createElement */
import React from "react";
import { createRoot } from "react-dom/client";
import { QueryRenderer } from "react-relay";

import IssueishTooltipContainer from "../containers/issueish-tooltip-container";

export default class IssueishTooltipItem {
  constructor(issueishUrl, relayEnvironment) {
    this.issueishUrl = issueishUrl;
    this.relayEnvironment = relayEnvironment;
  }

  getElement() {
    return this.element;
  }

  get element() {
    if (!this._element) {
      this._element = document.createElement("div");
      const rootContainer = (
        <QueryRenderer
          environment={this.relayEnvironment}
          query={require("./__generated__/issueishTooltipItemQuery.graphql")}
          variables={{
            issueishUrl: this.issueishUrl,
          }}
          render={({ error, props, retry }) => {
            if (error) {
              return <div>Could not load information</div>;
            } else if (props) {
              return <IssueishTooltipContainer {...props} />;
            } else {
              return (
                <div className="github-panel-Loader">
                  <span className="github-panel-Spinner" />
                </div>
              );
            }
          }}
        />
      );
      this._root = createRoot(this._element);
      this._root.render(rootContainer);
    }

    return this._element;
  }

  destroy() {
    if (this._root) {
      this._root.unmount();
      this._root = null;
      delete this._element;
    }
  }
}
