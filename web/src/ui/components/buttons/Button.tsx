import React from "react";
import {ButtonStyled} from "@/ui/components/buttons/ButtonStyle";

export const Button: React.FC<Props> = (props) => {
    return (
        <ButtonStyled
            type={props.type ?? "button"}
            onClick={props.onClick}
        >
            {props.text}
        </ButtonStyled>
    );
}

export interface Props {
    type?: "button" | "submit" | "reset";
    text: string
    onClick: () => void
}