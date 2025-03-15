// app/layout/page.tsx
export default function LayoutPage() {
  return <main>
    <h2>Flex</h2>
    <section className="flex flex-col items-center gap-4">
      <div className="bg-red-100 w-1/4">f1</div>
      <div className="bg-green-200 w-1/4 self-end">f2</div>
      <div className="bg-blue-300 w-1/4">f3</div>
    </section>
    {/* ... */}
    <h2>Gird</h2>
    <section className="grid grid-cols-3 gap-4">
      <div className="bg-red-100 order-last">f1</div>
      <div className="bg-green-200">f2</div>
      <div className="bg-blue-300">f3</div>
      <div className="bg-red-900">f4</div>
      <div className="bg-green-800">f5</div>
      <div className="bg-blue-700">f6</div>
    </section>
  </main>
}