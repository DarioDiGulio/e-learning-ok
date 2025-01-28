import React from "react";
import {usePresenter} from "@/pages/hooks/usePresenters";
import {LoginStyles} from "@/ui/LoginPage/LoginPageStyles";

const LoginPage = () => {
    const presenter = usePresenter().loginPresenter;

    return (
        <LoginStyles.Container>
            <LoginStyles.Card>
                <LoginStyles.Title>Iniciar Sesión</LoginStyles.Title>
                <div>
                    <LoginStyles.Label htmlFor="email">Correo Electrónico</LoginStyles.Label>
                    <LoginStyles.Input
                        type="email"
                        id="email"
                        value={presenter.model.email}
                        onChange={e => presenter.updateEmail(e.target.value)}
                        placeholder="Ingresa tu correo"
                    />
                    {presenter.model.errors.email && <LoginStyles.Error>{presenter.model.errors.email}</LoginStyles.Error>}
                </div>
                <div>
                    <LoginStyles.Label htmlFor="password">Contraseña</LoginStyles.Label>
                    <LoginStyles.Input
                        type="password"
                        id="password"
                        value={presenter.model.password}
                        onChange={e => presenter.updatePassword(e.target.value)}
                        placeholder="Ingresa tu contraseña"
                    />
                    {presenter.model.errors.password && <LoginStyles.Error>{presenter.model.errors.password}</LoginStyles.Error>}
                </div>
                <LoginStyles.Button type="submit" onClick={presenter.login}>Entrar</LoginStyles.Button>
            </LoginStyles.Card>
        </LoginStyles.Container>
    );
};

export default LoginPage;
