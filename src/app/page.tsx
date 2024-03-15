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
    <section>
      <h1 className="font-semibold text-slate-900 truncate pr-20 text-center">Ilmuwan yang luar biasa</h1>
      <hr />
      <Gallery />
      <hr />
      <TodoList />
    </section>
  );
}