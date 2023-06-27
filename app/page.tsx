export default function Home(): JSX.Element {
  return (
    <main className='flex min-h-screen flex-col items-center p-24'>
      <h1 className='text-4xl font-bold'>Suited</h1>
      <section className='flex z-10 w-full max-w-5xl items-center justify-center font-mono text-sm lg:flex'>
        <h2 className='text-2xl font-bold m-4'>What it is?</h2>
      </section>
      <section className='flex z-10 w-full max-w-5xl items-center justify-center font-mono text-sm lg:flex'>
        <h2 className='text-2xl font-bold m-4'>Play More</h2>
      </section>
    </main>
  )
}
