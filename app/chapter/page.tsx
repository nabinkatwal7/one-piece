import ChapterWrapper from '@/components/Chapter/ChapterWrapper';
import { fetchData } from '@/utils/fetchData';

const Page = async () => {
  const ChapterData = await fetchData('chapters/en');
  return <ChapterWrapper data={ChapterData} />;
};

export default Page;
