import { FormEvent } from "react"
import {
  Input,
  TextArea,
  ImageUpload,
}                from "../../components/Inputs"
import Button    from "../../components/Button"
import Header    from "../../components/Header"
import useToogle from "../../components/useToogle"
import styles    from '../../styles/pages/CreatePoster.module.scss'


const CreatePoster = () => {
  const [isCat, Toogle] = useToogle()

  const handleSubmit = (e: FormEvent) => {
    console.log(e.target)
  }

  return (
    <div className='page'>
      <Header
        title='Create Poster'
        description="
          Describe your pet so others
          could help you find your loved one
        "
      />
      <form onSubmit={handleSubmit} className={styles.content}>
        <h2>New Poster</h2>
        <div className={styles.toogle}>
          <Toogle options={['Cat', 'Dog']}/>
        </div>
        <div className={styles.textCol}>
          <Input label="Pet Name" name='petName'/>
          <Input label="Location" name='location'/>
          <TextArea label="Description" name='petDescr'/>
        </div>
        <div className={styles.imgCol}>
          <ImageUpload label="Upload Image" name='image'/>
        </div>
        <div className={styles.submitRow}>
          <Button onClick={() => {}} text="Submit"/>
        </div>
      </form>
    </div>
  )
}

export default CreatePoster
