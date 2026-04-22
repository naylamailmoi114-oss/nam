import { Photo } from '../types';
import { motion } from 'motion/react';

interface PhotoAlbumProps {
  photos: Photo[];
}

export default function PhotoAlbum({ photos }: PhotoAlbumProps) {
  return (
    <div className="album-grid grid grid-cols-2 sm:grid-cols-3 gap-3">
      {photos.map((photo, index) => (
        <motion.div
          key={index}
          whileHover={{ scale: 1.05 }}
          className="photo-container relative group aspect-square rounded-xl overflow-hidden shadow-[0_4px_12px_rgba(0,0,0,0.05)] border border-line bg-[#EFEDE8]"
        >
          <img 
            src={photo.url} 
            alt={photo.caption || "Baby photo"} 
            className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-90"
            referrerPolicy="no-referrer"
          />
          {photo.caption && (
            <div className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2">
              <p className="text-ink text-[10px] font-bold bg-white/80 px-2 py-1 rounded-md">{photo.caption}</p>
            </div>
          )}
        </motion.div>
      ))}
    </div>
  );
}
