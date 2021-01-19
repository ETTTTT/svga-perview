
import * as vscode from 'vscode';
import { PawDrawEditorProvider } from './pawDrawEditor';

export function activate(context: vscode.ExtensionContext) {
	context.subscriptions.push(PawDrawEditorProvider.register(context));
}
