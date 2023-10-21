
'use client'

import Link from "next/link";
import menus from '@/data/menus.json'
import { usePathname } from 'next/navigation'
import Image from "next/image";
import Button from "./Button";
import { useConnect, useNetwork, useAccount } from 'wagmi'


const Header = () => {

  const pathName = usePathname()
  const { connect, connectors } =
    useConnect()
  const { chain, chains } = useNetwork()
  const { isConnected } = useAccount()
  console.log(chain, chains)

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
            isConnected ?
              <div className="hidden md:flex gap-2">
                {
                  connectors.map((connector) => {
                    return (
                      <Button key={connector.id} mode="primary" size={1} text={'Connect ' + connector.name} onPress={() => connect({ connector })} />
                    )
                  })
                }
              </div>
              :
              <div>oke gan disisni</div>
          }

        </div>
      </div>
    </div>
  )
}

export default Header;