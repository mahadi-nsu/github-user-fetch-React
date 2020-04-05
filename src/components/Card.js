import React, { Component } from 'react'

export default class Card extends Component {

    render(props) {
        const profile = this.props;
        // console.log(props.profile);
        return (
            <div className="github-profile">
                <img src={profile.avatar_url} />
                <div className="info">
                    <div className="name">{profile.name}</div>
                    <div className="company">{profile.company}</div>
                </div>

            </div>
        )
    }
}
