import React, {HTMLInputTypeAttribute} from "react";
import {InputStyled, Label, Error} from "@/ui/components/form/Input/InputStyles";


export const Input: React.FC<Props> = (props) => {
    return (
        <div>
            <Label>{props.label}</Label>
            <InputStyled
                type={props.type}
                value={props.value}
                onChange={e => props.onChange(e.target.value)}
                placeholder={props.placeholder ?? props.placeholder}
            />
            {props.error && <Error>{props.error}</Error>}
        </div>
    );
}

export interface Props {
    label: string;
    type: HTMLInputTypeAttribute;
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
    error?: string;
}