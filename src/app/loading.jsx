import Image from 'next/image'
import Spenner from '../../public/spenner.svg'

export default function loading() {
  return (
    <div className='flex justify-center mt-16'>
      <Image className=' h-52' src={Spenner} alt='Loading...' />
    </div>
  )
}
