import Card from './_components/Card'

export default function Page() {
  return (
    <div className='gap-12 flex flex-col items-center py-24'>
      <div className='gap-6 flex flex-col items-center text-center'>
        <h1 className='text-7xl font-extrabold'>Projects</h1>
        <p className='text-primary-gray text-xl font-medium'>
          Beautiful websites is <br /> coming soon by Ubift team
        </p>
        <button className='flex items-center justify-center bg-primary text-primary-dark px-6 py-3 rounded-md hover:opacity-70 transition-all'>
          I want a website
        </button>
      </div>
      <div className='gap-4 flex flex-wrap items-center justify-center'>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}
