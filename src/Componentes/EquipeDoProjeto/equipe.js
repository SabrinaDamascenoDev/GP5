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
      <div className="bodyEquipe py-5 py-lg-0 d-flex flex-column" id="equipe">
        <div className="divContainer">
          <h3 className="subtitleEquipe">Participantes</h3>
          <h1 className="titleEquipe">Equipe do Projeto</h1>
        </div>

      <div className="wrapper">
        <div className="gridContainer container">
          <div className="celGridContainer">
            <div>
              <img src={FotoSabrina} className="fotoEquipe" alt='FotoSabrina'></img>
            </div>
            <div className="textContainer">
              <h3 className="infors nome">Sabrina Damasceno</h3>
              <p className="infors">Estudante primeiro período de SI</p>
              <p className="infors">FrontEnd e Ui Design</p>
              <p className="infors">18 Anos</p>
              <div className="iconsContainer">
                <a href="https://github.com/SabrinaDamascenoDev">
                <img src={gitHub} alt='iconGithub' className="w-75 w-lg-100"></img>
                </a>
                <a href="https://www.linkedin.com/in/sabrina-damasceno-4a81a0265/">
                <img src={Linkedln} alt='iconLinkedln' className="w-75 w-lg-100"></img>
                </a>
              </div>
              
            </div>
          </div>

          <div className="celGridContainer">
            <div>
                <img src={FotoEduarda} alt='FotoEduarda' className="fotoEquipe"></img>
              </div>
              <div className="textContainer">
                <h3 className="infors nome">Eduarda Spinosa</h3>
                <p className="infors">Estudante primeiro período de SI</p>
                <p className="infors">Marketing Digital</p>
                <p className="infors">18 Anos</p>
                <div className="iconsContainer">
                  <a href="https://github.com/eduardaspinosa">
                    <img src={gitHub} alt='iconGithub'  className="w-75 w-lg-100"></img>
                  </a>
                  <a href="https://www.linkedin.com/in/eduarda-spinosa-7b0801282?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app">
                    <img src={Linkedln} alt='iconLinkedln'  className="w-75 w-lg-100"></img>
                  </a>
                </div>
                
                </div>
            </div>
          <div className="celGridContainer">
            <div>
                <img src={FotoVitoria} alt='FotoVitoria' className="fotoEquipe"></img>
              </div>
            <div className="textContainer">
                <h3 className="infors nome">Vitória Rabelo</h3>
                <p className="infors">Estudante primeiro período de SI</p>
                <p className="infors">FrontEnd</p>
                <p className="infors">18 Anos</p>
                <div className="iconsContainer">
                <a href="https://github.com/Vitoria-Rabelo">
                    <img src={gitHub} alt='iconGithub'  className="w-75 w-lg-100"></img>
                  </a>
                  <a href="https://www.linkedin.com/in/vit%C3%B3ria-rabelo-santiago-48497b263?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app">
                    <img src={Linkedln} alt='iconLinkedln'  className="w-75 w-lg-100"></img>
                  </a>
                </div>
                
              </div>
          </div>
          <div className="celGridContainer">
              <div className="imageContainer">
                <img src={FotoIssllany} alt='FotoIssllany' className="fotoEquipe"></img>
              </div>
              <div className="textContainer">
              <h3 className="infors nome">Issllany Braga</h3>
              <p className="infors">Estudante primeiro período de SI</p>
              <p className="infors">Social Mídia</p>
              <p className="infors">19 Anos</p>
              <div className="iconsContainer">
              <a href="#">
                    <img src={gitHub} alt='iconGithub'  className="w-75 w-lg-100"></img>
                  </a>
                  <a href="https://www.linkedin.com/in/issllany-braga-779452312?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app">
                    <img src={Linkedln} alt='iconLinkedln'  className="w-75 w-lg-100"></img>
                  </a>
              </div>
          </div>
          </div>
          <div className="celGridContainer d-flex d-inline">
             <div>
                <img src={FotoPriscila} alt='FotoPriscila' className="fotoEquipe"></img>
              </div>
            <div className="textContainer">
              <h3 className="infors nome">Priscila Holanda</h3>
              <p className="infors">Estudante primeiro período de SI</p>
              <p className="infors">FrontEnd</p>
              <p className="infors">18 Anos</p>
              <div className="iconsContainer">
              <a href="https://github.com/PriHolanda">
                    <img src={gitHub} alt='iconGithub'  className="w-75 w-lg-100"></img>
                  </a>
                  <a href="#">
                    <img src={Linkedln} alt='iconLinkedln'  className="w-75 w-lg-100"></img>
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
