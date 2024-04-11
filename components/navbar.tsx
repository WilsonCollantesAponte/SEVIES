"use client";
import ComprasSVG from "@/public/comprasSVG";
// import LogOutSVG from "@/public/logOutSVG";
// import ProductsSVG from "@/public/productsSVG";
// import SignInSVG from "@/public/signInSVG";
// import SignUpSVG from "@/public/signUpSVG";
import Link from "next/link";
import { useState } from "react";
import X from "@/public/x";
import NoSessionMenu from "@/public/noSessionMenu";
import { MetadataClientSide } from "@/public/metadata";
import HomeSVG from "@/public/homeSVG";
import CategoriesSVG from "@/public/categoriesSVG";
import Headroom from "react-headroom";
import { usePathname } from "next/navigation";
import Image from "next/image";

function Navbar() {
  const [show, setShow] = useState<boolean>(false);
  const [disableInlineStyles, setDisableInlineStyles] = useState<boolean>(true);
  const pathname = usePathname();

  return (
    <main>
      <Headroom
        className={`${!show && "overflow-hidden"}`}
        onPin={() => {
          // console.log("pinned");
          setDisableInlineStyles(false);
        }}
        onUnpin={() => {
          // console.log("unpinned");
          setDisableInlineStyles(false);
          setShow(false);
        }}
        onUnfix={() => {
          // console.log("onUnFix");
          setDisableInlineStyles(true);
        }}
        // disable
        // wrapperStyle={{ height: 100 }}}
        // parent={() => <div />}
        // upTolerance={500}
        // downTolerance={500}
        disableInlineStyles={disableInlineStyles}
        // pinStart={500}
      >
        <header className="flex flex-col rounded-b bg-white">
          <div className="flex items-center py-1.5 font-medium text-xs mb-1.5 shadow-md">
            <Link href="/">
              <div className="overflow-hidden rounded flex justify-center items-center">
                <Image
                  className="w-24 object-cover"
                  src="/main.jpg"
                  width={9999}
                  height={9999}
                  alt=""
                />
              </div>
            </Link>

            <div className="grow flex flex-col gap-3">
              <div className="flex flex-col px-2">
                <h1 className="text-2xl text-center md:text-3xl font-bold font-serif text-pretty">
                  {MetadataClientSide.title}
                </h1>
              </div>
              <div className="max-md:hidden flex items-center gap-6 justify-around my-2 transition-all">
                <Link
                  href="/"
                  className={`flex items-center gap-1 py-3 px-14 transition ease-linear duration-[400] text-base ${
                    pathname === "/" &&
                    "border-b-4 border-indigo-500 rounded bg-slate-100 shadow text-indigo-500 text-lg"
                  }`}
                >
                  <HomeSVG /> Inicio
                </Link>

                <Link
                  href="/news"
                  className={`flex items-center gap-1 py-3 px-14 transition ease-linear duration-[400] text-base ${
                    pathname === "/news" &&
                    "border-b-4 border-indigo-500 rounded bg-slate-100 shadow text-indigo-500 text-lg"
                  }`}
                >
                  <ComprasSVG /> Noticias
                </Link>

                <Link
                  href="we"
                  className={`flex items-center gap-1 py-3 px-14 transition ease-linear duration-[400] text-base ${
                    pathname === "/we" &&
                    "border-b-4 border-indigo-500 rounded bg-slate-100 shadow text-indigo-500 text-lg"
                  }`}
                >
                  <CategoriesSVG /> Nosotros
                </Link>

                {/* {!false && (
                  <Link href="/user" className="flex items-center gap-1.5">
                    <SignInSVG /> Ingresar
                  </Link>
                )}

                {false ? (
                  <div className="flex items-center gap-1 hover:cursor-pointer p-2">
                    salir
                    <LogOutSVG />
                  </div>
                ) : (
                  <Link
                    href="/user/createUser"
                    className="flex items-center gap-1"
                  >
                    <SignUpSVG />
                    Crear cuenta
                  </Link>
                )} */}
              </div>
            </div>

            <div className="mr-3">
              {/* Avatar */}
              <div className="w-14" onClick={() => setShow(!show)}>
                {!false && (
                  <>
                    <div
                      className="md:hidden hover:cursor-pointer size-8"
                      onClick={() => setShow(!show)}
                    >
                      <NoSessionMenu />
                    </div>

                    {/* Avatar */}
                    <aside
                      className={`fixed top-0 right-0 z-40 w-64 h-screen transition ${
                        show ? "translate-x-0" : "translate-x-full"
                      }`}
                    >
                      <div className="h-full px-3 py-4 overflow-y-auto bg-white">
                        <ul className="space-y-2">
                          <li className="flex justify-between">
                            <Link
                              href="/"
                              className="flex items-center p-2 rounded-lg"
                            >
                              {/* Avatar */}
                              <Image
                                className="object-cover size-11 rounded"
                                src="/main.jpg"
                                width={9999}
                                height={9999}
                                alt=""
                              />
                              {/* Avatar */}

                              <span className="ms-3 text-lg break-words text-balance">
                                {MetadataClientSide.title}
                              </span>
                            </Link>
                            <button onClick={() => setShow(!show)}>
                              <X />
                            </button>
                          </li>
                          <Link
                            href="/"
                            className="flex items-center p-2 rounded-lg"
                          >
                            <HomeSVG />
                            <span className="flex-1 ms-3 whitespace-nowrap">
                              Inicio
                            </span>
                          </Link>

                          <Link
                            href="/news"
                            className="flex items-center p-2 rounded-lg"
                          >
                            <ComprasSVG />
                            <span className="flex-1 ms-3 whitespace-nowrap">
                              Noticias
                            </span>
                          </Link>

                          <Link
                            href="/we"
                            className="flex items-center gap-1 hover:cursor-pointer p-2"
                          >
                            <CategoriesSVG /> Nosotros
                          </Link>

                          {/* <Link
                            href="/user"
                            className="flex items-center p-2 rounded-lg"
                          >
                            <SignInSVG />
                            <span className="flex-1 ms-3 whitespace-nowrap">
                              Ingresar
                            </span>
                          </Link>

                          <Link
                            href="/user/createUser"
                            className="flex items-center p-2 rounded-lg"
                          >
                            <SignUpSVG />
                            <span className="flex-1 ms-3 whitespace-nowrap">
                              Crear cuenta
                            </span>
                          </Link> */}
                        </ul>
                      </div>
                    </aside>
                  </>
                )}
              </div>

              {/* Counterparty */}
              <aside
                className={`fixed top-0 left-0 z-40 w-[calc(100vw-16rem)] h-screen ${
                  show ? "translate-x-0" : "-translate-x-full"
                }`}
                onClick={() => setShow(false)}
              ></aside>
            </div>
          </div>
        </header>
      </Headroom>
    </main>
  );
}

export default Navbar;
