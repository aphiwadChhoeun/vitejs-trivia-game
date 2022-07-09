import { createContext, PropsWithChildren, useState } from 'react';

export const progressContext = createContext<null | any>(null);

const ProgressContext = (props: PropsWithChildren) => {
  const [progress, setProgress] = useState(0);

  return (
    <progressContext.Provider value={[progress, setProgress]}>
      {props.children}
    </progressContext.Provider>
  );
};

export default ProgressContext;
