import React from "react";
import * as S from "./styles";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import { IconsTecnologies } from "../../components/IconsTecnologies";
const isBrowser = typeof window !== "undefined";

const AboutMe = () => {
  let screenSize = 0;
  if (isBrowser) screenSize = window.screen.width;

  const curriculoPath = "/assets/images/josiel-souza.pdf";
  const curriculoImgPath = "/assets/images/curriculo.svg";

  const handleOpenGmail = () => {
    window.location.href = "mailto:josielsouza.dj@gmail.com";
  };
  return (
    <S.Container id="about">
      <S.Description>
        <h2>Josiel Souza</h2>
        <h3>Desenvolvedor Web Full Stack</h3>
        <p>O aprendizado é contínuo e o próximo nível nunca será o último 🚀</p>
        <S.ContainerIcon>
          <S.BoxIcon>
            <a
              href="https://www.linkedin.com/in/josiel-souza/"
              target="_blank"
              rel="noreferrer"
              title="Linkedin"
            >
              <LinkedInIcon />
            </a>
            <span>Linkedin</span>
          </S.BoxIcon>
          <S.BoxIcon>
            <a
              href="https://github.com/josielsouza"
              target="_blank"
              rel="noreferrer"
              title="GitHub"
            >
              <GitHubIcon />
            </a>
            <span>GitHub</span>
          </S.BoxIcon>
          {screenSize < 668 ? (
            <S.BoxIcon>
              <a onClick={handleOpenGmail} title="Gmail">
                <EmailIcon />
              </a>
              <span>Enviar E-mail</span>
            </S.BoxIcon>
          ) : (
            <S.BoxIcon>
              <a
                href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=josielsouza.dj@gmail.com"
                target="_blank"
                rel="noreferrer"
                title="E-mail"
              >
                <EmailIcon />
              </a>
              <span>Enviar E-mail</span>
            </S.BoxIcon>
          )}
          <S.BoxIcon>
            <a
              href="https://wa.me/5511950886634"
              title="Vamos conversar?"
              target="_blank"
            >
              <WhatsAppIcon />
            </a>
            <span>Fale Comigo</span>
          </S.BoxIcon>
          <S.Cv>
            <a href={curriculoPath} download title="Baixar Currículo">
              <img src={curriculoImgPath} alt="Currículo" />
            </a>
            <span>Baixar CV</span>
          </S.Cv>
        </S.ContainerIcon>
        <S.Avatar>
          <img
            alt="Josiel souza"
            title="Josiel Souza"
            src="../../assets/images/perfil.jpg"
          />
        </S.Avatar>
        <S.AboutMe>
          <h3>
            Sobre mim <hr />
          </h3>
          <p>Seja Bem-vindo(a)!</p>
          <S.BoxText>
            Sempre gostei de tecnologia, então fiz faculdade de análise e
            desenvolvimento de sistemas pela
            <a href="https://faex.edu.br/" target="_blank" title="Faex">
              FAEX
            </a>
            , concluído em junho de 2020.
          </S.BoxText>
          <S.BoxText>
            Trabalhei como instalador de internet na
            <a
              href="https://ds3telecom.com.br/"
              target="_blank"
              title="Ds3 Telecom"
            >
              Ds3 Telecom
            </a>
            , fui promovido para o suporte técnico e a partir dali percebi que
            eu queria trabalhar com programação, então fiz um curso de
            desenvolvimento fullstack pela
            <a href="https://recodepro.org.br/" target="_blank" title=" Recode">
              Recode
            </a>
            e logo consegui um emprego na
            <a
              href="https://badico.cloud/"
              target="_blank"
              title="Badico Cloud"
            >
              Badico Cloud Engineering
            </a>
            como desenvolvedor fullstack. Na Badico Cloud pude trabalhar em
            equipe utilizando algumas tecnologias como:
          </S.BoxText>
          <IconsTecnologies />
        </S.AboutMe>
      </S.Description>
    </S.Container>
  );
};

export default AboutMe;