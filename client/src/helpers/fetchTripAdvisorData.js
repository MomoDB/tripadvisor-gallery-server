const fetchTripAdvisorData = (callback) => {
  const activityId = Math.floor(Math.random() * 100);
  fetch(`/tripAdvisor/${activityId}/gallery`)
    .then((res) => res.json())
    .then((data) => {
      callback(null, data);
    })
    .catch((err) => callback(err));
};

export default fetchTripAdvisorData;
