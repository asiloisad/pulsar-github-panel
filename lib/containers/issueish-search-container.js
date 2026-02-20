/** @babel */
/** @jsx React.createElement */
import React from "react";
import { QueryRenderer } from "react-relay";
import { Disposable } from "atom";

import { autobind, CHECK_SUITE_PAGE_SIZE, CHECK_RUN_PAGE_SIZE } from "../helpers";
import IssueishListController, {
  BareIssueishListController,
} from "../controllers/issueish-list-controller";
import RelayNetworkLayerManager from "../relay-network-layer-manager";

export default class IssueishSearchContainer extends React.Component {
  static defaultProps = {
    limit: 20,
  };

  constructor(props) {
    super(props);
    autobind(this, "renderQueryResult");

    this.sub = new Disposable();
  }

  render() {
    const environment = RelayNetworkLayerManager.getEnvironmentForHost(
      this.props.endpoint,
      this.props.token,
    );

    if (this.props.search.isNull()) {
      return <BareIssueishListController isLoading={false} {...this.controllerProps()} />;
    }

    const query = require("./__generated__/issueishSearchContainerQuery.graphql");
    const variables = {
      query: this.props.search.createQuery(),
      first: this.props.limit,
      checkSuiteCount: CHECK_SUITE_PAGE_SIZE,
      checkSuiteCursor: null,
      checkRunCount: CHECK_RUN_PAGE_SIZE,
      checkRunCursor: null,
    };

    return (
      <QueryRenderer
        environment={environment}
        variables={variables}
        query={query}
        render={this.renderQueryResult}
      />
    );
  }

  renderQueryResult({ error, props }) {
    if (error) {
      return (
        <BareIssueishListController isLoading={false} error={error} {...this.controllerProps()} />
      );
    }

    if (props === null) {
      return <BareIssueishListController isLoading={true} {...this.controllerProps()} />;
    }

    return (
      <IssueishListController
        total={props.search.issueCount}
        results={props.search.nodes}
        isLoading={false}
        {...this.controllerProps()}
      />
    );
  }

  componentWillUnmount() {
    this.sub.dispose();
  }

  controllerProps() {
    return {
      title: this.props.search.getName(),

      onOpenIssueish: this.props.onOpenIssueish,
      onOpenReviews: this.props.onOpenReviews,
      onOpenMore: () => this.props.onOpenSearch(this.props.search),
    };
  }
}
