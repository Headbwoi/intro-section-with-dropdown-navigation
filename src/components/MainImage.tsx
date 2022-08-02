interface Props {
  imgSrc: string
  imgSrcLg: string
  altName: string
  width: string
}

const imageUrls: Props = {
  imgSrc: "/image-hero-mobile.png",
  imgSrcLg: "/image-hero-desktop.png",
  altName: "hero mobile image",
  width: "(min-width: 996px)",
}

const MainImage = () => {
  return (
    <div className="lg:w-[30.3125rem] lg:h-[40.3125rem] mb-[3.125rem] lg:mb-0">
      <picture>
        <source media={imageUrls.width} srcSet={imageUrls.imgSrcLg} />
        <img src={imageUrls.imgSrc} alt={imageUrls.altName} />
      </picture>
    </div>
  )
}

export default MainImage
