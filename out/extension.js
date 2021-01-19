"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = void 0;
const pawDrawEditor_1 = require("./pawDrawEditor");
function activate(context) {
    context.subscriptions.push(pawDrawEditor_1.PawDrawEditorProvider.register(context));
}
exports.activate = activate;
//# sourceMappingURL=extension.js.map