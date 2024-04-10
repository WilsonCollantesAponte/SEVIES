function page() {
  return (
    <main className="flex flex-col items-center p-24 gap-10">
      <h1 className="text-2xl font-semibold font-serif">
        Acompañamiento en todo momento
      </h1>

      <img
        className="min-w-96 w-1/2 rounded-lg shadow-lg shadow-gray-300 hover:shadow-xlX hover:shadow-yellow-400 delay-150 duration-700 transition ease-linear"
        src="/img1.jpg"
        alt="..."
      />

      <img
        className="min-w-96 w-1/2 rounded-lg shadow-lg shadow-gray-300 hover:shadow-xlX hover:shadow-yellow-400 delay-150 duration-700 transition ease-linear"
        src="/img2.jpg"
        alt="..."
      />
    </main>
  );
}

export default page;
