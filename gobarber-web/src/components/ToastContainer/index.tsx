import React from 'react';
import { FiAlertCircle, FiXCircle } from 'react-icons/fi';

import { Container, Toast } from './styles';

const ToastContainer: React.FC = () => {
  return (
    <Container>
      <Toast hasDescription>
        <FiAlertCircle />

        <div>
          <strong>Ocorreu um error</strong>
          <p>Erro ao logar usuário</p>
        </div>

        <button>
          <FiXCircle size={18} />
        </button>
      </Toast>

      <Toast type="success" hasDescription={true}>
        <FiAlertCircle />

        <div>
          <strong>Ocorreu um error</strong>
          {/* <p>Erro ao logar usuário</p> */}
        </div>

        <button>
          <FiXCircle size={18} />
        </button>
      </Toast>

      <Toast type="error" hasDescription>
        <FiAlertCircle />

        <div>
          <strong>Ocorreu um error</strong>
          <p>Erro ao logar usuário</p>
        </div>

        <button>
          <FiXCircle size={18} />
        </button>
      </Toast>
    </Container>
  );
};

export default ToastContainer;
