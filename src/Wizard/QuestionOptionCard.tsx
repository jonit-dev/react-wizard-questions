import { motion } from "framer-motion";
import React from "react";
import { CheckCircle } from "react-feather";
import styled from "styled-components";

import { defaultWizardThemeProps } from "./constants/questionWizard.constants";

interface IProps {
  imageUrl: string;
  label: string;
  isSelected: boolean;
  onClick: () => void;
  selectedColor?: string;
}

export const QuestionOptionCard: React.FC<IProps> = ({
  imageUrl,
  label,
  isSelected,
  onClick,
}) => {
  return (
    <IconBox
      className={!isSelected ? 'inactive' : ''}
      onClick={onClick}
      animate={isSelected ? { scale: 1.05 } : { scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      {isSelected && <CustomCheckCircle />}
      <ImageContainer>
        <img src={imageUrl} alt="question option icon" />
      </ImageContainer>
      <IconBoxLabel>{label}</IconBoxLabel>
    </IconBox>
  );
};

const IconBox = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row-reverse;

  border: 1px solid
    ${({ theme }) => (theme ? theme.primary : defaultWizardThemeProps.primary)};
  width: 100%;

  /*DESKTOP ONLY CODE*/
  @media screen and (min-width: 700px) {
    width: 166px;
    height: 212px;
    justify-content: center;
    align-items: center;
  }

  border-radius: 5px;
  box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.05);
  margin: 0.5rem;
  position: relative;

  &.inactive {
    filter: grayscale(100%);
    opacity: 0.5;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 82px;
    height: 82px;
    margin: 0.25rem;
  }
`;

const IconBoxLabel = styled.span`
  font-size: 0.8rem;
  color: ${({ theme }) => (theme ? theme.gray : defaultWizardThemeProps.gray)};
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: auto;

  /*DESKTOP ONLY CODE*/
  @media screen and (min-width: 700px) {
    flex: 100%;
  }
`;

const CustomCheckCircle = styled(CheckCircle)`
  position: absolute;

  top: 0.4rem;
  left: 0.4rem;

  /*DESKTOP ONLY CODE*/
  @media screen and (min-width: 700px) {
    top: 0.7rem;
    right: 0.7rem;
  }

  color: ${({ theme }) =>
    theme ? theme.primary : defaultWizardThemeProps.primary};
`;
