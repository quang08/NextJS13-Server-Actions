'use client'

export default function Home() {
  return (
    <div className="bg-black h-screen w-screen">
      <button onClick={() => console.log("Hello")}>Log message</button>
    </div>
  );
}
