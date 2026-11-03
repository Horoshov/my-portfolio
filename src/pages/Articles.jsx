import React, { useEffect } from 'react';
import PageHeader from '../components/PageHeader';

const Page = () => {
  useEffect(() => {
    document.title = 'Статьи — Horoshov';
  }, []);

  return (
    <div>
      <PageHeader title="Articles" />
    </div>
  );
};

export default Page;