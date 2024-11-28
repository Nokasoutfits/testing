// import {motion} from "framer-motion";
// import { MdStar } from "react-icons/md";

// import {SectionWrapper} from "../hoc"
// import {styles} from '../styles'
// import { slideIn,textVariant , fadeIn} from "../utils/motion";
// import client1 from "../assets/client1.jpg"
// import client2 from "../assets/client2.jpg"
// import client3 from "../assets/client3.jpg"

// const Testimonial = () => {
//   return (
//     <div className="">
//       <motion.div variants={textVariant()} className="">
//         <p className={`${styles.sectionSubText}`}>
//           What our investors say about us
//         </p>
//         <h1 className={`${styles.sectionHeadText}`}>Testimonials.</h1>
//       </motion.div>
//       <div className="mt-6 flex flex-wrap gap-8">
//         <motion.div variants={fadeIn("left", "spring", 0.5, 1.5)} 
//         initial="hidden" whileInView="show" className="relative bg-tertiary p-6 rounded-[24px] w-full max-w-[350px]">
//           <p className="flex flex-col justify-start items-start">
//             <span className="text-[5rem] h-16">"</span>
//             I own everything to this company, at first i was scared of my past experience with investment companies but with my first two years of investing in them realized they are not just an investment company but also dream builders and achivers of the fortune.
//           </p>
//           <span className="gap-4 flex justify-center items-center my-4">
//             <MdStar className="text-light text-3xl"/> 
//             <MdStar className="text-light text-3xl"/> 
//             <MdStar className="text-light text-3xl"/> 
//             <MdStar className="text-light text-3xl"/> 
//             <MdStar className="text-light text-3xl"/> 
//           </span>
//           <div className="rounded-full relative w-[100px] h-[100px] mx-auto mt-4  ">
//           <img src={client1} alt="costomer-pic" className="object-cover rounded-full w-full h-full"/>
//           </div>
//           <h5 className="text-center pt-4">Antonio</h5>

//         </motion.div>
//         <motion.div variants={fadeIn("left", "spring", 0.5, 2)} 
//         initial="hidden" whileInView="show" className="relative bg-tertiary p-6 rounded-[24px] w-full max-w-[350px]">
//           <p className="flex flex-col justify-start items-start">
//             <span className="text-[5rem] h-16">"</span>
//             This company is the real deal , their honesty, transparency and tranquility is unmeasurable. I'm really happy to have known this company and would keep spreeding the good news to anyone close to me. 
//           </p>
//           <span className="gap-4 flex justify-center items-center my-4">
//             <MdStar className="text-light text-3xl"/> 
//             <MdStar className="text-light text-3xl"/> 
//             <MdStar className="text-light text-3xl"/> 
//             <MdStar className="text-light text-3xl"/> 
//             <MdStar className="text-light text-3xl"/> 
//           </span>
//           <div className="rounded-full relative w-[100px] h-[100px] mx-auto mt-4  ">
//           <img src={client2} alt="costomer-pic"  className="object-cover rounded-full w-full h-full"/>
//           </div>
//           <h5 className="text-center pt-4">Alexia</h5>

//         </motion.div>
//         <motion.div variants={slideIn("left", "spring", 0.5, 2.5)} 
//         initial="hidden" whileInView="show" className="relative bg-tertiary p-6 rounded-[24px] w-full max-w-[350px]">
//           <p className="flex flex-col justify-start items-start">
//             <span className="text-[5rem] h-16">"</span>
//             I can remember when i made my first investment with this platform, i was so scared until i made withdrawal here, now this company has not failed me.
//           </p>
//           <span className="gap-4 flex justify-center items-center my-4">
//             <MdStar className="text-light text-3xl"/> 
//             <MdStar className="text-light text-3xl"/> 
//             <MdStar className="text-light text-3xl"/> 
//             <MdStar className="text-light text-3xl"/> 
//             <MdStar className="text-light text-3xl"/> 
//           </span>
//           <div className="rounded-full relative w-[100px] h-[100px] mx-auto mt-4  ">
//           <img src={client3} alt="costomer-pic" className="object-cover rounded-full w-full h-full"/>
//           </div>
//           <h5 className="text-center pt-4">Susan</h5>
//         </motion.div>
//       </div>
//     </div>
//   )
// }

// export default SectionWrapper(Testimonial, "")