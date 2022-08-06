import { useState } from 'react'
import styles from '../styles/components/Toogle.module.scss'

interface Props {
  options: [string, string]
  style?: React.CSSProperties
}

type ToogleType = ({ options }: Props) => JSX.Element


const useToogle = () => {
  const [isFirst, setIsFirst] = useState(true)

  const handleClick = (setFirst: boolean) => {
    if (setFirst !== isFirst) {
      setIsFirst(state => !state)
    }
  }

  const Toogle: ToogleType = ({ options, style }) => {
    return (
      <div className={styles.toogle} style={style}>
        <div
          onClick={() => handleClick(true)}
          className={isFirst ? styles.selected : styles.option}
        >
          {options[0]}
        </div>
        <div
          onClick={() => handleClick(false)}
          className={!isFirst ? styles.selected : styles.option}
        >
          {options[1]}
        </div>
      </div>
    )
  }
  return [isFirst, Toogle] as [boolean, ToogleType] 
}

export default useToogle
