import { Router } from "@/modules/core/Router/Router";
import { HomePresenter } from "@/ui/Home/HomePresenter";

describe('LoginPresenter', () => {
  it('debería llamar a navigate con "/iniciar-sesion"', () => {
    presenter.navigateToLogin();

    expect(router.navigate).toHaveBeenCalledWith('/iniciar-sesion');
  });

  beforeEach(() => {
    router = { navigate: jest.fn() };
    presenter = new HomePresenter(router);
  })

  let router: Router;
  let presenter: HomePresenter;
});
