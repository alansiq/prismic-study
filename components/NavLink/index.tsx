import Link from "next/link";
import { useRouter } from "next/router";

interface LinkProps {
  href: string;
  activeClassName: string;
  className ?: string;
  children ?: any;
  onClick ?: any;
}

const NavLink = (props: LinkProps) => {

  let classList: string;
  const router = useRouter();
  
  if (router.pathname == props.href) {
    classList = `${props.className} ${props.activeClassName}`
  } else {
    classList = `${props.className}`
  }

  return (
    
    <Link href={props.href}>
      <a onClick={props.onClick} className={classList}>
        {props.children}
      </a>
    </Link>

  )
}

export default NavLink;