// import * as React from 'react';

// export interface ButtonProps {
//   onClick: () => void;
// }

// export const Button: React.FunctionComponent<ButtonProps> = ({ children, onClick, ...rest }) => (
//   <button onClick={onClick} style={{backgroundColor: 'red', color: 'white', padding: '12px'}} {...rest}>{children}</button>
// )


import * as React from "react";
import styled from "../../theme/styled-components";
import {
  fontWeight,
  borders,
  borderColor,
  buttonStyle,
  borderRadius,
  themeGet
} from "styled-system";
import { themed } from "../../theme/utils";
import { Flex } from "../Flex/Flex";
import { Icon } from "../Icons/Icon";
import { COLOR_PRIMARY } from "../../theme/theme";

const BaseButton = styled<any, any>(Flex)`
  appearance: none;
  text-align: center;
  line-height: inherit;
  text-decoration: none;
  transition: background-color 0.25s;
  white-space: nowrap;
  cursor: ${({disabled}) => disabled ? 'not-allowed' : 'pointer'};
  opacity: ${({disabled}) => disabled ? 0.2 : 1};
  transition: opacity 0.2s ease;

  ${fontWeight}
  ${borders}
  ${borderColor}
  ${borderRadius}
  ${buttonStyle}
  ${themed("Button")}

  & > * {
    margin: 0 4px;
    color: inherit;
  }
`;

export const Button: React.FunctionComponent<any> = ({
  icon,
  iconColor = COLOR_PRIMARY,
  children,
  disabled = false,
  onClick,
  ...rest
}) => {
  return (
  <BaseButton as="button" disabled={disabled} onClick={disabled ? null : onClick} {...rest}>
    {icon ? <Icon name={icon} size={18} color={iconColor} /> : null}
    {disabled} {children}
  </BaseButton>
)};

Button.defaultProps = {
  fontSize: 14,
  m: 0,
  px: 2,
  py: 2,
  variant: "primary",
  border: 0,
  borderRadius: 4,
  icon: null
};
