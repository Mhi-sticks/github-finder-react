import spinner from '../layout/spinner.gif'

function Spinner() {
  return (
    <div className='w-100 mt-10 dark:bg-slate-900'>
      <img className='text-center mx-auto' width={50} src={spinner} alt="Loading..." />
    </div>
  )
}

export default Spinner
