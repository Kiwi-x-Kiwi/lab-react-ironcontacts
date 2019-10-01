import React from 'react';

function CelebRow (props){
  return(
    <tr>
      <td><img className = "celeb-picture" src={props.celeb.pictureUrl} alt={"Picture of " + props.celeb.name} /></td>
      <td>{props.celeb.name}</td>
      <td>{props.celeb.popularity}</td>
    </tr>
  )
}

export default CelebRow;