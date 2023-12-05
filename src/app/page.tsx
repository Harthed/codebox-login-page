import Image from "next/image";
import LogoMobile from "@/img/codebox-w.png";
import LogoDesktop from "@/img/codebox-p.png";

export default function Home() {
  return (
    <main className=" bg-neutral-800 lg:bg-background bg-cover flex flex-col items-center justify-between lg:justify-center max-h-screen h-screen ">
      <Image
        className=" lg:sr-only mt-40  "
        src={LogoMobile}
        alt="logo mobile"
      />
      <div className=" text-2xl lg:text-sm gap-10 lg:gap-0 lg:bg-white lg:rounded-lg w-96 ">
        <div className=" lg:p-4  ">
          <Image
            className=" sr-only lg:not-sr-only lg:ml-14 lg:mt-3 "
            src={LogoDesktop}
            alt="logo pc"
            width={179}
          />
          <h1 className=" text-neutral-300 lg:text-black lg:mt-10">
            Nome de usuario
          </h1>
          <input
            type="text"
            className=" border-solid border-2 lg:border-1 lg:border-neutral-300 border-neutral-400 lg:bg-white lg:p-2 w-full p-5 rounded-lg bg-neutral-700 "
          />
          <h2 className=" text-neutral-300 mt-5 lg:text-black ">Senha</h2>
          <input
            type="password"
            className=" border-solid border-2 lg:border-1 lg:border-neutral-300 border-neutral-400 lg:bg-white p-5 lg:p-2 w-full rounded-lg bg-neutral-700 "
          />
        </div>
        <div className=" flex flex-col mb-24 lg:mb-0 font-bold lg:p-4 w-full ">
          <button className=" p-5 lg:p-3 mt-10 lg:mt-0 text-white text-2xl bg-pink-600 rounded-lg w-full ">
            Entrar
          </button>
          <button className=" p-5 text-pink-600 bg-white lg:p-1 lg:bg-neutral-400 rounded-lg w-full mt-3 ">
            Esqueci minha senha
          </button>
        </div>
      </div>
    </main>
  );
}
