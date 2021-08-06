export const getSavedMeetingId = () => {
  const savedMeetingId = localStorage.getItem("saved_meetings")
    ? JSON.parse(localStorage.getItem("saved_meetings"))
    : [];
  return savedMeetingId;
};

export const saveMeetingId = (meetingIdArr) => {
  if (bookArr.length) {
    localStorage.setItem("saved_meetings", JSON.stringify(meetingIdArr));
  } else {
    localStorage.removeItem("saved_meetings");
  }
};

export const removeMeetingId = (meetingId) => {
  const savedMeetingId = localStorage.getItem("saved_meetings")
    ? JSON.parse(localStorage.getItem("saved_meetings"))
    : null;

  if (!savedMeetingId) {
    return false;
  }

  const updatedSavedMeetingId = savedMeetingId?.filter(
    (savedMeetingId) => savedMeetingId !== meetingId
  );
  localStorage.setItem("saved_meetings", JSON.stringify(updatedSavedMeetingId));
  return true;
};
