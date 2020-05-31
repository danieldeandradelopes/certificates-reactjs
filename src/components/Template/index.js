import React, { useState } from 'react';
import frame from '../../assets/frame.png';
import ReactToPdf from 'react-to-pdf';
import {
  AuthorSpace,
  Container,
  Line,
  NameAuthor,
  School,
  TemplateImage,
  Text,
  Title,
  ButtonStyled,
  Progress,
} from './styles';

function Template({
  hours,
  name,
  courseName,
  date,
  urlSignature,
  author,
  school,
  site,
}) {
  const options = {
    orientation: 'landscape',
    unit: 'in',
  };

  const [progress, setProgress] = useState(false);

  return (
    <>
      {progress && <Progress animation="grow" />}

      <ReactToPdf options={options} filename="certificado.pdf" x={0} y={0.5}>
        {({ toPdf, targetRef }) => (
          <>
            <Container ref={targetRef}>
              <TemplateImage src={frame} />
              <Title> Certificado de Conclusão </Title>
              <School>{school}</School>

              <Text>
                Certificamos que <b>{name}</b> concluiu com sucesso{' '}
                <b>{hours}</b> horas do curso online <b>{courseName}</b> em{' '}
                <b>{date}</b>.
              </Text>

              <AuthorSpace>
                <img src={urlSignature} alt="signature" />
                <Line />
                <NameAuthor>{author}</NameAuthor>
                <NameAuthor>{site}</NameAuthor>
              </AuthorSpace>
            </Container>

            <ButtonStyled
              onClick={() => {
                toPdf();
                setProgress(true);
              }}
              style={{
                cursor: 'pointer',
                position: 'absolute',
                right: 5,
                top: 10,
              }}
            >
              Baixar PDF
            </ButtonStyled>
          </>
        )}
      </ReactToPdf>
    </>
  );
}

export default Template;
