import { Link, NavLink } from 'react-router-dom';

import { Button, Input } from './components';
export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <VideoSection />
      </main>
    </>
  );
}

const Hero = () => {
  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <>
      <section className='lg:pl-[160px] lg:pb-[195px] lg:pt-[72px]  bg-hero bg-no-repea relative'>
        <header>
          <nav className=''>
            <Link to='/'>
              <img
                src='/images/afen.png'
                alt='logoIcon'
                draggable={false}
                className='active:scale-95 transition-all duration-300'
              />
            </Link>
          </nav>
        </header>
        <div className='flex flex-col items-start'>
          <h3
            style={{ fontFamily: 'Cocogoose Classic Trial, sans-serif' }}
            className='mt-[250px] font-extrabold lg:leading-[69.6px] text-secondary lg:max-w-[627px] lg:text-[50px]   '
          >
            Building the Future, One Block at a Time…
          </h3>
          <p className='text-tet font-normal lg:leading-[42px] lg:text-[28px] max-w-[692px] mt-4'>
            At AFEN, we are dedicated to creating a dynamic global ecosystem
            that fosters disruptive innovation and community advancement.
          </p>
          <p className='text-tet font-normal lg:leading-[42px] lg:text-[28px] max-w-[442px] mt-10'>
            Be one of the first to receive our newest updates.
          </p>
          <form
            onSubmit={handleSubmit}
            className='flex flex-row gap-[14px] items-center mt-4'
          >
            <fieldset>
              <Input placeholder='Type your email here' type='email' />
            </fieldset>
            <Button className='rounded-[8px] lg:px-[26px] lg:py-4'>
              Join now !!
            </Button>
          </form>
        </div>
      </section>
    </>
  );
};

function VideoSection() {
  return (
    <section className='pl-[108px] flex flex-row bg-white lg:py-[120px]'>
      <div className='bg-[#C4C4C4] w-[702px] h-[496px]'></div>
    </section>
  );
}
