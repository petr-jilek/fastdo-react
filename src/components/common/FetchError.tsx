import { ErrorModel } from '../../api/models'
import Button from '../form/Button'
import Spacer from '../general/Spacer'
import PageLayout from '../layouts/PageLayout'

export interface Props {
  load: () => Promise<void>
  error?: ErrorModel
}

export default function FetchError({ load }: Props) {
  return (
    <PageLayout centerItems>
      <h1>Chyba</h1>
      <Spacer />

      <p>Chyba při načítání.</p>
      <Spacer />

      <Button label="Zkusit znovu" onClick={load} />
    </PageLayout>
  )
}
