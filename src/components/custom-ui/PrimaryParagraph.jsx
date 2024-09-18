const PrimaryParagraph = ({
    text,
    reduceBelow = 768,
    maxFontSize = 16,
    minFontSize = 14,
    className = '',
    ...props
}) => {
    const sizeReducer = (100 / reduceBelow) * maxFontSize;

    return (
        <p data-aos="zoom-in"
            {...props}
            style={{ fontSize: `clamp(${minFontSize}px, ${sizeReducer}vw, ${maxFontSize}px)` }}
            className={`${className} font-inter font-normal text-white opacity-70 leading-5 sm:leading-6`}
        >
            {text}
        </p>
    );
};

export default PrimaryParagraph;
