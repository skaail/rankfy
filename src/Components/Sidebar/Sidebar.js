import React from 'react'
import { SLink, SLinkContainer, SLinkIcon, SLinkLabel, SSidebar } from './styles'
import { AiFillHome, AiOutlineAppstoreAdd, AiOutlineOrderedList } from "react-icons/ai";

const linksArray = [
  {
      label: "Home",
      icon: <AiFillHome />,
      to: "/",
  },
  {
      label: "Adicionar músicas",
      icon: <AiOutlineAppstoreAdd />,
      to: "/adicionar",
  },
  {
      label: "Ranking",
      icon: <AiOutlineOrderedList />,
      to: "/ranking",
  } 
]

const Sidebar = () => {
  
    return (
      <SSidebar>
        <>
        {linksArray.map(({label, to, icon}) => (
                <SLinkContainer key = {label}>
                    <SLink to={to}>
                        <SLinkIcon>{icon}</SLinkIcon>
                            <SLinkLabel>{label}</SLinkLabel>
                    </SLink>
                </SLinkContainer>
          ))}
        </>
      </SSidebar>
    )
}

export default Sidebar