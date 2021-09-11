import { useRouter } from 'next/router';

export default function Profile() {
  const router = useRouter();

  console.log(`Profile params`, router.query);

  return (
    <>
      <h1>Profile</h1>

      {JSON.stringify(router.query, null, 2)}
    </>
  );
}
