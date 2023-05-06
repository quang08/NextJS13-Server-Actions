"use client";
export default function SubForm({ action }: { action: any }) {
  return (
    <form
      onSubmit={(e) => console.log("client")}
      action={action}
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
  );
}
