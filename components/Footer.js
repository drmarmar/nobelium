// import BLOG from '@/blog.config'
// import Vercel from '@/components/Vercel'
const Footer = ({ fullWidth }) => {
  // const d = new Date()
  // const y = d.getFullYear()
  // const from = +BLOG.since
  return (
    <div
      className={`mt-6 flex-shrink-0 m-auto w-full text-gray-500 dark:text-gray-400 transition-all ${
        !fullWidth ? 'max-w-2xl px-4' : 'px-4 md:px-24'
      }`}
    >
      <div className="my-4 text-sm leading-6">
        <div className="flex align-baseline justify-between flex-wrap">
          <p>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer
