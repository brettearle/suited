export default function Navbar(): JSX.Element {
  return (
    <nav className='flex items-center justify-between p-4'>
      <h1 className='text-2xl font-bold'>Suited</h1>
      <ul className='flex items-center justify-between space-x-4'>
        <a href='/' className='text-xl font-bold'>
          Home
        </a>
        <a href='/rules' className='text-xl font-bold'>
          Rules
        </a>
        <a href='/powers' className='text-xl font-bold'>
          Powers
        </a>
      </ul>
    </nav>
  )
}
