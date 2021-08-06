export const getSavedMeeting = () => {
  const savedMeeting = localStorage.getItem("saved_meetings")
    ? JSON.parse(localStorage.getItem("saved_meetings"))
    : [];
  return savedMeeting;
};

export const saveMeeting = (meetingArr) => {
  if (meetingArr.length) {
    localStorage.setItem("saved_meetings", JSON.stringify(meetingArr));
  } else {
    localStorage.removeItem("saved_meetings");
  }
};

export const removeMeeting = (meeting) => {
  const savedMeeting = localStorage.getItem("saved_meetings")
    ? JSON.parse(localStorage.getItem("saved_meetings"))
    : null;

  if (!savedMeeting) {
    return false;
  }

  const updatedSavedMeeting = savedMeeting?.filter(
    (savedMeeting) => savedMeeting !== meeting
  );
  localStorage.setItem("saved_meetings", JSON.stringify(updatedSavedMeeting));
  return true;
};
