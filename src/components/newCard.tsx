import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'lucide-react'
import { useState } from 'react'
import { toast } from 'sonner'



export const NewCard = () => {
  const [shouldShowOnboarding, setShouldShowOnboarding] = useState(true)
  const [content, setContent] = useState('')

  const handleStartEditor = () => {
    setShouldShowOnboarding(false)
  }

  const handleContentChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(event.target.value)
    if (event.target.value.trim() === '') {
      setShouldShowOnboarding(true)
    }
  }

  const handleSaveNote = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(content)

    toast.success('Nota criada com sucesso', {

    })
  }


  return (
    <Dialog.Root>
      <Dialog.Trigger className="rounded-md  p-5 flex flex-col gap-3 text-left  bg-neutral-700/70 outline-none  hover:ring-2 hover:ring-neutral-500 focus-visible:ring-2 focus-visible:ring-lime-400">
        <span className=" text-sm font-medium text-neutral-200">Adicionar Nota</span>
        <p className="text-sm leading-6 text-neutral-400">
          Grave uma nota em áudio que será convertida para texto automaticamente.
        </p>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className='inset-0 fixed bg-black/50 backdrop-blur-sm' />
        <Dialog.Content className='overflow-hidden fixed left-1/2 top-1/2  -translate-y-1/2 -translate-x-1/2 max-w-[640px] h-[60vh] w-full bg-neutral-800 rounded-md flex e flex-col outline-none text-neutral-50' >

          <Dialog.Close className='absolute top-0 right-0 bg-neutral-800 p-1.5 text-neutral-400 hover:text-red-400'>
            <X className='size-6' />
          </Dialog.Close>
          <form className='flex-1 flex flex-col' onSubmit={handleSaveNote} >
            <div className='flex flex-1  flex-col gap-3 p-5'>
              <span className="text-sm font-medium text-neutral-300">
                Adicionar nota
              </span>
              {shouldShowOnboarding ? (
                <p className="text-base leading-6 text-neutral-400">
                  Comece {' '}
                  <button className='text-base text-lime-400 hover:underline'>
                    gravando uma nota
                  </button> em áudio ou se preferir{' '}
                  <button onClick={handleStartEditor} className='text-base text-lime-400 hover:underline'>
                    utilize apenas texto.
                  </button>
                </p>
              ) : (
                <textarea
                  onChange={handleContentChange}
                  autoFocus
                  className='text-base leading-6 text-neutral-400 bg-transparent resize-none flex-1 outline-none'
                />
              )}
            </div>
            <button type='submit' className=' w-full bg-lime-400 py-4 text-center text-base text-lime-950 outline-none hover:bg-lime-500 font-medium'>
              Salvar nota
            </button>
          </form>
        </Dialog.Content>
      </Dialog.Portal>

    </Dialog.Root>
  )
}