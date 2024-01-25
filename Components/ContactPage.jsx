import LargeHeader from "./LargeHeader";
import GMTClock from "./AnimatedComponents/GMTClock";
import SecondaryCta from "./SecondaryCta";

const ContactPage = () => {
  return (
    <main>
      <section className="margin__setter mt-[5rem]">
        <div className="ml-[1.25rem] lg:ml-[7.5rem]">
          <LargeHeader customLetter="C" headerText="ontact me" />
        </div>
      </section>
      <section className="margin__setter my-[10rem]">
        <div className="lg:flex items-start justify-between">
          <div>
            <GMTClock />
          </div>
          <div className="lg:w-1/2 w-full lg:mt-0 mt-[5rem]">
          <form class="target__form" action="https://formsubmit.io/send/ee2f7dc4-1dec-4100-81c0-054138a44eb8" method="POST">
              <input type="hidden" name="_redirect" id="name" value="https://www.linkedin.com/in/william-jones-450715251/"/>
              <p class="my-[1.25rem]">Your Name <sup>*</sup></p>
              <input class="rounded-2xl bg-transparent py-2 px-4 text-lg border border-[#070707]" placeholder="Name..." required name="name" type="text" id="name"/>
              <p class="my-[1.25rem]">Your Email <sup>*</sup></p>
              <input class="rounded-2xl bg-transparent py-2 px-4 text-lg border border-[#070707]" name="email" required placeholder="email@example.com" type="email" id="email"/>
              <p class="my-[1.25rem]">Your Message <sup>*</sup></p>
              <textarea class="rounded-2xl text-lg py-2 px-4 bg-transparent border border-[#070707]" required placeholder="Message..." name="comment" id="comment" rows="3"></textarea>
              <input name="_formsubmit_id" type="text" style={{display:"none"}}/>
              <input class="target-submit-button text-xl py-2 px-4 rounded-2xl font-medium mt-[1.25rem] w-[fit-content] hover:cursor-pointer" type="submit" value="Send Message"/>
          </form>
          </div>
        </div>
        <div className="lg:mt-[10rem] mt-[5rem]">
          <p className="opacity-50 lg:text-lg text-sm mb-2">Prefer LinkedIn?</p>
          <SecondaryCta ctaText="Message me on LinkedIn" />
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
