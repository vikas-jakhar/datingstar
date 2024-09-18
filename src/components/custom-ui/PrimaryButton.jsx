const PrimaryButton = ({ text, hoverClass, className = '', ...props }) => {
    return (
        <button
            className={`overflow-hidden bg-off-yellow group relative rounded-xl z-[1] text-sm sm:text-base ${className}`}
            {...props}
        >
            <span className="group-hover:drop-shadow-gray-sm font-raleway transition_slow font-semibold text-black">{text}</span>
            <span className={`h-0 w-0 -z-10 opacity-0 group-hover:opacity-100 transition_slow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:rotate-180 group-hover:h-24 group-hover:w-full ${hoverClass}`}></span>
        </button>
    );
};

export default PrimaryButton;