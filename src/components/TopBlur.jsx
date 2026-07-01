export default function TopBlur() {
    return (
      <div
        className="
          fixed
          bottom-0
          left-0
          w-full
          h-[180px]
          pointer-events-none
          z-[999]
          overflow-hidden
        "
      >
  
        {/* reforço no bottom */}
        <div
          className="
            absolute
            bottom-0
            left-0
            w-full
            h-[100px]
            backdrop-blur-[20px]
            [mask-image:linear-gradient(to_top,black_0%,transparent_100%)]
          "
        />
      </div>
    );
  }