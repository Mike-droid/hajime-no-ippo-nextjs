import Image from "next/image"
import githubImage from '../images/GitHub-Mark.png'

export const MyFooter = () => {
  return (
    <footer>
      <a href='https://github.com/Mike-droid' target='_blank'>Made by: Mike-droid</a>
      <a href='https://github.com/Mike-droid/hajime-no-ippo-nextjs'>
        <Image priority src={githubImage} alt='Github icon' width={100} height={100}/>
        Github repository of this project
      </a>
      <a href='https://github.com/Mike-droid/hajime-no-ippo-api'>
        <Image priority src={githubImage} alt='Github icon' width={100} height={100}/>
        Github repository of the API
      </a>
    </footer>
  )
}
