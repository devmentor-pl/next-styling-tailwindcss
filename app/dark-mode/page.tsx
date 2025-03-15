// app/dark-mode/page.tsx
"use client"

export default function DarkModePage() {
  return <main>
    <section className="
      bg-yellow-500
      dark:bg-blue-500
    ">
      <button onClick={() => {
        document.documentElement.classList.toggle('dark');
      }}>Dark mode on/off</button>
    </section>
  </main>
}