"use strict";

/*
query prTimelineControllerQuery(
  $timelineCount: Int!
  $timelineCursor: String
  $url: URI!
) {
  resource(url: $url) {
    __typename
    ... on PullRequest {
      ...prTimelineController_pullRequest_3D8CP9
    }
    ... on Node {
      id
    }
  }
}

fragment commitCommentThreadView_item on PullRequestCommitCommentThread {
  commit {
    oid
    id
  }
  comments(first: 100) {
    edges {
      node {
        id
        ...commitCommentView_item
      }
    }
  }
}

fragment commitCommentView_item on CommitComment {
  author {
    __typename
    login
    avatarUrl
    ... on Node {
      id
    }
  }
  commit {
    oid
    id
  }
  bodyHTML
  createdAt
  path
  position
}

fragment commitView_commit on Commit {
  author {
    name
    avatarUrl
    user {
      login
      id
    }
  }
  committer {
    name
    avatarUrl
    user {
      login
      id
    }
  }
  authoredByCommitter
  sha: oid
  message
  messageHeadlineHTML
  commitUrl
}

fragment commitsView_nodes on PullRequestCommit {
  commit {
    id
    author {
      name
      user {
        login
        id
      }
    }
    ...commitView_commit
  }
}

fragment crossReferencedEventView_item on CrossReferencedEvent {
  id
  isCrossRepository
  source {
    __typename
    ... on Issue {
      number
      title
      url
      issueState: state
    }
    ... on PullRequest {
      number
      title
      url
      prState: state
    }
    ... on RepositoryNode {
      repository {
        name
        isPrivate
        owner {
          __typename
          login
          id
        }
        id
      }
    }
    ... on Node {
      id
    }
  }
}

fragment crossReferencedEventsView_nodes on CrossReferencedEvent {
  id
  referencedAt
  isCrossRepository
  actor {
    __typename
    login
    avatarUrl
    ... on Node {
      id
    }
  }
  source {
    __typename
    ... on RepositoryNode {
      repository {
        name
        owner {
          __typename
          login
          id
        }
        id
      }
    }
    ... on Node {
      id
    }
  }
  ...crossReferencedEventView_item
}

fragment headRefForcePushedEventView_issueish on PullRequest {
  headRefName
  headRepositoryOwner {
    __typename
    login
    id
  }
  repository {
    owner {
      __typename
      login
      id
    }
    id
  }
}

fragment headRefForcePushedEventView_item on HeadRefForcePushedEvent {
  actor {
    __typename
    avatarUrl
    login
    ... on Node {
      id
    }
  }
  beforeCommit {
    oid
    id
  }
  afterCommit {
    oid
    id
  }
  createdAt
}

fragment issueCommentView_item on IssueComment {
  author {
    __typename
    avatarUrl
    login
    ... on Node {
      id
    }
  }
  bodyHTML
  createdAt
  url
}

fragment mergedEventView_item on MergedEvent {
  actor {
    __typename
    avatarUrl
    login
    ... on Node {
      id
    }
  }
  commit {
    oid
    id
  }
  mergeRefName
  createdAt
}

fragment prTimelineController_pullRequest_3D8CP9 on PullRequest {
  url
  ...headRefForcePushedEventView_issueish
  timelineItems(first: $timelineCount, after: $timelineCursor) {
    pageInfo {
      endCursor
      hasNextPage
    }
    edges {
      cursor
      node {
        __typename
        ...commitsView_nodes
        ...issueCommentView_item
        ...mergedEventView_item
        ...headRefForcePushedEventView_item
        ...commitCommentThreadView_item
        ...crossReferencedEventsView_nodes
        ... on Node {
          id
        }
      }
    }
  }
}
*/

const node = (function () {
  var v0 = [
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
      {
        kind: "LocalArgument",
        name: "url",
        type: "URI!",
        defaultValue: null,
      },
    ],
    v1 = [
      {
        kind: "Variable",
        name: "url",
        variableName: "url",
      },
    ],
    v2 = {
      kind: "ScalarField",
      alias: null,
      name: "__typename",
      args: null,
      storageKey: null,
    },
    v3 = {
      kind: "ScalarField",
      alias: null,
      name: "id",
      args: null,
      storageKey: null,
    },
    v4 = {
      kind: "ScalarField",
      alias: null,
      name: "url",
      args: null,
      storageKey: null,
    },
    v5 = {
      kind: "ScalarField",
      alias: null,
      name: "login",
      args: null,
      storageKey: null,
    },
    v6 = [v2, v5, v3],
    v7 = {
      kind: "LinkedField",
      alias: null,
      name: "owner",
      storageKey: null,
      args: null,
      concreteType: null,
      plural: false,
      selections: v6,
    },
    v8 = [
      {
        kind: "Variable",
        name: "after",
        variableName: "timelineCursor",
      },
      {
        kind: "Variable",
        name: "first",
        variableName: "timelineCount",
      },
    ],
    v9 = {
      kind: "ScalarField",
      alias: null,
      name: "name",
      args: null,
      storageKey: null,
    },
    v10 = {
      kind: "LinkedField",
      alias: null,
      name: "user",
      storageKey: null,
      args: null,
      concreteType: "User",
      plural: false,
      selections: [v5, v3],
    },
    v11 = {
      kind: "ScalarField",
      alias: null,
      name: "avatarUrl",
      args: null,
      storageKey: null,
    },
    v12 = [v2, v11, v5, v3],
    v13 = {
      kind: "ScalarField",
      alias: null,
      name: "bodyHTML",
      args: null,
      storageKey: null,
    },
    v14 = {
      kind: "ScalarField",
      alias: null,
      name: "createdAt",
      args: null,
      storageKey: null,
    },
    v15 = {
      kind: "LinkedField",
      alias: null,
      name: "actor",
      storageKey: null,
      args: null,
      concreteType: null,
      plural: false,
      selections: v12,
    },
    v16 = [
      {
        kind: "ScalarField",
        alias: null,
        name: "oid",
        args: null,
        storageKey: null,
      },
      v3,
    ],
    v17 = {
      kind: "LinkedField",
      alias: null,
      name: "commit",
      storageKey: null,
      args: null,
      concreteType: "Commit",
      plural: false,
      selections: v16,
    },
    v18 = [v2, v5, v11, v3],
    v19 = {
      kind: "ScalarField",
      alias: null,
      name: "number",
      args: null,
      storageKey: null,
    },
    v20 = {
      kind: "ScalarField",
      alias: null,
      name: "title",
      args: null,
      storageKey: null,
    };
  return {
    kind: "Request",
    fragment: {
      kind: "Fragment",
      name: "prTimelineControllerQuery",
      type: "Query",
      metadata: null,
      argumentDefinitions: v0,
      selections: [
        {
          kind: "LinkedField",
          alias: null,
          name: "resource",
          storageKey: null,
          args: v1,
          concreteType: null,
          plural: false,
          selections: [
            {
              kind: "InlineFragment",
              type: "PullRequest",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: "prTimelineController_pullRequest",
                  args: [
                    {
                      kind: "Variable",
                      name: "timelineCount",
                      variableName: "timelineCount",
                    },
                    {
                      kind: "Variable",
                      name: "timelineCursor",
                      variableName: "timelineCursor",
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    operation: {
      kind: "Operation",
      name: "prTimelineControllerQuery",
      argumentDefinitions: v0,
      selections: [
        {
          kind: "LinkedField",
          alias: null,
          name: "resource",
          storageKey: null,
          args: v1,
          concreteType: null,
          plural: false,
          selections: [
            v2,
            v3,
            {
              kind: "InlineFragment",
              type: "PullRequest",
              selections: [
                v4,
                {
                  kind: "ScalarField",
                  alias: null,
                  name: "headRefName",
                  args: null,
                  storageKey: null,
                },
                {
                  kind: "LinkedField",
                  alias: null,
                  name: "headRepositoryOwner",
                  storageKey: null,
                  args: null,
                  concreteType: null,
                  plural: false,
                  selections: v6,
                },
                {
                  kind: "LinkedField",
                  alias: null,
                  name: "repository",
                  storageKey: null,
                  args: null,
                  concreteType: "Repository",
                  plural: false,
                  selections: [v7, v3],
                },
                {
                  kind: "LinkedField",
                  alias: null,
                  name: "timelineItems",
                  storageKey: null,
                  args: v8,
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
                            v2,
                            v3,
                            {
                              kind: "InlineFragment",
                              type: "PullRequestCommit",
                              selections: [
                                {
                                  kind: "LinkedField",
                                  alias: null,
                                  name: "commit",
                                  storageKey: null,
                                  args: null,
                                  concreteType: "Commit",
                                  plural: false,
                                  selections: [
                                    v3,
                                    {
                                      kind: "LinkedField",
                                      alias: null,
                                      name: "author",
                                      storageKey: null,
                                      args: null,
                                      concreteType: "GitActor",
                                      plural: false,
                                      selections: [v9, v10, v11],
                                    },
                                    {
                                      kind: "LinkedField",
                                      alias: null,
                                      name: "committer",
                                      storageKey: null,
                                      args: null,
                                      concreteType: "GitActor",
                                      plural: false,
                                      selections: [v9, v11, v10],
                                    },
                                    {
                                      kind: "ScalarField",
                                      alias: null,
                                      name: "authoredByCommitter",
                                      args: null,
                                      storageKey: null,
                                    },
                                    {
                                      kind: "ScalarField",
                                      alias: "sha",
                                      name: "oid",
                                      args: null,
                                      storageKey: null,
                                    },
                                    {
                                      kind: "ScalarField",
                                      alias: null,
                                      name: "message",
                                      args: null,
                                      storageKey: null,
                                    },
                                    {
                                      kind: "ScalarField",
                                      alias: null,
                                      name: "messageHeadlineHTML",
                                      args: null,
                                      storageKey: null,
                                    },
                                    {
                                      kind: "ScalarField",
                                      alias: null,
                                      name: "commitUrl",
                                      args: null,
                                      storageKey: null,
                                    },
                                  ],
                                },
                              ],
                            },
                            {
                              kind: "InlineFragment",
                              type: "IssueComment",
                              selections: [
                                {
                                  kind: "LinkedField",
                                  alias: null,
                                  name: "author",
                                  storageKey: null,
                                  args: null,
                                  concreteType: null,
                                  plural: false,
                                  selections: v12,
                                },
                                v13,
                                v14,
                                v4,
                              ],
                            },
                            {
                              kind: "InlineFragment",
                              type: "MergedEvent",
                              selections: [
                                v15,
                                v17,
                                {
                                  kind: "ScalarField",
                                  alias: null,
                                  name: "mergeRefName",
                                  args: null,
                                  storageKey: null,
                                },
                                v14,
                              ],
                            },
                            {
                              kind: "InlineFragment",
                              type: "HeadRefForcePushedEvent",
                              selections: [
                                v15,
                                {
                                  kind: "LinkedField",
                                  alias: null,
                                  name: "beforeCommit",
                                  storageKey: null,
                                  args: null,
                                  concreteType: "Commit",
                                  plural: false,
                                  selections: v16,
                                },
                                {
                                  kind: "LinkedField",
                                  alias: null,
                                  name: "afterCommit",
                                  storageKey: null,
                                  args: null,
                                  concreteType: "Commit",
                                  plural: false,
                                  selections: v16,
                                },
                                v14,
                              ],
                            },
                            {
                              kind: "InlineFragment",
                              type: "PullRequestCommitCommentThread",
                              selections: [
                                v17,
                                {
                                  kind: "LinkedField",
                                  alias: null,
                                  name: "comments",
                                  storageKey: "comments(first:100)",
                                  args: [
                                    {
                                      kind: "Literal",
                                      name: "first",
                                      value: 100,
                                    },
                                  ],
                                  concreteType: "CommitCommentConnection",
                                  plural: false,
                                  selections: [
                                    {
                                      kind: "LinkedField",
                                      alias: null,
                                      name: "edges",
                                      storageKey: null,
                                      args: null,
                                      concreteType: "CommitCommentEdge",
                                      plural: true,
                                      selections: [
                                        {
                                          kind: "LinkedField",
                                          alias: null,
                                          name: "node",
                                          storageKey: null,
                                          args: null,
                                          concreteType: "CommitComment",
                                          plural: false,
                                          selections: [
                                            v3,
                                            {
                                              kind: "LinkedField",
                                              alias: null,
                                              name: "author",
                                              storageKey: null,
                                              args: null,
                                              concreteType: null,
                                              plural: false,
                                              selections: v18,
                                            },
                                            v17,
                                            v13,
                                            v14,
                                            {
                                              kind: "ScalarField",
                                              alias: null,
                                              name: "path",
                                              args: null,
                                              storageKey: null,
                                            },
                                            {
                                              kind: "ScalarField",
                                              alias: null,
                                              name: "position",
                                              args: null,
                                              storageKey: null,
                                            },
                                          ],
                                        },
                                      ],
                                    },
                                  ],
                                },
                              ],
                            },
                            {
                              kind: "InlineFragment",
                              type: "CrossReferencedEvent",
                              selections: [
                                {
                                  kind: "ScalarField",
                                  alias: null,
                                  name: "referencedAt",
                                  args: null,
                                  storageKey: null,
                                },
                                {
                                  kind: "ScalarField",
                                  alias: null,
                                  name: "isCrossRepository",
                                  args: null,
                                  storageKey: null,
                                },
                                {
                                  kind: "LinkedField",
                                  alias: null,
                                  name: "actor",
                                  storageKey: null,
                                  args: null,
                                  concreteType: null,
                                  plural: false,
                                  selections: v18,
                                },
                                {
                                  kind: "LinkedField",
                                  alias: null,
                                  name: "source",
                                  storageKey: null,
                                  args: null,
                                  concreteType: null,
                                  plural: false,
                                  selections: [
                                    v2,
                                    {
                                      kind: "LinkedField",
                                      alias: null,
                                      name: "repository",
                                      storageKey: null,
                                      args: null,
                                      concreteType: "Repository",
                                      plural: false,
                                      selections: [
                                        v9,
                                        v7,
                                        v3,
                                        {
                                          kind: "ScalarField",
                                          alias: null,
                                          name: "isPrivate",
                                          args: null,
                                          storageKey: null,
                                        },
                                      ],
                                    },
                                    v3,
                                    {
                                      kind: "InlineFragment",
                                      type: "Issue",
                                      selections: [
                                        v19,
                                        v20,
                                        v4,
                                        {
                                          kind: "ScalarField",
                                          alias: "issueState",
                                          name: "state",
                                          args: null,
                                          storageKey: null,
                                        },
                                      ],
                                    },
                                    {
                                      kind: "InlineFragment",
                                      type: "PullRequest",
                                      selections: [
                                        v19,
                                        v20,
                                        v4,
                                        {
                                          kind: "ScalarField",
                                          alias: "prState",
                                          name: "state",
                                          args: null,
                                          storageKey: null,
                                        },
                                      ],
                                    },
                                  ],
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
                {
                  kind: "LinkedHandle",
                  alias: null,
                  name: "timelineItems",
                  args: v8,
                  handle: "connection",
                  key: "prTimelineContainer_timelineItems",
                  filters: null,
                },
              ],
            },
          ],
        },
      ],
    },
    params: {
      operationKind: "query",
      name: "prTimelineControllerQuery",
      id: null,
      text: "query prTimelineControllerQuery(\n  $timelineCount: Int!\n  $timelineCursor: String\n  $url: URI!\n) {\n  resource(url: $url) {\n    __typename\n    ... on PullRequest {\n      ...prTimelineController_pullRequest_3D8CP9\n    }\n    ... on Node {\n      id\n    }\n  }\n}\n\nfragment commitCommentThreadView_item on PullRequestCommitCommentThread {\n  commit {\n    oid\n    id\n  }\n  comments(first: 100) {\n    edges {\n      node {\n        id\n        ...commitCommentView_item\n      }\n    }\n  }\n}\n\nfragment commitCommentView_item on CommitComment {\n  author {\n    __typename\n    login\n    avatarUrl\n    ... on Node {\n      id\n    }\n  }\n  commit {\n    oid\n    id\n  }\n  bodyHTML\n  createdAt\n  path\n  position\n}\n\nfragment commitView_commit on Commit {\n  author {\n    name\n    avatarUrl\n    user {\n      login\n      id\n    }\n  }\n  committer {\n    name\n    avatarUrl\n    user {\n      login\n      id\n    }\n  }\n  authoredByCommitter\n  sha: oid\n  message\n  messageHeadlineHTML\n  commitUrl\n}\n\nfragment commitsView_nodes on PullRequestCommit {\n  commit {\n    id\n    author {\n      name\n      user {\n        login\n        id\n      }\n    }\n    ...commitView_commit\n  }\n}\n\nfragment crossReferencedEventView_item on CrossReferencedEvent {\n  id\n  isCrossRepository\n  source {\n    __typename\n    ... on Issue {\n      number\n      title\n      url\n      issueState: state\n    }\n    ... on PullRequest {\n      number\n      title\n      url\n      prState: state\n    }\n    ... on RepositoryNode {\n      repository {\n        name\n        isPrivate\n        owner {\n          __typename\n          login\n          id\n        }\n        id\n      }\n    }\n    ... on Node {\n      id\n    }\n  }\n}\n\nfragment crossReferencedEventsView_nodes on CrossReferencedEvent {\n  id\n  referencedAt\n  isCrossRepository\n  actor {\n    __typename\n    login\n    avatarUrl\n    ... on Node {\n      id\n    }\n  }\n  source {\n    __typename\n    ... on RepositoryNode {\n      repository {\n        name\n        owner {\n          __typename\n          login\n          id\n        }\n        id\n      }\n    }\n    ... on Node {\n      id\n    }\n  }\n  ...crossReferencedEventView_item\n}\n\nfragment headRefForcePushedEventView_issueish on PullRequest {\n  headRefName\n  headRepositoryOwner {\n    __typename\n    login\n    id\n  }\n  repository {\n    owner {\n      __typename\n      login\n      id\n    }\n    id\n  }\n}\n\nfragment headRefForcePushedEventView_item on HeadRefForcePushedEvent {\n  actor {\n    __typename\n    avatarUrl\n    login\n    ... on Node {\n      id\n    }\n  }\n  beforeCommit {\n    oid\n    id\n  }\n  afterCommit {\n    oid\n    id\n  }\n  createdAt\n}\n\nfragment issueCommentView_item on IssueComment {\n  author {\n    __typename\n    avatarUrl\n    login\n    ... on Node {\n      id\n    }\n  }\n  bodyHTML\n  createdAt\n  url\n}\n\nfragment mergedEventView_item on MergedEvent {\n  actor {\n    __typename\n    avatarUrl\n    login\n    ... on Node {\n      id\n    }\n  }\n  commit {\n    oid\n    id\n  }\n  mergeRefName\n  createdAt\n}\n\nfragment prTimelineController_pullRequest_3D8CP9 on PullRequest {\n  url\n  ...headRefForcePushedEventView_issueish\n  timelineItems(first: $timelineCount, after: $timelineCursor) {\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n    edges {\n      cursor\n      node {\n        __typename\n        ...commitsView_nodes\n        ...issueCommentView_item\n        ...mergedEventView_item\n        ...headRefForcePushedEventView_item\n        ...commitCommentThreadView_item\n        ...crossReferencedEventsView_nodes\n        ... on Node {\n          id\n        }\n      }\n    }\n  }\n}\n",
      metadata: {},
    },
  };
})();
// prettier-ignore
(node).hash = '9666ee294586973cd7b27193e460c2e1';
if (node.params) {
  node.params.cacheID = node.hash;
}
module.exports = node;
