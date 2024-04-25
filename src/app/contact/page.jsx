import ContactForm from './_components/ContactForm'

export default function Page() {
  return (
    <div className='gap-8 flex flex-col items-center justify-center py-24'>
      <div className='gap-6 flex flex-col items-center text-center'>
        <h1 className='text-7xl font-extrabold max-[480px]:text-6xl'>Contact</h1>
        <p className='text-primary-gray text-xl font-medium max-[480px]:text-base'>We are always looking for new customer.</p>
      </div>
      <ContactForm />
    </div>
  )
}
