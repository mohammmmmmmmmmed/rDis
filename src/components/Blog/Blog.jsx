import React, { useEffect } from 'react';
import ImgOne from '../../assets/corona.jpg';
import VideoOne from '../../assets/video.mp4';
import './Blog.css';

const Blog = () => {
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.animate-section');
      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (sectionTop < windowHeight * 0.75) {
          section.classList.add('active');
        } else {
          section.classList.remove('active');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="text-white" style={{ background: "#070707" }}>
      <div className="flex flex-col sm:flex-row w-full">
        <div className="animate-section animate-left-to-right flex flex-col md:items-start justify-center w-full sm:w-1/2 mt-10 sm:mt-20 text-center sm:text-center md:text-left sm:items-center ml-0 sm:ml-20">
          <h1 className="text-3xl sm:text-5xl font-semibold pt-4 sm:pt-10 font-recursive">
            Preventing disease involves a combination of lifestyle <br />
            choices, environmental factors, and healthcare practices. <br />
            Here's a quote that encapsulates this idea:
          </h1>
          <p className="px-1 mt-2 sm:mt-4 text-base sm:text-lg">
            Enter our community and reduce the spreading.
          </p>
          <button className="bg-gradient-to-r from-gray-200 to-cyan-400 p-2 sm:p-4 rounded-lg mt-2 sm:mt-4 text-sm sm:text-md font-semibold font-recursive text-slate-900 border border-2 sm:border-4 border-slate-900">
            <a href="https://www.amcp.org/about/managed-care-pharmacy-101/concepts-managed-care-pharmacy/disease-management#:~:text=Disease%20management%20is%20a%20proactive,based%20on%20evidence%2Dbased%20guidelines" target="_blank" rel="noopener noreferrer">Learn More</a>
          </button>
        </div>
        <div className="animate-section animate-right-to-left p-4 sm:p-10 bg-gradient-to-r from-gray-200 to-cyan-400 w-full sm:w-1/2 mt-10 sm:mt-20 rounded-3xl sm:mr-9">
          <img
            src={ImgOne}
            className="w-full h-auto rounded-2xl border border-2 sm:border-4 border-slate-900"
            alt="Disease prevention"
          />
        </div>
      </div>
      <div className="flex flex-col sm:flex-row w-full mt-12">
        <div className="animate-section animate-left-to-right p-4 sm:p-10 bg-gradient-to-r from-cyan-400 to-gray-200 w-full sm:w-1/2 mt-10 sm:mt-20 rounded-3xl sm:ml-9">
          <video
            src={VideoOne}
            autoPlay
            loop
            muted
            className="w-full h-auto rounded-2xl border border-2 sm:border-4 border-slate-900"
          />
        </div>
        <div className="animate-section animate-right-to-left flex flex-col items-start justify-center w-full sm:w-1/2 mt-10 sm:mt-20 text-center sm:text-left ml-0 sm:ml-10">
          <h1 className="text-3xl sm:text-5xl font-semibold pt-4 sm:pt-10 font-recursive">
            Reproductive and Child Health
          </h1>
          <p className="px-1 mt-2 sm:mt-4 text-base sm:text-lg">
            <strong>Empowering individuals with access to comprehensive reproductive and child health services is not just a matter of healthcare; it's an investment in the <br />
              well-being and future prosperity of society.</strong>
          </p>
          <button className="bg-gradient-to-r from-gray-200 to-cyan-400 p-2 sm:p-4 rounded-lg mt-2 sm:mt-4 text-sm sm:text-md font-semibold font-recursive text-slate-900 border border-2 sm:border-4 border-slate-900">
            Learn
          </button>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row w-full mt-12">
        <div className="animate-section animate-left-to-right flex flex-col md:items-start justify-center w-full sm:w-1/2 mt-10 sm:mt-20 text-center sm:text-center md:text-left sm:items-center ml-0 sm:ml-20">
          <h1 className="text-3xl sm:text-5xl font-semibold pt-4 sm:pt-10 font-recursive">
            Junior Public Nurse
          </h1>
          <p className="px-1 mt-2 sm:mt-4 text-base sm:text-lg">
            <strong>Junior public health nurses are the frontline heroes, tirelessly working to promote health, prevent disease, and uplift communities. With empathy, dedication, and expertise, they embody the spirit of public health, making a profound difference in the lives of individuals and populations.</strong>
          </p>
          <button className="bg-gradient-to-r from-gray-200 to-cyan-400 p-2 sm:p-4 rounded-lg mt-2 sm:mt-4 text-sm sm:text-md font-semibold font-recursive text-slate-900 border border-2 sm:border-4 border-slate-900">
            Start for Free
          </button>
        </div>
        <div className="animate-section animate-right-to-left p-4 sm:p-10 bg-gradient-to-r from-gray-200 to-cyan-400 w-full sm:w-1/2 mt-10 sm:mt-20 rounded-3xl sm:mr-9">
          <img
            src={ImgOne}
            className="w-full h-auto rounded-2xl border border-2 sm:border-4 border-slate-900"
            alt="Junior public nurse"
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;