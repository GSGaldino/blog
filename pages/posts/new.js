import Container from '../../components/Container';
import Header from '../../components/Header';

import styles from '../../styles/New.module.css';

export default function New(){

  return (
    <Container>
      <Header />
      <div className={styles.form}>
        <form action="/api/posts" method="POST" encType="multipart/form-data">
          <label>
            Imagem
            <input 
              type="file" 
              name="image"
            />
          </label>
          <input type="submit" value="submit" />
        </form>
      </div>
    </Container>
  )
}
