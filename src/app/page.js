import Link from "next/link";
import Image from 'next/image';
import banner from '../../public/banner-stack.png';

export default function Home() {
    return(
    <section className='container mx-auto py-8'>
        <div className='flex flex-col items-center md:gap-8 md:flex-row py-8 md:py-16'>
            <div className="w-full md:w-[60%] text-center md:text-left">
                <h1 className='text-3xl font-extrabold leading-tight sm:text-4xl md:text-6xl mb-4'>
                    <span>Build Your Ideal</span> <br /> <span className='text-gradient-custom'>Development Stack</span>
                </h1>
                <p className='text-sm md:text-[18px] sm:text-lg leading-relaxed text-gray-600 max-w-xl md:mx-0 pb-10'>Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your next project.</p> 
                <div className="flex w-full flex-row gap-2 items-center justify-center md:justify-start sm:gap-4 mt-4">
                  <Link href={'/technologies'}>
                      <button className="btn-gradient h-10 w-44 rounded-lg px-4 text-xs font-semibold shadow-md transition hover:opacity-90 cursor-pointer">Explore Technologies
                    </button>
                  </Link>
                  <button className="h-10 w-44 rounded-lg border border-gray-200 bg-white px-4 text-xs font-normal text-gray-800 shadow-sm transition hover:bg-gray-50 cursor-pointer">
                    Learn more
                  </button>
                </div>
            </div>
            <div className="w-full md:w-[40%]">
                <Image src={banner.src} alt="" className="mx-auto max-w-md" width={400} height={300}  />
            </div>
        </div>
    </section>
  );
}
