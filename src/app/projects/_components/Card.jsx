import Link from 'next/link'
import Image from 'next/image'

export default function Card() {
  return (
    <div className='p-5 bg-[#1b1b1b] rounded-lg overflow-hidden'>
      <Link href='/' className='flex flex-col items-start rounded-lg group overflow-hidden'>
        <div className='overflow-hidden mb-2'>
          <Image src='/assets/kitty.jpeg' className='max-w[270px] h-[300px] object-cover rounded-lg overflow-hidden group-hover:scale-110 transition-all !duration-300' width={260} height={290} alt='kitty' />
        </div>
        <div>
          <span>Website name</span>
          <p className='text-primary-gray text-sm mt-1'>Category</p>
        </div>
      </Link>
    </div>
  )
}
