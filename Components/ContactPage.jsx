import LargeHeader from "./LargeHeader";

const ContactPage = () => {
  return (
    <main>
      <section className="margin__setter mt-[5rem]">
        <div className="ml-[1.25rem] lg:ml-[7.5rem]">
          <LargeHeader customLetter="C" headerText="ontact me" />
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
