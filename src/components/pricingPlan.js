import Image from 'next/image';

export default function PricingPlan() {
    return (
        <div id='pricing' className="bg-[#26282f] text-white py-28 px-[5%] font-manrope">
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
                    Pricing Plans
                </div>
                <h2 className="mt-4 text-[2.75rem] md:text-[3rem] leading=[1.35] tracking-[-1px] font-[700]">
                    Affordable pricing plans <br /> for all creators
                </h2>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-8 pricing-component max-w-[75rem] mx-auto mt-10">
                <div
                    id="w-node-c4b9d299-e5be-a932-3a65-dc2b9976b1d7-1aeb1fea"
                    className="flex justify-between flex-col rounded-[1.5rem] p-8 bg-[#efeff4] text-[#26282f] gap-6 pricing-card"
                >
                    <p className="text-[1.25rem] font-[600] font-[Manrope, sans-serif]">Basic</p>
                    <p className="text-[2.5rem] font-bold">
                        $9<span className="text-[1.5rem] font-[500]">/month</span>
                    </p>
                    <p className="text-[0.875rem] text-[#575b61]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        varius enim in eros elementum tristique.
                    </p>
                    <a href="#" className="flex py-[0.375rem] px-[0.75rem] justify-center items-center gap-2 rounded-[5rem] bg-[#26282f] text-white w-fit max-w-full">
                        <div className='flex items-center'>Get Started {`->`}</div>
                    </a>
                </div>
                <div
                    id="w-node-_727251cb-cc71-13da-097a-f4af82f5c853-1aeb1fea"
                    className="relative rounded-[1.5rem]"
                    style={{
                        backgroundImage: 'linear-gradient(45deg, #5470ff, #d96eff 50%, #ff9344)'
                    }}>
                    <div
                        id="w-node-bb7bdc32-ad87-cfc8-02b4-8f67f59479a6-1aeb1fea"
                        className="m-1 flex justify-between flex-col rounded-[1.5rem] p-8 py-16 bg-[#efeff4] text-[#26282f] gap-4 pricing-card popular"
                    >
                        <div className="flex justify-end">
                            <div className="rounded-[5rem] py-[0.375rem] px-[0.75rem] text-white absolute top-4 right-4"
                                style={{
                                    backgroundImage: 'linear-gradient(45deg, #5470ff, #d96eff 50%, #ff9344)'
                                }}>
                                Most Popular
                            </div>
                        </div>
                        <p className="text-[1.25rem] font-[600] font-[Manrope, sans-serif]">Pro</p>
                        <div
                            id="w-node-bb7bdc32-ad87-cfc8-02b4-8f67f59479a9-1aeb1fea"
                            className="space-small"
                        />
                        <p className="text-[2.5rem] font-bold">
                            $39<span className="text-[1.5rem] font-[500]">/month</span>
                        </p>
                        <p className="text-[0.875rem] text-[#575b61]">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Suspendisse varius enim in eros elementum tristique.
                        </p>
                        <div className="space-medium" />
                        <a href="#" className="flex py-[0.375rem] px-[0.75rem] justify-center items-center gap-2 rounded-[5rem] bg-[#26282f] text-white w-fit max-w-full">
                            <div className='flex items-center'>Get Started {`->`}</div>
                        </a>
                    </div>
                </div>
                <div
                    id="w-node-_3df4ca7e-f3e1-bf2a-3af8-3041100bf5e5-1aeb1fea"
                    className="flex justify-between flex-col rounded-[1.5rem] p-8 bg-[#efeff4] text-[#26282f] gap-6 pricing-card"
                >
                    <p className="text-[1.25rem] font-[600] font-[Manrope, sans-serif]">Expert</p>
                    <div
                        id="w-node-_3df4ca7e-f3e1-bf2a-3af8-3041100bf5e8-1aeb1fea"
                        className="space-small"
                    />
                    <p className="text-[2.5rem] font-bold">
                        $79<span className="text-[1.5rem] font-[500]">/month</span>
                    </p>
                    <p className="text-[0.875rem] text-[#575b61]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        varius enim in eros elementum tristique.
                    </p>
                    <a href="#" className="flex py-[0.375rem] px-[0.75rem] justify-center items-center gap-2 rounded-[5rem] bg-[#26282f] text-white w-fit max-w-full">
                        <div className='flex items-center'>Get Started {`->`}</div>
                    </a>
                </div>
            </div>
        </div>
    );
}
