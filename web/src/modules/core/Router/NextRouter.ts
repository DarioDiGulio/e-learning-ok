import { NextRouter } from "next/router";
import { Router } from "./Router";

export class NextRouterAdapter implements Router {
  constructor(private nextRouter: NextRouter) {}

  navigate(path: string): void {
    this.nextRouter.push(path);
  }
}
