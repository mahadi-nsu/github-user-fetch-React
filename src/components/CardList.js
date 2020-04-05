// import React from 'react'
// import Card from './Card'

// const CardList = (props) => (
//     <div>
//         {props.profiles.map(profile => <Card key={profile.id} {...profile} />)}
//     </div>
// );

// export default CardList;

import React from 'react';
import Card from './Card';

export default function CardList(props) {
    return (
        <div>
            {props.profiles.map(profile => <Card key={profile.id} {...profile} />)}
        </div>
    )
}
