import React from "react";
import * as S from "./styles";
import { Link } from "react-router-dom";

interface NavLinksProps {
  onClose: () => void;
}

const NavLinks = ({ onClose }: NavLinksProps) => {
  return (
    <S.ContainerLinks>
      <Link to={"/"} onClick={onClose}>
        <li>HOME</li>
      </Link>
      <Link to={"/witheList"} onClick={onClose}>
        <li>WITHELIST</li>
      </Link>

      <Link to={"/gameplay"} onClick={onClose}>
        <li>GAMEPLAY</li>
      </Link>
      <Link to={"/buyAcces"} onClick={onClose}>
        <li>BUYACCESS</li>
      </Link>
    </S.ContainerLinks>
  );
};

export default NavLinks;
