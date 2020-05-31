import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px;
  background-color: #fff;
  border-radius: 3px;
  margin-top: 100px;
  height: 600px;
  width: 900px;
`;

export const TemplateImage = styled.img`
  height: 700px;
  width: 1100px;
  position: absolute;
`;

export const Title = styled.p`
  font-family: 'Lobster', cursive;
  margin-top: 10px;
  font-size: 50px;
  text-align: center;
  color: #6e6a70;
`;

export const School = styled.p`
  font-size: 18px;
  color: #6e6a70;
  font-family: 'Rubik';
`;

export const Text = styled.p`
  font-family: 'Archivo', sans-serif;
  margin: 60px 120px 80px 125px;
  font-size: 20px;
  text-align: center;

  b {
    font-size: 22px;
  }
`;

export const AuthorSpace = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    max-width: 150px;
    margin: 10px;
  }
`;

export const Line = styled.div`
  border-top: 1px solid #6e6a70;
  width: 180px;
  opacity: 0.6;
  margin-bottom: 10px;
`;

export const NameAuthor = styled.p`
  font-size: 14px;
  color: #6e6a70;
  text-align: center;
`;

export const Site = styled.p`
  font-size: 12px;
  color: #6e6a70;
  text-align: center;
  margin-bottom: 30px;
`;
