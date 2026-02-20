"use strict";

const node = (function () {
  var v0 = [
      {
        kind: "Variable",
        name: "number",
        variableName: "issueishNumber",
      },
    ],
    v1 = {
      kind: "ScalarField",
      alias: null,
      name: "__typename",
      args: null,
      storageKey: null,
    },
    v2 = {
      kind: "ScalarField",
      alias: null,
      name: "title",
      args: null,
      storageKey: null,
    },
    v3 = {
      kind: "ScalarField",
      alias: null,
      name: "number",
      args: null,
      storageKey: null,
    },
    v4 = {
      kind: "Variable",
      name: "timelineCount",
      variableName: "timelineCount",
    },
    v5 = {
      kind: "Variable",
      name: "timelineCursor",
      variableName: "timelineCursor",
    };
  return {
    kind: "Fragment",
    name: "issueishDetailController_repository",
    type: "Repository",
    metadata: null,
    argumentDefinitions: [
      {
        kind: "LocalArgument",
        name: "issueishNumber",
        type: "Int!",
        defaultValue: null,
      },
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
        name: "commitCount",
        type: "Int!",
        defaultValue: null,
      },
      {
        kind: "LocalArgument",
        name: "commitCursor",
        type: "String",
        defaultValue: null,
      },
      {
        kind: "LocalArgument",
        name: "checkSuiteCount",
        type: "Int!",
        defaultValue: null,
      },
      {
        kind: "LocalArgument",
        name: "checkSuiteCursor",
        type: "String",
        defaultValue: null,
      },
      {
        kind: "LocalArgument",
        name: "checkRunCount",
        type: "Int!",
        defaultValue: null,
      },
      {
        kind: "LocalArgument",
        name: "checkRunCursor",
        type: "String",
        defaultValue: null,
      },
    ],
    selections: [
      {
        kind: "ScalarField",
        alias: null,
        name: "name",
        args: null,
        storageKey: null,
      },
      {
        kind: "LinkedField",
        alias: null,
        name: "owner",
        storageKey: null,
        args: null,
        concreteType: null,
        plural: false,
        selections: [
          {
            kind: "ScalarField",
            alias: null,
            name: "login",
            args: null,
            storageKey: null,
          },
        ],
      },
      {
        kind: "LinkedField",
        alias: "issue",
        name: "issueOrPullRequest",
        storageKey: null,
        args: v0,
        concreteType: null,
        plural: false,
        selections: [
          v1,
          {
            kind: "InlineFragment",
            type: "Issue",
            selections: [
              v2,
              v3,
              {
                kind: "FragmentSpread",
                name: "issueDetailView_issue",
                args: [v4, v5],
              },
            ],
          },
        ],
      },
      {
        kind: "LinkedField",
        alias: "pullRequest",
        name: "issueOrPullRequest",
        storageKey: null,
        args: v0,
        concreteType: null,
        plural: false,
        selections: [
          v1,
          {
            kind: "InlineFragment",
            type: "PullRequest",
            selections: [
              v2,
              v3,
              {
                kind: "FragmentSpread",
                name: "prCheckoutController_pullRequest",
                args: null,
              },
              {
                kind: "FragmentSpread",
                name: "prDetailView_pullRequest",
                args: [
                  {
                    kind: "Variable",
                    name: "checkRunCount",
                    variableName: "checkRunCount",
                  },
                  {
                    kind: "Variable",
                    name: "checkRunCursor",
                    variableName: "checkRunCursor",
                  },
                  {
                    kind: "Variable",
                    name: "checkSuiteCount",
                    variableName: "checkSuiteCount",
                  },
                  {
                    kind: "Variable",
                    name: "checkSuiteCursor",
                    variableName: "checkSuiteCursor",
                  },
                  {
                    kind: "Variable",
                    name: "commitCount",
                    variableName: "commitCount",
                  },
                  {
                    kind: "Variable",
                    name: "commitCursor",
                    variableName: "commitCursor",
                  },
                  v4,
                  v5,
                ],
              },
            ],
          },
        ],
      },
      {
        kind: "FragmentSpread",
        name: "issueDetailView_repository",
        args: null,
      },
      {
        kind: "FragmentSpread",
        name: "prCheckoutController_repository",
        args: null,
      },
      {
        kind: "FragmentSpread",
        name: "prDetailView_repository",
        args: null,
      },
    ],
  };
})();
// prettier-ignore
(node).hash = '504a7b23eb6c4c87798663e4d9c7136a';
if (node.params) {
  node.params.cacheID = node.hash;
}
module.exports = node;
