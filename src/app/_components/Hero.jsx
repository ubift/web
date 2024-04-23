export default function Hero() {
  return (
    <div className='gap-6 flex flex-col items-center px-20 text-center'>
      <h1 className='text-7xl font-extrabold leading-[5.5rem] max-[560px]:text-6xl max-[560px]:leading-[4.6rem] max-[480px]:text-5xl max-[480px]:leading-[3.8rem]'>
        Unique <span className='px-2 py-1 bg-primary-gray bg-opacity-10'>websites</span> designs with Ubift
      </h1>
      <p className='text-primary-gray text-xl font-medium max-[560px]:text-base max-[480px]:text-sm'>Ubift team is a community of individuals united to aid Freelancers, Agencies, Creators, and other people in crafting impressive websites quickly, 
      all without the need for design or coding skills.</p>
      <div>
        <button className='flex items-center justify-center bg-primary text-primary-dark px-10 py-3 rounded-md hover:opacity-70 transition-all'>
          Explore
        </button>
      </div>
    </div>
  )
}
