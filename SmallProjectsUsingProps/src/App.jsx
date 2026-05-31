import React from 'react'
import Card from '../components/Card'

function App() {

const employees = [
  {
    profilePicture: "https://randomuser.me/api/portraits/women/44.jpg",
    nameEmployee: "Chloe Harrison",
    header: "Product Designer",
    skillSet1: "Figma",
    skillSet2: "UI/UX Design",
    rating: 4.8,
    earnedCash: "$45K+",
    chargesHourly: "$50/hr"
  },
  {
    profilePicture: "https://randomuser.me/api/portraits/men/32.jpg",
    nameEmployee: "Ahmad Khan",
    header: "Frontend Developer",
    skillSet1: "Programmer",
    skillSet2: "React",
    rating: 4.9,
    earnedCash: "$30K+",
    chargesHourly: "$40/hr"
  },
  {
    profilePicture: "https://randomuser.me/api/portraits/women/68.jpg",
    nameEmployee: "Sophia Carter",
    header: "Brand Designer",
    skillSet1: "Figma",
    skillSet2: "Brand Design",
    rating: 4.5,
    earnedCash: "$18K+",
    chargesHourly: "$35/hr"
  },
  {
    profilePicture: "https://randomuser.me/api/portraits/men/15.jpg",
    nameEmployee: "Daniel Brooks",
    header: "Backend Engineer",
    skillSet1: "Node.js",
    skillSet2: "MongoDB",
    rating: 4.2,
    earnedCash: "$22K+",
    chargesHourly: "$45/hr"
  },
  {
    profilePicture: "https://randomuser.me/api/portraits/women/22.jpg",
    nameEmployee: "Emma Wilson",
    header: "Graphic Designer",
    skillSet1: "Illustrator",
    skillSet2: "Photoshop",
    rating: 4.7,
    earnedCash: "$27K+",
    chargesHourly: "$38/hr"
  },
  {
    profilePicture: "https://randomuser.me/api/portraits/men/51.jpg",
    nameEmployee: "Michael Turner",
    header: "Game Developer",
    skillSet1: "Unity",
    skillSet2: "Game Development",
    rating: 5.0,
    earnedCash: "$60K+",
    chargesHourly: "$70/hr"
  },
  {
    profilePicture: "https://randomuser.me/api/portraits/women/56.jpg",
    nameEmployee: "Olivia Bennett",
    header: "Content Strategist",
    skillSet1: "Content Writing",
    skillSet2: "SEO",
    rating: 4.0,
    earnedCash: "$12K+",
    chargesHourly: "$20/hr"
  },
  {
    profilePicture: "https://randomuser.me/api/portraits/men/74.jpg",
    nameEmployee: "James Walker",
    header: "Machine Learning Engineer",
    skillSet1: "Python",
    skillSet2: "Machine Learning",
    rating: 4.6,
    earnedCash: "$40K+",
    chargesHourly: "$55/hr"
  },
  {
    profilePicture: "https://randomuser.me/api/portraits/women/33.jpg",
    nameEmployee: "Ava Martinez",
    header: "Mobile App Developer",
    skillSet1: "Flutter",
    skillSet2: "Mobile Apps",
    rating: 4.4,
    earnedCash: "$25K+",
    chargesHourly: "$42/hr"
  },
  {
    profilePicture: "https://randomuser.me/api/portraits/men/81.jpg",
    nameEmployee: "Ethan Cooper",
    header: "GPU Programmer",
    skillSet1: "DevOps",
    skillSet2: "AWS",
    rating: 3.8,
    earnedCash: "$15K+",
    chargesHourly: "$30/hr"
  }
];

  return (
    <div className="parent">
      {employees.map(function(elem){
        return <Card nameEmployee={elem.nameEmployee} skillSet1={elem.skillSet1} 
        skillSet2={elem.skillSet2} rating={elem.rating} earnedCash={elem.earnedCash} 
        chargesHourly={elem.chargesHourly} profilePicture={elem.profilePicture} header={elem.header}
        ></Card>
      })}
      
    </div>
  )
}

export default App
