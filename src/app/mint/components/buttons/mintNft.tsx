import { useContractWrite, useNetwork, useAccount } from 'wagmi'
import Button from '@/components/Button'
import listChains from '@/data/list-chains.json'
import nftArtefact from '../../../../../artifacts/contracts/ChessNFT.sol/ChessNFT.json'
import { ModalTx } from '@/components/Modal'
import { useEffect, useState } from 'react'

export const MintNft = () => {
  const [open, setOpen] = useState(false)

  const { chain } = useNetwork()
  const { address } = useAccount()
  const ca = listChains.filter(item => item.chainId === chain?.id)[0];

  const { data, isLoading, isSuccess, write } = useContractWrite({
    address: ca.nftContract,
    abi: nftArtefact.abi,
    functionName: 'mint',
  })

  useEffect(() => {
    if(data?.hash) {
      setOpen(true)
    }
  }, [data?.hash])

  return (
    <>
      <Button mode="primary" size={1} text="Mint Now" onPress={() => write({args: [address]})} loading={isLoading} disabled={isLoading} />
      <ModalTx show={open} linkTx={ chain?.blockExplorers?.default.url as string + '/tx/' +  data?.hash as string} closeModal={() => setOpen(false)} />
    </>
    
  )
}
export default MintNft;