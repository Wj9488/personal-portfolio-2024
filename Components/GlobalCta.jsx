import Link from "next/link"

const GlobalCta = ({ ctaText }) => {
  return (
    <Link href={"/contact"}>
        <button className="cta__border text-xl py-2 px-4 rounded-2xl font-medium hvr">
            {ctaText}
        </button>
    </Link>
  )
}

export default GlobalCta