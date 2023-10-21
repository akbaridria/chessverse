'use client'

import Button from "@/components/Button";
import Image from "next/image";
import { useNetwork, useSwitchNetwork, useAccount, useConnect, useContractWrite } from 'wagmi';
import MintNft from "./components/buttons/mintNft";

const Mint = () => {
  const { chain } = useNetwork()
  const { switchNetwork } = useSwitchNetwork()
  const { isConnected } = useAccount()
  const { connect, connectors } = useConnect()

  return (
    <div className="container mx-auto p-4">
      <div className="grid md:grid-cols-2 gap-4 min-h-screen">
        <div className="flex items-center justif-center">
          <Image src="/nft-group-2.png" width={700} height={300} alt="disini" />
        </div>
        <div className="flex justify-center flex-col gap-4">
          {/* <Image src="/nft-tiers/novice.png" width={300} height={300} alt="novice" /> */}
          <div className="text-lg">Public Mint</div>
          <div className="text-3xl font-bold">MINT IS LIVE NOW !</div>
          <div className="text-lg">
            Earn points to upgrade your NFTs by simplying transfer it from one chain to another chain and face off against the best.
            Conquer the Chessverse, one move at a time
          </div>
          <div className="w-fit">
            {
              !isConnected ?
                connectors.map((connector) => {
                  return (
                    <Button key={connector.id} mode="danger" size={1} text={'Connect ' + connector.name} onPress={() => connect({ connector })} />
                  )
                })
                : chain?.id === 5001 ?
                  <MintNft />
                  : <Button mode="danger" size={1} text="Switch Network To Mantle" onPress={() => switchNetwork?.(5001)} />
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Mint;