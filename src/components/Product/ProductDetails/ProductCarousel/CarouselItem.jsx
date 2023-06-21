export default function CarouselItem({ data, bigCarousel }) {
  return (
    <div className="carouselItem">
      <img
        className={`${bigCarousel && "bigCarousel"} `}
        src={`${process.env.REACT_APP_Files_URL}/${data?.url}`}
        alt={data?.id}
      />
    </div>
  );
}
