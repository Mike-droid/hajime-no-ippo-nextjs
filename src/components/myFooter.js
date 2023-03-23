import Image from 'next/image'
import githubImage from '../images/GitHub-Mark.png'
import styles from '../styles/darkPurple.module.css'

export const MyFooter = () => {
  return (
    <footer className={`absolute bottom-0 flex flex-col sm:flex-row justify-around w-full ${styles.darkPurple}`}>
      <a className='text-cyan-400 text-center' href='https://github.com/Mike-droid' target='_blank'>
        Made by: Mike-droid
      </a>
      <a className='text-cyan-400 flex flex-row justify-center' href='https://github.com/Mike-droid/hajime-no-ippo-nextjs' target='_blank'>
        <Image priority src={githubImage} alt='Github icon' width={30} height={30} className='invert'/>
        Github repository of this project
      </a>
      <a className='text-cyan-400 flex flex-row justify-center' href='https://github.com/Mike-droid/hajime-no-ippo-api' target='_blank'>
        <Image priority src={githubImage} alt='Github icon' width={30} height={30} className='invert'/>
        Github repository of the API
      </a>
    </footer>
  )
}
