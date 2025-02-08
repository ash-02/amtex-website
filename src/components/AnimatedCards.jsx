// import React from "react";

// const cards = [
//   {
//     title: "Big Data Analysis",
//     image:
//       "https://plus.unsplash.com/premium_photo-1661876806982-61d04a531d8e?q=80&w=3255&auto=format&fit=crop",
//     description:
//       "Hadoop Eco-System Solutions, High Volume Data Integration and Data Management, Semi or Unstructured Big Data Analytics",
//   },
//   {
//     title: "Business Intelligence",
//     image:
//       "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=3270&auto=format&fit=crop",
//     description:
//       "Dimensional Data Modeling and Data Warehouse, ETL Solutions, End to End Automation, Data Partitioning and Aggregation, Data Visualization with Dashboards and Reports",
//   },
//   {
//     title: "Data Science & Artificial Intelligence",
//     image:
//       "https://plus.unsplash.com/premium_photo-1733317257106-79b094845b8e?q=80&w=3164&auto=format&fit=crop",
//     description:
//       "Continuous Learning, Adaptation and Optimization, Machine Learning, Deep Learning and Neural Networks Expertise, Descriptive and Prescriptive Analytical Solutions with Diagnosis",
//   },
// ];

// const AnimatedCards = () => {
//   return (
//     <div className="cards-container">
//       {cards.map((card, index) => (
//         <div key={index} className="card-wrapper">
//           <div className="border-animation"></div>
//           <div className="card">
//             <h3>{card.title}</h3>
//             <img src={card.image} alt={card.title} />
//             <p>{card.description}</p>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default AnimatedCards;

import React from "react";
import { motion } from "framer-motion";

const cards = [
  {
    title: "Big Data Analysis",
    image:
      "https://plus.unsplash.com/premium_photo-1661876806982-61d04a531d8e?q=80&w=3255&auto=format&fit=crop",
    description:
      "Hadoop Eco-System Solutions, High Volume Data Integration and Data Management, Semi or Unstructured Big Data Analytics",
  },
  {
    title: "Business Intelligence",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=3270&auto=format&fit=crop",
    description:
      "Dimensional Data Modeling and Data Warehouse, ETL Solutions, End to End Automation, Data Partitioning and Aggregation, Data Visualization with Dashboards and Reports",
  },
  {
    title: "Data Science & Artificial Intelligence",
    image:
      "https://plus.unsplash.com/premium_photo-1733317257106-79b094845b8e?q=80&w=3164&auto=format&fit=crop",
    description:
      "Continuous Learning, Adaptation and Optimization, Machine Learning, Deep Learning and Neural Networks Expertise, Descriptive and Prescriptive Analytical Solutions with Diagnosis",
  },
];

const AnimatedCards = () => {
  return (
    <motion.div
      className="cards-container"
      initial={{ opacity: 0}}
      animate={{ opacity: 1}}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      {cards.map((card, index) => (
        <motion.div
          key={index}
          className="card-wrapper"
          initial={{ scale: 0 }}
          animate={{ scale: [1, 1.05, 1] }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 0.2,
          }}
        >
          <div className="border-animation"></div>
          <div className="card">
            <h3>{card.title}</h3>
            <img src={card.image} alt={card.title} />
            <p>{card.description}</p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default AnimatedCards;
