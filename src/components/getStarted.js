import Image from 'next/image';

export default function GetStarted() {
    return (
        <div id='gettingstarted' className="bg-[#efeff4] py-28">
            <div className="text-center max-w-[576px] mx-auto">
                <div
                    className="text-center text-[1.125rem]"
                    style={{
                        backgroundImage:
                            'linear-gradient(90deg, #5470ff, #d96eff 50%, #ff9344)',
                        '-webkitBackgroundClip': 'text',
                        '-webkit-text-fill-color': 'transparent',
                    }}
                >
                    Get Started Now
                </div>
                <h2 className="mt-4 text-[2.75rem] md:text-[3rem] leading=[1.35] tracking-[-1px] font-[700]">
                    Experience the power of <br />
                    our app today
                </h2>
                <p className="mt-2 text-[#575b61]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    varius enim in eros elementum tristique.
                </p>

                <div className="flex items-center gap-4 justify-center mt-4">
                    <a href="#" className="button-download w-inline-block">
                        <Image
                            src="https://assets.website-files.com/63b4516eb9bb42efbdeb1fe9/63b8391d27a2690fac50baab_app%20store.png"
                            loading="lazy"
                            alt=""
                            width={144}
                            height={48}
                            className="download-image align-center"
                        />
                    </a>
                    <a href="#" className="button-download w-inline-block">
                        <Image
                            src="https://assets.website-files.com/63b4516eb9bb42efbdeb1fe9/63b8391d5fe83230f7e419d5_google%20play.png"
                            loading="lazy"
                            alt=""
                            width={144}
                            height={48}
                            className="download-image align-center"
                        />
                    </a>
                </div>
            </div>


            <div
                data-w-id="2a754882-0008-23d6-2af0-74c2391f31cf"
                className="mt-10"
            >
                <div className="flex justify-center items-center gap-8 overflow-hidden">
                    <div
                        className="hidden lg:block download-small-image-wrapper image-1"
                        style={{
                            willChange: 'transform',
                            transform:
                                'translate3d(0px, -1.5584%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
                            transformStyle: 'preserve-3d',
                        }}
                    >
                        <Image
                            src="https://assets.website-files.com/63b4516eb9bb42efbdeb1fe9/63b85b5ddd97c143a6ce4b0b_app-screenshot%2006.jpg"
                            loading="lazy"
                            sizes="(max-width: 991px) 100vw, (max-width: 1919px) 15vw, 16vw"
                            srcSet="https://assets.website-files.com/63b4516eb9bb42efbdeb1fe9/63b85b5ddd97c143a6ce4b0b_app-screenshot%2006-p-500.jpg 500w, https://assets.website-files.com/63b4516eb9bb42efbdeb1fe9/63b85b5ddd97c143a6ce4b0b_app-screenshot%2006.jpg 600w"
                            alt=""
                            width={450}
                            height={400}
                            className="rounded-[15px] md:rounded-[30px] h-[18rem] opacity-60"
                        />
                    </div>
                    <div
                        className="hidden md:block download-small-image-wrapper image-2"
                        style={{
                            willChange: 'transform',
                            transform:
                                'translate3d(0px, -2.3376%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
                            transformStyle: 'preserve-3d',
                        }}
                    >
                        <Image
                            src="https://assets.website-files.com/63b4516eb9bb42efbdeb1fe9/63b85b5df731d930f0d297f4_app-screenshot%2005.jpg"
                            loading="lazy"
                            sizes="(max-width: 767px) 100vw, (max-width: 991px) 19vw, (max-width: 1919px) 15vw, 16vw"
                            srcSet="https://assets.website-files.com/63b4516eb9bb42efbdeb1fe9/63b85b5df731d930f0d297f4_app-screenshot%2005-p-500.jpg 500w, https://assets.website-files.com/63b4516eb9bb42efbdeb1fe9/63b85b5df731d930f0d297f4_app-screenshot%2005.jpg 600w"
                            alt=""
                            width={450}
                            height={400}
                            className="rounded-[15px] md:rounded-[30px] h-[18rem] opacity-60 -mt-48"
                        />
                    </div>
                    <div
                        className="download-small-image-wrapper image-3"
                        style={{
                            willChange: 'transform',
                            transform:
                                'translate3d(0px, -3.1168%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
                            transformStyle: 'preserve-3d',
                        }}
                    >
                        <Image
                            src="https://assets.website-files.com/63b4516eb9bb42efbdeb1fe9/63b85b5da4e49c5697977999_app-screenshot%2004.jpg"
                            loading="lazy"
                            sizes="(max-width: 479px) 33vw, (max-width: 767px) 35vw, (max-width: 991px) 19vw, (max-width: 1919px) 15vw, 16vw"
                            srcSet="https://assets.website-files.com/63b4516eb9bb42efbdeb1fe9/63b85b5da4e49c5697977999_app-screenshot%2004-p-500.jpg 500w, https://assets.website-files.com/63b4516eb9bb42efbdeb1fe9/63b85b5da4e49c5697977999_app-screenshot%2004.jpg 600w"
                            alt=""
                            width={450}
                            height={400}
                            className="rounded-[15px] md:rounded-[30px] h-[18rem] opacity-60 -mt-20"
                        />
                    </div>
                    <div className="download-image-wrapper">
                        <Image
                            src="https://assets.website-files.com/63b4516eb9bb42efbdeb1fe9/63b83ff0a4a22b69375bf9cf_iPhone%2002.png"
                            loading="lazy"
                            alt=""
                            width={900}
                            height={1900}
                            className=""
                        />
                    </div>
                    <div
                        className="download-small-image-wrapper image-5"
                        style={{
                            willChange: 'transform',
                            transform:
                                'translate3d(0px, -2.3376%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
                            transformStyle: 'preserve-3d',
                        }}
                    >
                        <Image
                            src="https://assets.website-files.com/63b4516eb9bb42efbdeb1fe9/63b85b5da4459b4d34366f15_app-screenshot%2003.jpg"
                            loading="lazy"
                            sizes="(max-width: 479px) 33vw, (max-width: 767px) 35vw, (max-width: 991px) 19vw, (max-width: 1919px) 15vw, 16vw"
                            srcSet="https://assets.website-files.com/63b4516eb9bb42efbdeb1fe9/63b85b5da4459b4d34366f15_app-screenshot%2003-p-500.jpg 500w, https://assets.website-files.com/63b4516eb9bb42efbdeb1fe9/63b85b5da4459b4d34366f15_app-screenshot%2003.jpg 600w"
                            alt=""
                            width={450}
                            height={400}
                            className="rounded-[15px] md:rounded-[30px] h-[18rem] opacity-60"
                        />
                    </div>
                    <div
                        className="hidden md:block download-small-image-wrapper image-6"
                        style={{
                            willChange: 'transform',
                            transform:
                                'translate3d(0px, -3.1168%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
                            transformStyle: 'preserve-3d',
                        }}
                    >
                        <Image
                            src="https://assets.website-files.com/63b4516eb9bb42efbdeb1fe9/63b85b5dea5f488478303f15_app-screenshot%2002.jpg"
                            loading="lazy"
                            sizes="(max-width: 767px) 100vw, (max-width: 991px) 19vw, (max-width: 1919px) 15vw, 16vw"
                            srcSet="https://assets.website-files.com/63b4516eb9bb42efbdeb1fe9/63b85b5dea5f488478303f15_app-screenshot%2002-p-500.jpg 500w, https://assets.website-files.com/63b4516eb9bb42efbdeb1fe9/63b85b5dea5f488478303f15_app-screenshot%2002.jpg 600w"
                            alt=""
                            width={450}
                            height={400}
                            className="rounded-[15px] md:rounded-[30px] h-[18rem] opacity-60 -mt-48"
                        />
                    </div>
                    <div
                        className="hidden lg:block download-small-image-wrapper image-7"
                        style={{
                            willChange: 'transform',
                            transform:
                                'translate3d(0px, -1.5584%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
                            transformStyle: 'preserve-3d',
                        }}
                    >
                        <Image
                            src="https://assets.website-files.com/63b4516eb9bb42efbdeb1fe9/63b85b5db2b6629b5993e8e4_app-screenshot%2001.jpg"
                            loading="lazy"
                            sizes="(max-width: 991px) 100vw, (max-width: 1919px) 15vw, 16vw"
                            srcSet="https://assets.website-files.com/63b4516eb9bb42efbdeb1fe9/63b85b5db2b6629b5993e8e4_app-screenshot%2001-p-500.jpg 500w, https://assets.website-files.com/63b4516eb9bb42efbdeb1fe9/63b85b5db2b6629b5993e8e4_app-screenshot%2001.jpg 600w"
                            alt=""
                            width={450}
                            height={400}
                            className="rounded-[15px] md:rounded-[30px] h-[18rem] opacity-60 -mt-20"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
