"use strict";

const node = {
  kind: "Fragment",
  name: "issueTimelineController_issue",
  type: "Issue",
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
      name: "__IssueTimelineController_timelineItems_connection",
      storageKey: null,
      args: null,
      concreteType: "IssueTimelineItemsConnection",
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
          concreteType: "IssueTimelineItemsEdge",
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
                  name: "issueCommentView_item",
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
  ],
};
// prettier-ignore
(node).hash = 'd8cfa7a752ac7094c36e60da5e1ff895';
if (node.params) {
  node.params.cacheID = node.hash;
}
module.exports = node;
