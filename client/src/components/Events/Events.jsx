import React, { useEffect } from "react";
import { useQuery } from "@apollo/client";
import { useStoreContext } from "../../utils/GlobalState";
import { idbPromise } from "../../utils/helpers";
import { MEETINGS } from "../../utils/queries";
import { ADD_MEETING } from "../../utils/actions";

const Events = () => {
  const [state, dispatch] = useStoreContext();
  const { loading, data } = useQuery(MEETINGS);

  useEffect(() => {
    if (data) {
        dispatch({
            type: ADD_MEETING,
            meetings: data.meetings
        })

        data.products.forEach((meeting) => {
            idbPromise("meetings", "put", meeting)
        })
    } else {
        idbPromise("meetings", "get").then((meetings) => {
            dispatch({
                type: ADD_MEETING,
                meetings: meetings
            })
        })
    }
  }, [data, loading, dispatch])

  return (
  <div>

  </div>
  )
};

export default Events;
