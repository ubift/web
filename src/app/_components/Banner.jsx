import Image from 'next/image'

export default function Banner() {
  return (
    <div className='mt-10 max-[630px]:hidden'>
      <Image src='/assets/ubift-banner.webp' className='h-[600px] object-contain' width={1920} height={1080} alt='ubift banner' />
    </div>
  )
}
