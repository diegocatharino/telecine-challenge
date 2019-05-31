import React from "react";
import Slick from "react-slick";
import FormButton from "../atoms/FormButton";

const API = `content/populares.json`;

class Slider extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      data: [],
    };
  }
 
  componentDidMount() {
    //requisitando a api de filmes para o slick
    fetch(API)
      .then(response => response.json())
      .then(result => this.setState({ 
        data: result.data 
      }));
  }

  render() {
    const { data } = this.state;
    //config do slick
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 5,
      autoplay: true,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          }
        },
        {
          breakpoint: 480,
          settings: {
            speed: 1500,
            slidesToShow: 1.5,
            slidesToScroll: 1,
            initialSlide: 0.25
          }
        }
      ]
    };
    console.log("state", data);    
    return (
      //populando a listagem após a requisição com os dados do jason
      <div className="Slick">
          <Slick {...settings}>
            {data.map((item) => {
              console.log(item.poster_p);
              return(
                <div key={item.id} className="filmes">
                    <img alt={item.titulo_portugues} src={item.poster_m} />
                    <a href={item.id}>{item.titulo_portugues}</a>

                    <FormButton />
                </div>) 
            })}
          </Slick>
      </div>  
    );
  }
}

export default Slider;
