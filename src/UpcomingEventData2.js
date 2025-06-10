import useListing from "./Hooks/useListing";
import img from "./assets/TempPhoto.png";

const API_BASE = "http://154.26.130.161/hswf/";

export default function useUpcomingEventData2() {
  const { data, loading, error } = useListing();

  // Ensure we always have an array to map over
  const eventList = Array.isArray(data?.data) ? data.data : [];

  const mappedData = eventList.map((item, idx) => ({
    id: item.id || idx,
    image: item.event_banner
      ? API_BASE + item.event_banner
      : img,
    label: "Bond Over Sports",
    title: item.name || item.title,
    location: item.venue_name || "",
    date: item.start_date
      ? formatEventDate(item.start_date, item.end_date)
      : "",
    description: item.description || "",
  }));

  return { data: mappedData, loading, error };
}


function formatEventDate(start, end) {
  const opts = { year: "numeric", month: "short", day: "numeric" };
  const startDate = new Date(start);
  const endDate = new Date(end);
  return `${startDate.toLocaleDateString(
    "en-GB",
    opts
  )} – ${endDate.toLocaleDateString("en-GB", opts)}`;
}
