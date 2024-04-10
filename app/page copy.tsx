// import styles from "./page.module.css";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* <div className={`${styles.move} bg-blue-100 text-blue-400 px-10 py-2`}> */}

      {/* header| */}
      <header className="flex justify-around items-center w-full">
        {/* logo */}
        <img src="/logo.svg" alt="" />

        {/* navigation */}
        <nav className="flex justify-between items-center gap-6">
          <div>About</div>
          <div>Integrations</div>
          <div>Pricing</div>
          <div>Customers</div>
          <div>Changelog</div>
        </nav>

        {/* options */}
        <div className="flex justify-between items-center">Sign in Sign up</div>
      </header>

      {/* page content */}
      <div className="w-full">
        {/* hero */}
        <div className="h-[75vh] flex flex-col">
          {/* <div className="bg-blue-500 w-full h-1/3">ddds</div> */}
          <div className="bg-gradient-radial from-white from-10% via-purple-500 via-50% w-full h-full blur-2xl rounded-full"></div>
        </div>
      </div>

      {/* footer */}
      <footer>© Wilson.com - All rights reserved.</footer>
    </main>
  );
}
