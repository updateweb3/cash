import React from 'react';

import gocLogo from '../../assets/img/goswap-GOC.svg';
import gosLogo from '../../assets/img/goswap-GOS.svg';
import gobLogo from '../../assets/img/goswap-GOB.svg';
import yCRVLogo from '../../assets/img/ycrv.png';
import DAILogo from '../../assets/img/DAI.png';
import sUSDLogo from '../../assets/img/sUSD.png';
import USDCLogo from '../../assets/img/USDC.png';
import USDTLogo from '../../assets/img/USDT.png';
import GOTLogo from '../../assets/img/Goswap-logo-GOT.png';

const logosBySymbol: {[title: string]: string} = {
  'GOC': gocLogo,
  'GOB': gobLogo,
  'GOS': gosLogo,
  'yCRV': yCRVLogo,
  'DAI': DAILogo,
  'SUSD': sUSDLogo,
  'USDC': USDCLogo,
  'USDT': USDTLogo,
  'GOC_HUSD-LP': gocLogo,
  'GOS_HUSD-LP': gosLogo,
  'HT_HUSD-GLP': GOTLogo,
  'GOT_HUSD-GLP': GOTLogo,
};

type BasisLogoProps = {
  symbol: string;
  size?: number;
}

const TokenSymbol: React.FC<BasisLogoProps> = ({ symbol, size = 64 }) => {
  if (!logosBySymbol[symbol]) {
    throw new Error(`Invalid Logo symbol: ${symbol}`);
  }
  return (
    <img
      src={logosBySymbol[symbol]}
      alt={`${symbol} Logo`}
      width={size}
      height={size}
    />
  )
};

export default TokenSymbol;
