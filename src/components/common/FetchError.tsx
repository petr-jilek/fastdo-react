import { ErrorModel } from "../../api/models"
import HomeLayout from "../../layouts/HomeLayout"
import Button from "../form/buttons/Button"
import Spacer from "../general/Spacer"

export interface Props {
  load: () => Promise<void>
  error?: ErrorModel
}

export default function FetchError({ load }: Props) {
  return (
    <HomeLayout centerItems>
      <h1>Chyba</h1>
      <Spacer />

      <p>Chyba při načítání.</p>
      <Spacer />

      <Button label="Zkusit znovu" onClick={load} />
    </HomeLayout>
  )
}
