import React from 'react';

const Hero = () => {
    return (
        <div className="flex flex-col items-center justify-center pt-16 pb-32 px-4 relative z-10 text-center max-w-5xl mx-auto">

            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-blue-100 shadow-sm backdrop-blur-sm">
                <span className="bg-brand-blue text-white text-[10px] font-bold px-2 py-0.5 rounded-full">•••</span>
                <span className="text-brand-blue text-xs font-semibold tracking-wide">#1 iMessage Automation Tool</span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl md:text-6xl font-extrabold text-brand-dark leading-[1.1] mb-6 tracking-tight">
                <span className="text-brand-blue">iMessage</span> Automation
                <br />
                for Teams and AI
                <br />
                Workflows.
            </h1>

            {/* Subheadline */}
            <p className="text-gray-600 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed font-medium">
                Coup lets you, your team, or AI workflows send iMessages directly from
                your phone number, running securely on your Mac or Mac Mini.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-brand-blue hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-full text-base transition-all shadow-xl shadow-blue-500/20 hover:shadow-blue-500/40">
                    Get Started
                </button>

                <button className="group bg-transparent hover:bg-blue-600 hover:text-white text-gray-800 font-semibold py-3 px-6 rounded-full text-base transition-all  border border-black/50 flex items-center gap-2">
                    {/* <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                        <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.74 1.18 0 2.21-1.23 3.91-1.12 1.5.11 2.77.74 3.55 1.84a5.4 5.4 0 00-2.65 4.3c0 3.2 2.67 4.15 2.65 4.18-.5 1.72-1.63 3.55-2.54 4.02zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.16 2.22-1.74 4.29-3.74 4.25z" />
                    </svg> */}
                    <img src="/apple.png" sizes={30} className='border-r-[1px] border-black/50 px-2 ' alt="" />
                    Download the Mac app
                </button>
            </div>
              <div className="absolute bottom-[-15%] left-1/2 transform -translate-x-1/2 w-auto z-20">
                {/* "Scroll to learn more" text cluster */}
                <div className="flex flex-col items-center opacity-70 hover:opacity-100 transition-opacity cursor-pointer">
                    <span className="text-brand-dark/60 text-[10px] md:text-xs font-semibold tracking-widest uppercase mb-2">Scroll to learn more</span>
                    <img src="/arrow.png" className='animate-bounce mt-2' alt="" />
                </div>
            </div>

        </div>
    );
};

export default Hero;
