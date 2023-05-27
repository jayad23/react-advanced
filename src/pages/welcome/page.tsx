const kikeVanegas = "https://raw.githubusercontent.com/jayad23/ProfessionalPortfolio/master/src/imgs/self.jpg"
const hackBossLogo = "https://www.cultura.gal/sites/default/files/images/evento/recruiteehab-1-e1574591771150.png";
import '../shared.css';
import {useNavigate} from 'react-router-dom';

function App() {
  const navigate = useNavigate();

  return (
    <section className="welcome-container">
      <article>
        <a href="https://www.hackaboss.com/" target="_blank">
          <img src={hackBossLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://kike-vanegas-dev.vercel.app/home" target="_blank">
          <img src={kikeVanegas} className="logo react" alt="React logo" />
        </a>
      </article>
      <h1>Track React Avanzado</h1>
      <p>
        Este track está ofrecido por 
        <span><a href="https://www.hackaboss.com/" target="_blank"> Hack a Boss</a></span>, la academia de tecnología Nº1 de España. <br/>
        En colaboración con <span><a href="https://kike-vanegas-dev.vercel.app/home" target="_blank">Jaider Vanegas</a></span> Desarrollador full-stack con 3+ años de experiencia como Frontend Developer.
      </p>
      <article className="card">
        <button onClick={() => navigate("/temario")}>
          Empezar
        </button>
      </article>
      <a className='link_repo' href="https://github.com/jayad23/react-advanced" target='_blank' >
        <code>Pulsa aquí para ver el repo</code>
      </a>
    </section>
  )
}

export default App
