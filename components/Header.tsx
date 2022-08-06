import styles from '../styles/components/Header.module.scss'

interface Props {
  title: string
  description?: string
}


const Header = ({ title, description }: Props) => {
  return (
    <nav className={styles.header}>
      <div className={styles.title}>
        <span>{'<'}Icon{'/>'}</span>
        <h1>{title}</h1>
      </div>
      <span className={styles.menu}>menu</span>
      <h2 className={styles.description}>{description}</h2>
    </nav>
  )
}

export default Header
