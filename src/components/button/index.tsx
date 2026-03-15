interface IProps {
  label: string;
  onClick: () => void;
}

export function UIButton({ label, onClick }: IProps) {
  return (
    <button
      onClick={onClick}
      type="button"
      className={`
        w-full 
        sm:w-auto 
        px-6 
        py-3 
        cursor-pointer
        text-center 
        bg-blue-600 
        hover:bg-blue-700 
        active:bg-blue-800 
        text-white 
        font-semibold 
        rounded-lg 
        shadow 
        transition-all 
        duration-150 
        ease-in-out 
        focus:ring-4 
        focus:ring-blue-300 
        focus:outline-none
        `}
    >
      {label}
    </button>
  );
}
