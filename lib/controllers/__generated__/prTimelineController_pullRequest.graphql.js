"use strict";

const node = {
  kind: "Fragment",
  name: "prTimelineController_pullRequest",
  type: "PullRequest",
  metadata: {
    connection: [
      {
        count: "timelineCount",
        cursor: "timelineCursor",
        direction: "forward",
        path: ["timelineItems"],
      },
    ],
  },
  argumentDefinitions: [
    {
      kind: "LocalArgument",
      name: "timelineCount",
      type: "Int!",
      defaultValue: null,
    },
    {
      kind: "LocalArgument",
      name: "timelineCursor",
      type: "String",
      defaultValue: null,
    },
  ],
  selections: [
    {
      kind: "ScalarField",
      alias: null,
      name: "url",
      args: null,
      storageKey: null,
    },
    {
      kind: "LinkedField",
      alias: "timelineItems",
      name: "__prTimelineContainer_timelineItems_connection",
      storageKey: null,
      args: null,
      concreteType: "PullRequestTimelineItemsConnection",
      plural: false,
      selections: [
        {
          kind: "LinkedField",
          alias: null,
          name: "pageInfo",
          storageKey: null,
          args: null,
          concreteType: "PageInfo",
          plural: false,
          selections: [
            {
              kind: "ScalarField",
              alias: null,
              name: "endCursor",
              args: null,
              storageKey: null,
            },
            {
              kind: "ScalarField",
              alias: null,
              name: "hasNextPage",
              args: null,
              storageKey: null,
            },
          ],
        },
        {
          kind: "LinkedField",
          alias: null,
          name: "edges",
          storageKey: null,
          args: null,
          concreteType: "PullRequestTimelineItemsEdge",
          plural: true,
          selections: [
            {
              kind: "ScalarField",
              alias: null,
              name: "cursor",
              args: null,
              storageKey: null,
            },
            {
              kind: "LinkedField",
              alias: null,
              name: "node",
              storageKey: null,
              args: null,
              concreteType: null,
              plural: false,
              selections: [
                {
                  kind: "ScalarField",
                  alias: null,
                  name: "__typename",
                  args: null,
                  storageKey: null,
                },
                {
                  kind: "FragmentSpread",
                  name: "commitsView_nodes",
                  args: null,
                },
                {
                  kind: "FragmentSpread",
                  name: "issueCommentView_item",
                  args: null,
                },
                {
                  kind: "FragmentSpread",
                  name: "mergedEventView_item",
                  args: null,
                },
                {
                  kind: "FragmentSpread",
                  name: "headRefForcePushedEventView_item",
                  args: null,
                },
                {
                  kind: "FragmentSpread",
                  name: "commitCommentThreadView_item",
                  args: null,
                },
                {
                  kind: "FragmentSpread",
                  name: "crossReferencedEventsView_nodes",
                  args: null,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      kind: "FragmentSpread",
      name: "headRefForcePushedEventView_issueish",
      args: null,
    },
  ],
};
// prettier-ignore
(node).hash = '048c72a9c157a3d7c9fdc301905a1eeb';
if (node.params) {
  node.params.cacheID = node.hash;
}
module.exports = node;
