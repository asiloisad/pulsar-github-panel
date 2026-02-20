"use strict";

const node = (function () {
  var v0 = {
    kind: "ScalarField",
    alias: null,
    name: "url",
    args: null,
    storageKey: null,
  };
  return {
    kind: "Fragment",
    name: "prDetailView_pullRequest",
    type: "PullRequest",
    metadata: null,
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
        name: "id",
        args: null,
        storageKey: null,
      },
      {
        kind: "ScalarField",
        alias: null,
        name: "__typename",
        args: null,
        storageKey: null,
      },
      v0,
      {
        kind: "ScalarField",
        alias: null,
        name: "isCrossRepository",
        args: null,
        storageKey: null,
      },
      {
        kind: "ScalarField",
        alias: null,
        name: "changedFiles",
        args: null,
        storageKey: null,
      },
      {
        kind: "ScalarField",
        alias: null,
        name: "state",
        args: null,
        storageKey: null,
      },
      {
        kind: "ScalarField",
        alias: null,
        name: "number",
        args: null,
        storageKey: null,
      },
      {
        kind: "ScalarField",
        alias: null,
        name: "title",
        args: null,
        storageKey: null,
      },
      {
        kind: "ScalarField",
        alias: null,
        name: "bodyHTML",
        args: null,
        storageKey: null,
      },
      {
        kind: "ScalarField",
        alias: null,
        name: "baseRefName",
        args: null,
        storageKey: null,
      },
      {
        kind: "ScalarField",
        alias: null,
        name: "headRefName",
        args: null,
        storageKey: null,
      },
      {
        kind: "LinkedField",
        alias: "countedCommits",
        name: "commits",
        storageKey: null,
        args: null,
        concreteType: "PullRequestCommitConnection",
        plural: false,
        selections: [
          {
            kind: "ScalarField",
            alias: null,
            name: "totalCount",
            args: null,
            storageKey: null,
          },
        ],
      },
      {
        kind: "LinkedField",
        alias: null,
        name: "author",
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
          {
            kind: "ScalarField",
            alias: null,
            name: "avatarUrl",
            args: null,
            storageKey: null,
          },
          v0,
        ],
      },
      {
        kind: "FragmentSpread",
        name: "prCommitsView_pullRequest",
        args: [
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
        ],
      },
      {
        kind: "FragmentSpread",
        name: "prStatusesView_pullRequest",
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
        ],
      },
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
      {
        kind: "FragmentSpread",
        name: "emojiReactionsController_reactable",
        args: null,
      },
    ],
  };
})();
// prettier-ignore
(node).hash = 'e427b865abf965b5693382d0c5611f2f';
if (node.params) {
  node.params.cacheID = node.hash;
}
module.exports = node;
