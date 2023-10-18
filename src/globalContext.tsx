import { createContext, useContext } from "react"
let cPlayer = localStorage.getItem("currentPlayer")
export type GlobalContent = {
  currentPlayer: string | null
  setCurrentPlayer:(c: string) => void
}
export const MyGlobalContext = createContext<GlobalContent>({
currentPlayer: cPlayer, // set a default value
setCurrentPlayer: () => {},
})
export const useGlobalContext = () => useContext(MyGlobalContext)