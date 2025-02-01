export interface Action<Params, Response> {
    execute(args: Params): Response | Promise<Response>;
}
