import { useContext } from "react";
import { StateContext } from "@providers/stateProvider"

export function useOpenStatus(id: string, action: string): boolean {
  const { id : _id, action: _action } = useContext(StateContext)

  if(id == _id && action == _action) {
    return true
  }

  return false
}