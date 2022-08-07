import {
  ImageUpload,
  Input,
  TextArea,
}                from "../../components/Inputs"
import Button    from "../../components/Button"
import Header    from "../../components/Header"
import useToogle from "../../components/useToogle"
import styles    from "../../styles/pages/ReportSighting.module.scss"


const ReportSighting = () => {
  const [isCat, Toogle] = useToogle()

  return (
    <div className="page">
      <Header
        title="Report Sighting"
        description="Help others find their loved ones"
      />
      <form className={styles.content}>
        <div className={styles.textCol}>
          <Input label="Location" name='location'/>
          <TextArea label="Description" name='petDescr'/>
          <Toogle options={['Cat', 'Dog']} style={{ marginRight: '1rem'}}/>
        </div>
        <div className={styles.imgCol}>
          <ImageUpload label="Upload Image" name='image'/>
        </div>
        <div className={styles.submitRow}>
          <Button onClick={() => {}} text="Submit"/>
        </div>
        <div className={styles.missingPets}/>
      </form>
    </div>
  )
}

export default ReportSighting
