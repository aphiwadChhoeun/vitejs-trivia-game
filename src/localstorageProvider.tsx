import { createContext, PropsWithChildren, useState } from 'react';

export const localstorageContext = createContext<null | any>(null);

const LocalstorageContext = (props: PropsWithChildren) => {
  const [progress, setProgress] = useState(0);

  return (
    <localstorageContext.Provider value={[progress, setProgress]}>
      {props.children}
    </localstorageContext.Provider>
  );
};

export default LocalstorageContext;
