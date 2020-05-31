import React from 'react';
import frame from '../../assets/frame.png';
import {
  AuthorSpace,
  Container,
  Line,
  NameAuthor,
  School,
  TemplateImage,
  Text,
  Title,
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
  return (
    <Container>
      <TemplateImage src={frame} />
      <Title> Certificado de Conclusão </Title>
      <School>{school}</School>

      <Text>
        Certificamos que <b>{name}</b> concluiu com sucesso <b>{hours}</b> horas
        do curso online <b>{courseName}</b> em <b>{date}</b>.
      </Text>

      <AuthorSpace>
        <img src={urlSignature} alt="signature" />
        <Line />
        <NameAuthor>{author}</NameAuthor>
        <NameAuthor>{site}</NameAuthor>
      </AuthorSpace>
    </Container>
  );
}

export default Template;
