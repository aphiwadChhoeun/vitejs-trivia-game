import { Progress } from '@nextui-org/react';
import { useContext, useMemo } from 'react';
import { localstorageContext } from './localstorageProvider';

export default function ProgressBar() {
  const [progress, setProgress] = useContext(localstorageContext);
  const progressValue = useMemo(() => {
    return progress * 10;
  }, [progress]);

  return (
    <Progress
      size="xs"
      value={progressValue}
      css={{ position: 'fixed', top: 0, left: 0 }}
    />
  );
}
