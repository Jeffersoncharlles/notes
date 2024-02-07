import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'lucide-react'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

type CardsProps = Dialog.DialogTriggerProps & {
  date: string
  content: string
}

export const Cards = ({ date, content, ...rest }: CardsProps) => {

  function formatDistant(date: string) {
    return formatDistanceToNow(date, {
      locale: ptBR,
      addSuffix: true,
    })
  }

  return (
    <Dialog.Root>
      <Dialog.Trigger className="flex flex-col rounded-md text-left outline-none  p-5 gap-3 bg-neutral-800 overflow-hidden relative hover:ring-2 hover:ring-neutral-600 focus-visible:ring-2 focus-visible:ring-lime-400" {...rest}
      >
        <span className="text-sm font-medium text-neutral-300">
          {formatDistant(date)}
        </span>
        <p className="text-sm leading-6 text-neutral-400">
          {content}
        </p>
        <div className='absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0 pointer-events-none' />
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className='inset-0 fixed bg-black/50 backdrop-blur-sm' />
        <Dialog.Content className='overflow-hidden fixed left-1/2 top-1/2  -translate-y-1/2 -translate-x-1/2 max-w-[640px] h-[60vh] w-full bg-neutral-800 rounded-md flex e flex-col outline-none text-neutral-50' >
          <Dialog.Close className='absolute top-0 right-0 bg-neutral-800 p-1.5 text-neutral-400 hover:text-red-400'>
            <X className='size-6' />
          </Dialog.Close>
          <div className='flex flex-1  flex-col gap-3 p-5'>
            <span className="text-sm font-medium text-neutral-300">
              {formatDistant(date)}
            </span>
            <p className="text-base leading-6 text-neutral-400">
              {content}
            </p>
          </div>
          <button type='button' className=' w-full bg-neutral-900 py-4 text-center text-base text-neutral-300 outline-none font-medium group'>
            Deseja <span className='text-red-400 group-hover:underline'>apagar essa nota</span>?
          </button>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
