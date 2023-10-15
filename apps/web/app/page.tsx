'use client';
import { useSession } from 'next-auth/react';
import { Avatar } from '../components/Avatar';

const Page = (): JSX.Element => {
  const { data } = useSession();

  return (
    <div>
      <h1>Wishlus</h1>
      {data?.user ? (
        <div>
          <h3>{data.user.name}</h3>
          <Avatar src={data.user.image || ''} />
        </div>
      ) : null}
    </div>
  );
};

export default Page;
