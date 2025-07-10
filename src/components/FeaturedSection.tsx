import { useState } from "react";

export const FeaturedSection: React.FC = () => {
  const [isMapOpen, setIsMapOpen] = useState(false);

  const stories = [
    {
      title:
        "IPPF CONTINUOUSLY IMPLEMENTS REFORMATION PROGRAMS THROUGH AGRICULTURAL ACTIVITIES",
      date: "20 February 2025",
      img: "/images/story1.jpg",
    },
    {
      title:
        "BUCOR, PHILIPPINE PLAYHOUSE, INC. FORGE PARTNERSHIP TO ENHANCE CIW ANG TEATRO PROGRAM",
      date: "08 February 2025",
      img: "/images/story2.jpg",
    },
    {
      title: "IPPF PDLS RECEIVE ASSISTANCE FROM DOLE",
      date: "20 February 2025",
      img: "/images/story3.jpg",
    },
    {
      title:
        "IRELAND EMBASSY VISITS CORRECTIONAL INSTITUTION FOR WOMEN FOR ST. BRIGID’S DAY CELEBRATION",
      date: "12 February 2025",
      img: "/images/story4.jpg",
    },
    {
      title:
        "2ND ASEAN REGIONAL CORRECTIONAL CONFERENCE CONCLUDES WITH STRONGER COMMITMENTS TO CORRECTIONAL REFORM",
      date: "17 February 2025",
      img: "/images/story5.jpg",
    },
  ];

  return (
    <div className="bg-landing relative px-4 pt-3 pb-15 md:px-10">
      {/* Modal Overlay */}
      {isMapOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#A79E9E]/75"
          onClick={() => setIsMapOpen(false)}
        >
          <div
            className="h-[70vh] w-[90vw] overflow-hidden rounded bg-white shadow-xl"
            onClick={(e) => e.stopPropagation()} // Prevent modal close on inner click
          >
            <iframe
              title="BuCor Location - Fullscreen"
              src="https://www.google.com/maps?q=92JJ%2B3FG%2C%20Muntinlupa%2C%20Philippines&output=embed"
              className="h-full w-full"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      )}

      <div className="mx-auto max-w-screen">
        <h2 className="mb-4 text-lg font-semibold">Featured Story</h2>

        <div className="flex flex-col gap-6 md:flex-row">
          {/* Left - Scrollable Stories */}
          <div className="max-h-[500px] w-full space-y-4 overflow-y-auto md:w-1/2">
            {stories.map((story, index) => (
              <div
                key={index}
                className="flex overflow-hidden rounded bg-white shadow-sm"
              >
                <img
                  src={story.img}
                  alt={story.title}
                  className="h-24 w-24 object-cover"
                />
                <div className="flex flex-col justify-between p-3 text-sm">
                  <p className="line-clamp-2 font-medium">{story.title}</p>
                  <span className="text-xs text-gray-500">{story.date}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Right - Clickable Map */}
          <div
            className="max-h-[500px] w-full cursor-pointer md:w-1/2"
            onClick={() => setIsMapOpen(true)}
          >
            <div className="relative h-full w-full overflow-hidden rounded shadow">
              <iframe
                title="BuCor Location"
                src="https://www.google.com/maps?q=92JJ%2B3FG%2C%20Muntinlupa%2C%20Philippines&output=embed"
                className="pointer-events-none h-full w-full"
                style={{ border: 0 }}
                loading="lazy"
              ></iframe>
              <div className="absolute inset-0" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
