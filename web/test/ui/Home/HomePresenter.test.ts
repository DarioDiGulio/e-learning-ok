import { Router } from "@/modules/core/Router/Router";
import { HomePresenter } from "@/ui/screens/Home/HomePresenter";

describe('LoginPresenter', () => {
  it('debería llamar a navigate con "/login"', () => {
    presenter.navigateToLogin();

    expect(router.navigate).toHaveBeenCalledWith('/login');
  });

  beforeEach(() => {
    router = { navigate: jest.fn() };
    presenter = new HomePresenter(router);
  })

  let router: Router;
  let presenter: HomePresenter;
});
