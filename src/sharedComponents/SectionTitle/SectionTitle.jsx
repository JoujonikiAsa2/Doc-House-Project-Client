const SectionTitle = ({heading, text}) => {
    return (
        <div className="flex flex-col justify-center items-center p-4">
            <h2 className=" text-xl lg:text-2xl font-bold text-black">{heading}</h2>
            <p className="max-w-[930px] text-center">{text}</p>
        </div>
    );
};

export default SectionTitle;