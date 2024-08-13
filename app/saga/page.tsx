import SagaWrapper from '@/components/Saga/SagaWrapper';
import { fetchData } from '@/utils/fetchData';
import React from 'react';

const Page = async () => {
  const SagaData = await fetchData('sagas/en');
  return <SagaWrapper data={SagaData} />;
};

export default Page;
