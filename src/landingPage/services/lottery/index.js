import { fetchWrapper } from '@/services/restApi';
const API_URL_GET = process.env.NEXT_PUBLIC_API_URL;

export const getCosmicData = () => {
  return fetchWrapper('GET', `${API_URL_GET}/luckito/lottery/get-lottery?lotteryType=COSMIC`);
};

export const getClassicData = () => {
  return fetchWrapper('GET', `${API_URL_GET}/luckito/lottery/get-lottery?lotteryType=CLASSIC`);
};

export const getAtomicData = () => {
  return fetchWrapper('GET', `${API_URL_GET}/luckito/lottery/get-lottery?lotteryType=ATOMIC`);
};