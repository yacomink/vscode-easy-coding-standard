import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
  console.log(
    'Congratulations, your extension "vscode-easy-coding-standard" is now active!'
  );

  const disposable = vscode.commands.registerCommand(
    "extension.sayHello",
    () => {
      vscode.window.showInformationMessage("Hello World!");
    }
  );

  context.subscriptions.push(disposable);
}

export function deactivate() {}