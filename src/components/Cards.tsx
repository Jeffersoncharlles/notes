

type CardsProps = React.ComponentProps<'div'>

export const Cards = ({ ...rest }: CardsProps) => {
  return (
    <div className="rounded-md  p-5 space-y-3 bg-neutral-800 overflow-hidden relative " {...rest}
    >
      <span className="text-sm font-medium text-neutral-300">
        Há 2 dias
      </span>
      <p className="text-sm leading-6 text-neutral-400">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat autem corporis delectus in earum aliquam recusandae iusto sapiente maiores dolore illum, id eius voluptatum officia sed nihil similique eligendi quo.
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate aut, hic corrupti veritatis facere id consequatur quos qui! Nulla nesciunt facilis distinctio sapiente atque quas aspernatur explicabo error, recusandae aut!
      </p>
      <div className='absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0 pointer-events-none' />
    </div>
  )
}