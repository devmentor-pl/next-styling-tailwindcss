// app/animations/page.tsx
export default function AnimationsPage() {
  return <main>
    <div className="
      bg-red-100 hover:bg-red-500 transition duration-500
    ">
      hover -&gt; transition
    </div>
    <div className="
      opacity-0 hover:opacity-100 transition duration-500
    ">
      hover -&gt; opacity
    </div>
    <div className="
      transform hover:scale-120 border-5 transition duration-300
    ">
      hover -&gt; scale
    </div>
    <section>
      <label htmlFor="toggle" className="cursor-pointer">
        Kliknij mnie!
      </label>
      <input type="checkbox" id="toggle" className="peer hidden" />
      <div className="peer-checked:bg-green-500 transition duration-500">
        Zmieniam kolor po kliknięciu
      </div>
    </section>
    <section>
      <button className="peer/btn1 bg-red-500">btn1</button>
      <button className="peer/btn2 bg-blue-500">btn2</button>
      <div className="
        peer-active/btn1:bg-red-500 
        peer-active/btn2:bg-blue-500 
        transition duration-500
      ">
        Zmieniam kolor!
      </div>
    </section>
    <section 
      className="
        h-40 w-40
        flex justify-center items-center
        bg-[url('/next.svg')] bg-center bg-center bg-no-repeat
      "
    >
      <span className="
        backdrop-blur-sm active:backdrop-blur-none 
        bg-white/30 h-20 w-20
      " />
    </section>
    <section className="
      w-10 h-10
      bg-gradient-to-r from-blue-500 to-red-500
      rounded-full animate-spin
    "></section>
    <section className="
      animate-grow bg-blue-500 text-white
    ">grow</section>
  </main>
}