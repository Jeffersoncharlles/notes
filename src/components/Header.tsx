

export const Header = () => {
  return (
    <header className="space-y-6" >
      <h1 className="text-lime-400 text-2xl font-bold">Notes</h1>
      <form className="w-full">
        <input
          className="w-full bg-transparent text-3xl font-semibold tracking-tighter placeholder:text-neutral-500 outline-none"
          type="text"
          placeholder="Busque em suas notas..."
        />
      </form>
    </header>
  )
}