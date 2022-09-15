import React from "react"
import Team1 from "../../assets/img/team-member.png"
import "./Team.css"

const Team = ({team}) => {
    return <>
    
        <div container className="team-container" >
            
            <h2 className="section-title">MEET THE TEAM</h2>

            <div className="team-member">
                    <img src={Team1} alt="team1" />
                    <p className="team-member-name">@loremipsum</p>
                    <p className="team-member-desc">Lorem ipsum dolor sir amet, consectetuer adipiscing elit,</p>
            </div>
            <div className="team-member">
                    <img src={Team1} alt="team2" />
                    <p className="team-member-name">@loremipsum</p>
                    <p className="team-member-desc">Lorem ipsum dolor sir amet, consectetuer adipiscing elit,</p>
            </div>
            <div className="team-member">
                    <img src={Team1} alt="team3" />
                    <p className="team-member-name">@loremipsum</p>
                    <p className="team-member-desc">Lorem ipsum dolor sir amet, consectetuer adipiscing elit,</p>
            </div>
        </div>
    </>
}

export default Team