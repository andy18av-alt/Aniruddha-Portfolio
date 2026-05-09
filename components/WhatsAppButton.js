import { FaWhatsapp } from 'react-icons/fa'

export default function WhatsAppButton() {
  const phoneNumber = '919739299852' // Replace with your WhatsApp number
  const message = encodeURIComponent(
    'Hi Aniruddha, I came across your portfolio and would like to connect.'
  )

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
     className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-green-500/90 backdrop-blur-md text-white shadow-2xl hover:scale-110 transition-all duration-300"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp size={30} />
    </a>
  )
}