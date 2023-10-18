import { BoardChess } from '@/components/Logos'
import Button from '@/components/Button'
import benefit from '@/data/nft-tiers.json'
import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <section className='container mx-auto max-h-[750px] h-[calc(100vh-1rem-65px)] p-4'>
        <div className="grid md:grid-cols-2 h-full items-center">
          <div className="grid gap-4 text-center md:text-left">
            <div className="text-[2rem] md:text-[3.625rem] text-primary-300 font-bold leading-[40px] md:leading-[70px]">
              Unlock the Future of Chess Game
            </div>
            <div className="font-medium text-[1rem] md:text-[1.25rem] leading-[28px]">
              Elevate your chess game through three tiers - Novice, Adept, Grandmaster - on distinct blockchain networks. Earn points, upgrade NFTs, and face off against the best. Conquer the Chessverse, one move at a time
            </div>
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <Button mode="primary" size={1.25} text="Mint now"></Button>
              <a href="#" className="text-[1.25rem] flex gap-2 items-center">
                Learn More
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
              </a>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <BoardChess />
          </div>
        </div>
      </section>
      <section>
        <div className="bg-primary-300">
          <div className="container mx-auto p-[2rem] md:p-[5rem] text-white">
            <div className="w-[700px] max-w-full mx-auto max-w-full">
              <div className="text-[1.5rem] md:text-[2.625rem] text-center font-bold">Start Your Chess Journey Now</div>
              <div className="text-center text-[0.875rem] md:text-[1rem] opacity-[0.9] my-5">
                Unleash your inner Grandmaster! Mint unique NFTs on Mantle, play to level up, and face off on Polygon and Ethereum. Transform your NFT, increase its worth. Join the elite Grandmasters. Your chess legacy starts now! 🔥👑
              </div>
              <a href="#" className="flex items-center justify-center">
                <Button mode="primary" size={1.25} text="Mint Now"></Button>
              </a>
            </div>

            <div className="grid md:grid-cols-3 gap-[2rem] mt-[5rem]">
              {
                benefit.map((item, index) => (
                  <div key={index} className="grid gap-2 text-center">
                    <div className="flex justify-center items-center"><Image src={`/nft-tiers/${item.image}`} alt="giveaway-illustration-w3can" width="125" height="125" className='rounded-full' /></div>
                    <div className="font-bold text-[1rem] md:text-[1.25rem]">{item.title}</div>
                    <div className='font-bold'>Network: { item.network }</div>
                    <div className='font-bold'>Point Range: { item.pointRange }</div>
                    <div className="text-[0.875rem] md:text-[1rem] opacity-[0.8]">{item.desciprtion}</div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
