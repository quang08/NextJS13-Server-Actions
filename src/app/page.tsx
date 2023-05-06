import SubForm from "./SubForm";

//this is a server-renderd page 

export default function Home() {
  //server action and passing it to a CLIENT component <SubForm/>
  async function myFormProcessor(formData: any) {
    "use server";
    console.log(formData);
  }
  return (
    <main className="h-screen w-screen flex justify-center items-center">
      <div className="h-full w-1/2 md:max-w-3/4 flex flex-col justify-center items-center gap-4">
        <h1 className="text-4xl font-bold">Newsletter</h1>
        <SubForm action={myFormProcessor} />
      </div>
    </main>
  );
}
