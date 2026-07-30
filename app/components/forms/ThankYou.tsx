import { Specification } from '@/app/types'

type Props = {
    specification: Specification
}

export default function ThankYou({specification} : Props) {
  return (
    <div>
        <p>//TODO Outro Text für user</p>
        <p>Wir schicken eine automatisierte Bestätigungsemail an {specification.mail}</p>
    </div>
  )
}
