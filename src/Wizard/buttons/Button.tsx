import React from "react";
import styled from "styled-components";

interface IProps {
  children: React.ReactNode;
  color?: string;
  onClick?: () => void;
  isDisabled?: boolean;
}

export const Button: React.FC<IProps> = ({
  children,
  color = "#3751FF",
  onClick,
  isDisabled = false,
}) => {
  return (
    <CustomButton
      color={color}
      onClick={onClick}
      className={isDisabled ? "disabled" : ""}
    >
      {children}
    </CustomButton>
  );
};

interface ICustomButton {
  color: string;
}

const CustomButton = styled.button<ICustomButton>`
  background-color: ${({ color }) => color};
  border: none;
  border-radius: 4px;
  min-width: 115px;
  text-transform: uppercase;
  font-weight: bold;
  padding: 0.5rem;
  font-size: 0.7rem;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 6px 18px -5px ${({ color }) => color};

  &.disabled {
    filter: grayscale(100%);
    opacity: 0.4;
  }
`;
