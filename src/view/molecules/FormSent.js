import React from "react";
import Footer from "../organisms/Footer";

class FormSent extends React.Component {

  render() {

    return (
      <div className="sucesso">
      <div className="textos">
          <h3>Falta Pouco!</h3>
          <p>Em instantes você receberá seu login e senha através do email cadastrado para aproveitar seus <strong>7 dias grátis</strong>.</p>
        </div>
        <Footer />
      </div>
    );
  }
}

export default(FormSent);
