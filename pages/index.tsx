import { GetServerSidePropsContext } from 'next';

export default function Home() {
  return null;
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  return {
    redirect: {
      destination: '/pool',
      permanent: false,
    },
  };
}