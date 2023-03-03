import Image from "next/image";

export default function EasyPhotoEditing() {
    return (
        <div id="features" className="bg-[#efeff4] py-28">
            <div className="sticky top-6 z-0 text-center max-w-[576px] mx-auto">
                <div
                    className="text-center text-[1.125rem]"
                    style={{
                        backgroundImage:
                            'linear-gradient(90deg, #5470ff, #d96eff 50%, #ff9344)',
                        '-webkitBackgroundClip': 'text',
                        '-webkit-text-fill-color': 'transparent',
                    }}
                >
                    Easy Photo Editing
                </div>
                <h2 className="mt-4 text-[2.75rem] md:text-[3rem] leading=[1.35] tracking-[-1px] font-[700]">
                    Streamline <br />your editing
                </h2>
            </div>

            <div className="sticky top-16 z-10 bg-[#efeff4]">
                <div className="flex justify-center">
                    <Image src="https://assets.website-files.com/63b4516eb9bb42efbdeb1fe9/63b853b32be2890e23734f62_iPhone%2007-p-500.png" alt="" width={456.3} height={912.5} className="" />
                </div>

                <div className="md:hidden px-8 max-w-[500px] mx-auto w-full flex flex-col gap-5">
                    <p className="text-justify">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
                    </p>
                    <p className="text-justify">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
                    </p>
                    <div
                        className="text-center text-[2rem]"
                        style={{
                            backgroundImage:
                                'linear-gradient(90deg, #5470ff, #d96eff 50%, #ff9344)',
                            '-webkitBackgroundClip': 'text',
                            '-webkit-text-fill-color': 'transparent',
                        }}
                    >
                        Try for free and get 300+ filters
                    </div>
                    <p className="text-justify">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
                    </p>
                </div>
            </div>
        </div>
    );
}
