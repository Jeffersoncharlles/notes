
import { Cards } from "../../components/Cards"
import { NewCard } from "../../components/newCard"
import { useStorage } from "../../context/storage"


export const Home = () => {
  const { notes, search } = useStorage()

  const filteredNotes = search !== '' ? notes.filter(note => note.content.toLocaleLowerCase().includes(search.toLocaleLowerCase())) : notes

  return (
    <div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 auto-rows-[250px] gap-6">
      <NewCard />

      {filteredNotes.map((item) => (
        <Cards
          key={item.id}
          note={item}
        />
      ))}


    </div>
  )
}
