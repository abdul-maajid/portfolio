import { Container } from './styles'

// import reactIcon from '../../assets/react-icon.svg'
import linkedinIcon from '../../assets/linkedin.png'
import githubIcon from '../../assets/github.png'
import twitterIcon from '../../assets/twitter.png'
import discordIcon from '../../assets/discord.png'

export function Footer() {
  return (
    <Container className="footer">
      <a href="/" className="logo">
        <span>A</span>
        <span>Maajid</span>
      </a>
      {/* <div>
        <p>
        </p>
      </div> */}

      <div className="social-media">
        <a
          href="https://www.linkedin.com/in/amaajid007/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedinIcon} alt="Linkedin" />
        </a>

        <a
          href="https://github.com/abdul-maajid"
          target="_blank"
          rel="noreferrer"
        >
          <img src={githubIcon} alt="GitHub" />
        </a>

        <a
          href="https://twitter.com/MrAMaajid/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={twitterIcon} alt="Twitter" />
        </a>

        <a
          href="https://discord.com/users/abdulmaajid#7829"
          target="_blank"
          rel="noreferrer"
        >
          <img src={discordIcon} alt="Discord" />
        </a>
      </div>
    </Container>
  )
}
