import { Dialog } from 'primereact/dialog'
import { ProgressSpinner } from 'primereact/progressspinner'
import 'primereact/resources/themes/saga-blue/theme.css'
import { useState } from 'react'

function GoogleForm({ title, variant = 'primary' }: { title: string, variant: 'primary' | 'gold' | 'platinum' }) {
  const [displayForm, setDisplayForm] = useState(false)
  const [loading, setLoading] = useState(true)

  const buttonStyles = {
    primary: 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-lg',
    gold: 'bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 shadow-lg',
    platinum: 'bg-gradient-to-r from-gray-400 to-gray-500 hover:from-gray-500 hover:to-gray-600 shadow-lg'
  }

  return (
    <div className='relative'>
      <Dialog visible={displayForm} onHide={() => setDisplayForm(false)} header='Book Free Consultation' modal pt={{
        'root': {
          'className': 'w-[90%] lg:w-[550px]'
        },
        'content': {
          'className': 'px-0'
        }
      }}>
        {loading && <div className='space-y-2 absolute flex justify-center h-[550px] left-0 items-center border w-full'>
          <ProgressSpinner className='w-12 h-12 mx-auto' strokeWidth='2' fill='#fff' animationDuration='.5s' />
        </div>}
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSejqoyrxOdbkzRNNpGEZmeM8ebF4T67iVJ8nPu_aNZ6nwW6EA/viewform?embedded=true" width="100%" height="551" onLoad={() => setLoading(false)}>
        </iframe>
      </Dialog>
      <button
        onClick={() => {
          setDisplayForm(true)
          setLoading(true)
        }}
        className={`${buttonStyles[variant]} text-white font-semibold px-6 py-2.5 rounded-lg`}
      >
        {title}
      </button>
    </div>
  )
}

export default GoogleForm
