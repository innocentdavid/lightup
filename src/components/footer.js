/* eslint-disable @next/next/no-html-link-for-pages */
import Image from 'next/image';

export default function Footer() {
    return (
        <div className="bg-[#26282f] text-white pt-28 font-manrope">
            <div id="contact" className="text-center max-w-[576px] mx-auto px-[5%]">
                <div
                    className="text-center text-[1.125rem]"
                    style={{
                        backgroundImage:
                            'linear-gradient(90deg, #5470ff, #d96eff 50%, #ff9344)',
                        '-webkitBackgroundClip': 'text',
                        '-webkit-text-fill-color': 'transparent',
                    }}
                >
                    Our Newsletter
                </div>
                <h2 className="mt-4 text-[2.75rem] md:text-[3rem] leading=[1.35] tracking-[-1px] font-[700]">
                    Stay in the loop
                </h2>
                <p className="mt-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
                </p>

                <div className="my-20">
                    <div className="my-4 flex items-center bg-white w-fit mx-auto rounded-full pl-4 pr-1 py-1 relative mb-[70px]">
                        <Image src="https://assets.website-files.com/63b4516eb9bb42efbdeb1fe9/63b861349483980ee6d1b00c_arrow-gradients.svg" loading="lazy" alt='' width={36} height={61} className="absolute -top-16 -left-5 md:-left-10" />

                        <input
                            type="text"
                            placeholder='Enter your email'
                            className="bg-transparent w-40 sm:w-64 md:w-96 outline-none text-black"
                        />
                        <button className="w-12 h-12 rounded-full bg-[#26282f]">{`->`}</button>
                    </div>
                    <p className="mt-2 text-[.8rem]">
                        Join 100,000+ other customers staying always updated.
                    </p>
                </div>
            </div>

            <hr className="border border-gray-400" />

            <footer className="max-w-[85rem] mx-auto px-[5%]">
                <div className="flex py-16 gap-10 flex-col lg:flex-row">
                    <div
                        id="w-node-_7e43cb4f-091a-0d19-3c39-ec8332fe7075-32fe7070"
                        className="flex-[3] max-w-[400px] mx-auto lg:mx-0 text-center lg:text-left flex flex-col items-center lg:items-start"
                    >
                        <a
                            href="/"
                            aria-current="page"
                            className="footer-logo-link w-inline-block w--current"
                        >
                            <Image
                                src="https://assets.website-files.com/63b4516eb9bb42efbdeb1fe9/63b4597aa9a3416b00ed2734_logo-white.svg"
                                loading="lazy"
                                alt=""
                                width={136}
                                height={48}
                                className="footer-logo"
                            />
                        </a>
                        <div
                            id="w-node-_7e43cb4f-091a-0d19-3c39-ec8332fe7078-32fe7070"
                            className="mt-3 text-color-white"
                        >
                            Lorem ipsum dolor sit amet suspendisse varius. Duis cursus, mi
                            quis viverra ornare.
                        </div>
                        <div className="flex items-center gap-4 mt-4">
                            <a
                                href="https://www.facebook.com"
                                className="footer-social-link w-inline-block"
                            >
                                <Image
                                    src="https://assets.website-files.com/63b4516eb9bb42efbdeb1fe9/63b4516eb9bb4232b7eb1ffe_Facebook.svg"
                                    loading="lazy"
                                    alt=""
                                    width={24}
                                    height={24}
                                    className="icon-medium"
                                />
                            </a>
                            <a
                                href="https://www.instagram.com"
                                className="footer-social-link w-inline-block"
                            >
                                <Image
                                    src="https://assets.website-files.com/63b4516eb9bb42efbdeb1fe9/63b4516eb9bb427da0eb1ffa_Instagram.svg"
                                    loading="lazy"
                                    alt=""
                                    width={24}
                                    height={24}
                                    className="icon-medium"
                                />
                            </a>
                            <a
                                href="https://twitter.com"
                                className="footer-social-link w-inline-block"
                            >
                                <Image
                                    src="https://assets.website-files.com/63b4516eb9bb42efbdeb1fe9/63b4516eb9bb4230dbeb2000_Twitter.svg"
                                    loading="lazy"
                                    alt=""
                                    width={24}
                                    height={24}
                                    className="icon-medium"
                                />
                            </a>
                        </div>
                    </div>

                    <div className="flex flex-1">
                        <div className="flex-1 flex md:justify-center text-sm">
                            <div className="flex flex-col">
                                <div className="mb-6 text-[1rem]">LightUp</div>

                                <a href="/about" className="text-[#d6dae0] mb-4">
                                    Company
                                </a>
                                <a href="#details" className="text-[#d6dae0] mb-4">
                                    Getting Started
                                </a>
                                <a href="#pricing" className="text-[#d6dae0] mb-4">
                                    Pricing
                                </a>
                                <a href="/contact" className="text-[#d6dae0] mb-4">
                                    Contact
                                </a>
                                <a href="#download" className="text-[#d6dae0]">
                                    Download
                                </a>
                            </div>
                        </div>

                        <div className="flex-1 flex md:justify-center text-sm">
                            <div className="flex flex-col">
                                <div className="mb-6 text-[1rem]">Information</div>
                                <div className="space-small" />
                                <a
                                    href="/information/style-guide"
                                    className="text-[#d6dae0] mb-4"
                                >
                                    Style Guide
                                </a>
                                <a href="/information/license" className="text-[#d6dae0] mb-4">
                                    License
                                </a>
                                <a href="/information/changelog" className="text-[#d6dae0] mb-4">
                                    Changelog
                                </a>
                                <a href="/404" className="text-[#d6dae0] mb-4">
                                    404
                                </a>
                                <a href="/401" className="text-[#d6dae0]">
                                    Protected
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="py-10 text-sm text-center lg:text-left">
                    <div className="footer-bottom-text">
                        © 2023 LightUp by{' '}
                        <a
                            href="https://mariamarin.webflow.io/"
                            className="footer-bottom-text-link"
                        >
                            Maria Marin
                        </a>
                        . Powered by{' '}
                        <a href="https://webflow.com/" className="footer-bottom-text-link">
                            Webflow
                        </a>
                        .
                    </div>
                </div>
            </footer>
        </div>
    );
}
