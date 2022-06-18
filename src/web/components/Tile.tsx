import React from "react";
import { Pack as PackType, Stat } from "../../db";
import { Pack } from "./Pack";

export function Tile({
  id,
  name,
  stats,
  packs,
  background,
  deferImage,
}: {
  id: string;
  name: string;
  stats?: { attack: Stat; health: Stat };
  packs: PackType[];
  background: string;
  deferImage: boolean;
}) {
  return (
    <div className="transition group bg-gray-900 hover:bg-black shadow-md flex flex-col items-stretch justify-start max-w-sm cursor-pointer">
      <div className="relative">
        <div
          className={`transition absolute bottom-0 left-0 top-0 right-0 bg-${background}-2 bg-cover filter contrast-75 brightness-25 group-hover:contrast-100 group-hover:brightness-100`}
        />
        <img
          className="transition-margin mx-7 my-7 group-hover:mx-3 group-hover:my-3 filter drop-shadow-tile w-auto h-auto"
          src={`/assets/${id}.svg`}
          alt={`A thumbnail of the ${name}`}
          width="100"
          height="100"
          loading={deferImage ? "lazy" : "eager"}
        />
        <div
          className={`transition absolute bottom-0 left-0 top-0 right-0 bg-${background}-1 bg-cover filter contrast-75 brightness-25 group-hover:contrast-100 group-hover:brightness-100`}
        />
        {stats ? (
          <div className="absolute bottom-0 right-0 p-1">
            ⚔️ {stats.attack} / 💖 {stats.health}
          </div>
        ) : null}
      </div>
      <div className="p-2">
        <div className="text-xl font-medium pb-2">{name}</div>
        <div>
          {(packs || []).map((pack, index) => (
            <Pack pack={pack} key={index} colored={true} condensed={true} />
          ))}
        </div>
      </div>
    </div>
  );
}
