import Image from "next/image"

type ButtonProps = {
    type: "button" | "submit";
    title: string;
    icon?: string;
    variant: "btn_dark_green" | "btn_green" | "btn_white_text" | "btn_white" | "btn_dark_green_outline";
    className?: string;
    full?: boolean
}

const Button = ({type, title, icon, variant, className, full}: ButtonProps)  => {
  return (
    <button type={type} className={`flexCenter rounded-full gap-3 border ${variant} ${!!className ? className : ""} ${full && "w-full"}`}>
        {icon && <Image src={icon} alt={title} height={24} width={24}/>}
        <label className="bold-16 whitespace-nowrap cursor-pointer">{title}</label>
    </button>
  )
}

export default Button