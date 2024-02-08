import { useStorage } from "../context/storage"



export const Header = () => {
  const { search, onHandleFilterNotes } = useStorage()



  function handleSearch(e: React.ChangeEvent<HTMLInputElement>) {
    e.target.value
    onHandleFilterNotes(e.target.value)
  }

  return (
    <header className="space-y-6" >
      <h1 className="text-lime-400 text-2xl font-bold">Notes</h1>
      <form className="w-full">
        <input
          className="w-full bg-transparent text-3xl font-semibold tracking-tighter placeholder:text-neutral-500 outline-none "
          type="text"
          placeholder="Busque em suas notas..."
          value={search}
          onChange={handleSearch}
        />
      </form>
    </header>
  )
}