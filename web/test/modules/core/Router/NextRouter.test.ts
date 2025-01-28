import { NextRouterAdapter } from "@/modules/core/Router/NextRouter";
import { Router } from "@/modules/core/Router/Router";
import { NextRouter } from "next/router";

describe("NextRouter", () => {
  it("debería llamar a push con la ruta correcta", () => {
    router.navigate("/iniciar-sesion");

    expect(nextRouter.push).toHaveBeenCalledWith("/iniciar-sesion");
  });

  beforeEach(() => {
    nextRouter = { push: jest.fn() } as unknown as NextRouter;
    router = new NextRouterAdapter(nextRouter);
  });

  let nextRouter: NextRouter;
  let router: Router;
});
