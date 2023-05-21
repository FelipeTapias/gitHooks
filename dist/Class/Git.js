"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Git = void 0;
class Git {
    GetHooks() {
        return this._Hooks;
    }
    SetHooks(hooks) {
        this._Hooks = hooks;
    }
}
exports.Git = Git;
