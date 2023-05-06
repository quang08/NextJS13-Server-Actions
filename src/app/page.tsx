export default function Home() {
  return (
    <main className="h-screen w-screen flex justify-center items-center">
      <div className="h-full w-1/2 md:max-w-3/4 flex flex-col justify-center items-center gap-4">
        <h1 className="text-4xl font-bold">Newsletter</h1>
        <form
          autoComplete="off"
          className="flex flex-col w-3/4 md:max-w-lg gap-6"
        >
          <input
            className="p-1 rounded-md bg-gray-100 text-black"
            type="text"
            placeholder="Name"
            name="name"
          />
          <input
            className="p-1 rounded-md bg-gray-100 text-black"
            type="email"
            placeholder="Email"
            name="email"
          />
          <button
            type="submit"
            className="bg-blue-600 p-2 rounded-md cursor-pointer hover:bg-blue-500"
          >
            Subscribe
          </button>
        </form>
      </div>
    </main>
  );
}
