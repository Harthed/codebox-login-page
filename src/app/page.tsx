import Image from "next/image";
import LogoMobile from "@/img/codebox-w.png";
import background from "@/img/bg.png";

export default function Home() {
  return (
    <main className=" bg-neutral-800 flex flex-col items-center justify-between max-h-screen h-screen ">
      <Image className=" mt-40 " src={LogoMobile} alt="mobile" />

      <div className=" flex flex-col text-2xl gap-10 ">
        <div className="  ">
          <h1 className=" text-neutral-300 ">Nome de usuario</h1>
          <input type="text" className=" border-solid border-2 border-neutral-400 p-5 rounded-lg bg-neutral-700 " />
          <h2 className=" text-neutral-300 mt-5 ">Senha</h2>
          <input type="password" className=" border-solid border-2 border-neutral-400 p-5 rounded-lg bg-neutral-700 " />
          </div>
        <div className=" flex flex-col mb-24  ">
          <button className=" p-5 text-white text-2xl bg-pink-600 rounded-lg w-full ">Entrar</button>
          <button className=" p-5 text-pink-600 bg-white rounded-lg w-full mt-3 ">Esqueci minha senha</button>
        </div>
      </div>
    </main>
  );
}
