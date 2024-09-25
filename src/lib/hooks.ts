import { useEffect, useState } from "react";

export const useIsComponentMounted = () => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => setIsMounted(true), []);

  return isMounted;
};
