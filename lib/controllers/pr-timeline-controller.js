/** @babel */
import { createPaginationContainer } from "react-relay";

import IssueishTimelineView from "../views/issueish-timeline-view";

export default createPaginationContainer(
  IssueishTimelineView,
  {
    pullRequest: require("./__generated__/prTimelineController_pullRequest.graphql"),
  },
  {
    direction: "forward",
    getConnectionFromProps(props) {
      return props.pullRequest.timeline;
    },
    getFragmentVariables(prevVars, totalCount) {
      return {
        ...prevVars,
        timelineCount: totalCount,
      };
    },
    getVariables(props, { count, cursor }, fragmentVariables) {
      return {
        url: props.pullRequest.url,
        timelineCount: count,
        timelineCursor: cursor,
      };
    },
    query: require("./__generated__/prTimelineControllerQuery.graphql"),
  },
);
