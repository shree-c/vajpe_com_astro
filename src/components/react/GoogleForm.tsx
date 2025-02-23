import { Button } from 'primereact/button'
import { Dialog } from 'primereact/dialog'
import { ProgressSpinner } from 'primereact/progressspinner'
import 'primereact/resources/themes/saga-blue/theme.css'
import { useState } from 'react'
function GoogleForm() {
  const [displayForm, setDisplayForm] = useState(false)
  const [loading, setLoading] = useState(true)
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
      <Button onClick={
        () => {
          setDisplayForm(true)
          setLoading(true)
        }
      } severity='info' label='Book Free Consultation' pt={
        {
          'root': {
            'className': 'bg-theme-blue rounded-lg'
          }
        }
      } />
    </div>
  )
}

export default GoogleForm
