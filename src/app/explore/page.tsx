import Button from "@/components/Button";
import { Reload } from "@/components/Icons";
import ModalLobby from "./components/modalCreateLobby";
import LobbyInstance from "./components/lobbyInstance";


const Explore = () => {
  return (
    <div className="max-w-[800px] mx-auto px-4 py-8">
      <div className="min-h-screen">
        <div className="grid gap-4">
          <h3 className="font-bold text-2xl">Explore Public Games</h3>
          <div className="flex items-center gap-2">
            <Button mode="primary" size={1} text="Create lobby" />
            <Reload className="stroke-primary-300 w-4" />
          </div>
          <div className="border-4 border-primary-300 p-4 rounded-lg h-screen overflow-y-auto flex flex-col gap-2">
            <LobbyInstance /> 
          </div>
        </div>
      </div>

      {/* modal */}
      {/* <ModalLobby /> */}
      {/* end modal  */}
    </div>
  )
}

export default Explore;