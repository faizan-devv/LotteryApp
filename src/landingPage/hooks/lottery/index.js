import { getCosmicData, getAtomicData, getClassicData } from '@/landingPage/services/lottery';
import { useQuery } from '@tanstack/react-query';

export const useCosmicData = () => {
  return useQuery(['cosmic'], () => getCosmicData(), {
    select: (data) => {
      console.log("data::", data)
      return data;
    },
  });
};

export const useAtomicData = () => {
  return useQuery(['atomic'], () => getAtomicData(), {
    select: (data) => {
      console.log("data::", data)
      return data;
    },
  });
};

export const useClassicData = () => {
  return useQuery(['classic'], () => getClassicData(), {
    select: (data) => {
      console.log("data::", data)
      return data;
    },
  });
};


