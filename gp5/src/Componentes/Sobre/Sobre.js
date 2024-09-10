import Sobre from "../../imagens/img-sobre.svg";
import iconInclusao from "../../imagens/icon-objetivos-inclusao.svg";
import iconConhecimento from "../../imagens/icon-objetivos-conhecimento.svg";
import iconUniao from "../../imagens/icon-objetivos-uniao.svg";
import iconDev from "../../imagens/icon-objetivos-dev.svg";
import "./sobre.css"

function PageSobre() { 

    return (
        <div className="landing-global container">
            <div className="sobre" id="sobre">
                <img src={Sobre} alt="Girls in T.I" className="img-sobre col-6"/>
                <div className="sobre-container">
                    <h1 className="title-sobre">Sobre</h1>
                    <div className="linha-sobre"></div>

                    <p className="card-sobre">O projeto <span className="destaque-card-sobre">GP5</span> é uma iniciativa voltada para <span className="destaque-card-sobre">a inclusão de mulheres na área da tecnologia.</span> Com o objetivo de criar um espaço de apoio e crescimento mútuo, o projeto busca conectar mulheres que já atuam ou desejam ingressar no mercado tecnológico, <span className="destaque-card-sobre">promovendo a diversidade e igualdade de gênero.</span></p>

                    <p className="card-sobre">Através de uma <span className="destaque-card-sobre">comunidade no Discord,</span> o GP5 oferece um ambiente acolhedor e seguro onde as participantes podem trocar conhecimentos, experiências e oportunidades. A comunidade é um espaço para <span className="destaque-card-sobre">networking, desenvolvimento profissional e suporte,</span> onde cada mulher tem a chance de aprender, compartilhar e se fortalecer junto com outras profissionais do setor.</p>
                    <a href="https://discord.gg/MTA3r5bD">
                    <button className="button-sobre">Comunidade</button>
                    </a>
                </div>
            </div>

            <div className="objetivos" id="objetivos">
                <div className="topico-objetivos">Objetivos</div>

                <h1 className="title-objetivos">Conheça os própositos do <br /> nosso projeto</h1>

                <div className="cards-objetivos-container">
                    <div className="card-objetivos">
                        <img src={iconInclusao} alt="" />
                        <h1 className="topic-card-objetivos">Inclusão</h1>
                        <p className="text-card-objetivos">Promover a inserção de meninas na área da tecnologia.</p>
                    </div>

                    <div className="card-objetivos">
                        <img src={iconConhecimento} alt="" />
                        <h1 className="topic-card-objetivos">Conhecimento</h1>
                        <p className="text-card-objetivos">Trasmitir conhecimentos de programação, através de consultorias.</p>
                    </div>
                    
                    <div className="card-objetivos">
                        <img src={iconUniao} alt="" />
                        <h1 className="topic-card-objetivos">União</h1>
                        <p className="text-card-objetivos">Contribuir com a jornada laboral, no ramo tecnológico.</p>
                    </div>

                    <div className="card-objetivos">
                        <img src={iconDev} alt="" />
                        <h1 className="topic-card-objetivos">Desenvolvimento</h1>
                        <p className="text-card-objetivos">Auxiliar na desenvoltura pessoal de cada menina, para que assim, possam se desenvolver no âmbito.</p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default PageSobre