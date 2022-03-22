import styled from "styled-components";
import { Link } from 'react-router-dom';

interface ButtonProps {
    primary?: boolean;
    big?: boolean;
}


export const Button = styled(Link)`
    background: var(
        ${({ primary }: ButtonProps) => (primary ? `--button-bg-1` : `--button-bg-2`)}
    );
    white-space: nowrap;
    outline: none;
    border: none;
    min-width: 6.25rem;
    max-width: 12.5rem;
    display: flex;
    justify-content: center;
    align-items: center;

    padding: ${({ big }: ButtonProps) => (big ? '1rem 2.5rem' : '0.87rem 1.5rem')};
    color: var(
        ${({ primary }: ButtonProps) => (primary ? `--button-text-1` : `--button-text-2`)}
    );

    font-size: ${({ big }: ButtonProps) => (big ? '1.25rem' : '0.87rem')};
    font-weight: 500;

    cursor: pointer;
    transition: all .3s ease;

    &:hover {
        transform: translateY(-2px);
    }

    @media screen and (max-width: 768px) {
        display: none;
    }
`;