/** @babel */
import path from "path";

export function getGitPanel() {
  const pkg = atom.packages.getActivePackage("git-panel");
  return pkg?.mainModule || null;
}

export function requireFromGitPanel(modulePath) {
  const gitPanelPath = atom.packages.resolvePackagePath("git-panel");
  return require(path.join(gitPanelPath, "lib", modulePath));
}
