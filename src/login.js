import "./Login.css"
export default function Login() {

    return (
        <div className="principal">
            <div className="segundaria">

                <h1>Entrar</h1>
                <p>
                    Acompanhe as novidades do seu mundo <br></br>profissional.
                </p>
                <br></br>

                <div className="input">
                    <input type="text" placeholder="E-mail ou telefone"></input> <br></br>
                    <br></br>
                    <input type="password" placeholder="Senha"></input>
                    <br></br>
                </div>

                <p style={{
                    color: '#0073b1',
                    position: 'relative',
                    left:'-8px'
                }}> <b> Esqueceu a senha? </b> </p>

                <button class="entrar"><b> Entrar </b></button>

                <div class="ou">
                    <p> ________________ ou ________________</p>
                </div>
            </div>
            <div>
                <button id="butao1"><b> Entrar com o Google </b>  </button>
                <br></br> <br></br>
                <button id="butao2"> <b>Entrar com a Apple</b></button>
            </div>

        </div>
    );
}