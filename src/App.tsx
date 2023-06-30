import { Container } from "./App"

function App() {

  return (
    <Container>
      <div 
        className="backgroundImg"
        style={{backgroundImage: `url("/BackgroundImg.png")` }}
      />

      <div className="header">
        <img src="/Logo1.png" className="firstLogo" alt="Logo1"/>
        <nav>
          <a href="INICIO">INICIO</a>
          <span className="risk">-</span>
          <a href="ARTISTA">ARTISTA</a>
          <span className="risk">-</span>
          <a href="GALERIA">GALERIA</a>
          <span className="risk">-</span>
          <a href="CONTATO">CONTATO</a>
        </nav>
      </div>

      <div className="content_wrapper">
        <div className="content_bg">
          <div className="card_img">
            <img src="/art1.png" alt="" />
            <p>Desde 2016, estamos imersos no mundo da tatuagem, especializados em estilos tradicionais, neotradicionais e blackwork.</p>
          </div>
          <img src="/art3.png" alt="" />
        </div>

        <div className="content_main">
          <div className="img_wrapper">
            <img src="/art2.png" alt="" />
            <img src="/art4.png" alt="" />
          </div>
          <div className="content_text">
            <p>Nosso compromisso é oferecer a você uma experiência personalizada desde o primeiro rascunho até a aplicação final. Sob a orientação do nosso talentoso idealizador, Bruno Henrique o Marujo Tatueiro, um artista de altíssimo nível e vasta experiência, nossa equipe dedicada trabalha arduamente para tornar suas ideias em realidade na pele.</p>

            <img src="/art5.png" alt="" />

            <p>Na Marujo Tattoo Shop, valorizamos a excelência e a biosegurança. Nossos artistas são apaixonados por seu ofício e são incansáveis na busca pela perfeição. Utilizamos os mais altos padrões de higiene e esterilização para garantir sua segurança e bem-estar.</p>
          </div>
        </div>
      </div>

      <p className="description">
      Aqui, acreditamos que cada tatuagem é uma expressão única de identidade e individualidade.
      </p>

      <img src="/art6.png" alt="" className="final_art"/>

      <p className="description2">
      Nosso estúdio está localizado no Sitio Cercado, CWB. Criamos um ambiente acolhedor e inspirador para você se sentir à vontade enquanto transforma sua pele em uma extensão da sua personalidade e estilo.
      </p>

      <footer>
        <p>MAR CALMO NUNCA FEZ BOM MARUJO <br /> MARUJO TATTO SHOP <br /> SINCE 2016</p>
        <img src="/Logo2.png" alt="Logo2" className="secondLogo"/>
      </footer>
      <div className="contactInfos">
        <p>Endereço: Rua Lupionopolis, 1156 - Sitio Cercado, CWB</p>
        <p>Contato: (41) 99827-4208, marujotatueiro@gmail.com</p>
      </div>
    </Container>
  )
}

export default App
