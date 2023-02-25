import { useState, createContext, Dispatch, SetStateAction } from "react"

interface IProps {
  children: JSX.Element
}

type ContextType = {
  id: string
  setId: Dispatch<SetStateAction<string>>
  action: string
  setAction: Dispatch<SetStateAction<string>>
}

export const StateContext = createContext<ContextType>({
  id: "",
  setId: () => { },
  action: "",
  setAction: () => { },
})

export function StateProvider({ children }: IProps) {
  const [id, setId] = useState("")
  const [action, setAction] = useState("")
  const value: ContextType = {
    id,
    setId,
    action,
    setAction
  }

  return (
    <StateContext.Provider value={value}>
      {children}
    </StateContext.Provider>
  )
}