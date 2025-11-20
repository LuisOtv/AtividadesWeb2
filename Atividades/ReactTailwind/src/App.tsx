import "./App.css";
import { Logo, Entry, Title, Btn } from "./components";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-[url('./assets/image.png')] bg-cover w-screen h-screen md:flex md:justify-end">
        <div className="bg-white h-screen flex flex-col justify-center items-center p1-100 md:w-6/12 p-3.5 gap-5 md:rounded-l-4xl">
          <Logo />

          <div className="max-w-md border-slate-200 border-dotted border-2 flex flex-col w-10/12 p-10 gap-10 rounded-2xl">
            <Title label="Crie sua conta" sub="Informe seu nome, e-mail e senha" />

            <form className="gap-6 flex flex-col w-full">
              <Entry type="" label="NOME" placeholder="Digite o nome completo" />
              <Entry type="email" label="E-MAIL" placeholder="exemplo@mail.com" />
              <Entry type="password" label="SENHA" placeholder="Digite sua senha" />

              <Btn color="bg-black" textcolor="text-white" label="Cadastrar" />
            </form>
          </div>

          <div className="max-w-md border-slate-200 border-dotted border-2 flex flex-col w-10/12 p-10 gap-10 rounded-2xl">
            <Title label="Já tem uma conta?" sub="Entre agora mesmo" />
            <Btn color="bg-slate-300" textcolor="text-black" label="Entrar" onClick={() => navigate("/login")} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
