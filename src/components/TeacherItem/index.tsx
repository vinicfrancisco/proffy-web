import React from 'react';

import whatsAppIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

const TeacherItem: React.FC = () => {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars0.githubusercontent.com/u/26771118?s=460&u=7d12a9a5a830c8d7bca00ff40668f7cd9262454a&v=4"
          alt="vinicfrancisco"
        />

        <div>
          <strong>Vinicius C. Francisco</strong>
          <span>Matemática</span>
        </div>
      </header>

      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima, omnis.
        Repellat hic, ducimus magnam laudantium voluptatum molestiae
        <br /> <br />
        totam alias quam voluptates delectus dolor, officiis non autem. Pariatur
        at eligendi beatae?
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 100,00</strong>
        </p>

        <button type="button">
          <img src={whatsAppIcon} alt="WhatsApp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
};

export default TeacherItem;
