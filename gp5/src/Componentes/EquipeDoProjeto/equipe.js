import React from "react";
import "./equipe.css";
import gitHub from '../../imagens/eva_github-fill.png';
import Linkedln from '../../imagens/bi_linkedin.png';
import FotoSabrina from '../../imagens/Rectangle36.png';
import FotoEduarda from '../../imagens/Rectangle38.png';
import FotoVitoria from '../../imagens/Rectangle39.png';
import FotoIssllany from '../../imagens/Rectangle41.png';
import FotoPriscila from '../../imagens/Rectangle40.png';
function Equipe(){

    return(
      <div className="bodyEquipe" id="equipe">
        <div className="divContainer">
          <h3 className="subtitleEquipe">Participantes</h3>
          <h1 className="titleEquipe">Equipe do Projeto</h1>
        </div>

      <div className="wrapper">
        <div className="gridContainer">
          <div className="celGridContainer">
            <div>
              <img src={FotoSabrina} alt='FotoSabrina'></img>
            </div>
            <div className="textContainer">
              <h3>Sabrina Damasceno</h3>
              <p>Estudante primeiro período de SI</p>
              <p>FrontEnd e Ui Design</p>
              <p>18 Anos</p>
              <div className="iconsContainer">
                <a href="https://github.com/SabrinaDamascenoDev">
                <img src={gitHub} alt='iconGithub'></img>
                </a>
                <a href="https://www.linkedin.com/in/sabrina-damasceno-4a81a0265/">
                <img src={Linkedln} alt='iconLinkedln'></img>
                </a>
              </div>
              
            </div>
          </div>

          <div className="celGridContainer">
            <div>
                <img src={FotoEduarda} alt='FotoEduarda'></img>
              </div>
              <div className="textContainer">
                <h3>Eduarda Spinosa</h3>
                <p>Estudante primeiro período de SI</p>
                <p>Marketing Digital</p>
                <p>18 Anos</p>
                <div className="iconsContainer">
                  <a href="https://github.com/eduardaspinosa">
                    <img src={gitHub} alt='iconGithub'></img>
                  </a>
                  <a href="https://www.linkedin.com/in/eduarda-spinosa-7b0801282?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app">
                    <img src={Linkedln} alt='iconLinkedln'></img>
                  </a>
                </div>
                
                </div>
            </div>
          <div className="celGridContainer">
            <div>
                <img src={FotoVitoria} alt='FotoVitoria'></img>
              </div>
            <div className="textContainer">
                <h3>Vitória Rabelo</h3>
                <p>Estudante primeiro período de SI</p>
                <p>FrontEnd</p>
                <p>18 Anos</p>
                <div className="iconsContainer">
                <a href="https://github.com/Vitoria-Rabelo">
                    <img src={gitHub} alt='iconGithub'></img>
                  </a>
                  <a href="https://www.linkedin.com/in/vit%C3%B3ria-rabelo-santiago-48497b263?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app">
                    <img src={Linkedln} alt='iconLinkedln'></img>
                  </a>
                </div>
                
              </div>
          </div>
          <div className="celGridContainer">
              <div className="imageContainer">
                <img src={FotoIssllany} alt='FotoIssllany' ></img>
              </div>
              <div className="textContainer">
              <h3>Issllany Braga</h3>
              <p>Estudante primeiro período de SI</p>
              <p>Social Mídia</p>
              <p>19 Anos</p>
              <div className="iconsContainer">
              <a href="#">
                    <img src={gitHub} alt='iconGithub'></img>
                  </a>
                  <a href="https://www.linkedin.com/in/issllany-braga-779452312?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app">
                    <img src={Linkedln} alt='iconLinkedln'></img>
                  </a>
              </div>
          </div>
          </div>
          <div className="celGridContainer">
          <div>
                <img src={FotoPriscila} alt='FotoPriscila'></img>
              </div>
            <div className="textContainer">
              <h3>Priscila Holanda</h3>
              <p>Estudante primeiro período de SI</p>
              <p>FrontEnd</p>
              <p>18 Anos</p>
              <div className="iconsContainer">
              <a href="https://github.com/PriHolanda">
                    <img src={gitHub} alt='iconGithub'></img>
                  </a>
                  <a href="#">
                    <img src={Linkedln} alt='iconLinkedln'></img>
                  </a>
              </div>
          </div>
          </div>
        </div>
        </div>
      </div>
    );
}

export default Equipe;
