'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const vscode = require("vscode");
function activate(context) {
    context.subscriptions.push(vscode.commands.registerTextEditorCommand('extension.auto-insert-semicolon', (editor, textEdit) => {
        return semicolonCommand(editor, textEdit);
    }));
}
exports.activate = activate;
function deactivate() {
}
exports.deactivate = deactivate;
function semicolonCommand(textEditor, textEditorEdit) {
    const line = textEditor.document.lineAt(textEditor.selection.active);
    if (line.text.trim() !== '' && line.text[line.text.length - 1] !== ';') {
        textEditorEdit.insert(line.range.end, ';');
    }
    let position = new vscode.Position(line.lineNumber, line.range.end.character);
    textEditor.selection = new vscode.Selection(position, position);
}
//# sourceMappingURL=extension.js.map