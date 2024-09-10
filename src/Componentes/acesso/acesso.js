import React from 'react'
import FotoAcesso from '../../imagens/FotoAcesso.png';
import InstagramIcon from '../../imagens/mdi_instagram.png';
import CoracaoIcon from '../../imagens/coracaozinho.svg';
import "./acesso.css"

const Acesso = () => {
  return (
    <div>
        <div className='divPrincipal ms-2 me-2 me-lg-0 ms-lg-0' id='acessar'>
            <div className='LeftContainer'>
                <h3 className='Title'>
                    Acessar
                </h3>
                <footer className='pinkLine w-50 w-lg-100'></footer>
                <h1 className='Title1 fs-1 fs-lg-5'>
                    Redes:
                </h1>

                <p>Siga-nos em nossas redes socias para <br />
                ficar por dentro de todas as novidades<br />
                que estão por vir nesse projeto!</p>
                <div className='Insta'>
                    <a href='https://www.instagram.com/gp5_qxd?igsh=MXVyYzRsYTE3amM1eA=='><img src={InstagramIcon} alt='Instagram'></img></a>
                </div>
                <h1 className='Title2 fs-1 fs-lg-5'>
                    Entre na comunidade:
                </h1>
                <div className='botao w-50 h-25 w-lg-100 h-lg-100'>
                    <a href="https://discord.gg/MTA3r5bD" className='a fs-5 fs-lg-1'>Discord</a>
                </div>
                
            </div>
            <div className='borderImg d-none d-lg-flex'>
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