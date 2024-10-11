import Link from "next/link";

import { FaGithub, FaLinkedinIn, FaEnvelope, FaTwitter } from "react-icons/fa";

const social = [
  { icon: <FaGithub />,   path: "https://www.github.com/abhishekchouhannk" },
  { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/abhishekchouhannk" },
  { icon: <FaEnvelope />, path: "abhishekchouhannk@gmail.com" },
  { icon: <FaTwitter />,  path: "https://www.twitter.com/abhishekchouhannk"}
]

/*

    { icon: <FaGithub />,   path: "https://www.github.com/abhishekchouhannk" },
  { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/abhishekchouhannk" },
  { icon: <FaEnvelope />, path: "abhishekchouhannk@gmail.com" },
  { icon: <FaTwitter />,  path: "https://www.twitter.com/abhishekchouhannk"}
*/

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {social.map((item, index) => {
        return <Link key={index} href={item.path} className={iconStyles}>
          {item.icon}
        </Link>
      })}
    </div>
  )
}

export default Social