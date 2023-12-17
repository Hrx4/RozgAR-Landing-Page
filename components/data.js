import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../public/img/benefit-one.png";
import benefitTwoImg from "../public/img/benefit-two.png";

const benefitOne = {
  title: "Scan for Nearby Opportunities",
  desc: "Utilize your phone's camera to scan your surroundings and discover nearby job openings in augmented reality. Explore opportunities around you like never before, revolutionizing how you find local career options.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Visualize Local Employment Options",
      desc: "Get Notifications on nearby job posts",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Easy to use",
      desc: "Everything to the point no bs",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Personalized Job Search",
      desc: "Apply to your favorite jobs just at one click",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Real-time Location-Based Job Search",
  desc: "Harness the power of augmented reality to conduct a real-time, location-based job search. Instantly visualize available positions in your vicinity, making job hunting an immersive and convenient experience.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "User-Friendly Interface",
      desc: "RozgAR boasts an intuitive and user-friendly interface, making job searching and application processes seamless for users of all proficiencies.",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Comprehensive Job Details",
      desc: "The app provides comprehensive job details, including salary ranges, job descriptions, company information, and application procedures.",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "Diverse Job Categories",
      desc: "RozgAR covers a wide spectrum of job categories, catering to various industries and skill sets. ",
      icon: <SunIcon />,
    },
  ],
};


export {benefitOne, benefitTwo};
