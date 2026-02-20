/** @babel */
import { createPaginationContainer } from "react-relay";

import IssueishTimelineView from "../views/issueish-timeline-view";

export default createPaginationContainer(
  IssueishTimelineView,
  {
    issue: require("./__generated__/issueTimelineController_issue.graphql"),
  },
  {
    direction: "forward",
    getConnectionFromProps(props) {
      return props.issue.timeline;
    },
    getFragmentVariables(prevVars, totalCount) {
      return {
        ...prevVars,
        timelineCount: totalCount,
      };
    },
    getVariables(props, { count, cursor }, fragmentVariables) {
      return {
        url: props.issue.url,
        timelineCount: count,
        timelineCursor: cursor,
      };
    },
    query: require("./__generated__/issueTimelineControllerQuery.graphql"),
  },
);
