import HTML from '../assets/html.png'
import CSS from '../assets/css.png'
import JavaScript from '../assets/javascript.png'
import ReactImg from '../assets/react.png'
import Node from '../assets/node.png'
import GitHub from '../assets/github.png'
import Tailwind from '../assets/tailwind.png'
import Sass from '../assets/Sass.png'

const Skills = () => {
  const Icons = [HTML, CSS, JavaScript, ReactImg, Node, GitHub, Tailwind, Sass]
  const Names = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Node',
    'GitHub',
    'Tailwind',
    'Sass',
  ]
  const cards = []
  Icons.forEach(icon => {
    cards.push(
      <div
        className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'
        key={Icons.indexOf(icon)}
      >
        <img className='w-20 mx-auto' src={icon} alt='icon' />
        <p className='my-4'>{Names[Icons.indexOf(icon)]}</p>
      </div>
    )
  })

  return (
    <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>
            Skills
          </p>
          <p className='py-4'>{`// These are the technologies I've worked with`}</p>
        </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
          {cards}
        </div>
      </div>
    </div>
  )
}

export default Skills
