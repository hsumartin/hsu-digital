import React from "react";
import Card from "./Card";

const entries = [
  {
    id: "ki-denkarchitektur",
    type: "article",
    title: "Vom Tool zur Denkarchitektur",
    subtitle: "Wie KI Denken sichtbar macht",
    image: "/images/bg-articles.png",
    lang: "de",
    category: "KI",
    readingTime: "16–18 Min. Lesezeit",
  },
  {
    id: "architecture-of-thinking",
    type: "article",
    title: "From Tool to Thinking Architecture",
    subtitle: "How AI Makes Thinking Visible",
    image: "/images/bg-articles.png",
    lang: "en",
    category: "AI",
    readingTime: "16–18 min read",
  },
];

export default function HighlightCarousel() {
  return (
    <div className="overflow-x-auto">
      <div className="flex gap-4 w-max px-2">
        {entries.map((item) => (
          <Card
  key={item.id}
  title={item.title}
  subtitle={item.subtitle}
  slug={item.id}
  type={item.type}
  lang={item.lang}
  category={item.category}
  readingTime={item.readingTime}
  forceModal={true}
  compactHeaderOnly
  className="w-[320px] h-[220px] flex-shrink-0"
          />
        ))}
      </div>
    </div>
  );
}
