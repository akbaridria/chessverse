import chains from '../src/data/list-chains.json'

import { AxelarQueryAPI, Environment, GasToken, EvmChain } from "@axelar-network/axelarjs-sdk";

export const calculate = async (chainIdFrom: number, chainIdTo: number) => {
  const chainFrom = chains.filter((item) => item.chainId === chainIdFrom)[0];
  const chainTo = chains.filter((item) => item.chainId === chainIdTo)[0]
  const api = new AxelarQueryAPI({ environment: Environment.TESTNET });
  console.log(chainFrom.name, chainTo.name, chainFrom.symbol)
  const gasFee = await api.estimateGasFee(
    chainFrom.name,
    chainTo.name,
    chainFrom.symbol,
    300000,
    1.2
  );
  const d :BigInt = BigInt(gasFee as string)
  return d.toString()
}