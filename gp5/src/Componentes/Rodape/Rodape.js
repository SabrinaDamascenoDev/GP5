import './rodape.css'
import InstagramIcon from '../../imagens/mdi_instagram.png';

function Rodape(){
    return(
        <div className="rodape py-5 px-3">
            <div className='container-lg'>
            <div className="d-lg-flex justify-content-between">
            <div className="descricaoRodape ms-lg-5"> 
                <h1>GP5.</h1>
               <p className="">
                Trabalho desenvolvido para o trabalho de extensão da disciplina de Introdução de sistemas de Informação da UFC
                </p>

            </div>
            <div className="RedesRodape mt-4 me-5"> 
                <h1 className="me-5-">Siga nossas redes:</h1>
                <div className='Insta mt-4 mb-5'>
                    <a href='https://www.instagram.com/gp5_qxd?igsh=MXVyYzRsYTE3amM1eA=='><img src={InstagramIcon} alt='Instagram'></img></a>
                </div>
            </div>
            </div>
            <div className='finalRodape mt-5'>
                <hr className="ms-lg-5 me-lg-5"></hr>
                <div className="textosFinalRodape">
                    <p className="ms-lg-5">Site desenvolvido por equipe de Si</p>
                    <p className="me-lg-5">© 2024 GP5 - Todos os direitos reservados </p>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Rodape;