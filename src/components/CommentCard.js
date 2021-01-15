/** @format */

import React from "react";
import { Image, Media } from "react-bootstrap";

const CommentCard = () => {
  return (
    <Media className="mb-4">
      <Image
        src="https://picsum.photos/50"
        roundedCircle
        className="mr-3 d-flex"
      />
      <Media.Body>
        <h4>Name</h4>
        Voluptate commodo quis laboris ut eiusmod mollit exercitation fugiat
        ipsum et ipsum elit. Nisi minim ea adipisicing eiusmod et cupidatat
        minim pariatur elit anim adipisicing commodo excepteur. Et non
        adipisicing nisi mollit amet eiusmod ut incididunt eu reprehenderit do
        sit ullamco. Mollit qui velit aute id duis laborum mollit id mollit esse
        culpa. Proident anim nisi nulla aute id culpa ea ex. Lorem ex non aute
        dolore ad. Sint duis dolore qui officia. Ad et officia tempor ullamco
        incididunt et. Enim deserunt irure magna aute enim sint nisi sint
        laborum nulla adipisicing qui.
      </Media.Body>
    </Media>
  );
};

export default CommentCard;
