import {Fragment, useEffect, useState} from 'react';
import type {NextPage} from 'next';

// components
import {ChatComponent} from '@/components/chat.component';
import {Modal} from '@/components/modal.component';

// utils
import {checkEnv} from '@/utils/env.util';

const HomePage: NextPage = () => {
  const [error, setError] = useState<any>();
  const [showModal, setShowModal] = useState(false);
  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  useEffect(() => {
    const checkBrowser = async () => {
      try {
        await checkEnv();
      } catch (e) {
        console.log(e);
        if (e instanceof Error) {
          setError(e?.message);
          setShowModal(true);
        }
      }
    };
    checkBrowser();
  }, []);

  return (
    <Fragment>
      {showModal && <Modal error={error} closeModal={closeModal} />}
      <ChatComponent openModal={openModal} error={error} />
    </Fragment>
  );
};

export default HomePage;
