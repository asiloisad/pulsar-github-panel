/** @babel */
/** @jsx React.createElement */
import React from "react";
import { QueryRenderer } from "react-relay";

import CreateDialogController from "../controllers/create-dialog-controller";
import ObserveModel from "../views/observe-model";
import { PAGE_SIZE } from "../views/repository-home-selection-view";
import RelayNetworkLayerManager from "../relay-network-layer-manager";
import { getEndpoint } from "../models/endpoint";

const DOTCOM = getEndpoint("github.com");

export default class CreateDialogContainer extends React.Component {
  constructor(props) {
    super(props);

    this.lastProps = null;
  }

  render() {
    return (
      <ObserveModel model={this.props.loginModel} fetchData={this.fetchToken}>
        {this.renderWithToken}
      </ObserveModel>
    );
  }

  renderWithToken = (token) => {
    if (!token) {
      return null;
    }

    const environment = RelayNetworkLayerManager.getEnvironmentForHost(DOTCOM, token);
    const query = require("./__generated__/createDialogContainerQuery.graphql");
    const variables = {
      organizationCount: PAGE_SIZE,
      organizationCursor: null,

      // Force QueryRenderer to re-render when dialog request state changes
      error: this.props.error,
      inProgress: this.props.inProgress,
    };

    return (
      <QueryRenderer
        environment={environment}
        query={query}
        variables={variables}
        render={this.renderWithResult}
      />
    );
  };

  renderWithResult = ({ error, props }) => {
    if (error) {
      return this.renderError(error);
    }

    if (!props && !this.lastProps) {
      return this.renderLoading();
    }

    const currentProps = props || this.lastProps;

    return <CreateDialogController user={currentProps.viewer} isLoading={false} {...this.props} />;
  };

  renderError(error) {
    return <CreateDialogController user={null} error={error} isLoading={false} {...this.props} />;
  }

  renderLoading() {
    return <CreateDialogController user={null} isLoading={true} {...this.props} />;
  }

  fetchToken = (loginModel) => loginModel.getToken(DOTCOM.getLoginAccount());
}
