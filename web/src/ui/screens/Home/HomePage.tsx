import { usePresenter } from '@/ui/react/hooks/usePresenters';
import React from 'react';
import {HomeStyles} from "@/ui/screens/Home/HomePageStyles";
import {Button} from "@/ui/components/buttons/Button";

const Home: React.FC = () => {
  const { homePresenter } = usePresenter();

  return (
    <HomeStyles.Container>
        <Button
            onClick={homePresenter.navigateToLogin}
            text='Ir al Login'
        />
    </HomeStyles.Container>
  );
};

export default Home;
