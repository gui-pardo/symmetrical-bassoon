class LoginFormulario extends HTMLElement {
        connectedCallback() {
            this.innerHTML = `
                <h2>Login</h2>
                <login-input label="Username"></login-input></br>
                <login-input label="Password" type="password"></login-input></br>
                <login-button></login-button>
            `;
        }
    }
    
    customElements.define('login-formulario', LoginFormulario);
    
    

class loginUsuario extends HTMLElement{

    constructor(){
        super();

        this.attachShadow({mode: 'open'})
        this.shadowRoot.innerHTML=`
            <style>
            input {
                width: 100%;
                padding: 8px;
                margin-bottom: 10px;
                box-sizing: border-box;
            }
            
            </style>
            <label>${this.getAttribute('label')}</label>
            <input type="${this.getAttribute('type') || 'text'}">
        
        `
    

    }



}
customElements.define('login-input', loginUsuario);

class LoginButton extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                button {
                    background-color: #007bff;
                    color: white;
                    border: none;
                    padding: 8px 16px;
                    border-radius: 4px;
                    cursor: pointer;
                }

                button:hover {
                    background-color: #0056b3;
                }
            </style>
            <button id="button">login</button>
        `;

        this.shadowRoot.querySelector('#button').addEventListener('click', () => {
            // Redirecionar para a página do jogo
            window.location.href = 'jogo/jogo.html';
        });
    }
}

customElements.define('login-button', LoginButton);



