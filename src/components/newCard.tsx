import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'lucide-react'
import { useState } from 'react'
import { toast } from 'sonner'
import { useStorage } from '../context/storage'

let speechRecognition: SpeechRecognition | null

export const NewCard = () => {
  const { onNoteCreated } = useStorage()

  const [shouldShowOnboarding, setShouldShowOnboarding] = useState(true)
  const [isRecording, setIsRecording] = useState(false)
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

    if (content === '') {
      toast.warning('Nāo foi possível salvar a nota !! por favor digite ou grave sua nota')
      setShouldShowOnboarding(true)
      return
    }
    onNoteCreated(content)



    setContent('')
    setShouldShowOnboarding(true)
    toast.success('Nota criada com sucesso')
  }

  function handleStartRecording() {


    const isSpeechRecognitionAPIAvailable = 'SpeechRecognition' in window || 'webkitSpeechRecognition' in window

    if (!isSpeechRecognitionAPIAvailable) {
      toast.error('Infelizmente seu navegador nāo suporta a gravação!!')
      return
    }

    setIsRecording(true)
    setShouldShowOnboarding(false)
    const SpeechRecognitionAPI = window.SpeechRecognition || window.webkitSpeechRecognition

    speechRecognition = new SpeechRecognitionAPI()

    speechRecognition.lang = 'pt-BR'
    speechRecognition.continuous = true
    speechRecognition.maxAlternatives = 1
    speechRecognition.interimResults = true

    speechRecognition.onresult = (e) => {
      const transcription = Array.from(e.results).reduce((text, result) => {
        return text.concat(result[0].transcript)
      }, '')

      setContent(transcription)
    }

    speechRecognition.onerror = (e) => {
      console.error(e)
    }

    speechRecognition.start()

  }


  function handleStopRecording() {
    setIsRecording(false)

    if (speechRecognition !== null) {
      speechRecognition.stop()
    }
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
        <Dialog.Content className='overflow-hidden inset-0 md:inset-auto fixed md:left-1/2 md:top-1/2  md:-translate-y-1/2 md:-translate-x-1/2 md:max-w-[640px] md:h-[60vh] w-full bg-neutral-800 md:rounded-md flex e flex-col outline-none text-neutral-50' >

          <Dialog.Close onClick={() => setShouldShowOnboarding(true)} className='absolute top-0 right-0 bg-neutral-800 p-1.5 text-neutral-400 hover:text-red-400'>
            <X className='size-6' />
          </Dialog.Close>
          <form className='flex-1 flex flex-col'  >
            <div className='flex flex-1  flex-col gap-3 p-5'>
              <span className="text-sm font-medium text-neutral-300">
                Adicionar nota
              </span>
              {shouldShowOnboarding ? (
                <p className="text-base leading-6 text-neutral-400">
                  Comece {' '}
                  <button type='button' title='Atenção nao suportado pelo Firefox' onClick={handleStartRecording} className='text-base text-lime-400 hover:underline'>
                    gravando uma nota
                  </button> em áudio ou se preferir{' '}
                  <button type='button' onClick={handleStartEditor} className='text-base text-lime-400 hover:underline'>
                    utilize apenas texto.
                  </button>
                </p>
              ) : (
                <textarea
                  value={content}
                  onChange={handleContentChange}
                  autoFocus
                  className='text-base leading-6 text-neutral-400 bg-transparent resize-none flex-1 outline-none'
                />
              )}
            </div>
            {isRecording ? (
              <button type='button' onClick={handleStopRecording} className='flex items-center justify-center gap-2 w-full bg-neutral-900 py-4 text-center text-base text-neutral-300 outline-none hover:text-neutral-100 font-medium'>
                <div className='size-3 rounded-full bg-red-500 animate-pulse' />
                Gravando! (clique p/ interromper)
              </button>
            ) : (
              <button onClick={handleSaveNote} type='button' className=' w-full bg-lime-400 py-4 text-center text-base text-lime-950 outline-none hover:bg-lime-500 font-medium'>
                Salvar nota
              </button>
            )}

          </form>
        </Dialog.Content>
      </Dialog.Portal>

    </Dialog.Root>
  )
}