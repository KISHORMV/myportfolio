import HeroImg from '../assets/Hero.png'
import { AiOutlineFacebook,AiOutlineMail,AiOutlineYoutube,AiOutlineGithub, AiOutlineLinkedin, AiOutlineInstagram } from "react-icons/ai";


export default function Hero(){
    const config = {
        subtitle: 'I am a Full-stack developer',
        social:{

            facebook: 'https://www.facebook.com/profile.php?id=100013759243443',
            insta: 'https://www.instagram.com/oiii_007/',
            github: 'https://github.com/KISHORMV',
            linkedin: 'https://www.linkedin.com/in/kishor-muthu-a15417232/'


        }
    }


    return <section className='flex flex-col md:flex-row px-5 py-28 bg-primary justify-center' >
        <div className='md:w=1/2 flex flex-col'>
               <h1 className=' text-white text-6xl font-hero-font'>Hi, <br/>I am  <span className='text-black'>M.V.Kishor</span>
                     <p className='text-2xl'> {config.subtitle} </p>
               </h1>
               <div className='flex py-10'>
                   <a href={config.social.facebook} className='pr-5 hover:text-white'><AiOutlineFacebook size={40}/></a>
                   <a href={config.social.insta} className='pr-5 hover:text-white'><AiOutlineInstagram size={40}/></a>
                   <a href={config.social.github} className='pr-5 hover:text-white'><AiOutlineGithub size={40}/></a>
                   <a href={config.social.linkedin} className='pr-5 hover:text-white'><AiOutlineLinkedin size={40}/></a>
                   
               </div>
        </div>
       
        <img className='flex flex-col px-10 py-0 md:w-1/3' src={HeroImg} />
       
    </section>
}
