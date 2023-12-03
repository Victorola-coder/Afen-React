import { Link, NavLink } from 'react-router-dom';

import { Button, Input } from '../components';
export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <VideoSection />
        <Ecosystem />
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
                className='transition-all duration-300 active:scale-95'
              />
            </Link>
          </nav>
        </header>
        <div className='flex flex-col items-start'>
          <h3
            style={{ fontFamily: 'Cocogoose Classic Trial, sans-serif' }}
            className='mt-[250px] font-extrabold lg:leading-[89.6px] text-secondary lg:max-w-[627px] lg:text-[64px]   '
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
    <section className='px-[100px] flex flex-row gap-[106px] bg-white lg:py-[120px]'>
      <div className='bg-[#C4C4C4] w-[702px] h-[496px]'></div>
      <div className='pr-[05px]'>
        <h3 className='text-primary font-[850] text-[64px] font-coc lg:leading-[89.6px] uppercase  '>
          About AFEN
        </h3>
        <p className='text-grey font-normal font-sat lg:text-[24px] lg:max-w-[604px] lg:leading-[36px]'>
          At AFEN Blockchain Network, we lead the charge in bringing Blockchain
          technology to the forefront of innovation in Africa and beyond.
          <p className='mt-20'>
            Our journey started with a mission to spread awareness of
            Blockchain's potential, and today, we stand as a dynamic launchpad
            for cutting-edge technologies, pushing the boundaries of what's
            achievable in the world of Tech.
          </p>
        </p>
      </div>
    </section>
  );
}

function Ecosystem() {
  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <section className='px-[160px] py-[120px]'>
      <h3 className='text-secondary lg:font-[850] font-coc uppercase lg:leading-[89.6px] lg:text-[64px] '>
        AFEN Ecosystem
      </h3>
      <p className='font-normal text-white leading-[48px] text-[32px] font-sat  lg:max-w-[1194px]'>
        Envision a future where technology transforms lives, innovation is
        boundless, and economic prosperity is within reach for everyone.
      </p>
      <div className='rounded-[12px] border-solid border border-white lg:pr-[91px] lg:pl-[103px] lg:pt-[107px] lg:pb-[115px] flex flex-row items-center  lg:mt-[60px] lg:gap-[133px] '>
        <div>
          <figure>
            <img
              src='/images/bloom illustt.png'
              alt='bloom illustt'
              draggable={false}
              className=''
            />
          </figure>
        </div>
        <div>
          <figure>
            <img
              src='/images/bloom.png'
              alt='bloom logo'
              draggable={false}
              className=''
            />
          </figure>
          <p className='text-[#A1A1AA] leading-[42px] font-normal lg:mt-4 lg:text-[28px] font-sat lg:max-w-[613px] '>
            Immerse yourself in the ever-evolving landscape of emerging
            technologies through curated trainings, news updates and insightful
            market research.
          </p>
          <p className='text-normal leading-[42px] max-qw-'>
            Be one of the pioneers to receive our newest updates.
          </p>
          <form
            onSubmit={handleSubmit}
            className='flex flex-row gap-[14px] items-center mt-4'
          >
            <fieldset>
              <Input placeholder='Type your email here' type='email' />
            </fieldset>
            <Button className=' whitespace-nowrap rounded-[8px] lg:px-[26px] lg:py-4'>
              subscribe
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
