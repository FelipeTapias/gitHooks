import { Hook } from "../models/Hook";

export class Git {

    private _Hooks: Array<Hook>;

    GetHooks(): Array<Hook>  {
        return this._Hooks;
    }

    SetHooks(hooks: Array<Hook>): void {
        this._Hooks = hooks;
    }
}