import Image from "next/image";

export default function Hero() {
  return (
    <header id="company" className="bg-[#efeff4] min-h-screen pt-10">
      <div className="flex flex-col md:flex-row justify-between gap-10 items-center h-full">
        <div className="flex-1 flex flex-col gap-5 px-4 md:px-0 md:ml-[5%] md:mr-[5rem]">
          {/* <div className="space-navbar" /> */}
          <a href="#features" className="py-[0.375rem] w-fit px-3 gap-2 bg-white rounded-[5rem]">
            <div className="flex items-center gap-2" style={{
              backgroundImage: 'linear-gradient(90deg, #5470ff, #d96eff 50%, #ff9344)',
              '-webkitBackgroundClip': 'text',
              '-webkit-text-fill-color': 'transparent',
            }}>
              Our powerful features
              <div className="flex items-center">
                <span>-</span>
                <span className='-mb-[4px]'>&gt;</span>
              </div>
            </div>
          </a>
          <h1 className='text-[3.25rem] leading-[1.25] font-[700] tracking-[-1px]'>Power editing for your visual storytelling</h1>
          <p className="text-[1.125rem]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique.
          </p>
          {/* <div className="space-small" /> */}
          <div className="flex items-center gap-4 button-wrapper hero">
            <a href="#" className="button-download w-inline-block">
              <Image
                src="https://assets.website-files.com/63b4516eb9bb42efbdeb1fe9/63b8391d27a2690fac50baab_app%20store.png"
                loading="lazy"
                alt=""
                width={120}
                height={120}
                className="download-image"
              />
            </a>
            <a href="#" className="button-download w-inline-block">
              <Image
                src="https://assets.website-files.com/63b4516eb9bb42efbdeb1fe9/63b8391d5fe83230f7e419d5_google%20play.png"
                loading="lazy"
                alt=""
                width={120}
                height={120}
                className="download-image"
              />
            </a>
          </div>
        </div>

        <div className="hidden md:block flex-1 h-full">
          <Image
            src="/hero-img.png"
            loading="lazy"
            // size=""
            width={691}
            height={1230}
            srcSet="https://assets.website-files.com/63b4516eb9bb42efbdeb1fe9/63c17a81f4ec18546813b2ea_hero-mobile-p-500.png 500w"
            alt=""
            className="h-full w-fit"
          />
        </div>

        <div className="md:hidden">
          <Image src="https://assets.website-files.com/63b4516eb9bb42efbdeb1fe9/63c17a81f4ec18546813b2ea_hero-mobile.png" loading="lazy" sizes="100vw" srcSet="https://assets.website-files.com/63b4516eb9bb42efbdeb1fe9/63c17a81f4ec18546813b2ea_hero-mobile-p-500.png 500w" alt='' width={400} height={400} className="image" />
        </div>

        <div
          id="w-node-bc4b9612-7117-8de5-30aa-1b1c74f552fe-1aeb1fea"
          className="hidden flex-1 header-content-right"
          style={{
            willChange: 'transform',
            transform:
              'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(24deg) skew(0deg, 0deg)',
            transformStyle: 'preserve-3d',
          }}
        >
          <div
            className="hidden header-content-right-col col-one"
            style={{
              willChange: 'transform',
              transform:
                'translate3d(0px, -4rem, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
              transformStyle: 'preserve-3d',
            }}
          >
            <div
              className="header-image-wrapper secondary-image"
              style={{ willChange: 'opacity', opacity: 1 }}
            >
              <Image
                src="https://assets.website-files.com/63b4516eb9bb42efbdeb1fe9/63b83ff05fe8320f65e49d5d_iPhone%2004.png"
                loading="lazy"
                alt=""
                width={491}
                height={630}
                className="image"
              />
            </div>
            <div
              id="w-node-efdb1c59-e677-4467-f816-198666a2e4ea-1aeb1fea"
              className="header-image-wrapper"
            >
              <Image
                src="https://assets.website-files.com/63b4516eb9bb42efbdeb1fe9/63b83ff000cc2831ff712b49_iPhone%2001.png"
                loading="lazy"
                alt=""
                width={491}
                height={630}
                className="image"
              />
            </div>
          </div>
          <div
            className="hidden header-content-right-col col-two"
            style={{
              willChange: 'transform',
              transform:
                'translate3d(0px, 4rem, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
              transformStyle: 'preserve-3d',
            }}
          >
            <div
              id="w-node-_138e3edc-e054-460a-4dbd-3f2127ad21ba-1aeb1fea"
              className="header-image-wrapper secondary-image"
              style={{ willChange: 'opacity', opacity: 1 }}
            >
              <Image
                src="https://assets.website-files.com/63b4516eb9bb42efbdeb1fe9/63b83ff0af2ce906651298aa_iPhone%2003.png"
                loading="lazy"
                alt=""
                width={491}
                height={630}
                className="image"
              />
            </div>
            <div
              id="w-node-_138e3edc-e054-460a-4dbd-3f2127ad21bc-1aeb1fea"
              className="header-image-wrapper secondary-image"
              style={{ willChange: 'opacity', opacity: 1 }}
            >
              <Image
                src="https://assets.website-files.com/63b4516eb9bb42efbdeb1fe9/63b83ff0a4a22b69375bf9cf_iPhone%2002.png"
                loading="lazy"
                alt=""
                width={491}
                height={630}
                className="image"
              />
            </div>
          </div>
          <div className="header-content-right-mobile">
            <Image
              src="https://assets.website-files.com/63b4516eb9bb42efbdeb1fe9/63c17a81f4ec18546813b2ea_hero-mobile.png"
              loading="lazy"
              // size=""
              width={691}
              height={930}
              srcSet="https://assets.website-files.com/63b4516eb9bb42efbdeb1fe9/63c17a81f4ec18546813b2ea_hero-mobile-p-500.png 500w"
              alt=""
              className="image"
            />
          </div>
        </div>
      </div>
      <div data-w-id="48ebd3b0-5be0-22ce-0e5e-e5a6dfe8e430" className="header-trigger" />
    </header>
  );
}
