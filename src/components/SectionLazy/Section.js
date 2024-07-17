import useIntersectionObserver from "../../hooks/UseIntersection";

const Section = ({ children, delay }) => {
    const [ref, isIntersecting] = useIntersectionObserver({
      threshold: 0.1, // Adjust as needed
    });
  
    return (
      <div
        ref={ref}
        className={`transition-opacity duration-1000 ${
          isIntersecting ? 'fade-in' : 'opacity-0'
        }`}
        style={{ transitionDelay: `${delay}ms` }}
      >
        {children}
      </div>
    );
  };

export default Section;