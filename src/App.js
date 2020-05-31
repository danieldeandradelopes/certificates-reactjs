import React from 'react';
import GlobalStyle from './styles/global';
import Template from './components/Template';

function App() {
  return (
    <>
      <Template
        hours="5,5"
        name="Daniel de Andrade Lopes"
        courseName="Programador Android 2020"
        date="10/01/2021"
        author="Daniel Lopes"
        urlSignature="https://firebasestorage.googleapis.com/v0/b/jacode-stg.appspot.com/o/31-05-2020_17-33-01.png?alt=media&token=b27927fd-7aa3-4264-ae08-13740060608d"
        school="JACODE CURSOS"
        site="www.jacode.com.br"
      />
      <GlobalStyle />
    </>
  );
}

export default App;
