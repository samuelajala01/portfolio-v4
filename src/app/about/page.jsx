"use client";

import Image from "next/image";
import profileImg from "../../../public/my_pic.jpg";
import ContactBox from "@/components/Contactbox";

const About = () => {
  return (
    <>
      <section className="mx-[4vw] py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-[var(--pry)] mb-16">
          About Me
        </h1>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <p className="text-xl md:text-2xl leading-relaxed">
              Hey there! I'm currently studying Electronics and Computer
              Engineering at Lagos State University, but I've always been more
              than just a student. Ever since I saw Honda's ASIMO robot at 12,
              I've been hooked on the idea that machines can do more than just
              exist—they can learn, adapt, and change lives.
            </p>

            <p className="text-lg md:text-xl leading-relaxed opacity-90">
              That moment sparked my love for{" "}
              <span className="text-[var(--pry)] font-semibold">
                Machine Learning
              </span>{" "}
              and
              <span className="text-[var(--pry)] font-semibold">
                {" "}
                Embedded Systems
              </span>
              , and I've been chasing that passion ever since. Whether I'm
              designing hardware, writing code, or bringing the two together to
              solve real problems, I'm always up for a challenge.
            </p>
          </div>

          <div className="flex-1 flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-[var(--pry)] to-blue-500 rounded-2xl opacity-75 blur-xl group-hover:opacity-100 transition duration-300"></div>
              <div className="relative">
                <Image
                  src={profileImg}
                  alt="Profile image"
                  className="relative rounded-2xl border-2 border-white/20 backdrop-blur-sm w-80 h-96 object-cover shadow-2xl"
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="mx-[4vw] py-20">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="text-[var(--pry)]">My Journey</span> So Far
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-[var(--pry)] via-blue-500 to-purple-500"></div>

            {/* Timeline items */}
            <div className="space-y-12">
              <div className="relative flex items-start gap-8">
                <div className="w-16 h-16 bg-[var(--pry)] rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  12
                </div>
                <div className="flex-1 bg-black/20 backdrop-blur-lg rounded-xl p-6 shadow-lg">
                  <h3 className="text-2xl font-bold text-[var(--pry)] mb-2">
                    The Spark
                  </h3>
                  <p className="text-lg leading-relaxed">
                    At age 12, I witnessed Honda's ASIMO robot in action. That
                    moment changed everything. Seeing a machine walk, recognize
                    faces, and interact with humans ignited my passion for
                    robotics and AI. I knew then that I wanted to be part of
                    creating intelligent systems that could genuinely help
                    people.
                  </p>
                </div>
              </div>

              <div className="relative flex items-start gap-8">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                  🎓
                </div>
                <div className="flex-1 bg-black/20 backdrop-blur-lg rounded-xl p-6 shadow-lg">
                  <h3 className="text-2xl font-bold text-blue-600 mb-2">
                    Academic Foundation
                  </h3>
                  <p className="text-lg leading-relaxed">
                    Currently pursuing Electronics and Computer Engineering at
                    Lagos State University. But I've always believed in learning
                    beyond the classroom. Every project, every late night coding
                    session, and every hardware experiment has been building
                    toward something bigger.
                  </p>
                </div>
              </div>

              <div className="relative flex items-start gap-8">
                <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                  🚀
                </div>
                <div className="flex-1 bg-black/20 backdrop-blur-lg rounded-xl p-6 shadow-lg">
                  <h3 className="text-2xl font-bold text-purple-600 mb-2">
                    Building the Future
                  </h3>
                  <p className="text-lg leading-relaxed">
                    Today, I'm focused on bridging the gap between hardware and
                    software. Whether it's developing machine learning models,
                    designing embedded systems, or creating full-stack
                    applications, I'm driven by the potential to solve
                    real-world problems through technology.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills & Interests Grid */}
      <section className="mx-[4vw] py-20 bg-gradient-to-r from-black/5 to-blue-500/10 rounded-3xl my-20">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-[var(--pry)]">
          Tech Stack & Passions
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="group bg-black/20 backdrop-blur-lg rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="text-4xl mb-4">🤖</div>
            <h3 className="text-xl font-bold text-[var(--pry)] mb-3">
              Machine Learning & AI
            </h3>
            <p className="text-lg text-[var(--text)] leading-relaxed">
              Developing intelligent systems that learn, adapt, and solve
              complex problems. From neural networks to computer vision, I'm
              exploring the frontiers of artificial intelligence.
            </p>
          </div>

          <div className="group bg-black/20 backdrop-blur-lg rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-xl font-bold text-blue-600 mb-3">
              Embedded Systems
            </h3>
            <p className="text-lg text-[var(--text)] leading-relaxed">
              Crafting the bridge between software and hardware. From
              microcontrollers to IoT devices, I love bringing digital ideas
              into the physical world.
            </p>
          </div>

          <div className="group bg-black/20 backdrop-blur-lg rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 ">
            <div className="text-4xl mb-4">💻</div>
            <h3 className="text-xl font-bold text-purple-600 mb-3">
              Full-Stack Development
            </h3>
            <p className="text-lg text-[var(--text)] leading-relaxed">
              Creating seamless user experiences from frontend to backend.
              Building scalable applications that users love and developers can
              maintain.
            </p>
          </div>

          <div className="group bg-black/20 backdrop-blur-lg rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300  ">
            <div className="text-4xl mb-4">♟️</div>
            <h3 className="text-xl font-bold text-green-600 mb-3">
              Strategic Thinking
            </h3>
            <p className="text-lg text-[var(--text)] leading-relaxed">
              Chess isn't just a game—it's strategic thinking in action. Every
              move teaches patience, planning, and the art of seeing several
              steps ahead.
            </p>
          </div>

          <div className="group bg-black/20 backdrop-blur-lg rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="text-4xl mb-4">🏓</div>
            <h3 className="text-xl font-bold text-orange-600 mb-3">
              Quick Reflexes
            </h3>
            <p className="text-lg text-[var(--text)] leading-relaxed">
              Table tennis keeps me sharp and agile—both physically and
              mentally. The split-second decisions mirror the quick thinking
              needed in debugging code.
            </p>
          </div>

          <div className="group bg-black/20 backdrop-blur-lg rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="text-4xl mb-4">💪</div>
            <h3 className="text-xl font-bold text-red-600 mb-3">
              Physical Fitness
            </h3>
            <p className="text-lg text-[var(--text)] leading-relaxed">
              A healthy body supports a sharp mind. Regular workouts keep me
              energized and focused for those long coding sessions and complex
              problem-solving marathons.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Goals */}
      <section className="mx-[4vw] py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            <span className="text-[var(--pry)]">Vision</span> for Tomorrow
          </h2>

          <div className="bg-gradient-to-br from-[var(--pry)]/5 to-blue-500/5 rounded-2xl p-8 md:p-12 border border-[var(--pry)]/10">
            <p className="text-xl md:text-2xl leading-relaxed mb-8">
              I'm not just building for today—I'm architecturing the future. My
              goal is to create
              <span className="text-[var(--pry)] font-semibold">
                {" "}
                intelligent robotic systems
              </span>{" "}
              that don't just automate tasks, but understand context, learn from
              experience, and adapt to human needs.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-[var(--pry)] mb-2">
                  ♾️
                </div>
                <h4 className="font-semibold mb-2">Automation</h4>
                <p className="text-sm opacity-75">
                  Systems that work smarter, not harder
                </p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-500 mb-2">📈</div>
                <h4 className="font-semibold mb-2">Efficiency</h4>
                <p className="text-sm opacity-75">
                  Optimizing processes for maximum impact
                </p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-500 mb-2">
                  🌍
                </div>
                <h4 className="font-semibold mb-2">Impact</h4>
                <p className="text-sm opacity-75">
                  Technology that genuinely improves lives
                </p>
              </div>
            </div>

            <p className="text-lg leading-relaxed">
              Whether it's developing AI models that can predict system failures
              before they happen, creating robots that can assist in healthcare,
              or building embedded systems that make our cities smarter, I'm
              committed to using technology as a force for positive change.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="mx-[4vw] py-20">
        <div className="bg-gradient-to-r from-[var(--pry)] to-blue-600 rounded-3xl p-8 md:p-16 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's Build Something Incredible
          </h2>
          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto leading-relaxed">
            Got an idea that could change the world? Looking for a hackathon
            partner who brings both technical skills and creative vision? Or
            maybe you just want to chat about the latest developments in AI and
            robotics?
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="flex items-center gap-2 text-lg">
              <span>🚀</span>
              <span>Ready for collaboration</span>
            </div>
            <div className="flex items-center gap-2 text-lg">
              <span>💡</span>
              <span>Open to new challenges</span>
            </div>
            <div className="flex items-center gap-2 text-lg">
              <span>🎯</span>
              <span>Focused on impact</span>
            </div>
          </div>

          <p className="text-xl mt-8 font-medium">
            Let's turn ideas into reality. HMU! 👇
          </p>
        </div>
      </section>

      <div className="mb-8">
        <ContactBox />
      </div>

      <style jsx>{`
        .bg-grid-pattern {
          background-image: linear-gradient(
              rgba(var(--pry-rgb), 0.1) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(var(--pry-rgb), 0.1) 1px,
              transparent 1px
            );
          background-size: 20px 20px;
        }
      `}</style>
    </>
  );
};

export default About;
