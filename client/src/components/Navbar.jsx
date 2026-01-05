import { Menu } from 'lucide-react';
import React from 'react';

const Navbar = () => {
    return (
        <nav className="nav flex items-center justify-between bg-white  rounded-full mt-8 px-8 py-1 max-w-5xl mx-auto w-full relative z-50 md:py-3">
            <div className="flex items-center">
                {/* Logo Icon Placeholder - stylized 'C' or similar */}
                <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold">
                    <img src="/logo.png" sizes={30} alt="" />
                </div>
                <span className="text-2xl font-bold tracking-tight  text-brand-dark">coup.</span>
            </div>

            <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
                <a href="#" className="hover:text-brand-blue transition-colors">How it Works</a>
                <a href="#" className="hover:text-brand-blue transition-colors">Pricing</a>
                <a href="#" className="hover:text-brand-blue transition-colors">Use Case</a>
                <a href="#" className="hover:text-brand-blue transition-colors">FAQ</a>
            </div>

            <div className=''>
                <button className="bg-brand-blue hover:bg-blue-600 hidden md:block text-white font-thin py-2 px-6 rounded-full text-sm transition-all shadow-lg hover:shadow-blue-500/30">
                    Contact Sales
                </button>
               <Menu className='block md:hidden' />
            </div>
             
        </nav>
    );
};

export default Navbar;
