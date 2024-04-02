import Image from "next/image";
import React from "react";

const Testimonials = () => {
  return (
    <section className="py-14">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="max-w-xl">
          <h3 className="text-[#03989e] dark:text-[#00c2cb] text-3xl font-semibold sm:text-4xl">
            Meet our share market team
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mt-3">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.Lorem Ipsum has been the industry&apos;s standard dummy.
          </p>
        </div>
        <div className="mt-12">
          <ul className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
            {team.map((item, idx) => (
              <li key={idx}>
                <div className="w-full h-60 sm:h-52 md:h-56">
                  <Image
                    width={774}
                    height={516}
                    src={item.avatar}
                    className="w-full h-full object-cover object-center shadow-md rounded-xl"
                    alt="team member avatar"
                  />
                </div>
                <div className="mt-4">
                  <h4 className="text-lg text-gray-700 dark:text-gray-300 font-semibold">
                    {item.name}
                  </h4>
                  <p className="text-[#03989e] dark:text-[#00c2cb]">
                    {item.title}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 mt-2">
                    {item.desc}
                  </p>
                  <div className="mt-3 flex gap-4 text-gray-400">
                    <a href={item.twitter}>
                      <svg
                        className="w-5 h-5 duration-150 hover:text-gray-500"
                        fill="currentColor"
                        viewBox="0 0 48 48"
                      >
                        <g clip-path="url(#clip0_17_80)">
                          <path
                            fill="currentColor"
                            d="M15.1 43.5c18.11 0 28.017-15.006 28.017-28.016 0-.422-.01-.853-.029-1.275A19.998 19.998 0 0048 9.11c-1.795.798-3.7 1.32-5.652 1.546a9.9 9.9 0 004.33-5.445 19.794 19.794 0 01-6.251 2.39 9.86 9.86 0 00-16.788 8.979A27.97 27.97 0 013.346 6.299 9.859 9.859 0 006.393 19.44a9.86 9.86 0 01-4.462-1.228v.122a9.844 9.844 0 007.901 9.656 9.788 9.788 0 01-4.442.169 9.867 9.867 0 009.195 6.843A19.75 19.75 0 010 39.078 27.937 27.937 0 0015.1 43.5z"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_17_80">
                            <path fill="currentColor" d="M0 0h48v48H0z" />
                          </clipPath>
                        </defs>
                      </svg>
                    </a>
                    <a href={item.instagram}>
                      <svg
                        className="w-5 h-5 duration-150 hover:text-gray-500"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.24.056 2.346.272 3.15.822a6.407 6.407 0 012.612 2.612c.55.805.766 1.91.822 3.15.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.056 1.24-.272 2.346-.822 3.15a6.407 6.407 0 01-2.612 2.612c-.805.55-1.91.766-3.15.822-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.24-.056-2.346-.272-3.15-.822a6.407 6.407 0 01-2.612-2.612c-.55-.805-.766-1.91-.822-3.15-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.056-1.24.272-2.346.822-3.15a6.407 6.407 0 012.612-2.612c.805-.55 1.91-.766 3.15-.822 1.266-.058 1.646-.07 4.85-.07zm0 1.982c-3.204 0-3.584.01-4.85.07-1.18.056-1.805.24-2.24.375-.552.17-.94.375-1.336.77-.396.396-.6.784-.77 1.336-.135.435-.32 1.06-.375 2.24-.06 1.266-.07 1.646-.07 4.85s.01 3.584.07 4.85c.056 1.18.24 1.805.375 2.24.17.552.375.94.77 1.336.396.396.784.6 1.336.77.435.135 1.06.32 2.24.375 1.266.06 1.646.07 4.85.07s3.584-.01 4.85-.07c1.18-.056 1.805-.24 2.24-.375.552-.17.94-.375 1.336-.77.396-.396.6-.784.77-1.336.135-.435.32-1.06.375-2.24.06-1.266.07-1.646.07-4.85s-.01-3.584-.07-4.85c-.056-1.18-.24-1.805-.375-2.24-.17-.552-.375-.94-.77-1.336-.396-.396-.784-.6-1.336-.77-.435-.135-1.06-.32-2.24-.375-1.266-.059-1.646-.069-4.85-.069zm0 11.823a3.667 3.667 0 110-7.333 3.667 3.667 0 010 7.333zm0-9.316a5.65 5.65 0 100 11.3 5.65 5.65 0 000-11.3zm7.192-.222a1.32 1.32 0 110-2.64 1.32 1.32 0 010 2.64z"></path>
                      </svg>
                    </a>
                    <a href={item.linkedin}>
                      <svg
                        className="w-5 h-5 duration-150 hover:text-gray-500"
                        fill="none"
                        viewBox="0 0 48 48"
                      >
                        <g clip-path="url(#clip0_17_68)">
                          <path
                            fill="currentColor"
                            d="M44.447 0H3.544C1.584 0 0 1.547 0 3.46V44.53C0 46.444 1.584 48 3.544 48h40.903C46.407 48 48 46.444 48 44.54V3.46C48 1.546 46.406 0 44.447 0zM14.24 40.903H7.116V17.991h7.125v22.912zM10.678 14.87a4.127 4.127 0 01-4.134-4.125 4.127 4.127 0 014.134-4.125 4.125 4.125 0 010 8.25zm30.225 26.034h-7.115V29.766c0-2.653-.047-6.075-3.704-6.075-3.703 0-4.265 2.896-4.265 5.887v11.325h-7.107V17.991h6.826v3.13h.093c.947-1.8 3.272-3.702 6.731-3.702 7.21 0 8.541 4.744 8.541 10.912v12.572z"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_17_68">
                            <path fill="currentColor" d="M0 0h48v48H0z" />
                          </clipPath>
                        </defs>
                      </svg>
                    </a>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

const team = [
  {
    avatar:
      "https://images.unsplash.com/photo-1579017331263-ef82f0bbc748?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=685&q=80",
    name: "Martiana dialan",
    title: "Product designer",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesettin industry.",
    linkedin: "javascript:void(0)",
    twitter: "javascript:void(0)",
    instagram: "javascript:void(0)",
  },
  {
    avatar:
      "https://images.unsplash.com/photo-1623605931891-d5b95ee98459?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=640&q=80",
    name: "Micheal colorand",
    title: "Software engineer",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesettin industry.",
    linkedin: "javascript:void(0)",
    twitter: "javascript:void(0)",
    instagram: "javascript:void(0)",
  },
  {
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    name: "Brown Luis",
    title: "Full stack engineer",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesettin industry.",
    linkedin: "javascript:void(0)",
    twitter: "javascript:void(0)",
    instagram: "javascript:void(0)",
  },
  {
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    name: "Lysa sandiago",
    title: "Head of designers",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesettin industry.",
    linkedin: "javascript:void(0)",
    twitter: "javascript:void(0)",
    instagram: "javascript:void(0)",
  },
  {
    avatar:
      "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    name: "Daniel martin",
    title: "Product designer",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesettin industry.",
    linkedin: "javascript:void(0)",
    twitter: "javascript:void(0)",
    instagram: "javascript:void(0)",
  },
  {
    avatar:
      "https://images.unsplash.com/photo-1540569014015-19a7be504e3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
    name: "Vicky tanson",
    title: "Product manager",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesettin industry.",
    linkedin: "javascript:void(0)",
    twitter: "javascript:void(0)",
    instagram: "javascript:void(0)",
  },
];
