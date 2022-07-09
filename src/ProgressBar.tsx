import { Progress } from '@nextui-org/react';
import { useContext, useMemo } from 'react';
import { progressContext } from './ProgressProvider';

export default function ProgressBar() {
  const [progress, setProgress] = useContext(progressContext);

  return (
    <Progress
      size="xs"
      value={progress}
      css={{ position: 'fixed', top: 0, left: 0 }}
    />
  );
}
