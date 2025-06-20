import Link from "next/link";
import Image from "next/image";

const Project = ({
  title,
  type,
  desc,
  tags,
  tools,
  visit,
  image,
  imageAlt,
}) => {
  return (
    <div className="max-w-[70rem] mx-auto mb-20 group perspective-1000">
      {/* Main Card Container with Creative Layout */}
      <div className="relative bg-gradient-to-br from-slate-900/20 via-purple-900/10 to-cyan-900/20 backdrop-blur-xl border border-white/10 rounded-3xl overflow-visible shadow-2xl hover:shadow-purple-500/20 transition-all duration-700 transform hover:-translate-y-2">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/5 via-transparent to-cyan-400/5 rounded-3xl"></div>
        <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-cyan-400/20 rounded-3xl blur-xl opacity-30 group-hover:opacity-60 transition-opacity duration-700"></div>

        <div className="relative flex flex-col lg:flex-row">
          {image && (
            <>
              {/* Creative Image Section with Floating Effect */}
              <div className="relative lg:w-[26rem] lg:min-w-[26rem] p-8 lg:p-12">
                <div className="relative">
                  {/* Floating Image Container */}
                  <div className="relative h-72 lg:h-80 rounded-2xl overflow-hidden transform group-hover:rotate-1 group-hover:scale-105 transition-all duration-700 shadow-2xl shadow-black/40">
                    <Image
                      src={image}
                      alt={imageAlt || title}
                      fill
                      sizes="400px"
                      quality={100}
                      className="object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    {/* Dynamic Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-purple-900/20 to-transparent"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-cyan-400/10"></div>
                  </div>

                  {/* Floating Type Badge */}
                  <div className="absolute -top-4 -right-4 z-10">
                    <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-2xl shadow-lg shadow-purple-500/50 transform rotate-3 group-hover:rotate-6 transition-transform duration-500 border border-white/20">
                      <span className="text-sm font-bold tracking-wide">
                        {type}
                      </span>
                    </div>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-to-br from-cyan-400/30 to-purple-600/30 rounded-full blur-2xl"></div>
                  <div className="absolute -top-8 left-1/2 w-16 h-16 bg-gradient-to-br from-pink-400/40 to-orange-400/40 rounded-full blur-xl"></div>
                </div>
              </div>

              {/* Connecting Element */}
              <div className="hidden lg:block absolute left-[26rem] top-1/2 transform -translate-y-1/2 w-8 h-px bg-gradient-to-r from-purple-500/50 to-cyan-400/50"></div>
            </>
          )}

          {/* Content Section with Creative Typography */}
          <div
            className={`flex-1 p-8 lg:p-12 ${image ? "lg:pl-16" : ""} relative`}
          >
            {/* Title with Creative Styling */}
            <div className="relative mb-8">
              <h2 className="text-3xl lg:text-5xl font-black mb-2 relative z-10">
                <Link
                  href={visit}
                  className="block group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:via-pink-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all duration-500"
                >
                  {title}
                </Link>
              </h2>
              {/* Underline Effect */}
              <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-purple-500 to-cyan-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left rounded-full"></div>
            </div>

            {/* Description with Enhanced Styling */}
            <div className="relative mb-8">
              <p className="text-lg lg:text-xl text-gray-200 leading-relaxed font-light tracking-wide">
                {desc}
              </p>
            </div>

            {/* Tags with Creative Design */}
            <div className="mb-8">
              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-900/30 to-cyan-900/30 rounded-full border border-purple-400/30 backdrop-blur-sm">
                <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full mr-3 animate-pulse"></div>
                <span className="text-purple-200 font-medium tracking-wider text-sm">
                  {tags}
                </span>
              </div>
            </div>

            {/* Type Badge for No Image */}
            {!image && (
              <div className="mb-8">
                <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl shadow-lg shadow-purple-500/30 border border-white/20">
                  <span className="text-white font-bold tracking-wide">
                    {type}
                  </span>
                </div>
              </div>
            )}

            {/* Tools Section with Creative Grid */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-px bg-gradient-to-r from-purple-500 to-transparent"></div>
                <span className="text-purple-300 font-semibold text-sm tracking-widest uppercase">
                  Tech Stack
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                {tools.map((tool, index) => (
                  <div
                    key={index}
                    className="group/tool relative overflow-hidden"
                  >
                    <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 hover:from-purple-800/30 hover:to-cyan-800/30 backdrop-blur-sm border border-white/10 hover:border-purple-400/50 rounded-xl px-4 py-3 transition-all duration-500 transform hover:scale-105 hover:-translate-y-1">
                      <span className="text-sm font-medium text-gray-200 group-hover/tool:text-white transition-colors duration-300 relative z-10">
                        {tool}
                      </span>
                      {/* Animated Background */}
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/0 to-cyan-400/0 group-hover/tool:from-purple-600/20 group-hover/tool:to-cyan-400/20 transition-all duration-500 rounded-xl"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Decorative Element */}
            <div className="absolute bottom-4 right-4 w-32 h-px bg-gradient-to-r from-transparent to-purple-400/50"></div>
          </div>
        </div>

        {/* Hover Effects */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-600/0 via-pink-600/0 to-cyan-400/0 group-hover:from-purple-600/5 group-hover:via-pink-600/5 group-hover:to-cyan-400/5 transition-all duration-700 pointer-events-none"></div>
      </div>
    </div>
  );
};

export default Project;
