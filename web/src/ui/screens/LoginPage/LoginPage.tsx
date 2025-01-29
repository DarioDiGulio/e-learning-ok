import React from "react";
import {usePresenter} from "@/ui/react/hooks/usePresenters";
import {Card, Container, Title} from "@/ui/screens/LoginPage/LoginPageStyles";
import {Input} from "@/ui/components/form/Input/Input";
import {Button} from "@/ui/components/buttons/Button";

const LoginPage = () => {
    const presenter = usePresenter().loginPresenter;

    return (
        <Container>
            <Card>
                <Title>Iniciar Sesión</Title>
                <Input
                    label="Correo"
                    type='email'
                    value={presenter.model.email}
                    onChange={presenter.updateEmail}
                    placeholder="Ingresa tu correo"
                    error={presenter.model.errors.email}
                />
                <Input
                    label="Contraseña"
                    type='password'
                    value={presenter.model.password}
                    onChange={presenter.updatePassword}
                    placeholder="Ingresa tu contraseña"
                    error={presenter.model.errors.password}
                />
                <Button
                    type="submit"
                    onClick={presenter.login}
                    text='Entrar'
                />
            </Card>
        </Container>
    );
};

export default LoginPage;
