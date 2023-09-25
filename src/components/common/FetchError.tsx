import { type ErrorModel } from '../../api/models'
import Button from '../form/Button'
import Spacer from '../general/Spacer'
import PageLayout from '../layouts/PageLayout'

export interface Props {
  title?: string
  error?: ErrorModel
  showTryAgainButton?: boolean
  load?: () => Promise<void>
}

const FetchError: React.FC<Props> = ({
  title = 'Error',
  error,
  showTryAgainButton = true,
  load = () => Promise.resolve()
}: Props) => {
  return (
    <PageLayout centerItems>
      <h1>{title}</h1>
      <Spacer />

      <p>{error?.message}</p>
      <Spacer />
      {error?.detail && (
        <>
          <p>{error.detail}</p>
          <Spacer />
        </>
      )}

      {showTryAgainButton && <Button label="Try again" onClick={load} />}
    </PageLayout>
  )
}

export default FetchError
