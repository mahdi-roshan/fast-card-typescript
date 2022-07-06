type ImageSectionProps = {
    src: string
}

const ImageSection = ({ src }: ImageSectionProps) => {
    return (
        <>
            <div className="w-full mb-3">
                <img
                    src={src}
                    alt="Just a flower"
                    className="w-full h-80 object-fill rounded-xl"
                />
            </div>
        </>
    )
}

export default ImageSection;