import React from "react";
import Team1 from "../../assets/img/team-member.png";
import "./Team.css";

const Team = React.forwardRef((props, ref) => {
    return <>
        <div className="team-container" >
            <h2 className="section-title" ref={ref}>MEET THE TEAM</h2>
            <div className="team-member">
                    <img src={Team1} alt="team1" />
                    <p className="team-member-name">@marta_artist</p>
                    <p className="team-member-desc">Founder & Artist - Passionate about vulva art and women's empowerment</p>
            </div>
            <div className="team-member">
                    <img src={Team1} alt="team2" />
                    <p className="team-member-name">@marta_artist</p>
                    <p className="team-member-desc">Founder & Artist - Passionate about vulva art and women's empowerment</p>
            </div>
            <div className="team-member">
                    <img src={Team1} alt="team3" />
                    <p className="team-member-name">@marta_artist</p>
                    <p className="team-member-desc">Founder & Artist - Passionate about vulva art and women's empowerment</p>
            </div>
        </div>
    </>
});

Team.displayName = 'Team';

export default Team;