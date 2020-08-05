import Container from './container'
import { EXAMPLE_PATH } from '../lib/constants'

export default function Footer() {
  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <Container>
        <div className="py-28 flex flex-col lg:flex-row items-center">
          <h3 className="text-4xl lg:text-5xl font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            Erstellt auf Basis von Next.js.
          </h3>
          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
            <a
              href={`https://github.com/blueforce/datocms-blog-demo/`}
              className="mx-3 font-bold hover:underline"
            >
              Auf GitHub anschauen
            </a>
          </div>
        </div>
          <div className="py-2 flex flex-col lg:flex-row items-center">
          <div className="flex flex-col lg:flex-row justify-center text-center">
           ©2020 Made with ♡ by Blueforce enpowered with
            <a 
             href={`https://datocms.com`} 
             target={`_blank`}
            > 
             DatoCMS
           </a>
           </div>
          </div>
      </Container>
    </footer>
  )
}
