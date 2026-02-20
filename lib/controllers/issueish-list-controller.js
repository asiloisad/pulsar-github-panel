/** @babel */
/** @jsx React.createElement */
import React from "react";
import { createFragmentContainer } from "react-relay";
import IssueishListView from "../views/issueish-list-view";
import Issueish from "../models/issueish";
import { shell, remote } from "electron";
const { Menu, MenuItem } = remote;
import { addEvent } from "../reporter-proxy";

export class BareIssueishListController extends React.Component {
  static defaultProps = {
    results: [],
    total: 0,
    resultFilter: () => true,
  };

  constructor(props) {
    super(props);

    this.state = {};
  }

  static getDerivedStateFromProps(props, state) {
    if (props.results === null) {
      return {
        lastResults: null,
        issueishes: [],
      };
    }

    if (props.results !== state.lastResults) {
      return {
        lastResults: props.results,
        issueishes: props.results.map((node) => new Issueish(node)).filter(props.resultFilter),
      };
    }

    return null;
  }

  openOnGitHub = async (url) => {
    await shell.openExternal(url);
    addEvent("open-issueish-in-browser", { package: "github", component: this.constructor.name });
  };

  showActionsMenu = /* istanbul ignore next */ (issueish) => {
    const menu = new Menu();

    menu.append(
      new MenuItem({
        label: "See reviews",
        click: () => this.props.onOpenReviews(issueish),
      }),
    );

    menu.append(
      new MenuItem({
        label: "Open on GitHub",
        click: () => this.openOnGitHub(issueish.getGitHubURL()),
      }),
    );

    menu.popup(remote.getCurrentWindow());
  };

  render() {
    return (
      <IssueishListView
        title={this.props.title}
        isLoading={this.props.isLoading}
        total={this.props.total}
        issueishes={this.state.issueishes}
        error={this.props.error}
        needReviewsButton={this.props.needReviewsButton}
        onIssueishClick={this.props.onOpenIssueish}
        onMoreClick={this.props.onOpenMore}
        openReviews={this.props.onOpenReviews}
        openOnGitHub={this.openOnGitHub}
        showActionsMenu={this.showActionsMenu}
        emptyComponent={this.props.emptyComponent}
      />
    );
  }
}

export default createFragmentContainer(BareIssueishListController, {
  results: require("./__generated__/issueishListController_results.graphql"),
});
