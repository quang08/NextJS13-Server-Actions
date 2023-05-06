//what if we dont't want to declare this as a client component, but still want to keep the interactivity for the server-side
//like making a DB request? -> creating a mutation to the DB

export default function Home() {
  //we define a server-side function (has to be async)
  async function consoleLog() {
    "use server"; //only be run on the server and we wont see the log in the inspector since it's sever-side
    console.log("Hello");
  }

  return (
    //we don't use the client onSubmit event handler but pass it an action - this is a special property that takes a function and will provide the data from the form to run server side code
    <div className="bg-black h-screen w-screen">
      <form action={consoleLog}>
        <button>console log</button>
      </form>
    </div>
  );
}
