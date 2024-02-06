import { Cards } from "../../components/Cards"
import { NewCard } from "../../components/newCard"


export const Home = () => {
  return (
    <div className="grid grid-cols-3 auto-rows-[250px] gap-6">
      <NewCard />
      <Cards />
      <Cards />
      <Cards />
      <Cards />
    </div>
  )
}