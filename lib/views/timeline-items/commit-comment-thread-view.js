/** @babel */
/** @jsx React.createElement */
import React from "react";
import { createFragmentContainer } from "react-relay";

import CommitCommentView from "./commit-comment-view";

export class BareCommitCommentThreadView extends React.Component {
  render() {
    const { item } = this.props;
    return (
      <div className="commit-comment-thread timeline-item">
        {item.comments.edges.map((edge, i) => (
          <CommitCommentView
            isReply={i !== 0}
            key={edge.node.id}
            item={edge.node}
            switchToIssueish={this.props.switchToIssueish}
          />
        ))}
      </div>
    );
  }
}

export default createFragmentContainer(BareCommitCommentThreadView, {
  item: require("./__generated__/commitCommentThreadView_item.graphql"),
});
