'use client'

import { useState } from 'react'
import emailjs from '@emailjs/browser'

export default function ContactForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const sendEmail = async(event) => {
    event.preventDefault()

    const serviceId = 'service_bj1w1en'
    const templateId = 'template_zttzjk7'
    const publicKey = 'iu4SxfoymJq_WaitV'

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: 'Ubift',
      message: message,
    }

    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log('Email sent successfully! ')
        setName('')
        setEmail('')
        setMessage('')
      })
      .catch((error) => {
        console.error('Error sending email!')
      })

    console.log(await response.json())
  }

  return (
    <form onSubmit={sendEmail} className='gap-3 flex flex-col items-center justify-center'>
      <input type='text' name='name' placeholder='Name' className='w-[430px] p-3 bg-[#1b1b1b] rounded-lg' required value={name} onChange={(event) => {setName(event.target.value)}} />
      <input type='text' name='email' placeholder='Email *' className='w-[430px] p-3 bg-[#1b1b1b] rounded-lg' required value={email} onChange={(event) => {setEmail(event.target.value)}} />
      <textarea name='message' placeholder='Message' rows={7} className='w-[430px] p-3 bg-[#1b1b1b] rounded-lg' required value={message} onChange={(event) => {setMessage(event.target.value)}} />
      <button type='submit' className='flex items-center justify-center bg-primary text-primary-dark px-10 py-3 rounded-md hover:opacity-70 transition-all'>Send message</button>
    </form>
  )
}
