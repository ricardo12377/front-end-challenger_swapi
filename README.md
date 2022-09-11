Para rodar o projeto:

### `yarn start`

<h5>Arquitetura e estrutura de pastas</h5>

<ul>

<li>
<em>Auth: </em>
<p>É onde está toda a lógica de login, validações de login e controle de estado da aplicação. Usando ContextAPI. </p>
</li>

<li>
<em>Components: </em>
<p>Local onde desenvolvi as interfaces que fazem partes das telas principais e de login. </p>
</li>

<li>
<em>FormValidator: </em>
<p>Validação do formulário de Login com a biblioteca Yup, para garantir que o login seja feito corretamente. </p>
</li>

<li>
<em>Helpers: </em>
<p>Algumas variáveis que contém mensagens de error ou usabilidade da API para auxiliar a quem irá usar e deixar as mensagens padronizadas. </p>
</li>

<li>
<em>Routes: </em>
<p>A pasta routes é onde ficam os componentes principais das páginas ded login e home. </p>
</li>

<li>
<em>Services: </em>
<p>Local onde ficam os endpoints da API e as configurações de requisições axios, auxiliando o programador à usar as rotas da API com tokens ou request body. </p>
</li>

<li>
<em>Theming: </em>
<p>Apenas abstraindo as cores principais e secundárias do projeto, para ter um arquivo onde eu possa configurar tudo para o projeto todo. </p>
</li>

<li>
<em>Types: </em>
<p>Pasta onde cria e adiciono tipos às interfaces e modelos que irei usar na aplicação, usando TypeScript. </p>
</li>
</ul>
