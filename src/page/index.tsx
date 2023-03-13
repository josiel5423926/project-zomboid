import React from "react";
import { Login } from "../components/Login";
import * as S from "./styles";
export const Home = () => {
  return (
    <S.Container>
      <Login />
      <S.ConatinerBox>
        <S.Box>
          <h3>WELCOME TO PROJECT Z BET, A PROJECT ZOMBOID BETTING SERVICE</h3>
          <h4>
            If you believe you are a good Project Zomboid player and believe you
            are able to compete:
          </h4>
          <ul>
            <li></li>
            <li> 1 - Join our Discord;</li>

            <li>2 - Read the rules carefully;</li>
            <li>3 - Read the gameplay carefully;</li>

            <li>4 - Read our PZ server's game settings carefully.</li>
          </ul>
          <h3>If you still think you can:</h3>

          <ul>
            <li>
              1 - Register for open vacancies and waiting list on Withelist
              section;
            </li>
            <h3>(you can register for one or more servers)</h3>
            <li>2 - Wait for your invitation email;</li>
            <li>
              3 - Once invited, get your access to Knox County on Buy Access
              section;
            </li>
            <h3>(you have 12 hours for this)</h3>
            <li>4 - Wait for your email with the server access information;</li>
            <li>5 - Connect to your bet server.</li>
            <h3>
              (server connection addresses are in our Discord) Servers with
            </h3>
            <h3>larger bets will be available soon, so stay tuned!</h3>
            <h2>MORE INFO ON DISCORD</h2>
          </ul>
        </S.Box>
      </S.ConatinerBox>
    </S.Container>
  );
};
