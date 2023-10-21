
'use client'

import Link from "next/link";
import menus from '@/data/menus.json'
import { usePathname } from 'next/navigation'
import Image from "next/image";
import Button from "./Button";
import { useConnect, useNetwork, useAccount, useSwitchNetwork } from 'wagmi'
import { minidenticon } from 'minidenticons'
import { Chevron, Close } from "./Icons";
import { useState } from "react";
import Modal from "./Modal";

interface ListImages {
  Goerli: string,
  'Polygon Mumbai': string,
  'Mantle Testnet': string
}

const Header = () => {
  const [showModal, setShowModal] = useState(false);

  const pathName = usePathname()
  const { connect, connectors } = useConnect()
  const { chain, chains } = useNetwork()
  const { isConnected, address } = useAccount()

  const svgUri = () => {
    return 'data:image/svg+xml;utf8,' + encodeURIComponent(minidenticon(address as string, 0, 0))
  }

  const listImage: ListImages = {
    'Goerli': '/networks/eth.jpeg',
    'Polygon Mumbai': '/networks/polygon.png',
    'Mantle Testnet': '/networks/mantle.jpeg'
  }

  const isSupportedChain = (id: number): boolean => chain ? chain.id === id ? true : false : false

  return (
    <div className="sticky top-0 z-[1000] w-full bg-white border-b border-secondary-100">
      <div className="container mx-auto p-4">
        <div className="flex items-center justify-between">
          <Link href="/">
            <Image src="/chessuniverse-white.png" alt="chess-universe" width={150} height={150} priority />
          </Link>
          <div>
            <ul className=" hidden md:flex gap-[2rem]">
              {
                menus.map((item) => (
                  <li key={item.name} className={`font-bold ${pathName === item.link ? 'text-primary-100' : null} hover:text-primary-300 transition-all`}>
                    <Link href={item.link}>
                      {item.name}
                    </Link>
                  </li>
                ))
              }
            </ul>
          </div>
          {
            !isConnected ?
              <div className="flex gap-2">
                {
                  connectors.map((connector) => {
                    return (
                      <Button key={connector.id} mode="primary" size={1} text={'Connect ' + connector.name} onPress={() => connect({ connector })} />
                    )
                  })
                }
              </div>
              :
              <div className="flex flex-col md:flex-row gap-2 items-center cursor-pointer">
                <div onClick={() => setShowModal(true)}>
                  {
                    chain ? 
                    <div className={`rounded-xl p-3 shadow-[0px_4px_12px_rgba(0,0,0,0.1)] text-sm flex items-center gap-2 font-semibold ${chain.unsupported ? 'bg-red-500 text-white' : null}`}>
                      {
                        chain.unsupported ? 'Wrong Network' : <div className="flex gap-2 items-center">
                          <Image src={listImage[chain.name]} width={22} height={22} className="rounded-full" priority alt={chain.name} />
                          <div>{ chain.name }</div>
                        </div>
                      }
                      <Chevron className={`w-4 h-4 ${chain.unsupported ? 'stoke-white' : 'stroke-black'}`} />
                    </div> : null
                  }
                </div>
                <div className="rounded-xl px-2 py-1 shadow-[0px_4px_12px_rgba(0,0,0,0.1)] text-sm flex items-center gap-2 font-semibold">
                  <div>500 Points</div>
                  <div className="bg-[linear-gradient(0deg,rgba(0,0,0,0.03),rgba(0,0,0,0.06))] p-2 rounded-xl flex gap-2 items-center">
                    <div className="rounded-full bg-gray-300">
                      <Image src={svgUri()} alt="" width={24} height={24} priority />
                    </div>
                    <div>{address?.slice(0, 5) + '...' + address?.slice(-3)}</div>
                    <Chevron className="w-4 h-4 stroke-black" />
                  </div>
                </div>
              </div>
          }

        </div>
      </div>
      <Modal show={showModal} width="sm:w-[300px] sm:max-w-full p-4" component={BodyModalChains(() => setShowModal(false), listImage, isSupportedChain)} />
    </div>
  )
}

const BodyModalChains = (closeModal: React.MouseEventHandler<HTMLDivElement>, listImage: ListImages, isSupportedChain: (id: number) => boolean) => {
  const { chain, chains } = useNetwork();
  const { switchNetwork } = useSwitchNetwork()

  return (
    <div>
      <div className="flex justify-between items-center cursor-pointer">
        <div className="font-bold text-lg px-2">Switch Network</div>
        <div onClick={closeModal}><Close className="w-4 h-4 stroke-black" /></div>
      </div>
      <div className="grid gap-1 text-sm mt-4 font-semibold">
        {
          chains.map((item) => {
            return (
              <div onClick={() => switchNetwork?.(item.id)} key={item.name} className={`flex items-center justify-between p-2 hover:bg-gray-100 rounded-lg cursor-pointer ${isSupportedChain(item.id) ? 'bg-gray-100 shadow-sm' : null}`}>
                <div className="flex gap-2 items-center">
                  {/* eslint-disable-next-line jsx-a11y/alt-text */}
                  <Image src={listImage[item.name]} width={22} height={22} priority className="rounded-full" alt={item.name} />
                  <div>{item.name}</div>
                </div>
                {
                  isSupportedChain(item.id) ? <div className="flex gap-2 items-center">connected <span className="block w-2 h-2 rounded-full bg-green-600"></span></div> : null
                }
              </div>
            )
          })
        }
      </div>
    </div>
  )
}
export default Header;