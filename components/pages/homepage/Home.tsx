import React from 'react'
import HeroSection from './hero/HeroSection';
import LocationSelection from './LocationSelection';
import ViewMenu from './ViewMenu';
import ParallaxSections from '@/components/ui/ParallaxSection';
import { videoUrlCloudinary } from '@/constants';
import { fraunces } from '@/fonts/font';
import { Link } from '@/navigation';
import SocialSection from './socialsection/SocialSection';
import TrendingDishSection from './trendingdishsection/TrendingDish';
import ShopSection from './shopSection/ShopSection';

type HomeProps = {
    country?: string
}

export default function Home({ country = 'kh' }: HomeProps) {
    return (
        <main>
            <HeroSection country={country}/>
            <section className="flex flex-col xl:flex-row xl:min-h-[95dvh]">
                <div className="w-full">
                    <LocationSelection />
                </div>
                <div className="w-full bg-mainBg-color">
                    <ViewMenu />
                </div>
            </section>
            <ParallaxSections
                isVideo
                parallaxBg={videoUrlCloudinary + "/xjcd8vvp7zw0sjtqgyfm"}
            >
                <div className="xl:p-10 p-5 xl:h-[550px] h-[450px] text-mainBg-color">
                    <div className="size-full flex flex-col xl:justify-between">
                        <div className="xl:space-y-9 space-y-3">
                            <h1 className={`${fraunces.className} xl:text-7xl text-4xl tracking-wider`}>Your <br className="xl:hidden block tracking-wider" /> [Informations]</h1>
                            <p className="xl:text-3xl text-xl lg:w-[40%]">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum quae eum quaerat odit, hic sequi esse? Voluptate vitae quae vel tempora. Aut, perspiciatis! Vero doloremque perferendis, labore neque distinctio laudantium.</p>
                        </div>
                        <Link
                            href={''}
                            className="uppercase xl:text-2xl xl:mt-0 mt-14 text-xl underline underline-offset-4 xl:underline-offset-8 decoration-2 block"
                        >
                            View more
                        </Link>
                    </div>
                </div>
            </ParallaxSections>
            <SocialSection />
            <TrendingDishSection />
            <ShopSection />
        </main>
    );
}
