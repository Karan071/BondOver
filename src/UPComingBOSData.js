import useListing from "./Hooks/useListing";
import img from "./assets/TempPhoto.png";

const IMAGE_BASE = "https://hswf.network/";

export default function useUPComingBOSData() {
  const { data, loading, error } = useListing();

  const eventList = Array.isArray(data?.data) ? data.data : [];

  const mappedData = eventList.map((item, idx) => {
    // Fix image banner logic
    let image = img;
    if (item.event_banner) {
      if (item.event_banner.startsWith("http")) {
        image = item.event_banner;
      } else {
        image = `${IMAGE_BASE}${item.event_banner.replace(/^\/+/, "")}`;
      }
    }

    return {
      id: item.id ?? idx,
      image,
      title: item.name || item.title || "",
      ageGroup: item.category_data?.title || "",
      location: item.venue_name || "",
      date: item.start_date
        ? formatEventDate(item.start_date, item.end_date)
        : "",
      description: item.description || "",
    };
  });

  return { data: mappedData, loading, error };
}

// Helper to format date range
function formatEventDate(start, end) {
  const opts = { year: "numeric", month: "short", day: "numeric" };
  const startDate = new Date(start);
  const endDate   = new Date(end);
  return `${startDate.toLocaleDateString("en-GB", opts)} – ${endDate.toLocaleDateString("en-GB", opts)}`;
}