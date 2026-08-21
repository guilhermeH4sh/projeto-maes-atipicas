"use client";

import { useState } from "react";
import { notices, videos, type VideoItem } from "@/data/community";
import Reveal from "@/components/ui/Reveal";
import ContentModal from "@/components/ui/ContentModal";

export default function CommunitySection() {
  const [activeVideo, setActiveVideo] = useState<VideoItem | null>(null);

  return (
    <section
      id="mural"
      className="py-20 sm:py-28 px-4 bg-white border-b border-slate-100"
      aria-labelledby="mural-titulo"
    >
      <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-16">
        <div className="lg:col-span-7">
          <Reveal>
            <p className="text-xs font-bold text-brand-blue uppercase tracking-[0.18em]">
              Mural
            </p>
            <h2
              id="mural-titulo"
              className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2 tracking-tight"
            >
              Informativos da comunidade
            </h2>
          </Reveal>

          <ul className="mt-8 space-y-6 list-none p-0 m-0">
            {notices.map((notice, index) => (
              <Reveal key={notice.id} as="li" delayMs={index * 40}>
                <article className="border-l-4 pl-4 border-slate-200">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span
                      className={`px-2.5 py-0.5 rounded-md text-xs font-bold text-white uppercase tracking-wider ${notice.badgeClass}`}
                    >
                      {notice.type}
                    </span>
                    <time className="text-xs text-slate-500 font-semibold">
                      {notice.date}
                    </time>
                  </div>
                  <h3 className="font-extrabold text-slate-950 text-base leading-snug">
                    {notice.title}
                  </h3>
                  <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                    {notice.description}
                  </p>
                </article>
              </Reveal>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-5">
          <Reveal>
            <p className="text-xs font-bold text-brand-red uppercase tracking-[0.18em]">
              Vídeos
            </p>
            <h3 className="text-2xl font-extrabold text-slate-900 mt-2 tracking-tight">
              TV Mães Atípicas
            </h3>
          </Reveal>

          <div className="mt-8 flex flex-col gap-4">
            {videos.map((video, index) => (
              <Reveal key={video.id} delayMs={index * 50}>
                <button
                  type="button"
                  onClick={() => setActiveVideo(video)}
                  className="w-full text-left border border-slate-200 hover:border-slate-300 rounded-2xl p-5 transition-colors"
                >
                  <span
                    className={`inline-block px-2 py-1 text-xs font-bold text-white rounded-md ${video.color}`}
                  >
                    Assista · {video.duration}
                  </span>
                  <h4 className="font-extrabold text-slate-950 text-base leading-snug mt-3">
                    {video.title}
                  </h4>
                  <p className="text-xs text-slate-500 font-bold uppercase mt-1">
                    {video.author}
                  </p>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      {activeVideo && (
        <ContentModal
          title={activeVideo.title}
          labelledById="video-titulo"
          onClose={() => setActiveVideo(null)}
          eyebrow={
            <span className="text-xs font-bold text-brand-red uppercase tracking-widest">
              TV Mães Atípicas
            </span>
          }
        >
          <div className="aspect-video bg-slate-950 rounded-xl flex flex-col items-center justify-center p-6 text-center text-white">
            <p className="text-sm font-medium text-white/80">
              {activeVideo.duration} · {activeVideo.author}
            </p>
            <p className="text-base mt-4 leading-relaxed max-w-md">
              {activeVideo.description}
            </p>
          </div>
        </ContentModal>
      )}
    </section>
  );
}
