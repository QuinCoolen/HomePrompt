type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
};

export const Button = ({ children, onClick, type }: ButtonProps) => {
  return (
    <button
      type={type || "button"}
      onClick={onClick}
      className="w-full text-white text-xl bg-secondary border-4 border-primary rounded-full shadow active:border-opacity-50 active:bg-opacity-50"
    >
      {children}
    </button>
  )
}