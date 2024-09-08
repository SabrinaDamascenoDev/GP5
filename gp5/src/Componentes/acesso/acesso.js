import React from 'react'
import FotoAcesso from '../../imagens/FotoAcesso.png';
import InstagramIcon from '../../imagens/mdi_instagram.png';
import CoracaoIcon from '../../imagens/coracaozinho.svg';
import "./acesso.css"

const Acesso = () => {
  return (
    <div>
        <div className='divPrincipal'>
            <div className='LeftContainer'>
                <h3 className='Title'>
                    Acessar
                </h3>
                <footer className='pinkLine'></footer>
                <h1 className='Title1'>
                    Redes:
                </h1>

                <p>Siga-nos em nossas redes socias para <br />
                ficar por dentro de todas as novidades<br />
                que estão por vir nesse projeto!</p>
                <div className='Insta'>
                    <a href='https://www.instagram.com/gp5_qxd?igsh=MXVyYzRsYTE3amM1eA=='><img src={InstagramIcon} alt='Instagram'></img></a>
                </div>
                <h1 className='Title2'>
                    Entre na comunidade:
                </h1>
                <div className='botao'>
                    <a href="#" className='a'>Discord</a>
                </div>
                
            </div>
            <div className='borderImg'>
                <div className='heartIcon'>
                        <img src={CoracaoIcon} alt= "CoracaoIcon"></img>
                    </div>
                <div className='img'>
                    <img src={FotoAcesso} alt= "Foto"></img>
                </div>
                <div className='heartIconTop'>
                    <img src={CoracaoIcon} alt= "CoracaoIcon"></img>
                </div>
            </div>
        </div>
    </div>
    
  )
}

export default Acesso