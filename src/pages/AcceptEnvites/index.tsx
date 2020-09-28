import React, { useEffect, useState } from 'react';

// import { Container } from './styles';

const AcceptEnvites: React.FC = () => {
  const [link, setLink] = useState('');
  useEffect(() => {
    const isIos =
      !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);

    const androidLink =
      'intent:#Intent;scheme=app-memoria://AcceptEnvites;package=com.resolute.app_memoria;end';

    const iosLink = 'app-memoria://AcceptEnvites';

    setLink(isIos ? iosLink : androidLink);
  }, []);
  return (
    <div>
      <a href={link}>Abrir</a>
    </div>
  );
};

export default AcceptEnvites;
