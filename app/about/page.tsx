import Image from "next/image";

export default function About() {
  return (
    <>
      <div className="grid m-10 px-10">
        <div className="flex items-center justify-center mb-6">
          <h1 className="text-3xl font-bold text-center">
            SENECA SOFTWARE DEVELOPERS CLUB&apos;S <br /> MISSION
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div style={{ color: "#afafaf" }} className="m-2 font-bold">
            <p>
              The mission of the Seneca Software Developers Club is to provide an inclusive, collaborative and
              educational environment for students to explore and develop their software development skills. We aim to
              foster an environment of creativity, learning, and problem-solving where members can grow both
              professionally and personally.
            </p>
            <br />
            <p>
              The goals of the Seneca Software Developers Club are to create opportunities for students to collaborate
              on projects, attend workshops and events, and build a strong network within the tech community. Our aim is
              to provide access to resources and mentorship opportunities that will help members achieve their full
              potential in the field of software development. Additionally, we aim to provide a space for members to
              learn about new technologies, discuss current industry trends, and connect with industry professionals.{" "}
            </p>
            <br />
            <p>
              The Seneca Software Developers Club is dedicated to creating a vibrant and diverse community of software
              developers. We believe that community engagement is a critical part of our mission, and we strive to
              create opportunities for members to give back through volunteer and outreach programs. By creating a
              welcoming and inclusive environment for all members, we hope to inspire and empower the next generation of
              software developers, and build a strong and sustainable community that supports the growth and success of
              its members.
            </p>
          </div>
          <div className="flex justify-center">
            <div className="grid grid-cols-1 gap-10 text-center">
              <div className="flex flex-col items-center justify-center w-full">
                <Image src="/images/membersIcon.jpg" alt="Member Icon" width={150} height={150} className="m-4" />
                <h1 className="text-3xl font-bold" style={{ color: "#ec1e27" }}>
                  395
                </h1>
                <span className="text-xl font-bold">MEMBERS</span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div className="flex justify-center">
                  <div className="text-center">
                    <Image src="/images/eventsIcon.jpg" alt="Event Icon" width={150} height={150} className="m-4" />
                    <h1 className="text-3xl font-bold" style={{ color: "#ec1e27" }}>
                      2
                    </h1>
                    <span className="text-xl font-bold">UPCOMING EVENTS</span>
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className="text-center">
                    <Image
                      src="/images/bookBlack.jpg"
                      alt="Book Icon"
                      width={150}
                      height={150}
                      className="m-5 py-0.5"
                    />
                    <h1 className="text-3xl font-bold" style={{ color: "#ec1e27" }}>
                      100
                    </h1>
                    <span className="text-xl font-bold">RESOURCES</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 m-12 px-10">
        <div>
          <Image src="/images/clubPhoto.jpg" alt="Club Photo" width={500} height={500} layout="responsive" />
        </div>
        <div>
          <Image src="/images/realPhoto.jpg" alt="Real Photo" width={500} height={500} layout="responsive" />
        </div>
      </div>
    </>
  );
}
