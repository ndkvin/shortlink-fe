import { useState, createContext, Dispatch, SetStateAction } from "react"

interface IProps {
  children: JSX.Element
}

type ContextType = {
  id: string
  setId: Dispatch<SetStateAction<string>>
  action: string
  setAction: Dispatch<SetStateAction<string>>
  edit: boolean
  setEdit: Dispatch<SetStateAction<boolean>>
}

export const StateContext = createContext<ContextType>({
  id: "",
  setId: () => { },
  action: "",
  setAction: () => { },
  edit: false,
  setEdit: () => { },
})

export function StateProvider({ children }: IProps) {
  const [id, setId] = useState("")
  const [action, setAction] = useState("")
  const [edit, setEdit] = useState(false)

  const value: ContextType = {
    id,
    setId,
    action,
    setAction,
    edit,
    setEdit
  }

  return (
    <StateContext.Provider value={value}>
      {children}
    </StateContext.Provider>
  )
}