import { Cards } from "../../components/Cards"
import { NewCard } from "../../components/newCard"


export const Home = () => {
  return (
    <div className="grid grid-cols-3 auto-rows-[250px] gap-6">
      <NewCard />
      <Cards
        date="Tue Feb 04 2024 "
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, doloremque itaque aliquam deserunt tempora veritatis ea. Dolorum, minus! Officiis dolor eius dolores velit ratione necessitatibus animi laudantium nisi cum ex."
      />
      <Cards
        date="Tue Feb 03 2024 "
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit.Adipisci labore voluptates fuga officiis.Fuga nisi necessitatibus eaque nihil! Impedit sit illo molestias esse mollitia omnis perferendis ad, perspiciatis at deleniti.
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet, molestias! Odit sunt dolorem voluptatem aliquam accusamus modi voluptatibus quae quis. Voluptatem saepe repudiandae assumenda repellat dolorem omnis necessitatibus dolores enim!"
      />
      <Cards
        date="Tue Feb 01 2024 "
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit.Adipisci labore voluptates fuga officiis.Fuga nisi necessitatibus eaque nihil! Impedit sit illo molestias esse mollitia omnis perferendis ad, perspiciatis at deleniti.
         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet, molestias! Odit sunt dolorem voluptatem aliquam accusamus modi voluptatibus quae quis. Voluptatem saepe repudiandae assumenda repellat dolorem omnis necessitatibus dolores enim!"
      />
    </div>
  )
}
