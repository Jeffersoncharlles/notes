import { createContext, useContext, useState } from "react";

interface IStorageContext {
  notes: INotes[]
  onNoteCreated: (content: string) => void
  search: string
  onHandleFilterNotes: (search: string) => void
  onNoteDelete: (id: string) => void
}

interface INotes {
  id: string
  date: Date
  content: string
}

export const StorageContext = createContext({} as IStorageContext)

export const StorageContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [search, setSearch] = useState('')
  const [notes, setNotes] = useState<INotes[]>(() => {
    const notesOnStorage = localStorage.getItem('notes')
    if (notesOnStorage) {
      return JSON.parse(notesOnStorage)
    }
    return []
  })

  const onNoteCreated = (content: string) => {
    const newNote = {
      id: crypto.randomUUID(),
      date: new Date(),
      content,
    }
    const notesArray = [newNote, ...notes]
    setNotes(notesArray)
    localStorage.setItem('notes', JSON.stringify(notesArray))
  }

  const onHandleFilterNotes = (search: string) => {
    setSearch(search)
  }

  const onNoteDelete = (id: string) => {
    const notesArray = notes.filter(note => {
      return note.id !== id
    })

    setNotes(notesArray)
    localStorage.setItem('notes', JSON.stringify(notesArray))
  }


  return (
    <StorageContext.Provider value={{ notes, onNoteCreated, search, onHandleFilterNotes, onNoteDelete }}>
      {children}
    </StorageContext.Provider>
  )
}


export const useStorage = () => {
  const context = useContext(StorageContext)
  return context
}