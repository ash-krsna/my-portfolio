import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Lightbox } from "../components/Lightbox";
import { SectionHeading } from "../components/SectionHeading";
import { galleryImages } from "../data/content";

const filters = ["All", "Street", "Nature", "Portrait", "Random moments"];

export function GallerySection() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);

  const items = useMemo(() => {
    if (activeFilter === "All") return galleryImages;
    return galleryImages.filter((item) => item.category === activeFilter);
  }, [activeFilter]);

  return (
    <section id="gallery" className="section-shell">
      <SectionHeading
        eyebrow="Photography"
        title="Frames I captured while chasing stories."
        copy="A hobby section that matters. These are the still images behind the cinematic direction I want to grow into next."
      />

      <div className="mt-10 flex flex-wrap gap-3">
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => setActiveFilter(filter)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition ${
              activeFilter === filter
                ? "bg-zinc-950 text-white dark:bg-white dark:text-zinc-950"
                : "border border-black/10 bg-white/70 text-zinc-700 dark:border-white/10 dark:bg-white/5 dark:text-white/66"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="mt-10 columns-1 gap-5 md:columns-2 xl:columns-3">
        {items.map((item, index) => (
          <motion.button
            key={`${item.src}-${activeFilter}`}
            type="button"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: index * 0.04 }}
            onClick={() => setSelectedImage(item)}
            className="gallery-shot group mb-5 block w-full overflow-hidden rounded-[1.8rem] border border-black/10 bg-white/80 text-left shadow-glow dark:border-white/10 dark:bg-white/5"
          >
            <div className="overflow-hidden">
              <img src={item.src} alt={item.title} loading="lazy" className="w-full object-cover transition duration-700 group-hover:scale-[1.05]" />
            </div>
            <div className="p-4">
              <p className="text-xs uppercase tracking-[0.24em] text-zinc-500 dark:text-white/42">{item.category}</p>
              <p className="mt-2 text-base text-zinc-900 dark:text-white">{item.title}</p>
            </div>
          </motion.button>
        ))}
      </div>

      <Lightbox item={selectedImage} onClose={() => setSelectedImage(null)} />
    </section>
  );
}
