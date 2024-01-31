import Link from "next/link"

const SecondaryCta = ({ ctaText }) => {
  return (
    <Link href={"https://www.linkedin.com/in/william-jones-450715251/"} target="_blank">
        <button className="hvr secondary__cta_border text-xl py-2 px-4 rounded-2xl font-medium">
            {ctaText}
        </button>
    </Link>
  )
}

export default SecondaryCta