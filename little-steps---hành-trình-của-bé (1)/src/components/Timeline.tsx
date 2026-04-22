import { motion } from 'motion/react';
import { Milestone } from '../types';
import PhotoAlbum from './PhotoAlbum';

interface TimelineProps {
  milestones: Milestone[];
}

export default function Timeline({ milestones }: TimelineProps) {
  return (
    <section className="flex-1 lg:ml-[420px] p-8 lg:p-16 min-h-screen bg-paper">
      <h2 className="section-title text-[24px] font-serif mb-12 relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-10 after:h-[2px] after:bg-accent text-ink">
        Dòng Thời Gian Hạnh Phúc
      </h2>

      <div className="timeline relative pl-10 before:content-[''] before:absolute before:left-[7px] before:top-2 before:bottom-0 before:w-[2px] before:bg-line before:rounded-[1px]">
        <div className="space-y-16">
          {milestones.map((milestone) => (
            <motion.div
              key={milestone.id}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="milestone relative"
            >
              <div className="milestone-dot absolute -left-[41px] top-1.5 w-4 h-4 bg-accent rounded-full border-4 border-paper z-10" />
              
              <div className="milestone-header flex justify-between items-baseline mb-3">
                <h3 className="milestone-title text-[20px] font-serif text-ink">{milestone.title}</h3>
                <span className="milestone-date text-[13px] text-ink-muted italic">{milestone.date}</span>
              </div>
              
              <p className="text-[14px] text-ink-muted leading-[1.4] mb-4">
                {milestone.description}
              </p>
              
              <PhotoAlbum photos={milestone.photos} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
