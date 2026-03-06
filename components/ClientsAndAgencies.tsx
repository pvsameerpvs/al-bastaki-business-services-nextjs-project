export default function ClientsAndAgencies() {
  return (
    <section className="bg-lightGrey pt-10 md:pt-16 pb-24 md:pb-28">
      <div className="max-w-[1400px] mx-auto px-6 xl:px-8">
        {/* Government Agencies & Free Zones */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
          <div className="col-span-2 md:col-span-4 lg:col-span-2 flex items-center justify-center lg:justify-start py-8 lg:py-0 px-4">
            <span className="text-[12px] sm:text-[13px] font-semibold tracking-[0.2em] text-gray-500 uppercase text-center lg:text-left leading-relaxed">
              We Work Closely with
              <br />
              Government Agencies &amp; Free Zones
            </span>
          </div>

          {[1, 2, 3, 4, 5, 6].map((num) => (
            <div
              key={`govt-${num}`}
              className="bg-white rounded-[1.25rem] border border-gray-100 aspect-[3/2] sm:aspect-[4/3] lg:aspect-[3/2] flex items-center justify-center p-6 sm:p-8 hover:shadow-[0_15px_30px_rgba(0,0,0,0.04)] hover:-translate-y-1 hover:border-white transition-all duration-300 cursor-pointer"
            >
              <img
                src={`/govt${num}.png`}
                alt={`Government Agency ${num}`}
                loading="lazy"
                className="w-full h-full object-contain filter grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              />
            </div>
          ))}
        </div>

        {/* Esteemed Clients */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 mt-10 md:mt-14">
          <div className="col-span-2 md:col-span-4 lg:col-span-2 flex items-center justify-center lg:justify-start py-8 lg:py-0 px-4">
            <span className="text-[12px] sm:text-[13px] font-semibold tracking-[0.2em] text-gray-500 uppercase text-center lg:text-left">
              Our Esteemed Clients
            </span>
          </div>

          {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
            <div
              key={`client-${num}`}
              className="bg-white rounded-[1.25rem] border border-gray-100 aspect-[3/2] sm:aspect-[4/3] lg:aspect-[3/2] flex items-center justify-center p-6 sm:p-8 hover:shadow-[0_15px_30px_rgba(0,0,0,0.04)] hover:-translate-y-1 hover:border-white transition-all duration-300 cursor-pointer"
            >
              <img
                src={`/log${num}.png`}
                alt={`Client ${num}`}
                loading="lazy"
                className="w-full h-full object-contain filter grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
