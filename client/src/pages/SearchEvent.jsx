import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import { SINGLE_MEETING } from "../utils/queries";
import { Row, Col, Card, Button, Modal, CloseButton } from "react-bootstrap";
import AddReaction from "../components/AddReaction";
import Reactions from "../components/Reactions";
import Auth from "../utils/auth";

const SearchMeetings = () => {
    return (
        <div>

        </div>
    )
}

export default SearchMeetings;