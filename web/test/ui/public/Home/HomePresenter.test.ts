import { Router } from "@/modules/core/Router/Router";
import { HomePresenter } from "@/ui/screens/public/Home/HomePresenter";

describe('LoginPresenter', () => {
  it('debería llamar a navigate con "/login"', () => {
    presenter.navigateToLogin();

    expect(router.navigate).toHaveBeenCalledWith('/public/login');
  });

  beforeEach(() => {
    router = { navigate: jest.fn() };
    presenter = new HomePresenter(router);
  })

  let router: Router;
  let presenter: HomePresenter;
});
