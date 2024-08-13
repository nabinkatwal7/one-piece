import FruitsWrapper from '@/components/Fruits/FruitsWrapper';
import { fetchData } from '@/utils/fetchData';

const Page = async () => {
  const FruitData = await fetchData('fruits/en');
  return <FruitsWrapper data={FruitData} />;
};

export default Page;
