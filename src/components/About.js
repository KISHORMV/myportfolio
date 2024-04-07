import AboutImg from '../assets/about.png';

export default function About()
{

    const config = {
        line1: 'Hi, My name is M.V.Kishor .I am a enthusiast web  developer.I done various projects.',
        line2: 'I am proefficient in frontend skills like React.js ,Tailwind CSS and many more.',
        line3: 'In backend I know Node.js,Python-flask,MangoDB and MySQL.'
    }

    return <section className='flex flex-col md:flex-row bg-secondary px-5 py-28 ' id='about'>
        <div className='py-5 md:w-1/2'>
            <img src={AboutImg} />
        </div>
        <div className='md w-1/2 flex justify-center'>
            <div className='flex flex-col justify-center text-white'>
                  <h1 className='text-4xl border-b-4  border-primary mb-5 w-[170px] font-mono'>About Me</h1>
                  <p className='pb-5 text-xl'>{config.line1}</p>
                  <p className='pb-5 text-xl'>{config.line2}</p>
                  <p className='pb-5 text-xl'>{config.line3}</p>
            </div>
        </div>
    </section>
}