import PageTransition from "@/Components/Utils/PageTransition"
import LargeHeader from "@/Components/LargeHeader"

const ContactPage = () => {
  return (
    <PageTransition>
          <section className="margin__setter mt-[5rem]">
        <div className="ml-[7.5rem]">
            <LargeHeader customLetter="C" headerText="ontact me"/>
        </div>
      </section>
    </PageTransition>
  )
}

export default ContactPage