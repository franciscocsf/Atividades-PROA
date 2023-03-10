import { FcGoogle } from "react-icons/fc";
import { AiFillApple } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
export default function Login() {
    return (
        <div className="Principal">
            <body>
                <header>
                    <h1 className="H">Linked<b className="In"><BsLinkedin/></b></h1> 
                </header>

                <div className="Card_layout">
                    <div>
                        <p className="Hearder_text">Entrar</p>

                        <p class="Inicio02">
                            Acompanhe as novidades do seu mundo <br></br>profissional.
                        </p>

                        <br></br>
                    </div>

                    <div className="Input">
                        <input
                            className="Input_email"
                            type="text"
                            placeholder="E-mail ou telefone"
                        ></input>

                        <br></br>
                        <br></br>

                        <input
                            className="Input_senha"
                            type="text"
                            placeholder="Senha"
                        ></input>

                        <br></br>
                        <br></br>

                    </div>

                    <a className="Pergunta_Esqueceu" href="">
                        Esqueceu a senha?
                    </a>

                    <div className="Button_entrar">
                        <button className="Btt_Entrar">
                            <b> Entrar </b>
                        </button>
                    </div>

                    <div class="ou">
                        <p>______________________ ou ______________________</p>
                    </div>
                    <div className="Google_Apple">
                        <button className="Btt_Google">
                            <b className="Icone"><FcGoogle /></b> <b className="Google"> Entrar com o Google </b>{' '}
                        </button>
                        <br></br><br></br>
                        <button className="Btt_Apple">
                            <b className="Icone"><AiFillApple /></b>  <b className="Apple">Entrar com a Apple</b>{' '}
                        </button>
                        <br></br> <br></br>
                    </div>
                </div>

                <div className="Cadastrar">
                    <p class="NovoLinkedin">
                        {' '}
                        Novo no LinkedIn?
                        <a className="Cadastrar1" href=" ">
                            Cadastre-se
                        </a>
                    </p>
                </div>

                <footer>
                    <ul>
                        <a className="Footer" href="">
                            {' '}
                            Contrato do Usu??rio
                        </a>
                        <a className="Footer" href="">
                            {' '}
                            Pol??tica de Privacidade do LinkedIn
                        </a>
                        <a className="Footer" href="">
                            Diretrizes da Comunidade
                        </a>
                        <a className="Footer" href="">
                            Pol??tica de Cookies
                        </a>
                        <a className="Footer" href="">
                            {' '}
                            Pol??tica de Direitos Autorais
                        </a>
                        <a className="Footer" href="">
                            {' '}
                            Enviar feedback
                        </a>
                        Idioma
                    </ul>
                </footer>
            </body>
        </div>
    )
}