import { VersatilLogo } from "./components/logo";

export default function Home() {
  return (
    <div className="bg-zinc-100 min-h-screen flex flex-col items-center justify-center text-zinc-800 gap-24">
      <div>
        <p>Seja bem-vindo a</p>
        <VersatilLogo className="w-80" />
      </div>
      <div className="p-6 rounded-md bg-green-400 text-center">
        <p>
          Estamos trabalhando para trazer o melhor da gastronomia para você.
        </p>
        <p>
          <b>Em breve</b>, uma experiência culinária incomparável!
        </p>
      </div>
    </div>
  );
}
