import React from "react";
import MainBg from "./img/main-bg.png";
import SocialBundle from "./Social-Bundle";
import ConnectWalletButton from "./ConnectWalletButton";

function Main() {

  return (
    <section className="main" style={{ backgroundImage: `url(${MainBg})`, width:"100%"}}>
      <div className="mainCard">
        <h1>
          Write as you always do, <br/> and earn as you never before_
        </h1>
        <p>
          The Very First Write-to-Earn System with Web3.
        </p>
        <ConnectWalletButton />
      </div>
      <div style={{height:"170px"}}/>
      <SocialBundle />
    </section>
  );
}

export default Main;