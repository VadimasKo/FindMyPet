import styles from '../styles/components/Inputs.module.scss'

interface Props {
  label: string
  name:  string
  isFocused?: boolean
}


export const Input = ({ label, name, isFocused }: Props) => {
  return (
    <div className={styles.container}>
      <label htmlFor={name}>{label}:</label>
      <input
        autoFocus={isFocused}
        id={name}
        name={name}
        className={styles.input}
        required
      />
    </div>
  )
}

export const TextArea = ({ label, name }: Props) => {
  return (
    <div className={styles.container}>
      <label htmlFor={name}>{label}:</label>
      <textarea
        id={name} 
        name={name}
        className={styles.textArea}
        spellCheck={false}
        maxLength={160}
        required
      />
    </div>
  )
}

export const ImageUpload = ({ label, name }: Props) => {
  return (
    <div className={styles.border}>
      <div className={styles.uploadContainer}>
        <p className={styles.uploadText}>Upload Image</p>
        <input
          id={name}
          name={name}
          className={styles.upload}
          type='file'
          accept="image/*,.pdf"
          required
        />
      </div>
    </div>

  )
}

