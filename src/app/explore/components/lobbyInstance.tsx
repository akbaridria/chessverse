import Button from "@/components/Button"

const LobbyInstance = () => {
  return (
    <div className="p-4 rounded-lg bg-primary-100 text-white h-fit">
      <div className="flex items-center justify-between">
        <div>
          <div className="text-lg font-semibold">Face me <span className="opacity-[0.5]">#1</span></div>
          <div className="italic opacity-[0.8]">Searching for opponent...</div>
        </div>
        <div className="flex items-center gap-2">
          <Button mode="twitter" size={1} text="Join lobby" />
          <Button mode="facebook" size={1} text="View lobby" />
        </div>
      </div>
    </div>
  )
}

export default LobbyInstance;