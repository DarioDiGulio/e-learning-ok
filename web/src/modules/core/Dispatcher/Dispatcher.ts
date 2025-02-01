import { Action } from "./Action";

export class Dispatcher {
    private actions = new Map<Function, Action<any, any>>();

    register<T extends Action<any, any>>(actionType: new (...args: any[]) => T, instance: T): void {
        this.actions.set(actionType, instance);
    }

    async execute<T extends Action<Params, Response>, Params, Response>(
        actionType: new (...args: any[]) => T,
        args: Params
    ): Promise<Response> {
        const action = this.actions.get(actionType);
        if (!action) {
            throw new Error(`No se encontró la acción: ${actionType.name}`);
        }
        return action.execute(args);
    }
}
