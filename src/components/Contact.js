import ResumeImg from '../assets/resume.jpg';

export default function Contact()
{
    const config = {
        email: ' kishormuthu2@gmail.com',
        phone: '+918680921127'
    }
    return <section id='contact' className='flex flex-col bg-primary px-10 py-32 h-screen'>
        
        <div className=' flex flex-col items-center text-white'>
            
                  <h1 className='text-4xl border-b-4 mt-20   border-secondary mb-5 w-[140px] font-bold'>Contact</h1>
                  <p className='pb-5 text-l'>If you want to discuss more in detail please contact me </p>
                  <p className='py-2 text-xl'><span className='font-bold'>Email :</span>{config.email}</p>
                  <p className='py-2 text-xl'><span className='font-bold'>Phone :</span>{config.phone}</p>
            
        </div>
    </section>
}