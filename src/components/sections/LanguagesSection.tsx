import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import pythonLogo from '../../assets/uploads/python.png';
import javaLogo from '../../assets/uploads/java.jpg';
import cLogo from '../../assets/uploads/c.png';
import cppLogo from '../../assets/uploads/c++.png';
import javascriptLogo from '../../assets/uploads/javascript.jpg';
import cssLogo from '../../assets/uploads/css.jpg';
import phpLogo from '../../assets/uploads/PHP Logo.jpg';
import nodeLogo from '../../assets/uploads/Node JS is suitable for IoT applications for ten incredible reasons_.jpg';
import wordLogo from '../../assets/uploads/Word.jpg';
import excelLogo from '../../assets/uploads/Excel.jpg';
import powerPointLogo from '../../assets/uploads/Power Point.jpg';
import photoshopLogo from '../../assets/uploads/Photoshop.jpg';
import webDevLogo from '../../assets/uploads/231 Web Development - Websites, Applications and Software.jpg';
import unnamedLogo from '../../assets/uploads/Без названия (1).jpg';
import { SectionHeader } from '../ui/SectionHeader';
import { SectionShell } from '../ui/SectionShell';

const logoStyles: Record<string, string> = {
  python: 'bg-[#3776AB]/10 text-[#3776AB]',
  java: 'bg-[#5382a1]/10 text-[#5382a1]',
  c: 'bg-[#00599C]/10 text-[#00599C]',
  cpp: 'bg-[#00599C]/10 text-[#00599C]',
  javascript: 'bg-[#f7df1e]/10 text-[#f7df1e]',
  css: 'bg-[#264de4]/10 text-[#264de4]',
  php: 'bg-[#8892be]/10 text-[#8892be]',
  node: 'bg-[#3c873a]/10 text-[#3c873a]',
  webdev: 'bg-[#ff6f61]/10 text-[#ff6f61]',
  unnamed: 'bg-[#7c3aed]/10 text-[#7c3aed]',
  word: 'bg-[#2B579A]/10 text-[#2B579A]',
  excel: 'bg-[#217346]/10 text-[#217346]',
  powerpoint: 'bg-[#D24726]/10 text-[#D24726]',
  photoshop: 'bg-[#31A8FF]/10 text-[#31A8FF]'
};

const officeSkills = [
  { id: 'word', label: 'Microsoft Word', src: wordLogo },
  { id: 'excel', label: 'Microsoft Excel', src: excelLogo },
  { id: 'powerpoint', label: 'Microsoft PowerPoint', src: powerPointLogo },
  { id: 'photoshop', label: 'Adobe Photoshop', src: photoshopLogo }
];

const programmingSkills = [
  { id: 'python', label: 'Python', src: pythonLogo },
  { id: 'java', label: 'Java', src: javaLogo },
  { id: 'c', label: 'C', src: cLogo },
  { id: 'cpp', label: 'C++', src: cppLogo }
];

const otherSkills = [
  { id: 'javascript', label: 'JavaScript', src: javascriptLogo },
  { id: 'css', label: 'CSS', src: cssLogo },
  { id: 'php', label: 'PHP', src: phpLogo },
  { id: 'node', label: 'Node.js', src: nodeLogo },
  { id: 'webdev', label: 'Web Development', src: webDevLogo },
  { id: 'unnamed', label: 'Design Tool', src: unnamedLogo }
];

const trackGroups = [
  { id: 'track1', duration: 14, start: '0%', end: '-50%', skills: officeSkills },
  { id: 'track2', duration: 18, start: '-50%', end: '0%', skills: programmingSkills },
  { id: 'track3', duration: 16, start: '0%', end: '-50%', skills: otherSkills }
];

export function LanguagesSection() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const cvs = canvas;
    const ctn = container;
    const ctx2 = cvs.getContext('2d');
    if (!ctx2) return;
    const ctx = ctx2;

    const dpr = Math.max(1, window.devicePixelRatio || 1);
    function resize() {
      const rect = ctn.getBoundingClientRect();
      cvs.width = Math.round(rect.width * dpr);
      cvs.height = Math.round(rect.height * dpr);
      cvs.style.width = rect.width + 'px';
      cvs.style.height = rect.height + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      createStars();
      draw();
    }

    type Star = { x: number; y: number; r: number; alpha: number; speed: number };
    let stars: Star[] = [];
    const STAR_COUNT = 120;
    let mouseX = 0.5, mouseY = 0.5;

    function createStars() {
      stars = [];
      const rect = ctn.getBoundingClientRect();
      for (let i = 0; i < STAR_COUNT; i++) {
        stars.push({
          x: Math.random() * rect.width,
          y: Math.random() * rect.height,
          r: Math.random() * 1.6 + 0.3,
          alpha: Math.random() * 0.8 + 0.2,
          speed: Math.random() * 0.02 + 0.005
        });
      }
    }

    let raf = 0;
    function draw() {
      const rect = ctn.getBoundingClientRect();
      ctx.clearRect(0, 0, rect.width, rect.height);
      for (const s of stars) {
        const ox = (mouseX - 0.5) * 30 * s.speed;
        const oy = (mouseY - 0.5) * 20 * s.speed;
        ctx.beginPath();
        ctx.fillStyle = `rgba(255,255,255,${s.alpha})`;
        ctx.arc(s.x + ox, s.y + oy, s.r, 0, Math.PI * 2);
        ctx.fill();
      }
      raf = requestAnimationFrame(draw);
    }

    function onMove(e: MouseEvent) {
      const rect = ctn.getBoundingClientRect();
      mouseX = (e.clientX - rect.left) / rect.width;
      mouseY = (e.clientY - rect.top) / rect.height;
    }

    window.addEventListener('resize', resize);
    ctn.addEventListener('mousemove', onMove);
    resize();

    return () => {
      window.removeEventListener('resize', resize);
      ctn.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <SectionShell id="languages" className="bg-surface/10 backdrop-blur-xl overflow-hidden">
      <SectionHeader titleKey="languages.title" introKey="languages.intro" />
      <div className="overflow-hidden w-full relative rounded-[2rem] border border-white/10 bg-white/5 shadow-soft" ref={containerRef}>
        <canvas ref={canvasRef} className="absolute inset-0 -z-10 opacity-90" />
        <div className="mx-auto max-w-7xl w-full p-2">
          <div className="grid gap-3">
            {trackGroups.map((track) => (
              <div key={track.id} className="relative overflow-hidden py-6">
                <div className="absolute left-0 right-0 top-3 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-70" />
                <div className="absolute left-0 right-0 bottom-3 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-70" />
                <motion.div
                  className="flex items-center gap-6 px-4 py-4"
                  initial={{ x: track.start }}
                  animate={{ x: [track.start, track.end] }}
                  transition={{ duration: track.duration, repeat: Infinity, ease: 'linear' }}
                >
                  {[...track.skills, ...track.skills, ...track.skills, ...track.skills].map((skill, skillIndex) => (
                    <div
                      key={`${track.id}-${skill.id}-${skillIndex}`}
                      className={`flex min-w-[8rem] max-w-[8rem] items-center justify-center rounded-full border border-white/10 bg-white/5 p-3 shadow-soft ${logoStyles[skill.id] ?? ''}`}
                    >
                      <img
                        src={skill.src}
                        alt={skill.label}
                        className="h-12 w-12 object-contain"
                      />
                      <span className="sr-only">{skill.label}</span>
                    </div>
                  ))}
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
