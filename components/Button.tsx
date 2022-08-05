import styles from '../styles/components/Button.module.scss'

interface Props {
  onClick: () => void
  text: string
}

const Button = ({ text, onClick }: Props) => {
  return (
    <button onClick={onClick} className={styles.button}>
      {text}
    </button>
  )
}

export default Button
