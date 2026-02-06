import { IoIosArrowRoundForward } from "react-icons/io";

interface ButtonProps {
  text?: string;
  type?: "button" | "submit" | "reset";
  className?: string;
}

export default function Button({
  text,
  className,
  type = "button",
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`
        group
        rounded-[10px]
        px-4 py-3
        text-base font-[300]
        flex items-center justify-center gap-4
        cursor-pointer
        transition-all duration-300 ease-out
        transform
        hover:scale-105

        ${className}
      `}
    >
      {text}

      <span
        className="
          inline-flex
          transition-transform duration-300 ease-out
          group-hover:translate-x-2
        "
      >
        <IoIosArrowRoundForward size={20} />
      </span>
    </button>
  );
}
