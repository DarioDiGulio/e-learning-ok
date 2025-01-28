import { Router } from "@/modules/core/Router/Router";
import {LoginErrors, LoginModel} from "@/ui/LoginPage/LoginModel";

export class LoginPresenter {
  private readonly onModelChangeCallback: (model: LoginModel) => void;
  model: LoginModel;

  constructor(private router: Router, initialModel: LoginModel, onModelChange: (model: LoginModel) => void) {
    this.model = initialModel;
    this.onModelChangeCallback = onModelChange;
  }

  updateEmail = (email: string): void => {
    this.model.email = email;

    if (!email) {
      this.model.errors.email = "El correo electrónico es obligatorio.";
    } else {
      delete this.model.errors.email;
    }

    this.notifyModelChange();
  };

  updatePassword = (password: string): void => {
    this.model.password = password;

    if (!password) {
      this.model.errors.password = "La contraseña es obligatoria.";
    } else {
      delete this.model.errors.password;
    }

    this.notifyModelChange();
  };

  login = (): void => {
    this.validateFields();
    if (Object.keys(this.model.errors).length === 0) {
      this.router.navigate("/dashboard");
    }
  };

  private validateFields(): void {
    const errors: LoginModel["errors"] = {};
    this.validateEmail(errors);
    this.validatePassword(errors);
    this.model.errors = errors;
    this.notifyModelChange();
  }

  private validatePassword(errors: LoginErrors) {
    if (!this.model.password) {
      errors.password = "La contraseña es obligatoria.";
    }
  }

  private validateEmail(errors: LoginErrors) {
    if (!this.model.email) {
      errors.email = "El correo electrónico es obligatorio.";
    } else if (!this.isValidEmail(this.model.email)) {
      errors.email = "El correo electrónico no es válido.";
    }
  }

  private notifyModelChange(): void {
    this.onModelChangeCallback(this.model);
  }

  private isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
}
