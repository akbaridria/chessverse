import Button from "@/components/Button";
import Image from "next/image";

const Mint = () => {
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
            <Button mode="primary" size={1} text="Mint now" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Mint;