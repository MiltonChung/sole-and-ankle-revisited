/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components/macro";
import { DialogOverlay, DialogContent } from "@reach/dialog";

import { COLORS } from "../../constants";
import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const MobileMenu = ({ isOpen, onDismiss }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <Overlay isOpen={isOpen} onDismiss={onDismiss}>
      <Content>
        <DismissButton onClick={onDismiss}>
          <VisuallyHidden>Dismiss menu</VisuallyHidden>
          <Icon id="close" />
        </DismissButton>
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <Footer>
          <FooterLink href="/terms">Terms and Conditions</FooterLink>
          <FooterLink href="/privacy">Privacy Policy</FooterLink>
          <FooterLink href="/contact">Contact Us</FooterLink>
        </Footer>
      </Content>
    </Overlay>
  );
};

const Overlay = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: hsla(220deg, 5%, 40%, 0.8);
`;

const Content = styled(DialogContent)`
  background: white;
  position: absolute;
  width: 80%;
  height: 100%;
  right: 0;
  top: 0;
  padding: 32px;
`;

const DismissButton = styled(UnstyledButton)`
  position: absolute;
  top: 26px;
  right: 16px;

  svg {
    height: 24px;
    width: 24px;
  }
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 14px;
  align-items: flex-start;
  justify-content: center;
  height: 100%;
`;

const NavLink = styled.a`
  color: ${COLORS.gray[900]};
  font-size: ${18 / 16}rem;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 600;

  &:first-of-type {
    color: ${COLORS.secondary};
  }
`;

const Footer = styled.footer`
  position: absolute;
  bottom: 32px;
  left: 32px;
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

const FooterLink = styled.a`
  color: ${COLORS.gray[700]};
  font-size: ${14 / 16}rem;
  text-decoration: none;
`;

export default MobileMenu;
