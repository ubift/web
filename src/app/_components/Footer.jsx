import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <div className='gap-4 flex items-center justify-between pt-4 border-t border-primary-gray border-opacity-30 text-[13px]'>
      <span className='text-primary-gray'>©{currentYear} Ubift.</span>
      <Link href='/' className='text-primary underline'>Privacy</Link>
    </div>
  )
}
