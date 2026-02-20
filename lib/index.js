/** @babel */
import GithubPanelPackage from "./github-package";

let pack;
const entry = {
  initialize() {
    pack = new GithubPanelPackage({
      workspace: atom.workspace,
      project: atom.project,
      commands: atom.commands,
      notificationManager: atom.notifications,
      tooltips: atom.tooltips,
      styles: atom.styles,
      keymaps: atom.keymaps,
      grammars: atom.grammars,
      config: atom.config,
      deserializers: atom.deserializers,

      confirm: atom.confirm.bind(atom),
      currentWindow: atom.getCurrentWindow(),
    });
  },
};

module.exports = new Proxy(entry, {
  get(target, name) {
    if (pack && Reflect.has(pack, name)) {
      let item = pack[name];
      if (typeof item === "function") {
        item = item.bind(pack);
      }
      return item;
    } else {
      return target[name];
    }
  },
});
