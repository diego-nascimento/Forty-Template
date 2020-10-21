import Layout from '../Components/Layout/layout';
import Painel from '../Components/IndexPage/Painel/Painel';
import Section from '../Components/IndexPage/SectionDivide/SectionDivide';
import Section3 from '../Components/IndexPage/Section3/Section3';
import Contato from '../Components/IndexPage/Contato/Contato';

export default function Home() {
  return (
    <Layout>
      <Painel />
      <Section
        State={1}
        Bg1="#1E90FF"
        Bg2="#746CAC"
        img1="/pessoa.jpg"
        img2="/cidade.jpg"
        Texto1="Aliquan"
        Texto2="Tempus"
        Subtexto1="LOREM DIS EGESTA"
        Subtexto2="feugieta amet lorian"
      />
      <Section
        State={0}
        Bg1="#FE8D75"
        Bg2="#FEC683 "
        img1="/montain.jpg"
        img2="/wolf.jpg"
        Texto1="long established"
        Texto2="Lorem Ipsum"
        Subtexto1="LOREM DIS EGESTA"
        Subtexto2="feugieta amet lorian"
      />
      <Section
        State={1}
        Bg1="#3F90FE "
        Bg2="#57E55F "
        img1="/stairs.jpg"
        img2="/photography.jpg"
        Texto1="Where can I??"
        Texto2="many variations "
        Subtexto1="orem Ipsum a"
        Subtexto2="slightly believable."
      />
      <Section3 />
      <Contato />
    </Layout>
  );
}
