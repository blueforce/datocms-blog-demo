import Container from './container'
import cn from 'classnames'
import { EXAMPLE_PATH } from '../lib/constants'

export default function Alert({ preview }) {
  return (
    <div
      className={cn('border-b', {
        'bg-accent-7 border-accent-7 text-white': preview,
        'bg-accent-1 border-accent-2': !preview,
      })}
    >
      <Container>
        <div className="py-2 text-center text-sm">
          {preview ? (
            <>
              Dies ist eine Testseite mit viel ♡ gemacht von.{' '}
              <a
                href="https://www.blueforce.ch"
                className="underline hover:text-cyan duration-200 transition-colors"
              >
                Blueforce Internet Solutions
              </a>{' '}
              beendet die Vorschau.
            </>
          )}
        </div>
      </Container>
    </div>
  )
}
