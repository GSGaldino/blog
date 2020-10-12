import Header from '../components/Header';
import Container from '../components/Container';
import Destaques from '../components/Destaques';


export default function Home({data}) {
  return (
    <Container>
      <Header />
      <Destaques data={data}/>
    </Container>
  )
}
