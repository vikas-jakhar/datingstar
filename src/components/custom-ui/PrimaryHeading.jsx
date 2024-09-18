const PrimaryHeading = ({
    text,
    yellowText,
    reduceBelow = 1024,
    maxFontSize = 40,
    minFontSize = 25,
    className = '',
    ...props
}) => {
    const sizeReducer = (100 / reduceBelow) * maxFontSize;

    return (
        <h2 data-aos="zoom-in"
            {...props}
            style={{ fontSize: `clamp(${minFontSize}px, ${sizeReducer}vw, ${maxFontSize}px)` }}
            className={`${className} font-raleway font-semibold text-white text-center md:leading-custom-xl`}
        >
            {text}
            <span className={`font-raleway font-semibold text-off-yellow`}> {yellowText}</span>
        </h2>
    );
};

export default PrimaryHeading;