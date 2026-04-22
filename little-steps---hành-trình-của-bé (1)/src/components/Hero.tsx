import { motion } from 'motion/react';
import { BabyInfo } from '../types';

interface HeroProps {
  info: BabyInfo;
}

export default function Hero({ info }: HeroProps) {
  return (
    <aside className="w-full lg:w-[420px] lg:h-screen lg:fixed left-0 top-0 bg-side border-r border-line p-8 lg:p-12 flex flex-col justify-between overflow-y-auto">
      <div className="space-y-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="hero-img-container aspect-square lg:h-[420px] w-full bg-[#E6E2D8] rounded-[160px_160px_20px_20px] overflow-hidden border-8 border-white shadow-[0_10px_30px_rgba(0,0,0,0.05)]"
        >
          <img 
            src="https://picsum.photos/seed/babyhero/800/1000" 
            alt={info.name} 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="intro"
        >
          <h1 className="text-[42px] leading-[1.1] mb-3 text-ink">
            {info.name.split(' ').slice(-2).join(' ')}<br />
            <span className="text-[28px] opacity-70 font-normal">({info.name})</span>
          </h1>
          <p className="text-ink-muted leading-relaxed text-[15px]">
            Hành trình của những bước chân đầu tiên, những nụ cười trong trẻo và sự trưởng thành đầy kỳ diệu của thiên thần nhỏ trong gia đình chúng ta.
          </p>
        </motion.div>
      </div>

      <div className="stats mt-8 pt-8 border-t border-line grid grid-cols-3 gap-4">
        <div className="stat-item">
          <span className="block text-[11px] uppercase tracking-widest text-ink-muted mb-1 font-bold">Ngày sinh</span>
          <b className="font-serif text-[18px] text-accent leading-none">{info.birthDate}</b>
        </div>
        <div className="stat-item">
          <span className="block text-[11px] uppercase tracking-widest text-ink-muted mb-1 font-bold">Cân nặng</span>
          <b className="font-serif text-[18px] text-accent leading-none">{info.birthWeight}</b>
        </div>
        <div className="stat-item">
          <span className="block text-[11px] uppercase tracking-widest text-ink-muted mb-1 font-bold">Chiều dài</span>
          <b className="font-serif text-[18px] text-accent leading-none">{info.birthHeight}</b>
        </div>
      </div>
    </aside>
  );
}
