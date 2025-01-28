import { usePresenter } from '@/pages/hooks/usePresenters';
import React from 'react';
import {HomeStyles} from "@/ui/Home/HomePageStyles";

const Home: React.FC = () => {
  const { homePresenter } = usePresenter();

  return (
    <HomeStyles.Container>
      <p>Hola Mundo</p>
      <HomeStyles.Button onClick={homePresenter.navigateToLogin}>
        Ir al Login
      </HomeStyles.Button>
    </HomeStyles.Container>
  );
};

export default Home;
