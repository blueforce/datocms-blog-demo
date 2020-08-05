import { CMS_NAME, CMS_URL } from '../lib/constants'

export default function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        Blueforce Blog.
      </h1>
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
        Hier schreibt{' '}
        <a
          href="https://www.linkedin.com/in/rogerperren/"
          className="underline hover:text-success duration-200 transition-colors"
        >
          Roger Perren
        </a>{' '}
        von{' '}
        <a
          href="https://www.blueforce.ch"
          className="underline hover:text-success duration-200 transition-colors"
        >
          Blueforce Internet Solutions
        </a> über dies und das.
      </h4>
    </section>
  )
}
