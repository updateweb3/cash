import { useCallback, useState, useEffect } from 'react';
import useBasisCash from './useBasisCash';
// import { Bank } from '../basis-cash';
// import { useTransactionAdder } from '../state/transactions/hooks';
import { BigNumber } from 'ethers';
import useHandleTransactionReceipt from './useHandleTransactionReceipt';
import config from '../config';

const useWithdrawFromLpBoardroom = () => {
  const [canWithdrawLp, setCanWithdraw] = useState<Boolean>();
  const [canWithdrawTime, setCanWithdrawTime] = useState(BigNumber.from(0));
  const basisCash = useBasisCash();
  const handleTransactionReceipt = useHandleTransactionReceipt();

  const getCanWithdraw = useCallback(async () => {
    setCanWithdraw(await basisCash.canWithdrawFromLpBoardroom());
    setCanWithdrawTime(await basisCash.canWithdrawTimeFromLpBoardroom());
  }, [basisCash]);


  useEffect(() => {
    if (basisCash?.isUnlocked) {
      getCanWithdraw().catch((err) => console.error(err.stack));

      const refreshBalance = setInterval(getCanWithdraw, config.refreshInterval);
      return () => clearInterval(refreshBalance);
    }
  }, [basisCash,getCanWithdraw]);
  const handleWithdraw = useCallback(
    (amount: string) => {
      handleTransactionReceipt(
        basisCash.withdrawShareFromLpBoardroom(amount),
        `从董事会取出 ${amount} GOS`,
      );
    },
    [basisCash,handleTransactionReceipt],
  );
  return { onWithdraw: handleWithdraw, canWithdrawLp,canWithdrawTime ,handleTransactionReceipt};
};

export default useWithdrawFromLpBoardroom;
