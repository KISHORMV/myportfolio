import websiteImg1 from '../assets/Screenshot 2024-04-07 001547.png';
import websiteImg2 from '../assets/cab-booking-system.jpg';

export default function Projects()
{
    const config = {
        projects :[
            {
                image: websiteImg1,
                description: 'Matching Game (Java): A classic memory game implemented in Java, where players match pairs of cards by flipping them over. The game features a grid-based layout of face-down cards, with players flipping two cards at a time to find matching pairs. Implemented with Java programming language and a graphical user interface framework like JavaFX or Swing, this project offers entertainment while testing players memory and concentration skills.',
                link: 'https://github.com/KISHORMV/Matching-Game'

            },
            {
                image: websiteImg2,
                description: 'The Python-based cab booking system with SQLite3 integration offers a streamlined solution for managing cab bookings. Users can register, search for available cabs, and book rides conveniently. Admins can oversee bookings, manage cab availability, and ensure smooth operations. With features like payment integration, notification alerts, and robust security measures, the system provides a secure and efficient platform for both users and administrators alike.',
                link: 'https://github.com/KISHORMV/cab-booking-system/tree/main'

            }
            
        ]
    }



    return <section id='projects' className="flex flex-col py-10 px-20 md:px-4 justify-center bg-primary text-white md:h[730px] h-screen md:h-screen id='projects'">
        <div className="w-full ">
            <div className="flex flex-col px-10 py-5">
                  <h1 className="text-4xl  border-b-4  border-secondary mb-5 w-[140px] font-bold">Projects</h1>
                  <p>These are some of my projects</p>
            </div>
        </div>

        <div className="w-full">
            <div className='flex flex-col md:flex-row px-10 gap-5'>
                {
                    config.projects.map((project) => (
                        
                        <div className='relative'>
                            <img className='h-[285px] md:h-[400px] w-[600px]'src={project.image}/>   
                            <div className='project-desc'>
                            <p className='text-center px-5 py-5'>{project.description}</p>
                            
                            <div  className='flex justify-center'>
                                <a className='btn' target='_blank' href={project.link}>View project</a>
                            </div>
                           
                            </div>
                            
                        </div>
                        
                    ))}
                
                
            </div>
        </div>
    </section>
}