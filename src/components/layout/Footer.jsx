import {FaGithub} from 'react-icons/fa'
function Footer() {
const footerYear = new Date().getFullYear()
  return (
    <footer className="footer p-10 bg-gray-700 text-primary-content footer-center dark:bg-slate-900">
    <div className="">
        <svg></svg>
        <FaGithub className="text-3xl"/>
        <p>Built by:  <span className='text-indigo-600'>Daniel </span> Copyright &copy; {footerYear} All rights reserved</p>
    </div>
    </footer>
  )
}

export default Footer
