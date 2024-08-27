import { FC, HTMLAttributes } from "react"
interface Logo extends HTMLAttributes<HTMLAnchorElement> {};

const Logo: FC<Logo> = (props) => {
  return (
    <a href={"#about"}  {...props}>
        <img src="/logo.png" alt="logo" className="h-8 lg:h-auto" />
    </a>
  )
}

export default Logo