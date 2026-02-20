/** @babel */
/** @jsx React.createElement */
import React from "react";
import fs from "fs/promises";

import CreateDialogContainer from "../containers/create-dialog-container";
import createRepositoryMutation from "../mutations/create-repository";
import { addEvent } from "../reporter-proxy";

export default class CreateDialog extends React.Component {
  render() {
    return <CreateDialogContainer {...this.props} />;
  }
}

export async function createRepository(
  { ownerID, name, visibility, localPath, protocol, sourceRemoteName },
  { clone, relayEnvironment },
) {
  await fs.mkdir(localPath, { recursive: true, mode: 0o755 });
  const result = await createRepositoryMutation(relayEnvironment, { name, ownerID, visibility });
  const sourceURL = result.createRepository.repository[protocol === "ssh" ? "sshUrl" : "url"];
  await clone(sourceURL, localPath, sourceRemoteName);
  addEvent("create-github-panel-repository", { package: "github" });
}

export async function publishRepository(
  { ownerID, name, visibility, protocol, sourceRemoteName },
  { repository, relayEnvironment },
) {
  let defaultBranchName, wasEmpty;
  if (repository.isEmpty()) {
    wasEmpty = true;
    await repository.init();
    defaultBranchName = "master";
  } else {
    wasEmpty = false;
    const branchSet = await repository.getBranches();
    const branchNames = new Set(branchSet.getNames());
    if (branchNames.has("master")) {
      defaultBranchName = "master";
    } else {
      const head = branchSet.getHeadBranch();
      if (head.isPresent()) {
        defaultBranchName = head.getName();
      }
    }
  }
  if (!defaultBranchName) {
    throw new Error("Unable to determine the desired default branch from the repository");
  }

  const result = await createRepositoryMutation(relayEnvironment, { name, ownerID, visibility });
  const sourceURL = result.createRepository.repository[protocol === "ssh" ? "sshUrl" : "url"];
  const remote = await repository.addRemote(sourceRemoteName, sourceURL);
  if (wasEmpty) {
    addEvent("publish-github-panel-repository", { package: "github" });
  } else {
    await repository.push(defaultBranchName, { remote, setUpstream: true });
    addEvent("init-publish-github-panel-repository", { package: "github" });
  }
}
