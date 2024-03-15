/*import Image from "next/image";
import Profile from "./components/profile";
import { Gallery } from "./components/gallery";

export default function Home() {
  return (
    <main  className="text-align: center; flex max-h-screen flex-col items-center justify-between p-24" style={{ background: 'linear-gradient(to right, #eee, #ccc)' }}>
      <div className="mb-32 text-center lg:max-w-5xl lg:mb-0 lg:text-left">
        <h1 style={{ color: 'black' }}>Ilmuwan yang Luar Biasa</h1>
      </div>
      <div style={{paddingBottom: '185px'}} className="flex justify-center">
        <Profile/>
        <Profile/>
        <Profile/>
      </div>
    </main>
  );
}*/
import { Gallery } from "./components/gallery";
import TodoList from "./components/todolist";
import Bio from "./components/bio";

export default function Home() {
  return (

    <div>
      <Bio/>
    </div>
    //<section>
      //<h1 className="font-semibold text-slate-900 truncate pr-20 text-center">Ilmuwan yang luar biasa</h1>
      //<hr />
      //<Gallery />
      //<hr />
      //<TodoList />
    //</section>
    /*<div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-3 lg:text-left">
      <main>
        <p>Ilmuwan yang luar biasa</p>
        <a 
          className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Gallery />
        </a>
      </main>
    </div>*/
  );
}