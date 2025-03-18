// import React from "react";
// import { HTMLAttributes, useEffect, useState } from "react";

// interface ImageProps extends HTMLAttributes<HTMLDivElement> {
//   item: { image: string; title: string };
//   index: number;
//   activeItem: number;
// }

// interface ExpandableProps {
//   list?: { image: string; title: string }[];
//   autoPlay?: boolean;
//   className?: string;
// }

// const List = ({ item, className, index, activeItem, ...props }: ImageProps) => {
//   return (
//     <div
//       className={`relative flex h-full w-20 min-w-10 cursor-pointer overflow-hidden rounded-md transition-all duration-300 ease-in-out ${
//         index === activeItem ? "flex-grow" : ""
//       } ${className}`}
//       {...props}
//     >
//       <img
//         src={item.image}
//         alt={item.title}
//         className={`h-full w-full object-cover ${index !== activeItem ? "blur-[2px]" : ""}`}
//       />
//       {index === activeItem && (
//         <div className="absolute bottom-4 left-4 min-w-fit text-white md:bottom-8 md:left-8 text-xl sm:text-2xl md:text-6xl">
//           {item.title}
//         </div>
//       )}
//     </div>
//   );
// };

// const items = [
//   {
//     image:
//     //   "https://images.unsplash.com/photo-1541753236788-b0ac1fc5009d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3",
//     "https://images.unsplash.com/photo-1488229297570-58520851e868?q=80&w=3269&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     title: "Big Data Analytics",
//   },
//   {
//     image:
//       "https://images.unsplash.com/photo-1483736762161-1d107f3c78e1?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     title: "Database Architecture and Warehousing",
//   },
//   {
//     image:
//       "https://plus.unsplash.com/premium_photo-1682124886753-ea98cc90c611?q=80&w=3200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     title: "Data Migration and Integration",
//   },
//   {
//     image:
//       "https://plus.unsplash.com/premium_photo-1661386253258-64ab9521ce89?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     title: "Data Science and Services",
//   },
//   {
//     image:
//       "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     title: "Data Analytics and Visualization",
//   },
//   {
//     image:
//       "https://images.unsplash.com/photo-1581090016743-0791caf50d31?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     title: "End to End Automation",
//   },
// ];

// export default function Expandable({ list = items, autoPlay = true, className }: ExpandableProps) {
//   const [activeItem, setActiveItem] = useState(0);
//   const [isHovering, setIsHovering] = useState(false);

//   useEffect(() => {
//     if (!autoPlay) {
//       return;
//     }

//     const interval = setInterval(() => {
//       if (!isHovering) {
//         setActiveItem((prev) => (prev + 1) % list.length);
//       }
//     }, 3000);

//     return () => clearInterval(interval);
//   }, [autoPlay, list.length, isHovering]);

//   return (
//     <div className={`flex h-full w-full gap-1 ${className}`}>
//       {list.map((item, index) => (
//         <List
//           key={item.title}
//           item={item}
//           index={index}
//           activeItem={activeItem}
//           onMouseEnter={() => {
//             setActiveItem(index);
//             setIsHovering(true);
//           }}
//           onMouseLeave={() => {
//             setIsHovering(false);
//           }}
//         />
//       ))}
//     </div>
//   );
// }


import { path } from "framer-motion/client";
import React, { useEffect, useState } from "react";
import { HTMLAttributes } from "react";

interface ImageProps extends HTMLAttributes<HTMLDivElement> {
  item: { image: string; title: string };
  index: number;
  activeItem: number;
}

interface ExpandableProps {
  list?: { image: string; title: string }[];
  autoPlay?: boolean;
  className?: string;
}

const List = ({ item, className, index, activeItem, ...props }: ImageProps) => {
  return (
    <div
      className={`carou-list relative flex md:w-20 md:min-w-10 h-10 md:h-full w-full cursor-pointer overflow-hidden rounded-md transition-all duration-300 ease-in-out 
      ${index === activeItem ? "flex-grow" : ""} ${className}`}
      {...props}
    >
      <img
        src={item.image}
        alt={item.title}
        className={`h-full w-full object-cover ${index !== activeItem ? "blur-[2px]" : ""}`}
      />
      {/* {index === activeItem && (
        <div className="absolute bottom-4 left-4 min-w-fit text-white md:bottom-8 md:left-8 text-3xl text-center sm:text-2xl md:text-6xl">
          {item.title} ➪
        </div>
      )} */}
      {/* {index === activeItem && (
        <div className="absolute bottom-4 left-4 md:bottom-8 md:left-8 flex items-center justify-center">
          <div className="backdrop-blur-lg bg-white/20 border border-white/30 rounded-lg px-6 py-3" style={{ width: "90%", margin: "auto" }}>
            <p className="text-white text-2xl text-center sm:text-2xl md:text-6xl font-semibold">
              {item.title} ➪
            </p>
          </div>
        </div>
      )} */}
      {index === activeItem && (
        //     <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 md:bottom-8 flex items-center justify-center w-full">
        //       {/* Glassmorphism Background with Max Width */}
        //       <a href={
        //         item.path
        //       } style={{
        //         textDecoration: "none",
        //         margin: "auto",
        //         width: "90%",
        //       }} 
        //       >
        //         <div className="backdrop-blur-lg bg-white/20 border border-white/30 rounded-lg px-6 py-3 w-[90%] max-w-[500px] text-center">
        //           <p className="text-white text-lg sm:text-xl md:text-3xl font-semibold">
        //             {item.title}
        //           </p>
        //         </div>
        //       </a>
        //     </div>
        //   )}
        // </div>
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 md:bottom-8 flex items-center justify-center w-full">
          {/* Glassmorphism Background with Max Width */}
          <a
            href={item.path}
            className="flex justify-center w-full"
            style={{
              textDecoration: "none",
            }}
          >
            <div className="backdrop-blur-lg bg-white/20 border border-white/30 rounded-lg px-6 py-3 w-[90%] max-w-[500px] text-center">
              <p className="text-white text-lg sm:text-xl md:text-3xl font-semibold">
                {item.title}
              </p>
            </div>
          </a>
        </div>
      )}
    </div>
      );
};

      const items = [
      {
        image:
      "https://images.unsplash.com/photo-1488229297570-58520851e868?q=80&w=3269&auto=format&fit=crop&ixlib=rb-4.0.3",
      title: "Big Data Analytics",
      path: "/solutions/big-data-development-&-solutions"
  },
      {
        image:
      "https://images.unsplash.com/photo-1483736762161-1d107f3c78e1?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.0.3",
      title: "Database Architecture and Warehousing",
      path: "/solutions/database-architecture",
  },
      {
        image:
      "https://plus.unsplash.com/premium_photo-1682124886753-ea98cc90c611?q=80&w=3200&auto=format&fit=crop&ixlib=rb-4.0.3",
      title: "Data Migration and Integration",
      path: "/solutions/data-migration-&-integration",
  },
      {
        image:
      "https://plus.unsplash.com/premium_photo-1661386253258-64ab9521ce89?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3",
      title: "Data Science and Services",
      path: "/solutions/data-science-&-services",
  },
      {
        image:
      "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3",
      title: "Data Analytics and Visualization",
      path: "/solutions/data-analytics-&-visualizations",
  },
      {
        image:
      "https://images.unsplash.com/photo-1581090016743-0791caf50d31?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3",
      title: "End to End Automation",
      path: "/solutions/end-to-end-automation",
  },
      ];

      export default function Expandable({list = items, autoPlay = true, className}: ExpandableProps) {
  const [activeItem, setActiveItem] = useState(0);
      const [isHovering, setIsHovering] = useState(false);

      const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
        setIsMobile(window.innerWidth < 768);
    };

      handleResize();
      window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!autoPlay) {
      return;
    }

    const interval = setInterval(() => {
      if (!isHovering) {
        setActiveItem((prev) => (prev + 1) % list.length);
      }
    }, isMobile ? 1500 : 3000);

    return () => clearInterval(interval);
  }, [autoPlay, list.length, isHovering]);

      return (
      <div className={`flex md:flex-row flex-col h-full w-full md:gap-1 gap-2 ${className}`}>
        {list.map((item, index) => (
          <List
            key={item.title}
            item={item}
            index={index}
            activeItem={activeItem}
            onMouseEnter={() => {
              setActiveItem(index);
              setIsHovering(true);
            }}
            onMouseLeave={() => {
              setIsHovering(false);
            }}
          />
        ))}
      </div>
      );
}