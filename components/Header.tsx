import styles from '../styles/components/Header.module.scss'

interface Props {
  title: string
  description?: string
}

const Header = ({ title, description }: Props) => {
  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <span> {'<'}Icon{'/>'}</span>
        <h1 className={styles.title}>{title}</h1>
        <div>menu</div>
      </nav>
      <h2>{description}</h2>
    </div>

  )
}

export default Header
