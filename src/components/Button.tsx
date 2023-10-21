import React from "react"

type variant = "primary" | "secondary" | "tertiary" | "twitter" | "facebook" | "danger"

interface Props {
  mode: variant,
  size: number,
  text: string,
  disabled?: boolean,
  loading?: boolean,
  onPress?: React.MouseEventHandler<HTMLButtonElement>
}

export const Button = (props: Props) => {
  const buttonVariant = {
    primary: "bg-primary-100 text-white hover:opacity-75",
    secondary: "border border-secondary-100 text-primary-300 hover:border-primary-300",
    tertiary: "bg-secondary-300 text-white hover:opacity-75",
    twitter: "bg-primary-400 text-white hover:opacity-75",
    facebook: "bg-primary-500 text-white hover:opacity-75",
    danger: "bg-red-500 text-white hover:opacity-75"
  }

  return (
    <button className={`flex items-center rounded-full px-4 py-1 ${buttonVariant[props.mode]} transition-all`} style={{ fontSize: `${props.size}rem` }} onClick={props.onPress} disabled={props.disabled}>
      {
        props.loading ?
          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg> : null
      }
      {props.text}
    </button>
  )
}

export default Button;