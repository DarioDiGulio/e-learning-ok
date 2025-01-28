import styled from "styled-components";

export const Error = styled.p`
  font-size: 0.75rem;
  color: #e63946;
  margin-top: 0.25rem;
`;

export const Label = styled.label`
  display: block;
  font-size: 0.875rem;
  color: #666666;
  margin-bottom: 0.5rem;
`;

export const InputStyled = styled.input`
    width: 100%;
    padding: 0.75rem;
    border: 1px solid #ddd;
    border-radius: 8px;
    margin-bottom: 10px;
    font-size: 1rem;
    color: #333333;

    &:focus {
        border-color: #4f46e5;
        box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.3);
    }
`;