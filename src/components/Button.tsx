type variant = "primary" | "secondary" | "tertiary" | "twitter" | "facebook"

interface Props {
  mode: variant,
  size: number,
  text: string
}

export const Button = (props: Props) => {
  const buttonVariant = {
    primary: "bg-primary-100 text-white hover:opacity-75",
    secondary: "border border-secondary-100 text-primary-300 hover:border-primary-300",
    tertiary: "bg-secondary-300 text-white hover:opacity-75",
    twitter: "bg-primary-400 text-white hover:opacity-75",
    facebook: "bg-primary-500 text-white hover:opacity-75"
  }

  return (
    <button className={`rounded-full px-4 py-1 ${buttonVariant[props.mode]} transition-all`} style={{ fontSize: `${props.size}rem`}}>
      { props.text }
    </button>
  )
}

export default Button;