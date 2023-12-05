import { Link } from 'react-router-dom';

import { Button, Input } from '../components';
import { IgIcon, LinkedinIcon, XIcon, YtIcon } from '../components/svg';
export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <VideoSection />
        <Ecosystem />
        <AfenToken />
        <AfenLaunchPad />
        <Portfolio />
        <Footer />
      </main>
    </>
  );
}

const Hero = () => {

  return (
    <>
      <section className='px-[20px] pt-[69px] pb-[81px] lg:pl-[160px] lg:pb-[195px] lg:pt-[72px] bg-center bg-cover bg-[url(/images/hero.png)] bg-hero bg-no-repeat relative'>
        <header>
          <nav className=''>
            <Link to='/'>
              <img
                src='/images/afen.png'
                alt='logoIcon'
                draggable={false}
                className='w-[103px] h-[40px w-[103px] lg:w-[205px] lg:h-[80px] transition-all duration-300 active:scale-95'
              />
            </Link>
          </nav>
        </header>
        <div className='flex flex-col items-start'>
          <h3
            style={{ fontFamily: 'Cocogoose Classic Trial, sans-serif' }}
            className='mt-[191px] lg:mt-[250px] font-extrabold lg:leading-[89.6px] text-secondary lg:max-w-[627px] lg:text-[64px] text-[32px]'
          >
            Building the Future, One Block at a Time…
          </h3>
          <p className='text-tet font-normal text-[20px] lg:leading-[42px] lg:text-[28px] max-w-[692px] mt-4'>
            At AFEN, we are dedicated to creating a dynamic global ecosystem
            that fosters disruptive innovation and community advancement.
          </p>
          <p className='text-tet font-normal text-[20px] lg:leading-[42px] lg:text-[28px] max-w-[442px] mt-10'>
            Be one of the first to receive our newest updates.
          </p>
          <Form />
        </div>
      </section>
    </>
  );
};

const Form = () => {

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <form
      onSubmit={handleSubmit}
      className='flex flex-col lg:flex-row gap-[14px] mt-4 w-full max-w-[550px]'
    >
      <fieldset className='flex-1'>
        <Input placeholder='Type your email here' type='email' />
      </fieldset>
      <Button className='rounded-[8px] px-[26px] py-[16px] lg:py-4 max-w-max'>
        Join now !!
      </Button>
    </form>
  )
}

function VideoSection() {
  return (
    <section className='px-[20px] lg:px-[100px] py-[20px] lg:py-[120px] grid lg:grid-cols-2 gap-[20px] lg:gap-[106px] bg-white'>
      <div className='bg-[#C4C4C4] h-[353px] lg:h-[496px]'>
        <iframe src="https://drive.google.com/file/d/17_Llv1rsba88-XIwTNi90APKwlUj-_Tm/preview" width="100%" height="100%" allow="autoplay"></iframe>
      </div>
      <div className='pr-[05px]'>
        <h3 className='text-primary font-[850] text-[32px] lg:text-[64px] font-coc lg:leading-[89.6px] uppercase  '>
          About AFEN
        </h3>
        <p className='text-grey font-normal font-sat text-[20px] max-w-[353px] md:text-[24px] md:max-w-[604px] lg:leading-[36px]'>
          At AFEN Blockchain Network, we lead the charge in bringing Blockchain
          technology to the forefront of innovation in Africa and beyond.
          <p className='mt-5 md:mt-[10] lg:mt-20'>
            Our journey started with a mission to spread awareness of
            Blockchain&rsquo;s potential, and today, we stand as a dynamic
            launchpad for cutting-edge technologies, pushing the boundaries of
            what&rsquo;s achievable in the world of Tech.
          </p>
        </p>
      </div>
    </section>
  );
}

function Ecosystem() {

  return (
    <section className='px-[20px] py-[40px] lg:px-[160px] lg:py-[120px]'>
      <h3 className='text-secondary text-[32px] leading-[44.8px] font-[850] font-coc uppercase lg:leading-[89.6px] lg:text-[64px] '>
        AFEN Ecosystem
      </h3>
      <p className='font-normal text-white text-[20px] max-w-[353px] leading-[30px] lg:leading-[48px] md:text-[32px] font-sat lg:max-w-[1194px] lg:pb-[60px] pb-[20px]'>
        Envision a future where technology transforms lives, innovation is
        boundless, and economic prosperity is within reach for everyone.
      </p>
      <div className='grid gap-[60px]'>
        <div className='rounded-[12px] border-solid border border-white px-[20px] lg:px-[80px] py-[22px] lg:pt-[107px] lg:pb-[115px] flex flex-col lg:flex-row items-center lg:mt-[60px] gap-[23px] lg:gap-[133px] '>
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
            <p className='text-[#A1A1AA] leading-[30px] lg:leading-[42px] font-normal lg:mt-4 lg:text-[28px] font-sat lg:max-w-[613px] '>
              Immerse yourself in the ever-evolving landscape of emerging
              technologies through curated trainings, news updates and insightful
              market research.
            </p>
            <p className='text-normal leading-[42px] max-qw-'>
              Be one of the pioneers to receive our newest updates.
            </p>
            <Form />
          </div>
        </div>
        <div className='rounded-[12px] border-solid border border-white px-[20px] lg:px-[80px] py-[20px] lg:pt-[107px] lg:pb-[115px] flex flex-col lg:flex-row items-center lg:mt-[60px] gap-[20px] lg:gap-[133px] '>
          <div>
            <figure>
              <img
                src='/images/nifty.png'
                alt='bloom illustt'
                draggable={false}
                className=''
              />
            </figure>
          </div>
          <div>
            <figure>
              <img
                src='/images/nifty-logo.svg'
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
            <p className='text-normal leading-[30px] lg:leading-[42px] pb-2'>
              Be one of the pioneers to receive our newest updates.
            </p>
            <button className='px-[32px] lg:px-[52px] py-[16px] lg:py-[20px] bg-[#FFD92D] text-primary lg:text-[24px] rounded-[8px] font-semibold'>
              More info
            </button>
          </div>
        </div>
        <div className='rounded-[12px] border-solid border border-white px-[20px] lg:px-[80px] py-[20px] lg:py-[128px] flex flex-col lg:flex-row lg:items-center gap-[23px] lg:gap-[133px]'>
          <div>
            <h1 className='text-[#FFD92D] font-bold text-[32px] lg:text-[48px] mb-[20px]'>METACITTI</h1>
            <p className='text-[#A1A1AA] leading-[42px] font-normal lg:mt-4 lg:text-[28px] font-sat lg:max-w-[613px] mb-[30px]'>
              Be one of the pioneers to receive our newest updates.
            </p>
            <button className='px-[32px] lg:px-[52px] py-[16px] lg:py-[20px] bg-[#FFD92D] text-primary lg:text-[24px] rounded-[8px] font-semibold'>
              Comming Soon
            </button>
          </div>
          <div className='order-first lg:order-last'>
            <figure>
              <img
                src='/images/metacitti.svg'
                alt='bloom illustt'
                draggable={false}
                className=''
              />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}

const AfenToken = () => {
  return (
    <div className='bg-white'>
      <section className='w-full px-[20px] lg:px-[160px] py-[40px] lg:py-[120px] max-w-max mx-auto grid lg:grid-cols-2 gap-[121px]'>
        <figure>
          <img
            src='/images/afentoken.svg'
            alt=''
            className='w-[353px] lg:w-full '
          />
        </figure>
        <div className='flex'>
          <div className='my-auto flex flex-col gap-[24px]'>
            <h1 className='text-primary font-extrabold text-[32px] lg:text-[40px]'>
              $AFEN TOKEN
            </h1>
            <p className='text-[28px] leading-[42px] text-grey'>
              The native $AFEN token is the heartbeat of our ecosystem. With a
              comprehensive tokenomics structure, we offer token holders the
              chance to stake and earn rewards.
            </p>
            <div className='flex flex-col lg:flex-row gap-[16px]'>
              <button className='whitespace-nowrap px-[32px] lg:px-[52px] py-[16px] lg:py-[20px] bg-primary text-white lg:text-[24px] rounded-[8px] max-w-max'>
                Trade $AFEN
              </button>
              <button className='whitespace-nowrap px-[32px] lg:px-[52px] py-[16px] lg:py-[20px] text-primary border-[1px] border-primary bg-white lg:text-[24px] rounded-[8px] max-w-max'>
                Stake $AFEN - Coming Soon
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const AfenLaunchPad = () => {
  return (
    <div className='bg-white'>
      <section className='w-full px-[20px] lg:px-[160px] py-[40px] lg:py-[120px] max-w-max mx-auto grid lg:grid-cols-2 gap-[121px]'>
        <div className='flex'>
          <div className='my-auto flex flex-col gap-[32px]'>
            <header>
              <h1 className='text-primary font-extrabold text-[40px]'>
                Apply to AFEN Launchpad
              </h1>
              <p className='text-[#AAAAAA] text-[32px] leding-[48px]'>
                Nurturing Innovation, Empowering Success…
              </p>
            </header>
            <p className='text-[28px] leading-[42px] text-grey'>
              AFEN serves as a dynamic launchpad, dedicated to propelling
              innovative startups towards success by offering a comprehensive
              ecosystem of cutting-edge infrastructure, advisory services, and a
              vibrant community.
            </p>
            <div className='flex gap-[16px]'>
              <Link
                to='https://forms.gle/aCNkby9K8nY2i5KU8'
                rel='noreferrer noopener'
                target='_blank'
              >
                <button className='px-[32px] lg:px-[52px] py-[16px] lg:py-[20px] bg-primary text-white text-[24px] rounded-[8px]'>
                  Apply now
                </button>
              </Link>
            </div>
          </div>
        </div>
        <figure>
          <img src='/images/afenlaunchpad.svg' alt='' className='w-full' />
        </figure>
      </section>
    </div>
  );
}

const Portfolio = () => {
  return (
    <div className='bg-white'>
      <section className='py-[96px] px-[20px] lg:px-[160px] py-[40px] lg:py-[120px] max-w-max mx-auto grid place-items-center text-center gap-[40px]'>
        <header>
          <h1 className='text-[#222222] text-[40px] leading-[60px] font-bold'>
            Our portfolio highlights
          </h1>
        </header>
        <div className='flex gap-10 flex-wrap justify-around'>
          <Link
            to='https://www.digicask.finance'
            target='_blank'
            rel='noreferer noopener'
          >
            <figure>
              <img
                className=''
                draggable={false}
                src='/images/DigiCase-logo.svg'
                alt='DigiCase'
              />
            </figure>
          </Link>
          <Link
            to='https://www.creosxyz.com'
            target='_blank'
            rel='noreferer noopener'
          >
            <figure>
              <img
                className=''
                draggable={false}
                src='/images/Creos-logo.svg'
                alt='Creos'
              />
            </figure>
          </Link>
          <Link to='' target='_blank' rel='noreferer noopener'>
            <figure>
              <img
                className='https://pouchfi.io'
                draggable={false}
                src='/images/PouchFi-logo.svg'
                alt='PouchFi'
              />
            </figure>
          </Link>
          <Link
            to='https://www.digigold.finance'
            rel='noreferer noopener'
            target='_bkank'
          >
            <figure>
              <img
                className=''
                draggable={false}
                src='/images/DigiGold-logo.svg'
                alt='DigiGold'
              />
            </figure>
          </Link>
        </div>
      </section>
    </div>
  )
}

const Footer = () => {
  return (
    <footer className='py-[75px] px-[20px] lg:px-[160px] grid place-items-center text-center gap-[40px]'>
      <div className='flex flex-wrap justify-around gap-[33px]'>
        <Link to=''>
          <figure>
            <XIcon />
          </figure>
        </Link>
        <Link>
          <figure>
            <IgIcon />
          </figure>
        </Link>
        <Link>
          <figure>
            <YtIcon />
          </figure>
        </Link>
        <Link>
          <figure>
            <LinkedinIcon />
          </figure>
        </Link>
      </div>
      <h3 className='text-white text-[20px]'>
        Ⓒ AFEN | All rights reserved 2021 -{' '}
        <span> {new Date().getFullYear()}</span>
      </h3>
    </footer>
  );
}
